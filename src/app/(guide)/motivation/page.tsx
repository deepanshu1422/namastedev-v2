import React from "react";
import { Metadata } from "next";
import Main from "./main";
import Script from "next/script";
import Motivation from "./main";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Motivation for Software Engineers | 30dayscoding",
  description:
    "Get inspired and stay motivated on your coding journey. Learn practical strategies to overcome challenges, manage time effectively, and maintain focus while learning to code.",
  openGraph: {
    images: "/thumbs/distraction.jpg",
    title: "Motivation for Software Engineers",
    description:
      "Get inspired and stay motivated on your coding journey. Learn practical strategies to overcome challenges, manage time effectively, and maintain focus while learning to code.",
    url: "https://30dayscoding.com/motivation",
    type: "website",
  },
  keywords: [
    "coding motivation",
    "software engineer motivation",
    "overcome coding challenges",
    "stay focused coding",
    "time management programming",
    "developer mindset",
    "coding success habits"
  ],
  twitter: {
    card: "summary_large_image",
    images: "/thumbs/motivation.jpg",
    title: "Motivation for Software Engineers",
    description:
      "Get inspired and stay motivated on your coding journey. Learn practical strategies to overcome challenges, manage time effectively, and maintain focus while learning to code.",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  return (
    <>
      {/* <Script defer src="https://gumroad.com/js/gumroad.js" /> */}
      <Motivation />
    </>
  );
}
