"use client";

import { sendGAEvent } from "@next/third-parties/google";

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
  console.log("View Item");
  sendGAEvent("event", "view_item", {
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
  console.log("Add To Cart");
  sendGAEvent("event", "add_to_cart", {
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
  console.log("Begin Checkout");
  sendGAEvent("event", "begin_checkout", {
    title,
    amount,
    itemId,
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
  loggedIn: boolean;
}) {
  console.log("Payment Completed");
  sendGAEvent("event", "purchase", {
    title,
    amount,
    itemId,
    itemType,
    name,
    email,
    state,
    loggedIn,
  });
}
