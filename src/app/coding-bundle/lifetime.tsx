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
      {/* Floating Offer Badge */}
      

      {/* Floating Price Badge */}
      {/* <div className="fixed top-20 right-4 z-50">
        <div className="bg-green-500 text-white p-3 rounded-lg shadow-lg">
          <div className="text-sm font-semibold">Original Price</div>
          <div className="text-lg line-through">₹49,999</div>
          <div className="text-2xl font-bold">₹9,999</div>
          <div className="text-xs mt-1">80% OFF</div>
        </div>
      </div> */}

      <div className="px-5 lg:px-20 pt-10 max-w-[75rem] m-auto flex flex-col relative overflow-hidden">
        {/* Timer Banner */}
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-white py-2 px-4 rounded-full text-center mb-8 animate-pulse max-w-md mx-auto">
          <span className="font-bold">⏰ Offer ends in: </span>
          <span className="font-mono">23:59:59</span>
        </div>

        {/* Enhanced Title Section */}
        <div className="relative mb-5">
          {/* <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-prime text-white px-4 py-1 rounded-full text-sm font-bold">
              🌟 MOST POPULAR BUNDLE
            </div>
          </div> */}
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <hr className="hidden sm:block h-1 w-20 lg:w-60 rounded bg-gradient-to-r from-transparent to-prime opacity-80" />
            <h1 className="font-jakarta text-5xl sm:text-7xl font-black text-center text-white leading-tight tracking-tight">
            25+ Projects + 15 Must-Have{" "}
              <span className="text-prime font-black">Coding Skills</span> in One Bundle
            </h1>
            <hr className="hidden sm:block h-1 w-20 lg:w-60 rounded bg-gradient-to-l from-transparent to-prime opacity-80" />
          </div>

          

          


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

        {/* Course Summary Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-prime/20 hover:border-prime/40 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <h3 className="text-xl font-bold text-white">Full Stack Development</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• MERN Stack (MongoDB, Express, React, Node.js)</li>
              <li>• Next.js Stack (Next.js, Tailwind, Shadcn)</li>
              <li>• Cloud Deployment (AWS/Firebase)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-prime/20 hover:border-prime/40 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <CheckCheck className="w-5 h-5 text-green-500" />
              <h3 className="text-xl font-bold text-white">DSA & Problem Solving</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Arrays, Linked Lists, Trees & Graphs</li>
              <li>• Dynamic Programming & Recursion</li>
              <li>• LeetCode Pattern Solutions</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-prime/20 hover:border-prime/40 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold text-white">AI Development</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Advanced AI Prompt Engineering</li>
              <li>• Building AI-powered Code Assistants</li>
              <li>• Integration with OpenAI & HuggingFace APIs</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-prime/20 hover:border-prime/40 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-5 h-5 text-purple-500" />
              <h3 className="text-xl font-bold text-white">Blockchain Development</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Smart Contract Development</li>
              <li>• Web3.js & Ethereum</li>
              <li>• DeFi & NFT Projects</li>
              <li>• Solidity Programming</li>
            </ul>
          </div>
        </div>
        </div>


      <div className="mt-5 mb-8">
        <div className="text-center mb-8">
          <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">Success Stories</span> That Inspire
          </h2>
          <p className="text-gray-300 text-lg">Join 100+ students who transformed their careers with us 🚀</p>
        </div>
        
        <div className="overflow-x-auto px-4 md:px-0">
          <table className="w-full max-w-3xl mx-auto text-foreground/90 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-prime/30 rounded-2xl overflow-hidden shadow-2xl">
            <thead>
              <tr className="bg-gradient-to-r from-prime/20 to-prime/10">
                <th className="py-4 px-3 md:px-6 text-left text-sm md:text-lg font-bold text-prime">Achiever</th>
                <th className="py-4 px-3 md:px-6 text-left text-sm md:text-lg font-bold text-prime whitespace-nowrap">Dream Company</th>
                <th className="py-4 px-3 md:px-6 text-left text-sm md:text-lg font-bold text-prime">Package 💰</th>
              </tr>
            </thead>
            <tbody>
              {successStories.map((story, index) => (
                <tr key={index} 
                    className="border-b border-prime/10 hover:bg-prime/10 transition-all duration-300 cursor-pointer"
                >
                  <td className="py-3 md:py-4 px-3 md:px-6">
                    <a href={story.linkedIn} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-center gap-1 md:gap-2 hover:text-prime transition-colors duration-200"
                    >
                      <span className="font-semibold text-sm md:text-base">{story.name}</span>
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-6">
                    <span className="font-semibold text-prime text-sm md:text-base">{story.jobOffer}</span>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-6">
                    <span className="inline-flex items-center gap-1 font-bold text-green-400 text-sm md:text-base whitespace-nowrap">
                      {story.salary}
                      <span className="text-[10px] md:text-xs text-green-300">/year</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-6 text-gray-400 text-xs md:text-sm animate-pulse">
          👆 Click on names to verify on LinkedIn
        </div>
      </div>
        {/* Success Story Section */}
        


        {/* <a
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
        </a> */}
      </div>

      {/* Final closing tags */}
    </div>
  );
}
