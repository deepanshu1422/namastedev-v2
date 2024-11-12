import React from "react";
import { Metadata } from "next";
import Main from "./main";
import Script from "next/script";
import Journey from "./main";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Software Engineering Journey | 30dayscoding",
  description:
    "Start your software engineering journey with our comprehensive guide. Learn the essential skills, best practices, and career paths to become a successful software engineer.",
  openGraph: {
    images: "/thumbs/journey.png",
    title: "Begin Your Software Engineering Journey",
    description:
      "Start your software engineering journey with our comprehensive guide. Learn the essential skills, best practices, and career paths to become a successful software engineer.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: [
    "software engineering",
    "programming career",
    "coding journey",
    "software development",
    "learn to code",
    "30 days coding"
  ],
  twitter: {
    card: "summary_large_image",
    images: "/thumbs/guides.jpg",
    title: "Begin Your Software Engineering Journey",
    description:
      "Start your software engineering journey with our comprehensive guide. Learn the essential skills, best practices, and career paths to become a successful software engineer.",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  return (
    <>
      {/* <Script defer src="https://gumroad.com/js/gumroad.js" /> */}
      <Journey />
    </>
  );
}
