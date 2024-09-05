"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function PixelEvents() {
  const pixelId = "988834379011528"; // Replace with your Facebook Pixel ID

  let isPixelInitialized = false;

  const pathName = usePathname()

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

    sendSeverEvent({
      event_name: "PageView",
      event_id: eventId,
      user_data: {
        fbp: document.cookie
          .split("; ")
          .find((row) => row.startsWith("_fbp="))
          ?.split("=")[1],
        external_id: localStorage.getItem("ext-ID"),
      },
      custom_data: {},
    });
  }, [pathName]);

  return null;
}

export const pageview = () => {};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const sendEvent = (
  name: string,
  options: Record<string, string | string[] | number>
) => {
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

  sendSeverEvent({
    event_id: eventId,
    event_name: name,
    custom_data: {
      ...options,
    },
    user_data: {
      em: [(options?.em as string) ?? null],
      ph: [(options?.ph as string) ?? null],
      fn: [(options?.fn as string) ?? null],
      fbp: document.cookie
        .split("; ")
        .find((row) => row.startsWith("_fbp="))
        ?.split("=")[1],
      external_id: localStorage.getItem("ext-ID"),
    },
  });
};

export const sendSeverEvent = ({
  event_name,
  event_id,
  user_data,
  custom_data,
}: {
  event_name: string;
  event_id: string;
  user_data: Record<string, string | number | string[] | undefined | null>;
  custom_data: Record<string, string | number | string[] | undefined | null>;
}) => {
  // console.log("AHH")
  fetch(`https://faas-blr1-8177d592.doserverless.co/api/v1/namespaces/fn-0af9762f-3295-4678-bace-a7a30a29ff2f/actions/fb-convertion-endpoint?blocking=true&result=true`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.COVERSION_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: [
          {
            event_name,
            event_time: Date.now(),
            action_source: "website",
            event_id,
            user_data,
            custom_data,
          },
        ],
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
