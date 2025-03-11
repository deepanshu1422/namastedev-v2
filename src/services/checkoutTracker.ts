"use client";

import { trackCustomEvent, FB_EVENTS } from './fbpixel';
import { trackEvent } from './adDataService';

// Interface for checkout data
interface CheckoutData {
  courseId: string;
  courseName: string;
  coursePrice: string;
  courseType: string;
  currency?: string;
  quantity?: number;
  additionalData?: Record<string, any>;
}

/**
 * Track a checkout event with both Facebook Pixel and your custom tracking service
 * This function ensures that all checkout events are properly tracked and sent to both services
 */
export async function trackCheckoutClick(data: CheckoutData): Promise<boolean> {
  try {
    const {
      courseId,
      courseName,
      coursePrice,
      courseType,
      currency = 'INR',
      quantity = 1,
      additionalData = {}
    } = data;
    
    // Parse price to remove currency symbol and commas
    const numericPrice = parseFloat(coursePrice.replace(/[^0-9.]/g, ''));
    
    // Create event data
    const eventData = {
      content_ids: [courseType],
      content_type: 'product',
      content_name: courseName,
      content_category: courseType,
      value: numericPrice,
      currency,
      num_items: quantity,
      ...additionalData
    };
    
    console.log('Tracking checkout event:', {
      courseId,
      courseName,
      coursePrice: numericPrice,
      courseType,
      content_ids: [courseType]
    });
    
    // Track with Facebook Pixel via trackCustomEvent
    await trackCustomEvent(FB_EVENTS.INITIATE_CHECKOUT, eventData);
    
    // Also track a direct event to ensure it's captured
    // Explicitly include content_ids in userData to ensure it's sent to the API
    await trackEvent(FB_EVENTS.INITIATE_CHECKOUT, eventData, {
      content_ids: [courseType],
      external_id: localStorage.getItem("hashed-ext-ID") || undefined
    });
    
    // Removed the additional checkout_click event to prevent duplicate tracking
    
    return true;
  } catch (error) {
    console.error('Error tracking checkout event:', error);
    return false;
  }
}

/**
 * Track a purchase event with both Facebook Pixel and your custom tracking service
 * This should be called on the thank you/confirmation page after a successful purchase
 */
export async function trackPurchaseComplete(data: CheckoutData & { 
  orderId: string,
  customerEmail?: string,
  customerPhone?: string,
  customerName?: string
}): Promise<boolean> {
  try {
    const {
      courseId,
      courseName,
      coursePrice,
      courseType,
      currency = 'INR',
      quantity = 1,
      orderId,
      customerEmail,
      customerPhone,
      customerName,
      additionalData = {}
    } = data;
    
    // Parse price to remove currency symbol and commas
    const numericPrice = parseFloat(coursePrice.replace(/[^0-9.]/g, ''));
    
    // Create event data
    const eventData = {
      content_ids: [courseType],
      content_type: 'product',
      content_name: courseName,
      content_category: courseType,
      value: numericPrice,
      currency,
      num_items: quantity,
      order_id: orderId,
      ...additionalData
    };
    
    // Create user data if available
    const userData: Record<string, any> = {
      content_ids: [courseType]
    };
    
    if (customerEmail) userData.email = customerEmail;
    if (customerPhone) userData.phone = customerPhone;
    if (customerName) userData.name = customerName;
    
    // Track with Facebook Pixel
    await trackCustomEvent(FB_EVENTS.PURCHASE, eventData);
    
    // Also track a direct event to ensure it's captured
    await trackEvent(FB_EVENTS.PURCHASE, eventData, userData);
    
    return true;
  } catch (error) {
    console.error('Error tracking purchase event:', error);
    return false;
  }
}

/**
 * Get course information based on the page/course type
 */
export function getCourseInfo(courseType: 'beginner' | 'intermediate' | 'advanced'): {
  id: string;
  name: string;
  price: string;
} {
  const courseIds = {
    'beginner': '67c8a985a2fc8675d8e821ba',
    'intermediate': '67c8a9e153f717193c586641',
    'advanced': '652a1994e4b05a145bae5cd0'
  };
  
  const courseNames = {
    'beginner': 'Beginner Package',
    'intermediate': 'Intermediate Package',
    'advanced': 'Advanced Package'
  };
  
  const coursePrices = {
    'beginner': '₹999',
    'intermediate': '₹1,999',
    'advanced': '₹2,999'
  };
  
  return {
    id: courseIds[courseType],
    name: courseNames[courseType],
    price: coursePrices[courseType]
  };
} 