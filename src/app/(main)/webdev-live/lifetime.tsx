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
  { name: "Rishabh", linkedIn: "https://www.linkedin.com/in/rishabh5301", jobOffer: "Arrow, Google", salary: "15+ LPA" },
  { name: "Roktim", linkedIn: "https://x.com/roktim___", jobOffer: "Luppa AI", salary: "15+ LPA" },
];

export default function Lifetime({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="m-auto flex flex-col px-5 lg:px-20 pt-10 max-w-[75rem]">
      <span className="flex items-center justify-center gap-4 relative pb-4">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h1 className="font-jakarta bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-[3rem] sm:text-6xl font-extrabold text-center">
        Master AI before it is <span className="underline decoration-white decoration-4"> TOO LATE
        </span>         
        </h1>
        
        
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <span className="flex items-center justify-center gap-4 relative pb-4">
        
      {/* <h2 className="font-jakarta text-3xl font-semibold text-center text-foreground/80 mt-2 mb-4">
        Community and resources to start your career journey
      </h2> */}
      </span>
      
      {/* <section className="flex gap-1.5 mx-auto">
        <img src="/flags/us.svg" alt="usa flag" className="h-20 w-20" />
      <img src="/flags/ca.svg" alt="canada flag" className="h-20 w-20" />
      </section> */}

      {/* <Btn cover="/thumbs/jobs.jpg" yt="GySgYzh3XLw" /> */}
      
      
      {/* New section for statistics */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
        <div className="text-center border border-prime/30 rounded-lg p-4 w-full sm:w-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center">
            <span className="mr-2">🔓</span>Lifetime
          </h3>
          <p className="text-xs sm:text-sm text-prime">Access to all upcoming courses</p>
        </div>
        <div className="text-center border border-prime/30 rounded-lg p-4 w-full sm:w-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center">
            <span className="mr-2">📞</span>Live Q&As
          </h3>
          <p className="text-xs sm:text-sm text-prime">And exclusive workshops</p>
        </div>
        <div className="text-center border border-prime/30 rounded-lg p-4 w-full sm:w-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center">
            <span className="mr-2">💬</span>24/7
          </h3>
          <p className="text-xs sm:text-sm text-prime">Chat support whenever you need help</p>
        </div>
      </div>

      {/* New section for success stories */}
      <div className="mt-8">
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
                    <a href={story.linkedIn} target="_blank" rel="noopener noreferrer" className="underline hover:text-prime transition-colors duration-200">
                      {story.name}
                    </a>
                  </td>
                  <td className="py-3 px-4">{story.jobOffer}</td>
                  
                  <td className="py-3 px-4">{story.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      


      
      {/* <h2 className="font-jakarta text-2xl font-semibold text-center text-foreground/80 mt-2 mb-4">
        We will guide you for <span className="decoration-red-500 underline decoration-4">EVERYTHING</span> until you land your dream job.
      </h2>

      <h2 className="font-jakarta text-2xl font-semibold text-center text-foreground/80 mt-8 mb-6">
        Our 3-Step Mentorship Plan to Land Your Dream Job
      </h2>

      <div className="flex flex-col items-start py-4 mx-auto text-xl max-w-3xl w-full relative">
        <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-prime/30"></div>
        {mentorshipSteps.map((step, index) => (
          <div key={index} className="flex items-center w-full mb-6 relative">
            <span className="flex items-start gap-4">
              <span className="bg-prime text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 z-10">
                {index + 1}
              </span>
              <span className="text-foreground/90">{step}</span>
            </span>
            {index < mentorshipSteps.length - 1 && (
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-prime/30"></div>
            )}
          </div>
        ))}
      </div> */}

      {/* <h3 className="font-jakarta font-extrabold text-3xl sm:text-4xl mx-auto sm:pt-4 text-center max-w-[90vw] overflow-hidden text-wrap">
        One Time Payment, Lifetime Mentorship
      </h3>
      <p className="m-auto py-2 pb-6 text-center text-sm max-w-3xl text-foreground/90">
        If you&apos;re not completely satisfied with your purchase, or if it
        doesn&apos;t meet your expectations, simply respond to the email receipt
        within 30 days to receive a full refund. No questions asked.
      </p> */}
      {/* <Link href={"#join-waitlist"} >
        <button className="border-4 border-prime rounded-full px-4 text-center py-3 max-w-lg mx-auto w-full text-3xl sm:text-2xl font-extrabold flex gap-3 items-center justify-center hover:opacity-80 transition-all duration-200 uppercase">
          <ChevronDownCircle className="h-7 w-7" />
          Join Waitlist
        </button>
      </Link> */}
    </div>
  );
}
