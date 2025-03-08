"use client";

import mixpanel from 'mixpanel-browser';

// Remove gtag type definition
// Rest of the code remains the same...
const EVENTS = {
  VIEW_ITEM_PAGE: {
    ga: "view_item_page",
    mixpanel: "Product Page Viewed",
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

// Remove sendGAEvent function
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

  // Send to Mixpanel
  sendMixpanelEvent(eventConfig.mixpanel, mixpanelProperties);
}

export function viewItemPage({
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
  sendEnhancedEvent(EVENTS.VIEW_ITEM_PAGE.ga, {
    title,
    slug,
    itemId,
    itemType,
    value,
  });
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