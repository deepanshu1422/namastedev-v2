"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { sha256 } from "js-sha256";

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

function formatFbc(fbclid: string) {
  return `fb.1.${Date.now()}.${fbclid}`;
}

function getCookie(name: string) {
  if (name === "fbclick_id" && typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const fbclid = params.get("fbclid");
    if (fbclid) {
      const fbc = formatFbc(fbclid);
      setCookie("fbclick_id", fbc, 7);
      return fbc;
    }
  }

  return document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {})[name];
}

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

    if (!localStorage.getItem("hashed-ext-ID"))
      localStorage.setItem("hashed-ext-ID", sha256(crypto.randomUUID()));

    // Track initial page view

    (async () => {
      // console.log(document.cookie);

      if (!getCookie("fbclick_id") && typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const fbclid = params.get("fbclid");
        if (fbclid) {
          setCookie("fbclick_id", formatFbc(fbclid), 7);
        } else {
          setCookie(
            "fbclick_id",
            formatFbc(`organic_${Math.floor(Math.random() * 1000000000)}`),
            7
          );
        }
      }

      const ip = await (
        await fetch("https://api64.ipify.org/?format=json")
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
          external_id: [localStorage.getItem("hashed-ext-ID")],
          client_user_agent: navigator.userAgent,
          client_ip_address: ip.ip,
        },
        eventId
      );

      await sendSeverEvent({
        event_id: eventId,
        event_name: "PageView",
        event_source_url: "",
        custom_data: {},
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
          external_id: [localStorage.getItem("hashed-ext-ID")],
          client_user_agent: navigator.userAgent,
          client_ip_address: ip.ip,
        },
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

  if (!localStorage.getItem("hashed-ext-ID"))
    localStorage.setItem("hashed-ext-ID", sha256(crypto.randomUUID()));

  if (!getCookie("fbclick_id")) {
    const fbclid =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("fbclid")
        : null;

    if (fbclid) {
      setCookie("fbclick_id", formatFbc(fbclid), 7);
    } else {
      setCookie(
        "fbclick_id",
        formatFbc(`organic_${Math.floor(Math.random() * 1000000000)}`),
        7
      );
    }
  }

  const ip = await (await fetch("https://api64.ipify.org/?format=json")).json();

  //@ts-ignore
  window.fbq(
    "track",
    name,
    {
      ...options,
      action_source: "website",
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
      external_id: [localStorage.getItem("hashed-ext-ID")],
    },
    eventId
  );

  await sendSeverEvent({
    event_id: eventId,
    event_name: name,
    event_source_url: options?.event_source_url as string,
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
      external_id: [localStorage.getItem("hashed-ext-ID")],
    },
  });
};

export const sendSeverEvent = async ({
  event_id,
  event_name,
  event_source_url,
  user_data,
  custom_data,
}: {
  event_id: string;
  event_name: string;
  event_source_url: string;
  user_data: Record<string, string | number | string[] | undefined | null>;
  custom_data: Record<string, string | number | string[] | undefined | null>;
}) => {
  // console.log("Sent Data");

  const event_time = Math.floor(Date.now() / 1000);

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
            event_id,
            event_name,
            event_time,
            event_source_url,
            action_source: "website",
            user_data,
            custom_data,
            original_event_data: {
              event_name,
              event_time,
            },
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
