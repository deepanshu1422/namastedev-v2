"use client";

import { useState } from "react";
import Hero from "./hero";
import Courses from "./courses";
import type { CoursesType } from "./page";
import Reviews from "./reviews";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Main({ courses }: { courses: CoursesType }) {
  const [state, setState] = useState("");

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Job-Ready Mastery Courses"
        desc="Advance your development skills with our comprehensive online courses. Learn MERN Stack, Blockchain, Data Structures & Algorithms, AI, and more from industry experts."
        heroImage="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        search={state}
        setSearch={setState}
      />
      <Bundle
        content={courses.bundleCollection.items[0].offers}
        title={courses.bundleCollection.items[0].bundleTitle}
        url={courses.bundleCollection.items[0].coverImage.url}
        amount={
          courses.bundleCollection.items[0].pricingsCollection.items[0].amount
        }
        slug={courses.bundleCollection.items[0].slug}
      />
      <Courses state={state} courses={courses} />
      <Reviews />
    </main>
  );
}

function Bundle({
  title,
  content,
  url,
  amount,
  slug,
}: {
  title: string;
  content: string[];
  url: string;
  amount: number;
  slug: string;
}) {

  const mentorship= [
    "1:1 Personalized Guidance",
    "Access to All 10 Courses",
    "24/7 Whatsapp Mentors",
    "Full Stack Projects",
    "SAAS Projects"
  ]

  return (
    <div className="flex max-phone:flex-col w-full max-w-[85rem] gap-7 mx-auto max-phone:px-6 px-10 py-5 tab:pb-8">
      <div className="flex-1 grid tab:grid-cols-2 gap-3 bg-second/30 rounded-lg py-6 pl-6">
        <div className="max-tab:order-last flex flex-col gap-3">
          <h3 className="font-bold text-xl tab:text-2xl line-clamp-2">
            {title}
          </h3>
          <div className="flex flex-col gap-1 pr-5">
            {content.map((e, i) => (
              <span key={i} className="flex gap-2 items-center text-sm">
                <CheckCheck className="h-5 w-5 text-prime shrink-0" />
                {e}
              </span>
            ))}

            <Link href={"/bundle/" + slug} className="relative mt-2">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
              <Button
                size={"sm"}
                variant={"outline"}
                className={`relative font-semibold text-foreground/80 hover:text-foreground w-full gap-1`}
              >
                Buy all @₹{amount}{" "}
                <span className="italic line-through text-muted-foreground">
                  ₹{amount + amount * 0.85}
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src={url}
          alt={"30DC Project Preview"}
          height={600}
          width={900}
          className="rounded-s-lg w-full tab:h-4/5 my-auto shadow-xl shadow-black/50 object-cover"
        />
      </div>
      <div className="max-phone:hidden flex-1 grid tab:grid-cols-2 gap-3 bg-second/30 rounded-lg py-6 pl-6">
        <div className="max-tab:order-last flex flex-col gap-3">
          <h3 className="font-bold text-xl tab:text-2xl">
            Join 1:1 Mentorship Now and Get Live Session
          </h3>
          <div className="flex flex-col gap-1 pr-5">
            {mentorship.map((e, i) => (
              <span key={i} className="flex gap-2 items-center text-sm">
                <CheckCheck className="h-5 w-5 text-prime shrink-0" />
                {e}
              </span>
            ))}

            <Link href={"/mentorship"} className="relative mt-2">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
              <Button
                size={"sm"}
                variant={"outline"}
                className={`relative font-semibold text-foreground/80 hover:text-foreground w-full gap-1`}
              >
                Join Mentorship
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src={"/mentorship.jpeg"}
          alt={"30DC Mentorship"}
          height={600}
          width={900}
          className="rounded-s-lg w-full tab:h-4/5 my-auto shadow-xl shadow-black/50 object-cover"
        />
      </div>
    </div>
  );
}
