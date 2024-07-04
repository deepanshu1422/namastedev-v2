import "./globals.css";
import { bric, localJakarta } from "@/lib/font";
import Footer from "@/components/new-cohort/footer";
import Clarity from "@/util/clarity";
import Pixel from "@/util/pixel";
import GoogleAnalytics from "@/util/ga";
import { Toaster } from "@/components/ui/sonner"
import NextProvider from "@/util/next-auth";
import PageSense from "@/util/pagesense";
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <NextProvider> */}
        <ClerkProvider>
          <body
            className={`${localJakarta.variable} ${bric.variable} font-jakarta bg-bg`}
          >
            {children}
            <Footer />
            <Toaster />
          </body>
        </ClerkProvider>
      {/* </NextProvider> */}
      <Pixel />
      <Clarity />
      <PageSense />
      <GoogleAnalytics gaId={"G-BCTWV4GBCY"} />
    </html>
  );
}
