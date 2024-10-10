'use client'

import { Check, CreditCard, Play, Star,
  CheckCheck } from "lucide-react";
import React, { Dispatch, SetStateAction, Suspense } from "react";
import Btn from "./btn";
import Link from "next/link";
import { ChevronDownCircle } from "lucide-react";

export const benefits = [
  "25+ courses, 150+ hours of content, 40+ guides",
  "Live classes on DSA, Full Stack Development, and more",
  "Regular Q&A calls with Aryan, Ashok, and Deepanshu",
  "24/7 WhatsApp access for any doubts and queries",
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
        <h1 className="font-jakarta bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-[2.3rem] sm:text-6xl font-extrabold text-center">
        Join tech job mentorship community (lifetime)
        </h1>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      
      <section className="flex mx-auto flex-wrap text-2xl w-full max-md:text-sm items-center justify-center md:divide-x-2 divide-white py-2">
        <span className="px-1 md:px-4">Lifetime access to community</span>
        <span className="md:hidden text-prime font-bold">&</span>
        <span className="px-1 md:px-4">250+ joined this month</span>
        <span className="md:hidden text-prime font-bold">&</span>
        <span className="px-1 md:px-4">20+ Job offers last month</span>

      </section>

      <Btn cover="/new-mentorship.jpg" yt="9Lokc1bQixc" />
      <div className="flex flex-col items-center py-4 mx-auto text-xl">
        {benefits?.map((e, i) => {
          const words = e.split(" ");
          const firstWord = words[0];
          const restOfSentence = words.slice(1).join(" ");

          return (
            <div key={i} className="flex items-center w-full mb-4">
              <span className="flex items-center gap-2 pl-4">
                <CheckCheck className="shrink-0 w-5 h-5 stroke-prime" />
                <span>
                  <span className="bg-prime/50 hover:bg-prime/70 text-white px-2 text-lg py-1 rounded">
                    {firstWord}
                  </span>{" "}
                  <span className="text-lg">{restOfSentence}</span>
                </span>
              </span>
            </div>
          );
        })}
      </div>

      {/* <h3 className="font-jakarta font-extrabold text-3xl sm:text-4xl mx-auto sm:pt-4 text-center max-w-[90vw] overflow-hidden text-wrap">
        One Time Payment, Lifetime Mentorship
      </h3>
      <p className="m-auto py-2 pb-6 text-center text-sm max-w-3xl text-foreground/90">
        If you&apos;re not completely satisfied with your purchase, or if it
        doesn&apos;t meet your expectations, simply respond to the email receipt
        within 30 days to receive a full refund. No questions asked.
      </p> */}
      
      <div className="px-6 lg:px-10">
        <Link href={"#apply"} className="mx-auto">
          <button className="mt-10 border-4 border-prime rounded-full px-4 text-center py-2 max-w-3xl mx-auto w-full text-2xl sm:text-2xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase">
            <ChevronDownCircle className="h-8 w-8" />
            Fill the form
          </button>
        </Link>
      </div>

    </div>
  );
}
