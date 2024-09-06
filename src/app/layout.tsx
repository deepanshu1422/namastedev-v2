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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        {/* <GoogleTagManager containerId="GTM-W4LNH7RV" /> */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Script src="https://app.lemonsqueezy.com/js/lemon.js" />
        <Pixel />
        <AdSense />
      </head>
      <SessionProvider session={session}>
        <QueryProvider>
          <DataProvider>
            <body
              className={`${localJakarta.variable} ${bric.variable} font-jakarta bg-bg`}
            >
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

      <PageSense />
      {/* <GoogleAnalytics gaId={"G-BCTWV4GBCY"} /> */}
    </html>
  );
}

