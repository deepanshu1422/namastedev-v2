"use client";

// Facebook Pixel Implementation
// This file centralizes all Facebook Pixel tracking functionality

export const FB_PIXEL_ID = "988834379011528";

// Track if pixel has been initialized to prevent multiple initializations
let isPixelInitialized = false;
// Track which events have been fired to prevent duplicate events
const firedEvents = new Set<string>();

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined' || isPixelInitialized) return;

  // Add Facebook Pixel base code
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${FB_PIXEL_ID}');
  `;
  document.head.appendChild(script);
  
  // Create noscript fallback
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.height = 1;
  img.width = 1;
  img.style.display = 'none';
  img.src = `https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`;
  noscript.appendChild(img);
  document.head.appendChild(noscript);
  
  isPixelInitialized = true;
  console.log('Facebook Pixel initialized with ID:', FB_PIXEL_ID);
};

// Track PageView event
export const pageview = () => {
  if (typeof window === 'undefined' || !window.fbq) return;
  
  const eventKey = 'pageview';
  if (firedEvents.has(eventKey)) return;
  
  window.fbq('track', 'PageView');
  firedEvents.add(eventKey);
  console.log('Facebook Pixel: PageView tracked');
};

// Track ViewContent event
export const viewContent = (contentIds: string[]) => {
  if (typeof window === 'undefined' || !window.fbq) return;
  
  const eventKey = `viewcontent-${contentIds.join('-')}`;
  if (firedEvents.has(eventKey)) return;
  
  window.fbq('track', 'ViewContent', {
    content_ids: contentIds,
    content_type: 'product',
  });
  firedEvents.add(eventKey);
  console.log('Facebook Pixel: ViewContent tracked with IDs:', contentIds);
};

// Reset tracked events (useful when navigating to a new page)
export const resetTrackedEvents = () => {
  firedEvents.clear();
};

// Generic event tracking function (for backward compatibility)
export const event = (name: string, options = {}) => {
  if (typeof window === 'undefined' || !window.fbq) return;
  
  const eventKey = `event-${name}-${JSON.stringify(options)}`;
  if (firedEvents.has(eventKey)) return;
  
  window.fbq('track', name, options);
  firedEvents.add(eventKey);
};

// Alias for event function (for backward compatibility)
export const sendEvent = event;

// Server-side event tracking (placeholder for future implementation)
export const sendSeverEvent = async () => {};

// Default export for React component usage
export default function PixelEvents() {
  return null;
}

// Add TypeScript global declarations
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
} 