import type { Metadata } from "next";
import Navbar from "@/components/home-components/navbar";
import Hero from "./hero";
import Inspirational from "./inspirational";
import Watch from "./watch";
import Public from "./public";
import Floating from "../resources/floating";

export const metadata: Metadata = {
  title: "Testimonial | 30DaysCoding",
  description:
    "A testimonial page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "https://i.ibb.co/CV3DDbV/30dc3.webp",
    title: "Testimonial | 30DaysCoding",
    description:
      "A testimonial page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/CV3DDbV/30dc3.webp",
    title: "Testimonial | 30DaysCoding",
    description:
      "A testimonial page for our development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
    site: "https://30dayscoding.com",
  },
};

export default function Testimonial() {
  return (
    <main
      className={`font-jakarta bg-bg min-h-svh text-white p-[3.75rem_0_6.5rem] overflow-hidden`}
    >
      <div className="mx-auto w-full max-w-[90rem] max-phone:p-[0_0_3.5rem] p-[0_min(6rem,_6.66%)] flex flex-col gap-20">
        <Hero />
        <Inspirational />
        <Watch />
        <Public />
      </div>
      <Floating />
    </main>
  );
}
