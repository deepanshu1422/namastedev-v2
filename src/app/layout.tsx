import "./globals.css";
import { bric, localJakarta } from "@/lib/font";
import Footer from "@/components/new-cohort/footer";
import Clarity from "@/util/clarity";
import Pixel from "@/util/pixel";
import GoogleAnalytics from "@/util/ga";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${localJakarta.variable} ${bric.variable} font-jakarta bg-bg`}
      >
        {children}
        <Footer />
      </body>
      <Pixel />
      <Clarity />
      <GoogleAnalytics gaId={"G-BCTWV4GBCY"} />
    </html>
  );
}
