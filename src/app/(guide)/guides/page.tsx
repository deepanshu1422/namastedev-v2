import React from "react";
import { Metadata } from "next";
import Main from "./main";
import Script from "next/script";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Guides | 30dayscoding",
  description:
    "Discover top-notch gudiesfor free. Elevate your online presence with our valuable, solutions designed to meet your unique guides.",
  openGraph: {
    images: "/thumbs/guides.jpg",
    title: "Claim these Valuable Guides for Free Now",
    description:
      "Discover top-notch gudiesfor free. Elevate your online presence with our valuable, solutions designed to meet your unique guides.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "/thumbs/guides.jpg",
    title: "Claim these Valuable Guides for Free Now",
    description:
      "Discover top-notch gudiesfor free. Elevate your online presence with our valuable, solutions designed to meet your unique guides.",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  return (
    <>
      <Script defer src="https://gumroad.com/js/gumroad.js" />
      <Main />
    </>
  );
}
