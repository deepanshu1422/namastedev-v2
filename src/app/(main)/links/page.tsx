import type { Metadata } from "next";
import Hero from "./hero";
import NewHero from "./new-hero";
import Program from "@/components/program";
import Testimonials from "@/components/mentorship-comp/testimonials";

export const metadata: Metadata = {
  title: "Links | 30DaysCoding",
  description:
    "Latest resources for all the new technologies updating every day. Resources from our 30 Days Coding Community",
  openGraph: {
    images: "https://i.ibb.co/5RJPyBY/image-68job-1.jpg",
    title: "Links | 30DaysCoding",
    description:
      "Latest resources for all the new technologies updating every day. Resources from our 30 Days Coding Community",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/5RJPyBY/image-68job-1.jpg",
    title: "Links | 30DaysCoding",
    description:
      "Latest resources for all the new technologies updating every day. Resources from our 30 Days Coding Community",
    site: "https://30dayscoding.com",
  },
};

export default function Testimonial() {
  return (
    <main className={`font-jakarta bg-bg min-h-svh text-white overflow-hidden`}>
      {/* <NewHero
        title="Master Tech Skills & Land Your Dream Job"
        desc="Job ready premium courses for less than a PIZZA! All courses are lifetime valid."
        heroImage="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      /> */}
      <NewHero />
      <div className="mx-auto w-full max-w-[90rem] max-phone:p-[0_0_3.5rem] flex flex-col gap-10 p-[1.75rem_0_6.5rem]">
        <Hero />
        <Testimonials />
        <Program />
      </div>
      {/* <Floating /> */}
    </main>
  );
}
