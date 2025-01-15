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
import Image from "next/image";
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

export const successStories = [
  { name: "Aditya", linkedIn: "https://www.linkedin.com/in/aditya-maheshwari-05/", jobOffer: "PayPal", salary: "35+ LPA" },
  { name: "Nikhil", linkedIn: "https://www.linkedin.com/in/nikhil-seth9", jobOffer: "Air Canada", salary: "35+ LPA" },
  { name: "Rojal", linkedIn: "https://www.linkedin.com/in/rojal-sapkota-787130237/", jobOffer: "Google", salary: "30+ LPA" },
  { name: "Rishabh", linkedIn: "https://www.linkedin.com/in/rishabh5301", jobOffer: "Cashify", salary: "15+ LPA" },
  { name: "Roktim", linkedIn: "https://x.com/roktim___", jobOffer: "Luppa AI", salary: "15+ LPA" },
];

export default function Lifetime({
  image,
  setYtOpen,
}: {
  image: string;
  setYtOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1115] m-auto">
      <div className="px-5 lg:px-20 pt-10 max-w-[75rem] m-auto flex flex-col relative overflow-hidden">
        <div className="relative mb-5">
          <div className="flex items-center justify-center gap-4 mb-8">
            <hr className="hidden sm:block h-1 w-20 lg:w-60 rounded bg-gradient-to-r from-transparent to-prime opacity-80" />
            <h1 className="font-jakarta text-5xl sm:text-7xl font-black text-center text-white leading-tight tracking-tight">
            15 Must-Have{" "}
              <span className="text-prime font-black">Tech Skills</span> in One Bundle
            </h1>
            <hr className="hidden sm:block h-1 w-20 lg:w-60 rounded bg-gradient-to-l from-transparent to-prime opacity-80" />
          </div>

          <h2 className="font-jakarta text-2xl font-bold text-center text-gray-300 max-w-4xl mx-auto mb-6 leading-snug">
            Master DSA to Advanced Web Development with{" "}
            <span className="font-extrabold text-prime">500+ in-depth videos</span> and{" "}
            <span className="font-extrabold text-prime">25+ real-world projects</span> to
            accelerate your tech career.
          </h2>

          {/* <p className="mt-6 text-xl text-center text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get LIFETIME access to{" "}
            <span className="font-extrabold text-prime">500+ videos</span> and{" "}
            <span className="font-extrabold text-prime">25+ projects</span> that
            make you job-ready
          </p> */}
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
        <div
          // onClick={() => setYtOpen(true)}
          className="flex flex-col relative w-full max-w-3xl mx-auto rounded-xl aspect-video"
        >
          <Image
            alt="30DayCoding New Challenge"
            src={image}
            fill
            className="bg-prime/20 object-cover w-full max-w-3xl"
          />
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-hover:-translate-y-2/3 transition-transform">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
              <Play className="w-8 h-8 stroke-[3] fill-white" />
            </div>
          </div> */}
        </div>

        {/* <img
          src=""
          alt="Data Analytics Course"
          className="w-full max-w-3xl mx-auto rounded-xl"
        /> */}

        <div className="mt-10 max-w-3xl mx-auto text-center">
          {/* <h3 className="text-3xl font-bold mb-8 text-white">The Data Analytics Gold Rush:</h3> */}
          <div className="grid gap-6 text-lg text-gray-300">
            <div className="p-6 bg-gradient-to-r from-prime/20 to-prime/10 rounded-xl">
              <div className="text-4xl font-bold text-green-400 mb-2">
                ₹12,00,000
              </div>
              <div className="text-gray-300">
                Average Software Developer Salary in 2025
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Source: Glassdoor
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  12 Lacs +
                </div>
                <div className="text-gray-300">
                  Open Software Development Positions
                </div>
                <div className="text-sm text-gray-400 mt-1">LinkedIn Jobs</div>
              </div>

              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-blue-300 mb-2">25%</div>
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
                    text: "⚠️ Software Development Skills Gap Continues to Grow in 2025",
                  },
                  {
                    source: "Bloomberg",
                    text: "⚠️ Tech Companies Competing for Top Programming Talent",
                  },
                  {
                    source: "TechCrunch",
                    text: "⚠️ Full-Stack Developers Among Highest-Paid Tech Roles",
                  },
                  {
                    source: "Wall Street Journal",
                    text: "⚠️ AI and Web3 Creating Surge in Developer Demand",
                  },
                  {
                    source: "Business Insider",
                    text: "⚠️ Remote Work Revolution Drives Global Developer Opportunities",
                  },
                ].map((headline, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300 hover:text-blue-300 transition-colors"
                  >
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
        <div className="mt-5 text-center">
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

            {/* <p className="text-lg text-gray-300">
              And dozens more Fortune 500 companies
            </p> */}
          </div>
        </div>


      <div className="">
        <h2 className="font-jakarta text-2xl font-semibold text-center text-white mb-4">
           <span className="decoration-red-500 underline decoration-4">Recent Success stories</span> (100+ more)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-2xl mx-auto text-foreground/90 border-2 border-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-prime/10">
                <th className="py-3 px-4 text-left border-b border-prime/30">Name</th>
                <th className="py-3 px-4 text-left border-b border-prime/30">Company</th>
                <th className="py-3 px-4 text-left border-b border-prime/30">Job Offer</th>
              </tr>
            </thead>
            <tbody>
              {successStories.map((story, index) => (
                <tr key={index} className="border-b border-prime hover:bg-prime/5 transition-colors duration-200">
                  <td className="py-3 px-4">
                    {/* <a href={story.linkedIn} target="_blank" rel="noopener noreferrer" className="underline hover:text-prime transition-colors duration-200">
                      {story.name}
                    </a> */}
                    {story.name}
                  </td>
                  <td className="py-3 px-4">{story.jobOffer}</td>
                  
                  <td className="py-3 px-4">{story.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
