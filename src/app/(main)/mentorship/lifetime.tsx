import { AspectRatio } from "@/components/ui/aspect-ratio";
import { mentorship } from "@/util/globals";
import { Check, CreditCard, Play, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Btn from "./btn";

export const benefits = [
  "1:1 Mentorship calls with Aryan, Deepanshu, and team",
  "Customized Roadmap & Resume for your needs",
  "24/7 WhatsApp Support for you",
  "Exclusive LIVE classes with team",
  "Lifetime - till you get job guarantee ",
  "All courses included with LIVE classes",
];

export default function Lifetime() {
  return (
    <div className="m-auto flex flex-col px-5 lg:px-20 pt-10 max-w-[75rem]">
      <span className="flex items-center justify-center gap-4 relative pb-4">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h1 className="font-jakarta bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-[2rem] sm:text-6xl font-extrabold text-center">
          1:1 Lifetime Job Mentorship 
        </h1>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
          <section className="flex gap-1.5 mx-auto">
            <img src="/flags/in.svg" alt="indian flag" className="h-7 w-7" />
            <img src="/flags/us.svg" alt="usa flag" className="h-7 w-7" />
            <img src="/flags/ca.svg" alt="canada flag" className="h-7 w-7" />
            <img src="/flags/gb.svg" alt="uk flag" className="h-7 w-7" />
            <img src="/flags/sg.svg" alt="singapore flag" className="h-7 w-7" />
            <img src="/flags/au.svg" alt="australian flag" className="h-7 w-7" />
          </section>
      <section className="flex mx-auto flex-wrap w-full max-md:text-sm items-center justify-center md:divide-x-2 divide-white py-2">
        <span className="px-1 md:px-4">30,000+ Members</span>
        <span className="md:hidden text-prime font-bold">&</span>
        <span className="px-1 md:px-4">300+ joined this month</span>
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

      <div className="flex flex-col gap-2 py-4 mx-auto md:text-lg">
        {benefits.map((e, i) => (
          <span key={i} className="flex gap-2">
            <Check className="shrink-0 w-5 h-5 stroke-prime" />
            {e}
          </span>
        ))}
      </div>

      <h3 className="font-jakarta font-extrabold text-3xl sm:text-4xl mx-auto sm:pt-4 text-center max-w-[90vw] overflow-hidden text-wrap">
        One Time Payment, Lifetime Mentorship
      </h3>
      <p className="m-auto py-2 pb-6 text-center text-sm max-w-3xl text-foreground/90">
        If you&apos;re not completely satisfied with your purchase, or if it
        doesn&apos;t meet your expectations, simply respond to the email receipt
        within 30 days to receive a full refund. No questions asked.
      </p>

      <Link
        href={"https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"}
        target="_blank"
        className="bg-prime rounded-full px-4 text-center py-3 max-w-3xl mx-auto w-full text-3xl sm:text-4xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase"
      >
        <CreditCard className="h-10 w-10" />
        Join Now
      </Link>
    </div>
  );
}
