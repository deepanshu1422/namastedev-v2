"use client";

import mixpanel from 'mixpanel-browser';

function sendGAEvent(params: any) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", params.event, params);
  } else {
    console.error("Google Analytics not initialized");
  }
}

function sendMixpanelEvent(eventName: string, params: any) {
  try {
    mixpanel.track(eventName, params);
  } catch (error) {
    console.error("Error sending Mixpanel event:", error);
  }
}

// Generate a unique session ID
const sessionId =
  Date.now().toString(36) + Math.random().toString(36).substr(2);

// Standardize event names for both GA and Mixpanel
const EVENT_NAMES = {
  VIEW_ITEM: {
    ga: "view_item",
    mixpanel: "Product Viewed"
  },
  ADD_TO_CART: {
    ga: "add_to_cart",
    mixpanel: "Product Added to Cart"
  },
  BEGIN_CHECKOUT: {
    ga: "begin_checkout",
    mixpanel: "Checkout Started"
  },
  PURCHASE: {
    ga: "purchase",
    mixpanel: "Purchase Completed"
  },
  CONVERSION: {
    ga: "conversion_event_purchase",
    mixpanel: "Purchase Conversion"
  }
};

function sendEnhancedEvent(eventName: string, eventParams: any) {
  const payload = {
    event: eventName,
    session_id: sessionId,
    ...eventParams,
  };

  console.log(`Sending ${eventName} event`, JSON.stringify(payload, null, 2));
  try {
    // Send GA event with original name
    sendGAEvent(payload);
    
    // Send Mixpanel event with more descriptive name
    const mixpanelEventName = Object.values(EVENT_NAMES).find(
      names => names.ga === eventName
    )?.mixpanel || eventName;
    
    sendMixpanelEvent(mixpanelEventName, {
      ...payload,
      distinct_id: payload.email || sessionId, // Better user identification
      time: new Date().toISOString()
    });
  } catch (error) {
    console.error(`Error sending ${eventName} event:`, error);
  }
}

export function viewItem({
  title,
  slug,
  itemId,
  itemType,
  value,
}: {
  title: string;
  slug: string;
  itemId: string;
  itemType: string;
  value: number;
}) {
  sendEnhancedEvent("view_item", {
    event_id: Date.now().toString(),
    currency: "INR",
    value: value,
    quantity: 1,
    item_id: itemId,
    items: [
      {
        item_id: itemId,
        item_name: title,
        price: value,
        item_category: itemType,
        item_variant: slug,
        quantity: 1,
      },
    ],
  });
}

export function addToCart({
  title,
  slug,
  itemId,
  itemType,
  value,
}: {
  title: string;
  slug: string;
  itemId: string;
  itemType: string;
  value: number;
}) {
  sendEnhancedEvent("add_to_cart", {
    event_id: Date.now().toString(),
    currency: "INR",
    value: value,
    quantity: 1,
    item_id: itemId,
    items: [
      {
        item_id: itemId,
        item_name: title,
        price: value,
        item_category: itemType,
        item_variant: slug,
        quantity: 1,
      },
    ],
  });
}

export function beginCheckout({
  title,
  itemId,
  amount,
  itemType,
  name,
  email,
  state,
  loggedIn,
}: {
  title: string;
  itemId: string;
  name: string;
  email: string;
  state: string;
  amount: number;
  itemType: string;
  loggedIn: boolean;
}) {
  sendEnhancedEvent("begin_checkout", {
    event_id: Date.now().toString(),
    currency: "INR",
    value: amount,
    item_id: itemId,
    email,
    quantity: 1,
    items: [
      {
        item_name: title,
        item_id: itemId,
        price: amount,
        item_category: itemType,
        quantity: 1,
      },
    ],
    user_properties: {
      user_id: email,
      name,
      email,
      state,
      logged_in: loggedIn,
    },
  });
}

export function purchase({
  title,
  itemId,
  amount,
  itemType,
  name,
  email,
  state,
  loggedIn,
}: {
  title: string;
  itemId: string;
  name: string;
  email: string;
  state: string;
  amount: number;
  itemType: string;
  loggedIn: boolean;
}) {

  console.log({
    transaction_id: Date.now().toString(),
    currency: "INR",
    value: amount,
    item_id: itemId,
    email,
    quantity: 1,
    items: [
      {
        item_name: title,
        item_id: itemId,
        price: amount,
        item_category: itemType,
        quantity: 1,
      },
    ],
    user_properties: {
      user_id: email,
      name,
      email,
      state,
      logged_in: loggedIn,
    },
  });
  
  sendEnhancedEvent("purchase", {
    transaction_id: Date.now().toString(),
    currency: "INR",
    value: amount,
    item_id: itemId,
    email,
    quantity: 1,
    items: [
      {
        item_name: title,
        item_id: itemId,
        price: amount,
        item_category: itemType,
        quantity: 1,
      },
    ],
    user_properties: {
      user_id: email,
      name,
      email,
      state,
      logged_in: loggedIn,
    },
  });

  sendEnhancedEvent("conversion_event_purchase", {
    transaction_id: Date.now().toString(),
    value: amount,
    currency: "INR",
    item_id: itemId,
    email,
    quantity: 1,
    items: [
      {
        item_name: title,
        item_id: itemId,
        price: amount,
        item_category: itemType,
        quantity: 1,
      },
    ],
    user_properties: {
      user_id: email,
      name,
      email,
      state,
      logged_in: loggedIn,
    },
  });
}

