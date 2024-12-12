"use client";

import mixpanel from 'mixpanel-browser';

// Add gtag type definition
declare global {
  interface Window {
    gtag: (
        command: 'event',
        action: string,
        params: any
    ) => void;
  }
}

// Rest of the code remains the same...
const EVENTS = {
  VIEW_ITEM: {
    ga: "view_item",
    mixpanel: "Product Viewed",
    properties: (data: any) => ({
      // Common properties
      $currency: "INR",
      $value: data.value,
      // Product specific
      Product_ID: data.itemId,
      Product_Name: data.title,
      Product_Category: data.itemType,
      Product_Variant: data.slug,
      Product_Price: data.value,
    })
  },
  ADD_TO_CART: {
    ga: "add_to_cart",
    mixpanel: "Product Added",
    properties: (data: any) => ({
      $currency: "INR",
      $value: data.value,
      Product_ID: data.itemId,
      Product_Name: data.title,
      Product_Category: data.itemType,
      Product_Variant: data.slug,
      Product_Price: data.value,
    })
  },
  BEGIN_CHECKOUT: {
    ga: "begin_checkout",
    mixpanel: "Checkout Started",
    properties: (data: any) => ({
      $currency: "INR",
      $value: data.amount,
      Product_ID: data.itemId,
      Product_Name: data.title,
      Product_Category: data.itemType,
      Product_Price: data.amount,
      User_Email: data.email,
      User_Name: data.name,
      User_State: data.state,
      User_Logged_In: data.loggedIn,
    })
  },
  PURCHASE: {
    ga: "purchase",
    mixpanel: "Purchase Completed",
    properties: (data: any) => ({
      $currency: "INR",
      $value: data.amount,
      Product_ID: data.itemId,
      Product_Name: data.title,
      Product_Category: data.itemType,
      Product_Price: data.amount,
      User_Email: data.email,
      User_Name: data.name,
      User_State: data.state,
      User_Logged_In: data.loggedIn,
      Transaction_ID: Date.now().toString(),
    })
  }
};

function sendGAEvent(params: any) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", params.event, params);
  } else {
    console.error("Google Analytics not initialized");
  }
}

function sendMixpanelEvent(eventName: string, properties: any) {
  try {
    // Set user identity if email is available
    if (properties.User_Email) {
      mixpanel.identify(properties.User_Email);

      // Set user properties
      mixpanel.people.set({
        $email: properties.User_Email,
        $name: properties.User_Name,
        state: properties.User_State,
        logged_in: properties.User_Logged_In
      });
    }

    // Track the event
    mixpanel.track(eventName, {
      ...properties,
      time: new Date().toISOString(),
      distinct_id: properties.User_Email || sessionId
    });
  } catch (error) {
    console.error("Error sending Mixpanel event:", error);
  }
}

// Generate a unique session ID
const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);

function sendEnhancedEvent(eventName: string, eventParams: any) {
  const eventConfig = Object.values(EVENTS).find(
      config => config.ga === eventName
  );

  if (!eventConfig) {
    console.error(`Unknown event: ${eventName}`);
    return;
  }

  // Prepare Mixpanel properties
  const mixpanelProperties = eventConfig.properties(eventParams);

  // Prepare GA payload based on event type
  let gaPayload: any = {
    event: eventName,
    event_id: Date.now().toString(),
    currency: "INR",
    session_id: sessionId,
  };

  // Add event-specific GA properties
  switch (eventName) {
    case "view_item":
    case "add_to_cart":
      gaPayload = {
        ...gaPayload,
        value: eventParams.value,
        quantity: 1,
        item_id: eventParams.itemId,
        items: [{
          item_id: eventParams.itemId,
          item_name: eventParams.title,
          price: eventParams.value,
          item_category: eventParams.itemType,
          item_variant: eventParams.slug,
          quantity: 1,
        }],
      };
      break;

    case "begin_checkout":
    case "purchase":
      gaPayload = {
        ...gaPayload,
        value: eventParams.amount,
        item_id: eventParams.itemId,
        email: eventParams.email,
        quantity: 1,
        items: [{
          item_name: eventParams.title,
          item_id: eventParams.itemId,
          price: eventParams.amount,
          item_category: eventParams.itemType,
          quantity: 1,
        }],
        user_properties: {
          user_id: eventParams.email,
          name: eventParams.name,
          email: eventParams.email,
          state: eventParams.state,
          logged_in: eventParams.loggedIn,
        },
      };

      // Add transaction ID for purchase events
      if (eventName === "purchase") {
        gaPayload.transaction_id = Date.now().toString();
      }
      break;
  }

  console.log(`Sending ${eventName} event`, JSON.stringify(gaPayload, null, 2));

  try {
    sendGAEvent(gaPayload);
    sendMixpanelEvent(eventConfig.mixpanel, mixpanelProperties);

    // Send additional conversion event for purchases
    if (eventName === "purchase") {
      const conversionPayload = {
        ...gaPayload,
        event: "conversion_event_purchase"
      };
      sendGAEvent(conversionPayload);
    }
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
  sendEnhancedEvent(EVENTS.VIEW_ITEM.ga, {
    title,
    slug,
    itemId,
    itemType,
    value,
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
  sendEnhancedEvent(EVENTS.ADD_TO_CART.ga, {
    title,
    slug,
    itemId,
    itemType,
    value,
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
  sendEnhancedEvent(EVENTS.BEGIN_CHECKOUT.ga, {
    title,
    itemId,
    amount,
    itemType,
    name,
    email,
    state,
    loggedIn,
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
  loggedIn?: boolean;
}) {
  sendEnhancedEvent(EVENTS.PURCHASE.ga, {
    title,
    itemId,
    amount,
    itemType,
    name,
    email,
    state,
    loggedIn,
  });
}