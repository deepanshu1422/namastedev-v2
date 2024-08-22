import "./globals.css";
import { bric, localJakarta } from "@/lib/font";
import Footer from "@/components/new-cohort/footer";
import Clarity from "@/util/clarity";
import Pixel from "@/util/pixel";
import GoogleAnalytics from "@/util/ga";
import { Toaster } from "@/components/ui/sonner";
import NextProvider from "@/util/next-auth";
import PageSense from "@/util/pagesense";
import Intercom from "@/util/intercom";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextProvider>
        <body
          className={`${localJakarta.variable} ${bric.variable} font-jakarta bg-bg`}
        >
          {children}
          <Footer />
          <Toaster />
        </body>
      </NextProvider>
      <Intercom />
      <Pixel />
      <Clarity />
      <PageSense />
      <GoogleAnalytics gaId={"G-BCTWV4GBCY"} />
    </html>
  );
}
