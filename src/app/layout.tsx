import "./globals.css";
import { bric, localJakarta } from "@/lib/font";
import Footer from "@/components/new-cohort/footer";
import Clarity from "@/util/clarity";
import Pixel from "@/util/pixel";
import GoogleAnalytics from "@/util/ga";
import { Toaster } from "@/components/ui/sonner";
import PageSense from "@/util/pagesense";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { auth } from "@/auth";
import QueryProvider from "@/lib/queryProvider";
import GoogleTagManager from "@/components/tracking/GoogletagManager";
import { DataProvider } from "../context/resume-context";

import Freshdesk from "@/util/freshdesk";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        <GoogleTagManager containerId="GTM-W4LNH7RV" />
      </head>
      <SessionProvider session={session}>
        <QueryProvider>
          <DataProvider>
            <body
              className={`${localJakarta.variable} ${bric.variable} font-jakarta bg-bg`}
            >
              {children}
              <Footer />
              <Toaster richColors />
            </body>
          </DataProvider>
        </QueryProvider>
      </SessionProvider>
      {/* <Pixel /> */}
      <Clarity />

      <PageSense />
      {/* <GoogleAnalytics gaId={"G-BCTWV4GBCY"} /> */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </html>
  );
}


