// Facebook Pixel utility functions

// Track last event time to prevent duplicate events
const lastEventTime: Record<string, number> = {};
const DEBOUNCE_TIME = 1000; // 1 second debounce

// Helper to check if an event should be tracked (debounce)
const shouldTrackEvent = (eventName: string): boolean => {
  const now = Date.now();
  const lastTime = lastEventTime[eventName] || 0;
  
  if (now - lastTime < DEBOUNCE_TIME) {
    return false;
  }
  
  lastEventTime[eventName] = now;
  return true;
};

// Track ViewContent event
export const trackViewContent = (
  contentName: string,
  contentCategory: string,
  contentIds: string[],
  value: number,
  currency: string = 'INR'
) => {
  // Make sure fbq is available and debounce
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('ViewContent')) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: contentName,
      content_category: contentCategory,
      content_ids: contentIds,
      content_type: 'product',
      value: value,
      currency: currency
    });
  }
};

// Track PageView event
export const trackPageView = () => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('PageView')) {
    (window as any).fbq('track', 'PageView');
  }
};

// Track Purchase event
export const trackPurchase = (
  value: number,
  currency: string = 'INR',
  contentIds: string[] = []
) => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('Purchase')) {
    (window as any).fbq('track', 'Purchase', {
      value: value,
      currency: currency,
      content_ids: contentIds,
      content_type: 'product'
    });
  }
};

// Track InitiateCheckout event
export const trackInitiateCheckout = (
  value: number,
  currency: string = 'INR',
  contentIds: string[] = [],
  contents: string[] = [],
  numItems?: number
) => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('InitiateCheckout')) {
    const eventParams: Record<string, any> = {
      value: value,
      currency: currency,
      content_ids: contentIds,
      content_type: 'product'
    };

    // Add optional parameters if provided
    if (contents.length > 0) {
      eventParams.contents = contents.map(name => ({ id: contentIds[0] || '', name }));
    }
    
    if (numItems !== undefined) {
      eventParams.num_items = numItems;
    }

    (window as any).fbq('track', 'InitiateCheckout', eventParams);
  }
};

// Track AddToCart event
export const trackAddToCart = (
  value: number,
  currency: string = 'INR',
  contentIds: string[] = [],
  contents: string[] = [],
  numItems?: number
) => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('AddToCart')) {
    const eventParams: Record<string, any> = {
      value: value,
      currency: currency,
      content_ids: contentIds,
      content_type: 'product'
    };

    // Add optional parameters if provided
    if (contents.length > 0) {
      eventParams.contents = contents.map(name => ({ id: contentIds[0] || '', name }));
    }
    
    if (numItems !== undefined) {
      eventParams.num_items = numItems;
    }

    (window as any).fbq('track', 'AddToCart', eventParams);
  }
}; 