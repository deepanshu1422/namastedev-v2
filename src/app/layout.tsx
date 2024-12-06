import "./globals.css";
import { bric, localJakarta } from "@/lib/font";
import Footer from "@/components/new-cohort/footer";
import Clarity from "@/util/clarity";
import Pixel from "@/util/pixel";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { auth } from "@/auth";
import QueryProvider from "@/lib/queryProvider";
import { DataProvider } from "../context/resume-context";
import PageSense from "@/util/pagesense";

import AdSense from "@/util/ads";
import PixelEvents from "@/services/fbpixel";
import GoogleAnalytics from '@/util/ga';
import GoogleAds from "@/util/googleAds";
import FullStory from "@/util/fullStory";
import GoogleTagManagerWebContainerHead from "@/components/tracking/GoogletagManagerWebContainerHead";
import GoogleTagManagerWebContainerBody from "@/components/tracking/GoogleTagManagerWebContainerBody";
import MixpanelAnalytics from '@/util/mixpanel';

import Analytics from "@vercel/analytics"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-4M8L4RM0LB" />
        <MixpanelAnalytics projectToken={process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!} />
         <GoogleTagManagerWebContainerHead/>
        <Script
          id="razorpay"
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        />
        {/* <Script id="lemonSqueezy" src="https://app.lemonsqueezy.com/js/lemon.js" defer /> */}
        <Pixel />
        <AdSense />
        <GoogleAds />
      </head>
      <SessionProvider session={session}>
        <QueryProvider>
          <DataProvider>
            <body
              className={`${localJakarta.variable} ${bric.variable} font-jakarta bg-bg`}
            >
            <GoogleTagManagerWebContainerBody/>
              <PixelEvents />
              {children}
              <Footer />
              <Toaster richColors />
            </body>
          </DataProvider>
        </QueryProvider>
      </SessionProvider>
      {/* <Pixel /> */}
      {/* <Intercom /> */}
      <Clarity />
      <FullStory />

      <PageSense />
      <Analytics />
    </html>
  );
}



