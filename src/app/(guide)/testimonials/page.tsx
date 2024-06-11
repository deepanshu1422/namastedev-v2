import type { Metadata } from "next";
import Navbar from "@/components/home-components/navbar";
import Hero from "./hero";
import Inspirational from "./inspirational";
import Watch from "./watch";
import Public from "./public";
// import Floating from "../resources/floating";
import NewHero from "./new-hero";

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

export default function Testimonial() {
  return (
    <main className={`font-jakarta bg-bg min-h-svh text-white overflow-hidden`}>
      <NewHero
        title="Find our best reviews and experiences."
        desc="Stay tuned for more such informational videos and latest content with lots of learning and experiences."
        heroImage="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="mx-auto w-full max-w-[90rem] max-phone:p-[0_0_3.5rem] flex flex-col gap-20 p-[1.75rem_0_6.5rem]">
        <Hero />
        <Inspirational />
        <Watch />
        <Public />
      </div>
      {/* <Floating /> */}
    </main>
  );
}
