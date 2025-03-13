// Facebook Pixel utility functions

// Track last event time to prevent duplicate events
const lastEventTime: Record<string, number> = {};
const DEBOUNCE_TIME = 1000; // 1 second debounce
// Track processed event IDs to prevent duplicates
const processedEventIds = new Set<string>();

// Helper to check if an event should be tracked (debounce)
const shouldTrackEvent = (eventName: string, event_id?: string): boolean => {
  // If eventId is provided, check if it's already been processed
  if (event_id && processedEventIds.has(event_id)) {
    return false;
  }
  
  const now = Date.now();
  const lastTime = lastEventTime[eventName] || 0;
  
  if (now - lastTime < DEBOUNCE_TIME) {
    return false;
  }
  
  lastEventTime[eventName] = now;
  
  // If eventId is provided, add it to the processed set
  if (event_id) {
    processedEventIds.add(event_id);
  }
  
  return true;
};

// Helper to prevent specific events from being tracked
export const preventEvent = (eventName: string): void => {
  if (typeof window !== 'undefined' && (window as any)._fbq && (window as any)._fbq.queue) {
    // Filter out any events of the specified type from the queue
    (window as any)._fbq.queue = (window as any)._fbq.queue.filter((item: any) => {
      return !(item[0] === 'track' && item[1] === eventName);
    });
  }
};

// Track ViewContent event
export const trackViewContent = (
  contentName: string,
  contentCategory: string,
  contentIds: string[],
  value: number,
  currency: string = 'INR',
  event_id?: string,
  event_time?: number,
  userInfo?: {
    ip?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
    fb_login_id?: string;
  }
) => {
  // Make sure fbq is available and debounce
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('ViewContent', event_id)) {
    const eventParams: Record<string, any> = {
      content_name: contentName,
      content_category: contentCategory,
      content_ids: contentIds,
      content_type: 'product',
      value: value,
      currency: currency
    };
    
    // Add eventId if provided
    if (event_id) {
      eventParams.event_id = event_id;
    }
    
    // Add event_time if provided
    if (event_time) {
      eventParams.event_time = event_time;
    }
    
    // Add user information if provided
    if (userInfo) {
      if (userInfo.ip) {
        eventParams.client_ip_address = userInfo.ip;
      }
      
      if (userInfo.userAgent) {
        eventParams.client_user_agent = userInfo.userAgent;
      }
      
      if (userInfo.fbp) {
        eventParams.fbp = userInfo.fbp;
      }
      
      if (userInfo.fbc) {
        eventParams.fbc = userInfo.fbc;
      }
      
      if (userInfo.fb_login_id) {
        eventParams.fb_login_id = userInfo.fb_login_id;
      }
    }
    
    (window as any).fbq('track', 'ViewContent', eventParams);
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
  contentIds: string[] = [],
  contents: string[] = [],
  numItems?: number,
  userInfo?: {
    ip?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
    fb_login_id?: string;
  },
  event_id?: string,
  event_time?: number
) => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('Purchase', event_id)) {
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
    
    // Add eventId if provided
    if (event_id) {
      eventParams.event_id = event_id;
    }
    
    // Add event_time if provided
    if (event_time) {
      eventParams.event_time = event_time;
    }
    
    // Add user information if provided
    if (userInfo) {
      if (userInfo.ip) {
        eventParams.client_ip_address = userInfo.ip;
      }
      
      if (userInfo.userAgent) {
        eventParams.client_user_agent = userInfo.userAgent;
      }
      
      if (userInfo.fbp) {
        eventParams.fbp = userInfo.fbp;
      }
      
      if (userInfo.fbc) {
        eventParams.fbc = userInfo.fbc;
      }
      
      if (userInfo.fb_login_id) {
        eventParams.fb_login_id = userInfo.fb_login_id;
      }
    }

    (window as any).fbq('track', 'Purchase', eventParams);
  }
};

// Track InitiateCheckout event
export const trackInitiateCheckout = (
  value: number,
  currency: string = 'INR',
  contentIds: string[] = [],
  contents: string[] = [],
  numItems?: number,
  userInfo?: {
    ip?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
    fb_login_id?: string;
  },
  event_id?: string,
  event_time?: number
) => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('InitiateCheckout', event_id)) {
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
    
    // Add eventId if provided
    if (event_id) {
      eventParams.event_id = event_id;
    }
    
    // Add event_time if provided
    if (event_time) {
      eventParams.event_time = event_time;
    }
    
    // Add user information if provided
    if (userInfo) {
      if (userInfo.ip) {
        eventParams.client_ip_address = userInfo.ip;
      }
      
      if (userInfo.userAgent) {
        eventParams.client_user_agent = userInfo.userAgent;
      }
      
      if (userInfo.fbp) {
        eventParams.fbp = userInfo.fbp;
      }
      
      if (userInfo.fbc) {
        eventParams.fbc = userInfo.fbc;
      }
      
      if (userInfo.fb_login_id) {
        eventParams.fb_login_id = userInfo.fb_login_id;
      }
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
  numItems?: number,
  userInfo?: {
    ip?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
    fb_login_id?: string;
  },
  event_id?: string,
  event_time?: number
) => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('AddToCart', event_id)) {
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
    
    // Add eventId if provided
    if (event_id) {
      eventParams.event_id = event_id;
    }
    
    // Add event_time if provided
    if (event_time) {
      eventParams.event_time = event_time;
    }
    
    // Add user information if provided
    if (userInfo) {
      if (userInfo.ip) {
        eventParams.client_ip_address = userInfo.ip;
      }
      
      if (userInfo.userAgent) {
        eventParams.client_user_agent = userInfo.userAgent;
      }
      
      if (userInfo.fbp) {
        eventParams.fbp = userInfo.fbp;
      }
      
      if (userInfo.fbc) {
        eventParams.fbc = userInfo.fbc;
      }
      
      if (userInfo.fb_login_id) {
        eventParams.fb_login_id = userInfo.fb_login_id;
      }
    }

    (window as any).fbq('track', 'AddToCart', eventParams);
  }
}; 