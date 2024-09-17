import type { Metadata } from "next";
import Navbar from "@/components/home-components/navbar";
import Hero from "./hero";
import Inspirational from "./inspirational";
import Watch from "./watch";
import Public from "./public";
// import Floating from "../resources/floating";
import NewHero from "./new-hero";
import VideoSlider from "./video-slider";
import { CreditCard } from "lucide-react";

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
        title="Join 20,000+ Successful Students"
        desc="Our aim is to provide quality education to everyone, everywhere at affordable prices. Join us and become a part of our community."
        heroImage="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="mx-auto w-full max-w-[90rem] max-phone:p-[0_0_3.5rem] flex flex-col gap-10 p-[1.75rem_0_6.5rem]">
        <VideoSlider />
        
      <a href="/courses"
        className="bg-prime rounded-full px-4 text-center py-3 max-w-3xl mx-auto w-full text-3xl sm:text-4xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase"
      >
        <CreditCard className="h-10 w-10" />
        Access the courses
      </a>
        <Hero />
        {/* <Inspirational /> */}
        <Watch />
        <Public />
      </div>
      {/* <Floating /> */}
    </main>
  );
}
