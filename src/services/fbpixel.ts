"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function PixelEvents() {
  const pixelId = "988834379011528"; // Replace with your Facebook Pixel ID

  let isPixelInitialized = false;

  const pathName = usePathname();

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

    (async () => {
      // console.log(document.cookie);

      const ip = await (
        await fetch("https://api.ipify.org/?format=json")
      ).json();
      // @ts-ignore
      fbq(
        "track",
        "PageView",
        {
          fbp: document.cookie
            .split("; ")
            .find((row) => row.startsWith("_fbp="))
            ?.split("=")[1],
          fbc: document.cookie
            .split("; ")
            .find((row) => row.startsWith("_fbc="))
            ?.split("=")[1],
          fb_login_id: document.cookie
            .split("; ")
            .find((row) => row.startsWith("_fb_login_id="))
            ?.split("=")[1],
          external_id: localStorage.getItem("ext-ID"),
          client_user_agent: navigator.userAgent,
          client_ip_address: ip.ip,
        },
        eventId
      );

      await sendSeverEvent({
        event_name: "PageView",
        event_id: eventId,
        user_data: {
          fbp: document.cookie
            .split("; ")
            .find((row) => row.startsWith("_fbp="))
            ?.split("=")[1],
          fbc: document.cookie
            .split("; ")
            .find((row) => row.startsWith("_fbc="))
            ?.split("=")[1],
          fb_login_id: document.cookie
            .split("; ")
            .find((row) => row.startsWith("_fb_login_id="))
            ?.split("=")[1],
          external_id: localStorage.getItem("ext-ID"),
          client_user_agent: navigator.userAgent,
          client_ip_address: ip.ip,
        },
        custom_data: {},
      });
    })();
  }, [pathName]);

  return null;
}

export const pageview = () => {};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const sendEvent = async (
  name: string,
  options: Record<string, string | string[] | number>
) => {
  const eventId: string = crypto.randomUUID();

  if (!localStorage.getItem("ext-ID"))
    localStorage.setItem("ext-ID", crypto.randomUUID());

  const ip = await (await fetch("https://api.ipify.org/?format=json")).json();

  //@ts-ignore
  window.fbq(
    "track",
    name,
    {
      ...options,
      client_user_agent: navigator.userAgent,
      client_ip_address: ip.ip,
      fbp: document.cookie
        .split("; ")
        .find((row) => row.startsWith("_fbp="))
        ?.split("=")[1],
      fbc: document.cookie
        .split("; ")
        .find((row) => row.startsWith("_fbc="))
        ?.split("=")[1],
      fb_login_id: document.cookie
        .split("; ")
        .find((row) => row.startsWith("_fb_login_id="))
        ?.split("=")[1],
      external_id: localStorage.getItem("ext-ID"),
    },
    eventId
  );

  await sendSeverEvent({
    event_id: eventId,
    event_name: name,
    custom_data: {
      ...options,
    },
    user_data: {
      em: [(options?.em as string) ?? null],
      ph: [(options?.ph as string) ?? null],
      fn: [(options?.fn as string) ?? null],

      client_user_agent: navigator.userAgent,
      client_ip_address: ip.ip,
      fbp: document.cookie
        .split("; ")
        .find((row) => row.startsWith("_fbp="))
        ?.split("=")[1],
      fbc: document.cookie
        .split("; ")
        .find((row) => row.startsWith("_fbc="))
        ?.split("=")[1],
      fb_login_id: document.cookie
        .split("; ")
        .find((row) => row.startsWith("_fb_login_id="))
        ?.split("=")[1],
      external_id: localStorage.getItem("ext-ID"),
    },
  });
};

export const sendSeverEvent = async ({
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
  // console.log("Sent Data");

  await fetch(`https://jellyfish-app-mqgem.ondigitalocean.app/convertion-api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer EAAMi1bkn4eQBOZCHsnmtxUGfi0sZCqRxIuuYf`,
    },
    body: JSON.stringify({
      data: {
        data: [
          {
            event_name,
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_id,
            user_data,
            custom_data,
          },
        ],
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      console.log("Data Sent");
    })
    .catch((error) => console.error("Error:", JSON.stringify(error)));
};
