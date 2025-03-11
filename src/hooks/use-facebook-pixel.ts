'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { initFacebookPixel, pageview, viewContent, FB_EVENTS, trackCustomEvent, resetTrackedEvents } from '@/services/fbpixel';

interface UseFacebookPixelOptions {
  contentIds?: string[];
  trackViewContent?: boolean;
  trackPageView?: boolean;
  trackAddToCart?: boolean;
  trackCheckout?: boolean;
  trackPurchase?: boolean;
  customEvents?: Record<string, any>;
}

// Track if pixel has been initialized in this session
let isInitialized = false;

// Track last fired events to prevent duplicates across page navigations
const lastFiredEvents = new Map<string, number>();
const DEBOUNCE_TIME = 2000; // 2 seconds debounce

/**
 * Custom hook to handle Facebook Pixel tracking
 * This ensures the pixel is only initialized once per session
 * and tracks all relevant events with debounce to prevent duplicates
 */
export default function useFacebookPixel(options: UseFacebookPixelOptions = {}) {
  const pathname = usePathname();
  const { 
    contentIds = [], 
    trackViewContent = false,
    trackPageView = true,
    trackAddToCart = false,
    trackCheckout = false,
    trackPurchase = false,
    customEvents = {}
  } = options;
  
  // Use a ref to track if events have been fired for this component instance
  const eventsHaveFired = useRef(false);

  useEffect(() => {
    // Only fire events once per pathname change
    if (eventsHaveFired.current) {
      return;
    }
    
    const fireEvents = async () => {
      try {
        // Initialize Facebook Pixel only once per session
        if (!isInitialized) {
          initFacebookPixel();
          isInitialized = true;
        }
        
        // Reset tracked events when pathname changes
        resetTrackedEvents();
        
        // Helper function to check if an event was recently fired
        const canFireEvent = (eventName: string): boolean => {
          const now = Date.now();
          const lastFired = lastFiredEvents.get(eventName);
          
          if (!lastFired || (now - lastFired) > DEBOUNCE_TIME) {
            lastFiredEvents.set(eventName, now);
            return true;
          }
          
          return false;
        };
        
        // Track PageView first if enabled
        if (trackPageView && canFireEvent(`${FB_EVENTS.PAGE_VIEW}_${pathname}`)) {
          await pageview();
        }
        
        // Add a small delay before firing ViewContent to ensure proper sequencing
        if (trackViewContent && contentIds.length > 0 && canFireEvent(`${FB_EVENTS.VIEW_CONTENT}_${contentIds.join(',')}`)) {
          setTimeout(async () => {
            await viewContent(contentIds);
          }, 100);
        }
        
        // Track AddToCart if enabled
        if (trackAddToCart && canFireEvent(FB_EVENTS.ADD_TO_CART)) {
          setTimeout(async () => {
            await trackCustomEvent(FB_EVENTS.ADD_TO_CART, {
              content_ids: contentIds,
              content_type: 'product_group',
              ...customEvents.addToCart
            });
          }, 200);
        }
        
        // Track InitiateCheckout if enabled
        if (trackCheckout && canFireEvent(FB_EVENTS.INITIATE_CHECKOUT)) {
          setTimeout(async () => {
            await trackCustomEvent(FB_EVENTS.INITIATE_CHECKOUT, {
              content_ids: contentIds,
              content_type: 'product_group',
              ...customEvents.checkout
            });
          }, 300);
        }
        
        // Track Purchase if enabled
        if (trackPurchase && canFireEvent(FB_EVENTS.PURCHASE)) {
          setTimeout(async () => {
            await trackCustomEvent(FB_EVENTS.PURCHASE, {
              content_ids: contentIds,
              content_type: 'product_group',
              ...customEvents.purchase
            });
          }, 400);
        }
        
        // Track any additional custom events
        Object.entries(customEvents).forEach(([eventName, eventData], index) => {
          if (!['addToCart', 'checkout', 'purchase'].includes(eventName) && canFireEvent(eventName)) {
            setTimeout(async () => {
              await trackCustomEvent(eventName, eventData);
            }, 500 + (index * 100));
          }
        });
        
        // Mark that events have fired for this component instance
        eventsHaveFired.current = true;
      } catch (error) {
        console.error('Error firing Facebook Pixel events:', error);
      }
    };

    // Fire events with proper sequencing
    fireEvents();
    
    // Reset the fired state when pathname changes
    return () => {
      eventsHaveFired.current = false;
    };
  }, [
    pathname, 
    contentIds, 
    trackViewContent, 
    trackPageView, 
    trackAddToCart, 
    trackCheckout, 
    trackPurchase,
    customEvents
  ]);
} 