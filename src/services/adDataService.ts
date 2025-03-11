"use client";

import { sha256 } from "js-sha256";
import { AdEventData, AdDataPayload } from "../types/adData";

// Map of GA event names to Facebook standard event names
const EVENT_NAME_MAP: Record<string, string> = {
  // Standard GA to FB event mapping
  "page_view": "PageView",
  "view_item": "ViewContent",
  "add_to_cart": "AddToCart",
  "begin_checkout": "InitiateCheckout",
  "purchase": "Purchase",
  
  // Additional standard Facebook events
  "complete_registration": "CompleteRegistration",
  "contact": "Contact",
  "customize_product": "CustomizeProduct",
  "donate": "Donate",
  "find_location": "FindLocation",
  "lead": "Lead",
  "schedule": "Schedule",
  "search": "Search",
  "start_trial": "StartTrial",
  "submit_application": "SubmitApplication",
  "subscribe": "Subscribe",
  "add_payment_info": "AddPaymentInfo",
  "add_to_wishlist": "AddToWishlist",
  "add_shipping_info": "AddShippingInfo"
};

// Track which events have been sent to prevent duplicates
const sentEvents = new Set<string>();
const eventTimestamps = new Map<string, number>();
const DUPLICATE_PREVENTION_WINDOW = 3000; // 3 seconds

// Function to check if an event was recently sent
function wasEventRecentlySent(eventName: string): boolean {
  const now = Date.now();
  const lastSent = eventTimestamps.get(eventName);
  
  if (lastSent && (now - lastSent) < DUPLICATE_PREVENTION_WINDOW) {
    return true;
  }
  
  // Update the timestamp
  eventTimestamps.set(eventName, now);
  return false;
}

// Function to standardize event names
export function standardizeEventName(eventName: string): string {
  return EVENT_NAME_MAP[eventName] || eventName;
}

// Function to get cookies
export function getCookie(name: string) {
  if (typeof document === 'undefined') return undefined;
  
  const cookies = document.cookie
    .split("; ")
    .reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {} as Record<string, string>);
    
  return cookies[name] || undefined;
}

// Function to hash email
export function hashEmail(email: string): string {
  return sha256(email.trim().toLowerCase());
}

// Function to collect data from both GA and FB Pixel
export async function collectAdData(
  eventName: string,
  customData: Record<string, any> = {},
  userData: Record<string, any> = {}
): Promise<AdEventData> {
  const eventId = crypto.randomUUID();
  const eventTime = Math.floor(Date.now() / 1000);
  
  // Standardize the event name
  const standardEventName = standardizeEventName(eventName);
  
  // Get stored external ID or create a new one
  let externalId = undefined;
  if (typeof localStorage !== 'undefined') {
    externalId = localStorage.getItem("hashed-ext-ID") || undefined;
    if (!externalId) {
      externalId = sha256(crypto.randomUUID());
      localStorage.setItem("hashed-ext-ID", externalId);
    }
  }
  
  // Get current URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Prepare user data
  const adUserData = {
    em: userData.email ? [hashEmail(userData.email)] : undefined,
    ph: userData.phone ? [userData.phone] : undefined,
    fn: userData.name ? [userData.name] : undefined,
    fbp: getCookie("_fbp"),
    fbc: getCookie("fbclick_id"),
    external_id: externalId ? [externalId] : undefined,
    client_user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    client_ip_address: null, // Will be filled by the server
    ...userData
  };
  
  // Prepare custom data
  const adCustomData = {
    currency: customData.currency || "USD",
    value: customData.value || "0.00",
    ...customData
  };
  
  // Create event data
  const adEventData: AdEventData = {
    event_name: standardEventName,
    event_time: eventTime,
    action_source: "website",
    event_id: eventId,
    event_source_url: currentUrl,
    user_data: adUserData,
    custom_data: adCustomData,
    opt_out: false // Required by the AdEventData interface
  };
  
  return adEventData;
}

// Function to format event data in the exact format required by Facebook
export function formatEventDataForFacebook(eventData: AdEventData): any {
  return {
    event_name: eventData.event_name,
    event_time: eventData.event_time,
    user_data: eventData.user_data,
    custom_data: eventData.custom_data,
    event_source_url: eventData.event_source_url,
    action_source: eventData.action_source
  };
}

// Function to send data to our API
export async function sendToAdDataApi(eventData: AdEventData): Promise<void> {
  try {
    const formattedEventData = formatEventDataForFacebook(eventData);
    
    // Ensure content_ids is included in the payload
    if (eventData.custom_data && eventData.custom_data.content_ids) {
      // Make sure content_ids is properly formatted for the API
      formattedEventData.content_ids = Array.isArray(eventData.custom_data.content_ids) 
        ? eventData.custom_data.content_ids 
        : [eventData.custom_data.content_ids];
    }
    
    const payload: AdDataPayload = {
      data: [eventData]
    };
    
    // Use a production API endpoint instead of localhost
    const apiEndpoint ='https://king-prawn-app-c4g7k.ondigitalocean.app/api/addata';
    
    console.log(`Sending event data to ${apiEndpoint}:`, eventData.event_name, 
      eventData.custom_data.content_ids ? `content_ids: ${eventData.custom_data.content_ids}` : '');
    
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Ad data sent successfully:', result);
  } catch (error) {
    console.error('Error sending ad data:', error);
    
    // Store failed events in localStorage for retry later
    storeFailedEvent(eventData);
  }
}

// Store failed events in localStorage for retry later
function storeFailedEvent(eventData: AdEventData): void {
  try {
    // Get existing failed events
    const failedEventsStr = localStorage.getItem('failed_ad_events') || '[]';
    const failedEvents = JSON.parse(failedEventsStr);
    
    // Add new failed event
    failedEvents.push({
      ...eventData,
      retryCount: (eventData.retryCount || 0) + 1,
      failedAt: Date.now()
    });
    
    // Store back in localStorage (limit to 50 events to prevent storage issues)
    localStorage.setItem('failed_ad_events', JSON.stringify(failedEvents.slice(-50)));
  } catch (error) {
    console.error('Error storing failed event:', error);
  }
}

// Function to retry sending failed events
export async function retryFailedEvents(): Promise<void> {
  try {
    // Get failed events
    const failedEventsStr = localStorage.getItem('failed_ad_events') || '[]';
    const failedEvents = JSON.parse(failedEventsStr);
    
    if (failedEvents.length === 0) return;
    
    console.log(`Retrying ${failedEvents.length} failed events`);
    
    // Filter events to retry (only retry events that failed less than 3 times and within the last 24 hours)
    const eventsToRetry = failedEvents.filter((event: AdEventData & { failedAt: number }) => {
      const retryCount = event.retryCount || 0;
      const failedAt = event.failedAt || 0;
      const now = Date.now();
      const hoursSinceFailed = (now - failedAt) / (1000 * 60 * 60);
      
      return retryCount < 3 && hoursSinceFailed < 24;
    });
    
    // Clear failed events
    localStorage.setItem('failed_ad_events', JSON.stringify([]));
    
    // Retry each event
    for (const event of eventsToRetry) {
      await sendToAdDataApi(event);
    }
  } catch (error) {
    console.error('Error retrying failed events:', error);
  }
}

// Combined function to collect and send data
export async function trackEvent(
  eventName: string,
  customData: Record<string, any> = {},
  userData: Record<string, any> = {}
): Promise<void> {
  // Check if this event was recently sent to prevent duplicates
  if (wasEventRecentlySent(eventName)) {
    console.log(`Prevented duplicate event: ${eventName}`);
    return;
  }
  
  // Extract email and phone from customData if they exist
  if (customData.em && !userData.email) {
    userData.email = customData.em;
  }
  
  if (customData.ph && !userData.phone) {
    userData.phone = customData.ph;
  }
  
  if (customData.fn && !userData.name) {
    userData.name = customData.fn;
  }
  
  // Ensure content_ids is passed from customData to userData if not already present
  if (customData.content_ids && !userData.content_ids) {
    userData.content_ids = customData.content_ids;
  }
  
  const eventData = await collectAdData(eventName, customData, userData);
  
  // Create a unique key for this event
  const eventKey = `${eventName}_${JSON.stringify(customData)}_${Date.now()}`;
  
  // Check if we've already sent this exact event
  if (sentEvents.has(eventKey)) {
    console.log(`Prevented duplicate event with key: ${eventKey}`);
    return;
  }
  
  // Mark this event as sent
  sentEvents.add(eventKey);
  
  // Send the event data
  await sendToAdDataApi(eventData);
  
  // Try to retry any failed events
  setTimeout(() => {
    retryFailedEvents();
  }, 5000);
}

// Function to send event in the exact format required by Facebook
export async function sendExactFormatEvent(
  eventName: string,
  customData: Record<string, any> = {},
  userData: Record<string, any> = {}
): Promise<void> {
  const eventData = await collectAdData(eventName, customData, userData);
  const formattedEventData = formatEventDataForFacebook(eventData);
  
  // Log the formatted event data
  console.log('Formatted event data:', JSON.stringify(formattedEventData, null, 2));
  
  // Create the exact format payload
  const exactFormatPayload = {
    data: [formattedEventData]
  };
  
  try {
    const response = await fetch('http://localhost:3001/api/addata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exactFormatPayload),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Event sent successfully in exact format:', result);
  } catch (error) {
    console.error('Error sending event in exact format:', error);
  }
} 