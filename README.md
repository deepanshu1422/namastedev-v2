This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
n

First, run the development

yu

server:
...


bbn
.
```bash
b
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

gg

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:


.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 30 Days Coding Platform

## Meta Pixel Implementation

This document outlines the implementation of Meta Pixel tracking in our application.

### Overview

We've implemented a comprehensive solution for Meta Pixel tracking that prevents duplicate events and ensures reliable tracking across page navigations. The implementation consists of three main components:

1. **Utility Functions** (`src/lib/fbPixel.ts`)
2. **Custom React Hook** (`src/hooks/usePixelTracking.ts`)
3. **Page-Level Implementation** (in each page component)
4. **Component-Level Implementation** (in specific components like EnrollModal)

### 1. Utility Functions (`src/lib/fbPixel.ts`)

The base utility functions handle direct interaction with the Facebook Pixel API and include:

- **Debounce Mechanism**: Prevents the same event from firing multiple times within a short period (1 second)
- **Safety Checks**: Ensures the fbq function is available before attempting to use it
- **Standardized Event Tracking**: Consistent format for all tracking events

```typescript
// Example of the debounce mechanism
const shouldTrackEvent = (eventName: string): boolean => {
  const now = Date.now();
  const lastTime = lastEventTime[eventName] || 0;
  
  if (now - lastTime < DEBOUNCE_TIME) {
    return false;
  }
  
  lastEventTime[eventName] = now;
  return true;
};

// Example of a tracking function
export const trackViewContent = (
  contentName: string,
  contentCategory: string,
  contentIds: string[],
  value: number,
  currency: string = 'INR'
) => {
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
```

### 2. Custom React Hook (`src/hooks/usePixelTracking.ts`)

The custom hook provides a React-friendly way to use the tracking functions:

- **Automatic PageView Tracking**: Tracks PageView event once when a component mounts
- **Ref-Based Tracking**: Uses React refs to ensure events are only fired once
- **TypeScript Interfaces**: Properly typed parameters for better developer experience

```typescript
export const usePixelTracking = () => {
  // Use refs to track if events have been fired
  const pageViewFired = useRef(false);
  
  // Track PageView only once on mount
  useEffect(() => {
    if (!pageViewFired.current) {
      trackPageView();
      pageViewFired.current = true;
    }
    
    return () => {
      pageViewFired.current = false;
    };
  }, []);

  // Function to track ViewContent
  const trackProductView = ({
    contentName,
    contentCategory,
    contentIds,
    value,
    currency = 'INR'
  }: ViewContentProps) => {
    trackViewContent(contentName, contentCategory, contentIds, value, currency);
  };

  // Additional tracking functions...

  return {
    trackProductView,
    trackProductPurchase,
    trackCheckout,
    trackCart,
    trackPageView
  };
};
```

### 3. Page-Level Implementation

In each page component, we use the custom hook and add an additional layer of protection:

- **Component-Level Ref**: Each page has its own ref to track if ViewContent has been fired
- **useEffect Dependency Array**: Properly configured to prevent unnecessary re-renders
- **Event-Specific Tracking**: Each page tracks ViewContent with appropriate parameters

```typescript
const BeginnerPage = () => {
  // Other state...
  const { trackProductView } = usePixelTracking();
  const viewContentFired = useRef(false);

  // Track ViewContent only once
  useEffect(() => {
    if (!viewContentFired.current) {
      trackProductView({
        contentName: 'Beginner Level Course Package',
        contentCategory: 'Coding Courses',
        contentIds: ['beginner-package'],
        value: 999
      });
      viewContentFired.current = true;
    }
  }, [trackProductView]);

  // Rest of the component...
};
```

### 4. Component-Level Implementation

For specific user interactions, we implement tracking in the relevant components:

#### EnrollModal Component

The EnrollModal component tracks the InitiateCheckout event when a user clicks on a checkout button:

```typescript
// Track InitiateCheckout event
const trackInitiateCheckout = (courseType: string) => {
  const course = coursePricing[courseType as keyof typeof coursePricing];
  
  if (course) {
    trackCheckout({
      value: course.value,
      contentIds: [`${courseType}-package`],
      contents: [course.name],
      numItems: 1
    });
  }
};

// Handle redirect to checkout page
const handleCheckoutRedirect = (page: string) => {
  // Prevent multiple clicks
  if (isCheckoutInProgress) return;
  
  try {
    setIsCheckoutInProgress(true);
    
    // Track InitiateCheckout event before redirecting
    trackInitiateCheckout(page);
    
    // Close modal
    onClose();
    
    // Redirect to checkout page with course type
    router.push(`/checkout?course=${page}`);
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    setIsCheckoutInProgress(false);
  }
};
```

### Supported Events

The implementation supports the following Meta Pixel events:

1. **PageView**: Automatically tracked when a page loads
2. **ViewContent**: Tracked when a user views a product/course page
3. **InitiateCheckout**: Tracked when a user begins the checkout process
4. **Purchase**: Tracked when a user completes a purchase
5. **AddToCart**: Tracked when a user adds a product to cart

### Purchase Event Implementation

We've implemented a robust solution for tracking purchase events that ensures each purchase is only tracked once, even if the thank you page is refreshed multiple times:

1. **Thank You Page** (`src/app/thank-you/page.tsx`):
   - Receives order details via URL parameters (course type, payment ID, order ID)
   - Uses localStorage to store tracked purchases
   - Checks both memory state and localStorage before firing the event
   - Displays order details and provides navigation options
   - Prevents InitiateCheckout events from being triggered on the thank you page

2. **Razorpay Integration**:
   - The API route (`src/app/api/razorpay/route.ts`) includes a redirect URL to the thank you page
   - The checkout page redirects to the thank you page after successful payment
   - All necessary parameters are passed via URL for proper tracking

3. **Deduplication Mechanism**:
   - Each purchase is tracked with a unique key based on the order ID
   - The key is stored in localStorage to persist across page refreshes
   - A React ref is used to prevent duplicate tracking within the same session
   - The fbPixel utility has its own debounce mechanism as an additional safeguard

4. **Event Prevention Mechanism**:
   - The `preventEvent` function filters out specific events from the Facebook Pixel queue
   - The thank you page uses this function to prevent InitiateCheckout events
   - The `trackProductPurchase` function automatically prevents InitiateCheckout events
   - This ensures that only the Purchase event is tracked on the thank you page

### Benefits of This Approach

1. **Reliability**: Multiple layers of protection against duplicate events
2. **Performance**: Debounce mechanism prevents excessive API calls
3. **Maintainability**: Centralized tracking logic in dedicated files
4. **Type Safety**: TypeScript interfaces ensure correct parameters
5. **Flexibility**: Easy to add or modify tracking events

### Usage Examples

#### Tracking a Product View
```typescript
const { trackProductView } = usePixelTracking();
trackProductView({
  contentName: 'Product Name',
  contentCategory: 'Category',
  contentIds: ['product-id'],
  value: 999
});
```

#### Tracking a Purchase
```typescript
const { trackProductPurchase } = usePixelTracking();
trackProductPurchase({
  value: 999,
  contentIds: ['product-id']
});
```

#### Tracking Checkout Initiation
```typescript
const { trackCheckout } = usePixelTracking();
trackCheckout({
  value: 999,
  contentIds: ['product-id'],
  contents: ['Product Name'],
  numItems: 1
});
```

### Troubleshooting

If you encounter issues with Meta Pixel tracking:

1. **Check Browser Console**: Look for any errors related to fbq
2. **Use Meta Pixel Helper**: Install the Chrome extension to debug tracking
3. **Verify Implementation**: Ensure the base Pixel code is correctly installed in layout.tsx
4. **Check for Duplicate Events**: Use the Meta Pixel Helper to verify events aren't firing multiple times
