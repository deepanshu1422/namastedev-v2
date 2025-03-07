import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Testimonial | 30DaysCoding",
  description:
    "A testimonial page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "https://i.ibb.co/qyW3Xbw/testimonials.webp",
    title: "Testimonial | 30DaysCoding",
    description:
      "A testimonial page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/qyW3Xbw/testimonials.webp",
    title: "Testimonial | 30DaysCoding",
    description:
      "A testimonial page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
    site: "https://30dayscoding.com",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 