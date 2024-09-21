import { AspectRatio } from "@/components/ui/aspect-ratio";
import { mentorship } from "@/util/globals";
import { Check, CreditCard, Play, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Btn from "../community/btn";

export default function Lifetime() {
  return (
    <div className="m-auto flex flex-col px-5 lg:px-20 pt-10 max-w-[75rem]">
      <span className="flex items-center justify-center gap-4 relative pb-4">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h1 className="font-jakarta bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-[2rem] sm:text-6xl font-extrabold text-center">
          Master Tech Skills & Land Your Dream Job
        </h1>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <section className="flex mx-auto flex-wrap w-full items-center justify-center md:divide-x-2 divide-white py-2">
        <span className="px-1 md:px-4">25,000+ Members</span>
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
          4.93{" "}
          <Link
            href={"/testimonials"}
            className="text-prime font-bold underline-offset-2 underline"
          >
            (200+ reviews)
          </Link>
        </span>
      </section>

      <Btn cover="/welcome.jpg" yt="nTAHWER3K-0" />
    </div>
  );
}
