import "./globals.css";
import { outfit, bric, localJakarta } from "@/lib/font";
import Clarity from "@/util/clarity";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { auth } from "@/auth";
import QueryProvider from "@/lib/queryProvider";
import { DataProvider } from "../context/resume-context";
import PageSense from "@/util/pagesense";

import AdSense from "@/util/ads";
import GoogleAnalytics from "@/util/ga";
import GoogleAds from "@/util/googleAds";
import FullStory from "@/util/fullStory";
import MixpanelAnalytics from "@/util/mixpanel";
import { PostHogProvider } from "@/util/posthog";
import { StreakTracker } from '../components/StreakTracker';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
       
        {/* End Google Tag Manager */}
        <GoogleAnalytics gaId="G-4M8L4RM0LB" />
        <MixpanelAnalytics
          projectToken={process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!}
        />
        <Script
          id="razorpay"
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        />
        {/* <Script id="lemonSqueezy" src="https://app.lemonsqueezy.com/js/lemon.js" defer /> */}
        <AdSense />
        <GoogleAds />
      </head>
      <SessionProvider session={session}>
        <QueryProvider>
          <DataProvider>
            <PostHogProvider>
              <body
                className={`${outfit.className} ${bric.variable} bg-bg`}
              >
                {/* Google Tag Manager (noscript) */}
                
                {/* End Google Tag Manager (noscript) */}
                <StreakTracker />
                {children}
                <Toaster richColors />
              </body>
            </PostHogProvider>
          </DataProvider>
        </QueryProvider>
      </SessionProvider>
      {/* <Intercom /> */}
      <Clarity />
      <FullStory />

      <PageSense />
    </html>
  );
}
