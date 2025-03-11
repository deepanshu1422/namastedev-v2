"use client";

import { sha256 } from "js-sha256";
import { trackEvent } from "./adDataService";

// Add fbq type definition
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Facebook standard events
export const FB_EVENTS = {
  PAGE_VIEW: "PageView",
  VIEW_CONTENT: "ViewContent",
  ADD_TO_CART: "AddToCart",
  ADD_TO_WISHLIST: "AddToWishlist",
  INITIATE_CHECKOUT: "InitiateCheckout",
  ADD_PAYMENT_INFO: "AddPaymentInfo",
  PURCHASE: "Purchase",
  LEAD: "Lead",
  COMPLETE_REGISTRATION: "CompleteRegistration",
  CONTACT: "Contact",
  CUSTOMIZE_PRODUCT: "CustomizeProduct",
  DONATE: "Donate",
  FIND_LOCATION: "FindLocation",
  SCHEDULE: "Schedule",
  SEARCH: "Search",
  START_TRIAL: "StartTrial",
  SUBMIT_APPLICATION: "SubmitApplication",
  SUBSCRIBE: "Subscribe",
  ADD_SHIPPING_INFO: "AddShippingInfo"
};

// Track which events have been fired to prevent duplicates
let firedEvents = new Set<string>();

// Track when events were last fired (timestamp)
const eventTimestamps = new Map<string, number>();
const DUPLICATE_PREVENTION_WINDOW = 3000; // 3 seconds

// Helper function to get event key
function getEventKey(eventName: string, eventId: string) {
  return `${eventName}_${eventId}`;
}

// Helper function to check if event was fired
function wasEventFired(eventName: string, eventId: string) {
  const key = getEventKey(eventName, eventId);
  return firedEvents.has(key);
}

// Helper function to check if event was recently fired
function wasEventRecentlyFired(eventName: string) {
  const now = Date.now();
  const lastFired = eventTimestamps.get(eventName);
  
  if (lastFired && (now - lastFired) < DUPLICATE_PREVENTION_WINDOW) {
    return true;
  }
  
  // Update the timestamp
  eventTimestamps.set(eventName, now);
  return false;
}

// Helper function to mark event as fired
function markEventAsFired(eventName: string, eventId: string) {
  const key = getEventKey(eventName, eventId);
  firedEvents.add(key);
  eventTimestamps.set(eventName, Date.now());
}

// Helper function to get base event data
function getBaseEventData() {
  return {
    action_source: "website",
    fbp: getCookie("_fbp"),
    fbc: getCookie("fbclick_id"),
    external_id: localStorage.getItem("hashed-ext-ID"),
    client_user_agent: navigator.userAgent,
    event_id: crypto.randomUUID(),
    page_location: window.location.href,
    page_title: document.title,
    page_path: window.location.pathname
  };
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; domain=.skillsetmaster.com; path=/; expires=${expires}; Secure; SameSite=Lax`;
}

function formatFbc(fbclid: string) {
  return `fb.1.${Date.now()}.${fbclid}`;
}

function getCookie(name: string) {
  return document.cookie
      .split("; ")
      .reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {} as Record<string, string>)[name];
}

// Initialize Facebook Pixel
let isPixelInitialized = false;
export const initFacebookPixel = () => {
  const pixelId = "988834379011528"; // Facebook Pixel ID
  
  if (typeof window === 'undefined' || isPixelInitialized) return;
  
  // Initialize Facebook Pixel only once
  if (!window.fbq) {
    (function (f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: Element) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e) as HTMLScriptElement;
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      }
    })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", pixelId, {
      cookieDomain: ".skillsetmaster.com",
    });
    
    // Add event listener for all link clicks
    document.addEventListener('click', handleLinkClick);
    
    // Add event listener for form submissions
    document.addEventListener('submit', handleFormSubmit);
    
    isPixelInitialized = true;
  }
};

// Track pageview
export const pageview = async () => {
  if (typeof window === 'undefined') return;
  
  const baseData = getBaseEventData();
  const eventKey = getEventKey(FB_EVENTS.PAGE_VIEW, baseData.event_id);
  
  // Check both set-based and time-based duplicate prevention
  if (firedEvents.has(eventKey) || wasEventRecentlyFired(FB_EVENTS.PAGE_VIEW)) return;
  
  window.fbq("track", FB_EVENTS.PAGE_VIEW, baseData);

  await trackEvent(FB_EVENTS.PAGE_VIEW, {
    ...baseData,
    page_location: window.location.href,
    page_title: document.title,
    page_path: window.location.pathname
  }, {
    external_id: localStorage.getItem("hashed-ext-ID"),
    fbp: getCookie("_fbp"),
    fbc: getCookie("fbclick_id"),
    client_user_agent: navigator.userAgent
  });

  markEventAsFired(FB_EVENTS.PAGE_VIEW, baseData.event_id);
};

// Track content view
export const viewContent = async (contentIds: string[]) => {
  if (typeof window === 'undefined') return;
  
  const baseData = getBaseEventData();
  const eventKey = getEventKey(FB_EVENTS.VIEW_CONTENT, baseData.event_id);
  
  // Check both set-based and time-based duplicate prevention
  if (firedEvents.has(eventKey) || wasEventRecentlyFired(FB_EVENTS.VIEW_CONTENT)) return;
  
  window.fbq("track", FB_EVENTS.VIEW_CONTENT, {
    ...baseData,
    content_ids: contentIds
  });

  await trackEvent(FB_EVENTS.VIEW_CONTENT, {
    ...baseData,
    content_ids: contentIds
  }, {
    external_id: localStorage.getItem("hashed-ext-ID"),
    fbp: getCookie("_fbp"),
    fbc: getCookie("fbclick_id"),
    client_user_agent: navigator.userAgent
  });

  markEventAsFired(FB_EVENTS.VIEW_CONTENT, baseData.event_id);
};

// Handle link clicks for potential events
function handleLinkClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const link = target.closest('a');
  
  if (!link) return;
  
  const href = link.getAttribute('href');
  if (!href) return;
  
  // Check for checkout links
  if (href.includes('checkout') || href.includes('cart')) {
    trackCustomEvent(FB_EVENTS.INITIATE_CHECKOUT, {
      content_type: 'product_group',
      content_category: 'checkout'
    });
  }
  
  // Check for course links
  if (href.includes('course') || href.includes('learn')) {
    trackCustomEvent(FB_EVENTS.VIEW_CONTENT, {
      content_type: 'course',
      content_name: link.textContent || 'Course View'
    });
  }
}

// Handle form submissions
function handleFormSubmit(event: Event) {
  const form = event.target as HTMLFormElement;
  
  if (form.id.includes('contact') || form.id.includes('support')) {
    trackCustomEvent(FB_EVENTS.CONTACT, {
      content_category: 'contact',
      content_name: form.id
    });
  }
  
  if (form.id.includes('register') || form.id.includes('signup')) {
    trackCustomEvent(FB_EVENTS.COMPLETE_REGISTRATION, {
      content_category: 'registration',
      content_name: form.id
    });
  }
}

// Track custom events
export const trackCustomEvent = async (
  eventName: string,
  customData: Record<string, any> = {}
) => {
  if (typeof window === 'undefined') return;
  
  const baseData = getBaseEventData();
  const eventKey = getEventKey(eventName, baseData.event_id);
  
  // Check both set-based and time-based duplicate prevention
  if (firedEvents.has(eventKey) || wasEventRecentlyFired(eventName)) return;
  
  const eventData = {
    ...baseData,
    ...customData
  };
  
  // Log the event data for debugging
  console.log(`Tracking FB event: ${eventName}`, 
    customData.content_ids ? `content_ids: ${JSON.stringify(customData.content_ids)}` : '');
  
  window.fbq("track", eventName, eventData);
  
  // Prepare userData with content_ids if available
  const userData: Record<string, any> = {
    external_id: localStorage.getItem("hashed-ext-ID"),
    fbp: getCookie("_fbp"),
    fbc: getCookie("fbclick_id"),
    client_user_agent: navigator.userAgent
  };
  
  // Ensure content_ids is passed to trackEvent
  if (customData.content_ids) {
    userData.content_ids = customData.content_ids;
  }
  
  await trackEvent(eventName, eventData, userData);

  markEventAsFired(eventName, baseData.event_id);
};

// Reset tracked events (useful when pathname changes)
export const resetTrackedEvents = () => {
  // Instead of clearing all events, we'll keep the timestamps
  // to prevent immediate re-firing of the same events
  firedEvents.clear();
};

// Function to trigger a custom Facebook event
export const sendEvent = async (
    name: string,
    options: Record<string, string | string[] | number>
) => {
  const baseData = getBaseEventData();

  if (!localStorage.getItem("hashed-ext-ID")) {
    localStorage.setItem("hashed-ext-ID", sha256(crypto.randomUUID()));
  }

  if (!getCookie("fbclick_id")) {
    const fbclid =
        typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("fbclid")
            : null;

    setCookie(
        "fbclick_id",
        formatFbc(fbclid || `organic_${Math.floor(Math.random() * 1000000000)}`),
        7
    );
  }

  // Extract user data from options
  const userData = {
    em: options.em,
    ph: options.ph,
    fn: options.fn,
    external_id: options.em || localStorage.getItem("hashed-ext-ID"),
    fbp: getCookie("_fbp"),
    fbc: getCookie("fbclick_id"),
    client_user_agent: navigator.userAgent
  };
  
  // Remove user data from options to avoid duplication
  const customData = { ...options };
  delete customData.em;
  delete customData.ph;
  delete customData.fn;

  // Fire Facebook event
  window.fbq("track", name, {
    ...customData,
    ...baseData
  });

  // Send data to our API
  await trackEvent(name, customData, userData);
};

// Track checkout event specifically for checkout button clicks
export const trackCheckoutEvent = async (
  courseId: string,
  courseName: string,
  coursePrice: string,
  courseType: string
) => {
  if (typeof window === 'undefined') return;
  
  const baseData = getBaseEventData();
  const eventKey = getEventKey(FB_EVENTS.INITIATE_CHECKOUT, baseData.event_id);
  
  // Check both set-based and time-based duplicate prevention
  if (firedEvents.has(eventKey) || wasEventRecentlyFired(FB_EVENTS.INITIATE_CHECKOUT)) return;
  
  // Parse price to remove currency symbol and commas
  const numericPrice = parseFloat(coursePrice.replace(/[^0-9.]/g, ''));
  
  const checkoutData = {
    ...baseData,
    content_ids: [courseType],
    content_type: 'product',
    content_name: courseName,
    content_category: courseType,
    value: numericPrice,
    currency: 'INR',
    num_items: 1
  };
  
  // Log the event data for debugging
  console.log(`Tracking FB checkout event for course: ${courseName}`, 
    `content_ids: ${JSON.stringify([courseType])}`);
  
  // Track with Facebook Pixel
  window.fbq("track", FB_EVENTS.INITIATE_CHECKOUT, checkoutData);
  
  // Track with your custom tracking service
  await trackEvent(FB_EVENTS.INITIATE_CHECKOUT, checkoutData, {
    external_id: localStorage.getItem("hashed-ext-ID"),
    fbp: getCookie("_fbp"),
    fbc: getCookie("fbclick_id"),
    client_user_agent: navigator.userAgent,
    content_ids: [courseType]
  });

  markEventAsFired(FB_EVENTS.INITIATE_CHECKOUT, baseData.event_id);
  
  // Return true to indicate the event was tracked
  return true;
};

