'use client'

import { Check, CreditCard, Play, Star } from "lucide-react";
import React, { Dispatch, SetStateAction, Suspense } from "react";
import Btn from "./btn";

export const benefits = [
  "Group Q&A calls with Aryan, Ashok, and Deepanshu (2 calls/week)",
  "Complete USA & Canada Jobs Course + 15+ Technical Interview Courses (MERN, DSA, etc.)",
  "Personalized Resume Review Sessions + Resume and Cold Email Guides",
  "Exclusive LIVE classes covering AI tools, workflows, and automation",
  "Interview Preparation + Mock Interview Sessions + Salary Negotiation Training",
  "Mindset Mastery and Resilience Training",
  "Access to a Thriving Community + Networking Opportunities",
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
        <h1 className="font-jakarta bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-[2rem] sm:text-6xl font-extrabold text-center">
        Job coaching program in USA and Canada (lifetime)
        </h1>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <section className="flex gap-1.5 mx-auto">
        {/* <img src="/flags/in.svg" alt="indian flag" className="h-7 w-7" /> */}
        <img src="/flags/us.svg" alt="usa flag" className="h-7 w-7" />
        <img src="/flags/ca.svg" alt="canada flag" className="h-7 w-7" />
        {/* <img src="/flags/gb.svg" alt="uk flag" className="h-7 w-7" />
        <img src="/flags/sg.svg" alt="singapore flag" className="h-7 w-7" />
        <img src="/flags/au.svg" alt="australian flag" className="h-7 w-7" /> */}
      </section>
      <section className="flex mx-auto flex-wrap w-full max-md:text-sm items-center justify-center md:divide-x-2 divide-white py-2">
        <span className="px-1 md:px-4">Lifetime access to community</span>
        <span className="md:hidden text-prime font-bold">&</span>
        <span className="px-1 md:px-4">250+ joined this month</span>
        <span className="px-1 md:px-4 flex gap-2">
          <div className="flex gap-2 items-center">
            <Star className="h-5 w-5 fill-prime stroke-prime" />
            <Star className="h-5 w-5 fill-prime stroke-prime" />
            <Star className="h-5 w-5 fill-prime stroke-prime" />
            <Star className="h-5 w-5 fill-prime stroke-prime" />
            <Star className="h-5 w-5 fill-prime stroke-prime" />
          </div>
          4.93
        </span>
      </section>

      <Btn cover="/new-mentorship.jpg" yt="9Lokc1bQixc" />

      <div className="flex flex-col items-center py-4 mx-auto md:text-lg">
        {benefits?.map((e, i) => (
          <div key={i} className="flex items-center w-full mb-4">
            {/* Show numbers and line only on desktop view */}
            <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-prime text-white">
              {i + 1}
            </div>
            <div className={`hidden lg:flex flex-grow h-1 bg-prime`} />
            <span className="flex gap-2 pl-4">
              <Check className="shrink-0 w-5 h-5 stroke-prime" />
              {e}
            </span>
          </div>
        ))}
      </div>

      {/* <h3 className="font-jakarta font-extrabold text-3xl sm:text-4xl mx-auto sm:pt-4 text-center max-w-[90vw] overflow-hidden text-wrap">
        One Time Payment, Lifetime Mentorship
      </h3>
      <p className="m-auto py-2 pb-6 text-center text-sm max-w-3xl text-foreground/90">
        If you&apos;re not completely satisfied with your purchase, or if it
        doesn&apos;t meet your expectations, simply respond to the email receipt
        within 30 days to receive a full refund. No questions asked.
      </p> */}

      <button
        onClick={() => setOpen(true)}
        className="bg-prime rounded-full px-4 text-center py-3 max-w-3xl mx-auto w-full text-3xl sm:text-4xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase"
      >
        <CreditCard className="h-10 w-10" />
        Join the Waitlist
      </button>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-4"> {/* Added gap for spacing */}
        <div className="border green-red-500 rounded-lg p-6 w-full md:w-1/2 bg-transparent shadow-md">
          <h2 className="font-bold text-2xl mb-4 text-center">Who is this for?</h2> {/* Increased font size */}
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <span className="font-semibold">✅ Solution-oriented:</span> You thrive on finding effective solutions rather than getting stuck on problems.
            </li>
            <li className="mb-2">
              <span className="font-semibold">✅ Persistent:</span> You have the determination to push through challenges without giving up.
            </li>
            <li className="mb-2">
              <span className="font-semibold">✅ Open to feedback:</span> You welcome constructive criticism and use it to enhance your skills.
            </li>
            <li className="mb-2">
              <span className="font-semibold">✅ Responsible:</span> You take charge of your actions and their consequences, learning from your experiences.
            </li>
            <li className="mb-2">
              <span className="font-semibold">✅ Community-focused:</span> You actively contribute to and uplift the community around you.
            </li>
          </ul>
        </div>

        <div className="border border-red-500 rounded-lg p-6 w-full md:w-1/2 bg-transparent shadow-md">
          <h2 className="font-bold text-2xl mb-4 text-center">Who is this not for?</h2> {/* Increased font size */}
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <span className="font-semibold">❌ Negative mindset:</span> You often focus on problems instead of seeking solutions.
            </li>
            <li className="mb-2">
              <span className="font-semibold">❌ Easily discouraged:</span> You tend to give up when faced with difficulties.
            </li>
            <li className="mb-2">
              <span className="font-semibold">❌ Seeking shortcuts:</span> You look for quick fixes instead of putting in the necessary effort.
            </li>
            <li className="mb-2">
              <span className="font-semibold">❌ Blame-shifter:</span> You often attribute your challenges to external factors rather than taking responsibility.
            </li>
            <li className="mb-2">
              <span className="font-semibold">❌ Isolated:</span> You prefer to work alone and do not engage with the community.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
