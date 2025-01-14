"use client";

import {
  Check,
  CheckCheck,
  ChevronDown,
  ChevronDownCircle,
  CreditCard,
  Play,
  Star,
} from "lucide-react";
import React, { Dispatch, SetStateAction, Suspense } from "react";
// import Btn from "./btn";
import Link from "next/link";
// import Btn from "./btn";

export const benefits = [
  "Weekly QnA calls with industry experts Aryan, Deepanshu, and Ashok",
  "Personalized career roadmap tailored to your goals and experience",
  "24/7 WhatsApp support for urgent questions and guidance",
  "Exclusive live masterclasses on cutting-edge tech topics",
  "Lifetime access until you land your dream job - guaranteed",
  "15+ comprehensive courses covering in-demand skills",
  "25 interview guides to ace your tech interviews",
  "Resume optimization to stand out to top employers",
];

export const mentorshipSteps = [
  "Personalized career roadmap tailored to your goals and experience",
  "Weekly QnA calls with industry experts to guide your progress",
  "Hands-on projects and interview preparation to secure your dream job",
];

export default function Lifetime() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1115] m-auto">
      <div className="px-5 lg:px-20 pt-10 max-w-[75rem] m-auto flex flex-col relative overflow-hidden">
        <div className="relative mb-5">
          <div className="flex items-center justify-center gap-4 mb-8">
            <hr className="hidden sm:block h-1 w-20 lg:w-60 rounded bg-gradient-to-r from-transparent to-prime opacity-80" />
            <h1 className="font-jakarta text-5xl sm:text-7xl font-black text-center text-white leading-tight tracking-tight">
              Master{" "}
              <span className="text-prime font-black">17 High-Paying</span>{" "}
              Tech Skills
            </h1>
            <hr className="hidden sm:block h-1 w-20 lg:w-60 rounded bg-gradient-to-l from-transparent to-prime opacity-80" />
          </div>

          <h2 className="font-jakarta text-2xl font-bold text-center text-gray-300 max-w-4xl mx-auto mb-6 leading-snug">
            From{" "}
            <span className="text-prime font-extrabold">DSA to AI</span> -
            Everything You Need for a High-Impact Tech Career
          </h2>

          <p className="mt-6 text-xl text-center text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get lifetime access to{" "}
            <span className="font-extrabold text-prime">500+ videos</span>{" "}
            and{" "}
            <span className="font-extrabold text-prime">50+ projects</span>{" "}
            that make you job-ready
          </p>
        </div>

        {/*  */}

        {/* <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://player.vimeo.com/video/1025611759?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="You have to work 10x harder as an immigrant"
        />
      </div> */}

        <img
          src="https://images.ctfassets.net/3pv3o0yr6pgj/5V2eMkSHmIJ7EVmYWam3Nb/065ebf20961eb8d57b68c8e8c5f76320/bundle.jpg"
          alt="Data Analytics Course"
          className="w-full max-w-3xl mx-auto rounded-xl"
        />

        <div className="mt-5 max-w-3xl mx-auto text-center">
          {/* <h3 className="text-3xl font-bold mb-8 text-white">The Data Analytics Gold Rush:</h3> */}
          <div className="grid gap-6 text-lg text-gray-300">
            <div className="p-6 bg-gradient-to-r from-prime/20 to-prime/10 rounded-xl">
              <div className="text-4xl font-bold text-green-400 mb-2">
                $107,000
              </div>
              <div className="text-gray-300">
                Average Data Analyst Salary in 2024
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Source: Glassdoor
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  650,000+
                </div>
                <div className="text-gray-300">
                  Open Data Analytics Positions
                </div>
                <div className="text-sm text-gray-400 mt-1">LinkedIn Jobs</div>
              </div>

              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-blue-300 mb-2">35%</div>
                <div className="text-gray-300">Industry Growth Rate</div>
                <div className="text-sm text-gray-400 mt-1">
                  Bureau of Labor Statistics
                </div>
              </div>
            </div>

            <a
              href="#feature"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#feature")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full max-w-2xl mx-auto block text-center py-3 sm:py-4 px-4 sm:px-6 rounded-full bg-gradient-to-r from-prime to-prime/80 text-white text-lg sm:text-xl font-bold hover:opacity-90 transition-opacity"
            >
              Secure Your Seat 👇👇
            </a>

            <div className="p-6 border-2 border-prime rounded-xl text-left">
              <div className="font-bold text-prime mb-4 text-xl">
                🚨 Breaking Industry News:
              </div>
              <ul className="space-y-4">
                {[
                  {
                    source: "Forbes",
                    text: "⚠️ Data Analytics Skills Gap Widens as Demand Soars",
                  },
                  {
                    source: "Bloomberg",
                    text: "⚠️ Companies Struggling to Fill Data Analytics Roles",
                  },
                  {
                    source: "TechCrunch",
                    text: "⚠️ Data Analysts Among Most In-Demand Tech Jobs",
                  },
                  {
                    source: "Wall Street Journal",
                    text: "⚠️ AI Boom Drives Unprecedented Demand for Data Analysts",
                  },
                  {
                    source: "Business Insider",
                    text: "⚠️ Companies Offering Premium Salaries for Data Analytics Expertise",
                  },
                ].map((headline, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    {/* <span className="text-blue-400 mt-1">▸</span> */}
                    <div>
                      <span className="font-medium text-white">
                        {headline.text}
                      </span>
                      <span className="text-sm text-prime block mt-1">
                        - {headline.source}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Success Story Section */}
        <div className="mt-5 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-lime-300 to-green-600 text-transparent bg-clip-text">
            We have Cracked The Code That 15,000+ Students From:
          </h2>
          <h3 className="text-2xl md:text-3xl mb-4">
            <span className="text-gray-300">
              &apos;Just Another Indian Student&apos;
            </span>{" "}
            <span className="text-lime-500">→</span>{" "}
            <span className="text-white underline decoration-lime-500 decoration-4">
              Multiple FAANG Offers in 10 Years
            </span>
          </h3>
          <p className="text-xl mb-8 bg-gradient-to-r from-lime-500 to-green-500 text-transparent bg-clip-text font-semibold">
            (Google, Meta, LinkedIn... Yes, All of Them)
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8 text-gray-200">
              Now I&apos;m revealing my entire playbook that&apos;s helped
              2,215+ students land offers at:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {["Google", "Meta", "Tesla", "Walmart"].map((company) => (
                <div
                  key={company}
                  className="bg-gray-100/10 p-4 rounded-lg border border-prime/30"
                >
                  <p className="text-xl font-bold text-white">{company}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-300">
              And dozens more Fortune 500 companies
            </p>
          </div>
        </div>


        <a
              href="#feature"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#feature")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full max-w-2xl mx-auto block text-center py-3 sm:py-4 px-4 sm:px-6 rounded-full bg-gradient-to-r from-prime to-prime/80 text-white text-lg sm:text-xl font-bold hover:opacity-90 transition-opacity"
            >
              Secure Your Seat 👇👇
            </a>
      </div>

      {/* Final closing tags */}
    </div>
  );
}
