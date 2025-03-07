'use client';

import React from "react";
import BundleNavbar from "@/components/BundleNavbar";
import Hero from "./hero";
import Inspirational from "./inspirational";
import Watch from "./watch";
import Public from "./public";
import NewHero from "./new-hero";
import VideoSlider from "./video-slider";
import { CreditCard } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/new-cohort/footer";

export default function Testimonial() {
  const webinarSessions = [
    { id: 1, url: "https://www.youtube.com/embed/NSnECH6ksw4" },
    { id: 2, url: "https://www.youtube.com/embed/layy6z7EGCI" },
    { id: 3, url: "https://www.youtube.com/embed/sNru0b6CFP0" },
    { id: 4, url: "https://www.youtube.com/embed/F4oEOWQVZcI" },
    { id: 5, url: "https://www.youtube.com/embed/F2i5NJndzac" },
    { id: 6, url: "https://www.youtube.com/embed/RvtA4FuD6lM" },
  ];

  const podcastTestimonials = [
    { id: 1, url: "https://www.youtube.com/embed/bFyOzaOnLQ8" },
    { id: 2, url: "https://www.youtube.com/embed/Hjv6Sk7FDU4" },
    { id: 3, url: "https://www.youtube.com/embed/ql53CiRpsFY" },
    { id: 4, url: "https://www.youtube.com/embed/hyOP6fbqTws" },
    { id: 5, url: "https://www.youtube.com/embed/uvQ6W5x-Ryg" },
    { id: 6, url: "https://www.youtube.com/embed/5d2qLIcrlKw" },
    // Add more video URLs as needed
  ];

  return (
    <main className={`font-jakarta bg-bg min-h-svh text-white overflow-hidden`}>
      <BundleNavbar />
      <NewHero
        title="20,000+ Successful Students from 10+ countries"
        desc="Our aim is to provide quality education to everyone, everywhere at affordable prices. Join us and become a part of our community."
        heroImage="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcastTestimonials.map((video) => (
            <div key={video.id} className="relative aspect-video">
              <iframe
                src={video.url}
                title={`Video testimonial ${video.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-[90rem] max-phone:p-[0_0_3.5rem] flex flex-col gap-10 p-[1.75rem_0_6.5rem]">
        <VideoSlider />
        <div className="mx-auto">
          <Link
            href="/courses"
            target="_blank"
            className="bg-prime rounded-full px-4 text-center py-3 mx-auto w-full text-2xl sm:text-4xl font-extrabold flex gap-3 items-center justify-center hover:opacity-80 transition-all duration-200 uppercase"
          >
            <CreditCard className="h-10 w-10" />
            Access the courses
          </Link>
        </div>
        <Hero />
        {/* <Inspirational /> */}
        <Watch />
        <div className="mx-auto">
          <Link
            href="/courses"
            target="_blank"
            className="bg-prime rounded-full px-4 text-center py-3 max-w-3xl w-full text-2xl sm:text-4xl font-extrabold flex gap-3 items-center justify-center hover:opacity-80 transition-all duration-200 uppercase"
          >
            <CreditCard className="h-10 w-10" />
            Access the courses
          </Link>
        </div>
        <Public />
      </div>
      {/* <Floating /> */}
    </main>
  );
}
