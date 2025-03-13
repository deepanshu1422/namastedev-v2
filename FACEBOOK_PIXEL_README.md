# Facebook Pixel and Conversion API Integration

This document explains how the Facebook Pixel and Conversion API are integrated in this project.

## Overview

The integration uses a dual approach to tracking events:

1. **Browser-side tracking** using the Facebook Pixel
2. **Server-side tracking** using the Facebook Conversion API

This approach ensures maximum reliability for tracking conversions, even when users have ad blockers or other tracking prevention mechanisms enabled.

## Key Files

- `src/lib/fbPixel.ts` - Contains functions for tracking events via the Facebook Pixel
- `src/lib/hashUtils.ts` - Contains functions for hashing user data according to Meta's requirements
- `src/lib/userInfo.ts` - Contains functions for getting user information for tracking
- `src/app/api/facebook-conversion/route.ts` - API route that forwards events to the Facebook Conversion API
- `src/hooks/usePixelTracking.ts` - React hook for tracking events in components

## Supported Events

The integration supports the following events:

- **PageView** - Tracks when a user views a page
- **ViewContent** - Tracks when a user views a product or content
- **InitiateCheckout** - Tracks when a user initiates the checkout process
- **Purchase** - Tracks when a user completes a purchase
- **AddToCart** - Tracks when a user adds a product to their cart

## User Data Handling

User data is handled according to Meta's requirements:

- All personally identifiable information (PII) is hashed using SHA-256 before being sent to Meta
- The following user data is supported:
  - Email (`em`)
  - Phone number (`ph`)
  - First name (`fn`)
  - Last name (`ln`)

## Configuration

To configure the integration, you need to set the following environment variables:

```
FACEBOOK_PIXEL_ID=your_pixel_id_here
FACEBOOK_CONVERSION_API_TOKEN=your_access_token_here
```

You can copy the `.env.local.example` file to `.env.local` and fill in your values.

### Test Event Code

The integration includes a test event code (`TEST78716`) that is used for testing events in Facebook's Events Manager. This code is hardcoded in the API route and will be sent with all server-side events.

When you're ready to move to production, you should remove the test event code from the API route.

## How It Works

1. When an event is triggered (e.g., a purchase), the event is sent to the Facebook Pixel in the browser.
2. Simultaneously, the same event is sent to our API route (`/api/facebook-conversion`).
3. The API route forwards the event to the Facebook Conversion API with additional server-side information.
4. Both events are deduplicated by Facebook using the event ID.

## Event Implementation Examples

### InitiateCheckout Event

The InitiateCheckout event should be triggered when a user begins the checkout process. Here's how to implement it:

```javascript
import { usePixelTracking } from '@/hooks/usePixelTracking';

// Inside your component
const { trackCheckout } = usePixelTracking();

// When user clicks on checkout button
const handleCheckout = () => {
  // Get user tracking info
  const userInfo = await getUserTrackingInfo();
  
  // Track the checkout event
  trackCheckout({
    value: 1999, // Value in smallest currency unit (e.g., cents)
    currency: 'INR',
    contentIds: ['intermediate-package'],
    contents: ['Intermediate Package'],
    numItems: 1,
    userInfo: {
      ...userInfo,
      // If you have user data, include it here
      name: userData?.name,
      email: userData?.email,
      phone: userData?.phone
    }
  });
  
  // Proceed with checkout
  router.push('/checkout');
};
```

Important notes for InitiateCheckout:
- Always include a unique `event_id` (generated automatically if not provided)
- The `contents` parameter must follow Facebook's format requirements (handled automatically)
- Include user data when available for better tracking

### Purchase Event

The thank-you page (`src/app/thank-you/page.tsx`) implements the Purchase event tracking with the following features:

1. Waits for user information to be loaded from the database before triggering the purchase event
2. Displays user information (name, email, phone) on the page
3. Hashes user data before sending it to Facebook
4. Sends the purchase event to both the Facebook Pixel and Conversion API

## Testing

To test the integration:

1. Set up your environment variables
2. Use the Facebook Pixel Helper browser extension to verify browser-side events
3. Use the Facebook Events Manager to verify server-side events
4. Look for events with the test event code `TEST78716` in the Events Manager's Test Events tab

### Test Events in Events Manager

1. Go to your Facebook Business Manager
2. Navigate to Events Manager
3. Select your pixel
4. Click on "Test Events" in the left sidebar
5. You should see events with the test code `TEST78716` appearing when they are triggered

## Troubleshooting

If events are not being tracked:

1. Check that the Facebook Pixel is properly initialized
2. Verify that the environment variables are set correctly
3. Check the browser console for any errors
4. Check the server logs for any errors in the API route
5. Verify that the test event code is correctly set in the API route

### Common Errors

#### Invalid Parameter Error for Contents

If you see an error like `Unexpected key "name" on param "$['data'][0]['custom_data']['contents'][0]"`, it means the contents parameter format is incorrect. The Conversion API expects contents to be an array of objects with `id` and `quantity` properties only, not `name`.

This has been fixed in the implementation, but if you're manually calling the API, ensure your contents follow this format:

```javascript
contents: [
  {
    id: 'product-id',
    quantity: 1
  }
]
```

## Resources

- [Facebook Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Facebook Conversion API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Facebook Events Manager](https://business.facebook.com/events_manager)
- [Facebook Test Events](https://developers.facebook.com/docs/marketing-api/conversions-api/testing) 