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

// Helper to send event to server-side Conversion API
const sendToServerConversionApi = async (
  eventName: string,
  eventData: any,
  userData?: any
) => {
  try {
    // Get current URL for event_source_url
    const eventSourceUrl = typeof window !== 'undefined' ? window.location.href : '';
    
    // Add event_source_url to eventData
    const enhancedEventData = {
      ...eventData,
      event_source_url: eventSourceUrl
    };
    
    // Send to our API endpoint
    const response = await fetch('/api/facebook-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventData: enhancedEventData,
        userData
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Error sending to server: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error sending ${eventName} to server Conversion API:`, error);
    // Don't throw error to prevent breaking the user experience
    return null;
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
    em?: string;
    ph?: string;
    fn?: string;
    ln?: string;
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

    // Track via browser pixel
    (window as any).fbq('track', 'ViewContent', eventParams);
    
    // Also send to server Conversion API
    const serverEventData = {
      contentName,
      contentCategory,
      contentIds,
      value,
      currency,
      event_id,
      event_time
    };
    
    // Send to server asynchronously (don't await)
    sendToServerConversionApi('ViewContent', serverEventData, userInfo);
  }
};

// Track PageView event
export const trackPageView = () => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('PageView')) {
    // Track via browser pixel
    (window as any).fbq('track', 'PageView');
    
    // Also send to server Conversion API
    sendToServerConversionApi('PageView', {});
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
    em?: string;  // Hashed email
    ph?: string;  // Hashed phone
    fn?: string;  // Hashed first name
    ln?: string;  // Hashed last name
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
      
      // Add hashed user data for advanced matching
      if (userInfo.em) {
        eventParams.em = userInfo.em;
      }
      
      if (userInfo.ph) {
        eventParams.ph = userInfo.ph;
      }
      
      if (userInfo.fn) {
        eventParams.fn = userInfo.fn;
      }
      
      if (userInfo.ln) {
        eventParams.ln = userInfo.ln;
      }
    }

    // Track via browser pixel
    (window as any).fbq('track', 'Purchase', eventParams);
    
    // Also send to server Conversion API
    const serverEventData = {
      value,
      currency,
      contentIds,
      contents,
      numItems,
      event_id,
      event_time,
      contentType: 'product'
    };
    
    // Send to server asynchronously (don't await)
    sendToServerConversionApi('Purchase', serverEventData, {
      ...userInfo,
      em: userInfo?.em ? [userInfo.em] : undefined,
      ph: userInfo?.ph ? [userInfo.ph] : undefined,
      fn: userInfo?.fn ? [userInfo.fn] : undefined,
      ln: userInfo?.ln ? [userInfo.ln] : undefined,
      fbp: userInfo?.fbp,
      fbc: userInfo?.fbc,
      ip: userInfo?.ip,
      userAgent: userInfo?.userAgent
    });
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
    em?: string;  // Hashed email
    ph?: string;  // Hashed phone
    fn?: string;  // Hashed first name
    ln?: string;  // Hashed last name
  },
  event_id?: string,
  event_time?: number
) => {
  if (typeof window !== 'undefined' && (window as any).fbq && shouldTrackEvent('InitiateCheckout', event_id)) {
    // Generate event ID if not provided
    const finalEventId = event_id || `checkout_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`;
    
    const eventParams: Record<string, any> = {
      value: value,
      currency: currency,
      content_ids: contentIds,
      content_type: 'product'
    };

    // Add optional parameters if provided
    if (contents.length > 0) {
      // For browser pixel, we can include name
      eventParams.contents = contents.map(name => ({ id: contentIds[0] || '', name }));
    }
    
    if (numItems !== undefined) {
      eventParams.num_items = numItems;
    }
    
    // Add eventId
    eventParams.event_id = finalEventId;
    
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
      
      // Add hashed user data for advanced matching
      if (userInfo.em) {
        eventParams.em = userInfo.em;
      }
      
      if (userInfo.ph) {
        eventParams.ph = userInfo.ph;
      }
      
      if (userInfo.fn) {
        eventParams.fn = userInfo.fn;
      }
      
      if (userInfo.ln) {
        eventParams.ln = userInfo.ln;
      }
    }

    // Track via browser pixel
    (window as any).fbq('track', 'InitiateCheckout', eventParams);
    
    // Also send to server Conversion API
    // For server API, we need to format the data differently
    const serverEventData = {
      value,
      currency,
      contentIds,
      // For server API, we only send content IDs, not names
      contents: contentIds,
      numItems,
      event_id: finalEventId,
      event_time: event_time || Math.floor(Date.now() / 1000),
      contentType: 'product'
    };
    
    // Send to server asynchronously (don't await)
    sendToServerConversionApi('InitiateCheckout', serverEventData, userInfo);
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
    em?: string;  // Hashed email
    ph?: string;  // Hashed phone
    fn?: string;  // Hashed first name
    ln?: string;  // Hashed last name
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
      
      // Add hashed user data for advanced matching
      if (userInfo.em) {
        eventParams.em = userInfo.em;
      }
      
      if (userInfo.ph) {
        eventParams.ph = userInfo.ph;
      }
      
      if (userInfo.fn) {
        eventParams.fn = userInfo.fn;
      }
      
      if (userInfo.ln) {
        eventParams.ln = userInfo.ln;
      }
    }

    // Track via browser pixel
    (window as any).fbq('track', 'AddToCart', eventParams);
    
    // Also send to server Conversion API
    const serverEventData = {
      value,
      currency,
      contentIds,
      contents,
      numItems,
      event_id,
      event_time
    };
    
    // Send to server asynchronously (don't await)
    sendToServerConversionApi('AddToCart', serverEventData, userInfo);
  }
}; 