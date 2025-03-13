import { useEffect, useRef } from 'react';
import { trackViewContent, trackPageView, trackPurchase, trackInitiateCheckout, trackAddToCart, preventEvent } from '@/lib/fbPixel';
import { getUserTrackingInfo } from '@/lib/userInfo';

interface ViewContentProps {
  contentName: string;
  contentCategory: string;
  contentIds: string[];
  value: number;
  currency?: string;
  event_id?: string; // Add optional eventId for deduplication
  event_time?: number; // Add optional event_time for tracking when the event occurred
  userInfo?: {
    ip?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
    fb_login_id?: string; // Facebook Login ID (App-Scoped ID)
  };
}

interface PurchaseProps {
  value: number;
  currency?: string;
  contentIds?: string[];
  contents?: string[]; // Product names
  numItems?: number;   // Number of items
  event_id?: string;   // Add optional eventId for deduplication
  event_time?: number; // Add optional event_time for tracking when the event occurred
  userInfo?: {
    ip?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
    fb_login_id?: string; // Facebook Login ID (App-Scoped ID)
  };
}

// Custom hook for Facebook Pixel tracking
export const usePixelTracking = () => {
  // Use refs to track if events have been fired
  const pageViewFired = useRef(false);
  
  // Track PageView only once on mount
  useEffect(() => {
    if (!pageViewFired.current) {
      trackPageView();
      pageViewFired.current = true;
    }
    
    // Clean up function to reset the ref when component unmounts
    return () => {
      pageViewFired.current = false;
    };
  }, []);

  // Function to track ViewContent - only call once per render
  const trackProductView = async ({
    contentName,
    contentCategory,
    contentIds,
    value,
    currency = 'INR',
    event_id,
    event_time,
    userInfo
  }: ViewContentProps) => {
    // If userInfo is not provided, try to fetch it
    let userTrackingInfo = userInfo;
    if (!userTrackingInfo) {
      userTrackingInfo = await getUserTrackingInfo();
    }
    
    // We don't need to check if it's been fired because this is called explicitly
    trackViewContent(
      contentName, 
      contentCategory, 
      contentIds, 
      value, 
      currency, 
      event_id, 
      event_time, 
      userTrackingInfo
    );
  };

  // Function to track Purchase
  const trackProductPurchase = async ({
    value,
    currency = 'INR',
    contentIds = [],
    contents = [],
    numItems,
    event_id,
    event_time,
    userInfo
  }: PurchaseProps) => {
    // Prevent InitiateCheckout event when tracking a purchase
    preventEvent('InitiateCheckout');
    
    // If userInfo is not provided, try to fetch it
    let userTrackingInfo = userInfo;
    if (!userTrackingInfo) {
      userTrackingInfo = await getUserTrackingInfo();
    }
    
    trackPurchase(
      value, 
      currency, 
      contentIds, 
      contents, 
      numItems, 
      userTrackingInfo, 
      event_id, 
      event_time
    );
  };

  // Function to track InitiateCheckout
  const trackCheckout = async ({
    value,
    currency = 'INR',
    contentIds = [],
    contents = [],
    numItems,
    event_id,
    event_time,
    userInfo
  }: PurchaseProps) => {
    // If userInfo is not provided, try to fetch it
    let userTrackingInfo = userInfo;
    if (!userTrackingInfo) {
      userTrackingInfo = await getUserTrackingInfo();
    }
    
    trackInitiateCheckout(
      value, 
      currency, 
      contentIds, 
      contents, 
      numItems, 
      userTrackingInfo, 
      event_id, 
      event_time
    );
  };

  // Function to track AddToCart
  const trackCart = async ({
    value,
    currency = 'INR',
    contentIds = [],
    contents = [],
    numItems,
    event_id,
    event_time,
    userInfo
  }: PurchaseProps) => {
    // If userInfo is not provided, try to fetch it
    let userTrackingInfo = userInfo;
    if (!userTrackingInfo) {
      userTrackingInfo = await getUserTrackingInfo();
    }
    
    trackAddToCart(
      value, 
      currency, 
      contentIds, 
      contents, 
      numItems, 
      userTrackingInfo, 
      event_id, 
      event_time
    );
  };

  return {
    trackProductView,
    trackProductPurchase,
    trackCheckout,
    trackCart,
    trackPageView,
    preventEvent
  };
}; 