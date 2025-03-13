import { useEffect, useRef } from 'react';
import { trackViewContent, trackPageView, trackPurchase, trackInitiateCheckout, trackAddToCart } from '@/lib/fbPixel';

interface ViewContentProps {
  contentName: string;
  contentCategory: string;
  contentIds: string[];
  value: number;
  currency?: string;
}

interface PurchaseProps {
  value: number;
  currency?: string;
  contentIds?: string[];
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
  const trackProductView = ({
    contentName,
    contentCategory,
    contentIds,
    value,
    currency = 'INR'
  }: ViewContentProps) => {
    // We don't need to check if it's been fired because this is called explicitly
    trackViewContent(contentName, contentCategory, contentIds, value, currency);
  };

  // Function to track Purchase
  const trackProductPurchase = ({
    value,
    currency = 'INR',
    contentIds = []
  }: PurchaseProps) => {
    trackPurchase(value, currency, contentIds);
  };

  // Function to track InitiateCheckout
  const trackCheckout = ({
    value,
    currency = 'INR',
    contentIds = []
  }: PurchaseProps) => {
    trackInitiateCheckout(value, currency, contentIds);
  };

  // Function to track AddToCart
  const trackCart = ({
    value,
    currency = 'INR',
    contentIds = []
  }: PurchaseProps) => {
    trackAddToCart(value, currency, contentIds);
  };

  return {
    trackProductView,
    trackProductPurchase,
    trackCheckout,
    trackCart,
    trackPageView
  };
}; 