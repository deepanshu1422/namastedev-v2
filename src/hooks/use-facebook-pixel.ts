'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initFacebookPixel, pageview, viewContent, resetTrackedEvents } from '@/services/fbpixel';

interface UseFacebookPixelOptions {
  contentIds?: string[];
  trackViewContent?: boolean;
  trackPageView?: boolean;
}

/**
 * Custom hook to handle Facebook Pixel tracking
 * This ensures the pixel is only initialized once per session
 * and tracks page views and content views as needed
 */
export default function useFacebookPixel(options: UseFacebookPixelOptions = {}) {
  const pathname = usePathname();
  const { 
    contentIds = [], 
    trackViewContent = false,
    trackPageView = true 
  } = options;

  useEffect(() => {
    // Initialize Facebook Pixel only once
    initFacebookPixel();
    
    // Reset tracked events when pathname changes
    resetTrackedEvents();
    
    // Track PageView after initialization if enabled
    if (trackPageView) {
      const pageViewTimeout = setTimeout(() => {
        pageview();
      }, 500);
      
      return () => clearTimeout(pageViewTimeout);
    }
    
    // Track ViewContent if needed
    if (trackViewContent && contentIds.length > 0) {
      const viewContentTimeout = setTimeout(() => {
        viewContent(contentIds);
      }, 500);
      
      return () => clearTimeout(viewContentTimeout);
    }
  }, [pathname, contentIds, trackViewContent, trackPageView]);
} 