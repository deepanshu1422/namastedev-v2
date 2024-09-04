"use client";

import { useEffect } from "react";

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function PixelEvents() {
  const pixelId = "988834379011528"; // Replace with your Facebook Pixel ID

  let isPixelInitialized = false;

  useEffect(() => {
    if (!isPixelInitialized) {
      // Initialize Facebook Pixel only if it hasn't been initialized yet
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      fbq("init", pixelId); // Initialize the Pixel ID
      isPixelInitialized = true; // Set the flag to true
    }

    const eventId: string = crypto.randomUUID();
    //@ts-ignore
    // window.fbq("track", "PageView", {});

    if (!localStorage.getItem("ext-ID"))
      localStorage.setItem("ext-ID", crypto.randomUUID());

    // Track initial page view
    // @ts-ignore
    fbq(
      "track",
      "PageView",
      {
        fbp: document.cookie
          .split("; ")
          .find((row) => row.startsWith("_fbp="))
          ?.split("=")[1],
        external_id: localStorage.getItem("ext-ID"),
      },
      eventId
    );
  }, []);

  return null;
}

export const pageview = () => {};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const sendEvent = (name: string, options = {}) => {
  const eventId: string = crypto.randomUUID();

  if (!localStorage.getItem("ext-ID"))
    localStorage.setItem("ext-ID", crypto.randomUUID());
  //@ts-ignore
  window.fbq(
    "track",
    name,
    {
      ...options,
      fbp: document.cookie
        .split("; ")
        .find((row) => row.startsWith("_fbp="))
        ?.split("=")[1],
      external_id: localStorage.getItem("ext-ID"),
    },
    eventId
  );
};
