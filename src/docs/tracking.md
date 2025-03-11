# Tracking Implementation Guide

This document explains how tracking is implemented in the NamasteDev application, particularly focusing on Facebook Pixel events and checkout tracking.

## Overview

The application uses a dual tracking approach:
1. Facebook Pixel for standard web tracking
2. Custom tracking service for server-side event tracking

All tracking events include content IDs to ensure proper attribution and tracking.

## Key Components

### 1. Facebook Pixel Hook (`use-facebook-pixel.ts`)

This custom hook handles Facebook Pixel initialization and event tracking. It ensures:
- Pixel is only initialized once per session
- Events are tracked with proper sequencing
- Duplicate events are prevented using both time-based and set-based mechanisms
- Content IDs are included in all events

### 2. Facebook Pixel Service (`fbpixel.ts`)

This service provides the core functionality for Facebook Pixel tracking:
- Initializes the Facebook Pixel
- Tracks standard events (PageView, ViewContent, etc.)
- Tracks custom events
- Prevents duplicate events
- Ensures content IDs are passed to both Facebook Pixel and your custom tracking service

### 3. Ad Data Service (`adDataService.ts`)

This service handles sending tracking data to your backend:
- Collects and formats event data
- Sends data to your API
- Handles failed events with retry logic
- Prevents duplicate events
- Ensures content IDs are properly formatted and included in all API requests

### 4. Checkout Tracker (`checkoutTracker.ts`)

This specialized service handles checkout-specific tracking:
- Tracks checkout button clicks using the standard Facebook Pixel INITIATE_CHECKOUT event
- Tracks purchase completion
- Provides course information for tracking
- Ensures events are sent to both Facebook Pixel and your custom tracking service
- Explicitly includes content IDs in all tracking events

## Checkout Flow Tracking

When a user clicks on a checkout button:

1. The `handleCheckout` function in `EnrollModal.tsx` is called
2. This function calls `trackCheckoutClick` from `checkoutTracker.ts`
3. `trackCheckoutClick` sends the INITIATE_CHECKOUT event to both Facebook Pixel and your custom tracking service
4. Content IDs are explicitly included in both the event data and user data
5. The user is then redirected to the checkout page

## Event Data Structure

### Checkout Event Data (INITIATE_CHECKOUT)

```javascript
{
  content_ids: [courseId],  // Always included in both event data and user data
  content_type: 'product',
  content_name: courseName,
  content_category: courseType,
  value: numericPrice,
  currency: 'INR',
  num_items: 1,
  source: 'enroll_modal',
  button_location: 'modal',
  utm_source: '...',
  utm_medium: '...',
  utm_campaign: '...'
}
```

### Purchase Event Data

```javascript
{
  content_ids: [courseId],  // Always included in both event data and user data
  content_type: 'product',
  content_name: courseName,
  content_category: courseType,
  value: numericPrice,
  currency: 'INR',
  num_items: 1,
  order_id: orderId
}
```

## Content ID Handling

Content IDs are critical for proper tracking and attribution. The system ensures content IDs are:

1. **Consistently formatted**: Always as an array, even for single values
2. **Included in all events**: Both in the event data and user data
3. **Passed to all tracking services**: Both Facebook Pixel and your custom API
4. **Logged for debugging**: All tracking events log content IDs for easy debugging

## Duplicate Prevention

The system prevents duplicate events through multiple mechanisms:

1. **Time-based prevention**: Events of the same type are not fired within a short time window
2. **Set-based prevention**: Each event is tracked with a unique ID to prevent duplicates
3. **Component-level prevention**: The React component tracks if an event has already been fired
4. **Event standardization**: Only standard Facebook Pixel events are used (INITIATE_CHECKOUT, PURCHASE) to prevent duplicate tracking

## Debugging

To debug tracking issues:

1. Check browser console for tracking logs
2. Look for messages like "Prevented duplicate event" which indicate the duplicate prevention is working
3. Verify that events are being sent to your API by checking network requests
4. Check localStorage for any failed events that are queued for retry
5. Look for content ID logs in the console to verify they're being properly included

## Course IDs and Information

The system uses the following course IDs:

- Beginner: `67c8a985a2fc8675d8e821ba`
- Intermediate: `67c8a9e153f717193c586641`
- Advanced: `652a1994e4b05a145bae5cd0`

This information is centralized in the `getCourseInfo` function in `checkoutTracker.ts`. 