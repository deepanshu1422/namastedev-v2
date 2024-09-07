'use client'
import { Check, CreditCard, LucideCheckCircle } from "lucide-react";
import Button from "./home-components/button";
import { Button as Btns } from "./ui/button";
import Link from "next/link";
import Btn from "@/app/(main)/mentorship/btn";
import { benefits } from "@/app/(main)/mentorship/lifetime";

export default function Program() {
  return (
    <div className="w-full py-5 relative">
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta text-pretty text-[2rem] font-extrabold text-center">
          Join Jobs, Networking, and Mentorship group
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <div className="m-auto flex max-lg:flex-col items-center justify-between p-4 lg:px-20 gap-4 max-lg:max-w-xl max-w-[90rem]">
        <div className="w-full lg:w-1/2 grid gap-3 shrink">
          <Btn cover="/new-mentorship.jpg" yt="9Lokc1bQixc" />
        </div>

        <div className="lg:w-1/2 w-full shrink-0 flex-1 flex flex-col gap-2">
          {benefits?.map((e, i) => (
            <span key={i} className="flex gap-2">
              <Check className="shrink-0 w-5 h-5 stroke-prime" />
              {e}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 px-4">
        <h3 className="font-jakarta font-extrabold text-3xl sm:text-4xl mx-auto sm:pt-4 text-center max-w-[90vw] overflow-hidden text-wrap">
          One Time Payment, Lifetime Mentorship
        </h3>
        <p className="m-auto py-2 pb-6 text-center text-sm max-w-3xl text-foreground/90">
          If you&apos;re not completely satisfied with your purchase, or if it
          doesn&apos;t meet your expectations, simply respond to the email
          receipt within 30 days to receive a full refund. No questions asked.
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
    </div>
  );
}
