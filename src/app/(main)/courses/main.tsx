"use client";

import React, { useState } from "react";
import Hero from "./hero";
import Courses from "./courses";
import type { CoursesType } from "./page";
import Reviews from "./reviews";
import Image from "next/image";
import { CheckCheck, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";

import { Badge } from "@/components/ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Mentors from "../mentorship/mentors";
import Success from "@/components/mentorship-comp/success";
import VideoSlider from "../testimonials/video-slider";

export default function Main({ courses }: { courses: CoursesType }) {
  const [state, setState] = useState("");

  const faq = [
    {
      question: "Are the courses lifetime valid?",
      answer: (
        <p>
          Yes, all our courses come with lifetime access, allowing you to
          revisit the materials whenever you need.
        </p>
      ),
    },
    {
      question: "Is a certificate given?",
      answer: (
        <p>
          Yes, upon successful completion of the course, you will receive a
          certificate to showcase your achievement.
        </p>
      ),
    },
    {
      question: "How long will it take to complete the course?",
      answer: (
        <p>
          You can take your time! The courses are designed for self-paced
          learning, so you can complete them at your convenience.
        </p>
      ),
    },
    {
      question: "How can I get mentorship support?",
      answer: (
        <p>
          You can access mentorship support by visiting the following link{" "}
          <Link className="text-prime" href={"/mentorship"}>
            Mentorship Support.
          </Link>
        </p>
      ),
    },
    {
      question: "How often is the course updated?",
      answer: (
        <p>
          We regularly update our courses to reflect the latest industry trends
          and practices. You will automatically receive access to all future
          updates at no extra cost.
        </p>
      ),
    },
    {
      question: "What will be the next step?",
      answer: (
        <p>
          After completing the course, we recommend taking advantage of our
          mentorship program to further enhance your learning. Personalized
          mentorship can help you apply the knowledge from the course to
          real-world projects and provide guidance tailored to your career
          goals. Visit{" "}
          <Link className="text-prime" href={"/mentorship"}>
            Mentorship Support.
          </Link>
        </p>
      ),
    },
  ];

  const bundle = courses.bundleCollection.items.find(
    (e) =>
      e.slug ===
      "complete-package-all-course-bundle"
  );

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Script
        id="main-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [${faq.map(({ answer, question }) =>
            JSON.stringify({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: `<p>${answer}</p>`,
              },
            })
          )}]
        }`,
        }}
      />
      <Hero
        title="Job-Ready Mastery Courses"
        desc="Advance your development skills with our comprehensive online courses. Learn Full Stack, Data Structures & Algorithms, AI, Blockchain, Data Analytics, and more from industry experts."
        heroImage="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        search={state}
        setSearch={setState}
      />
      <Mentors />
      <Bundle
        content={bundle?.offers ?? [""]}
        title={bundle?.bundleTitle ?? ""}
        url={bundle?.coverImage.url ?? ""}
        price={bundle?.pricingsCollection.items.find(
          (e) => e.countryCode === "IN"
        ) ?? { amount: 2499, bigAmount: 25000, percentage: 90 }}
        slug={bundle?.slug ?? "complete-package-all-course-bundle"}
      />
      <Courses state={state} courses={courses} />
      <VideoSlider />
      {/* <Reviews /> */}
      <Success />
      <div className="my-5"></div>
      <Faqs faq={faq} />
    </main>
  );
}

function Faqs({
  faq,
}: {
  faq: { question: string; answer: string[] | React.ReactNode }[];
}) {
  return (
    <section className="flex flex-col gap-4 max-w-[85rem] w-full mx-auto max-phone:px-6 phone:px-10 max-md:py-5 pb-10">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold capitalize text-xl tab:text-2xl">
          frequently asked questions
        </h2>
        <p className="text-sm text-pretty text-muted-foreground">
          These are some frequently asked queries we get from our user.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col items-start gap-4 self-stretch w-full"
      >
        {faq.map(({ answer, question }, index) => (
          <div
            key={index}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            className="flex flex-col w-full items-start justify-center gap-5 rounded-xl border-head bg-second/70 p-1 px-5"
          >
            <AccordionItem
              className="flex flex-col items-start gap-4 self-stretch w-full"
              value={`item-${index}`}
            >
              <AccordionTrigger className="flex items-center gap-4 text-base text-start font-semibold leading-6 text-white w-full">
                <span itemProp="name">{question}</span>
              </AccordionTrigger>
              <AccordionContent
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className="flex flex-col gap-4"
              >
                <hr className="h-px w-full border-prime" />
                <p
                  itemProp="text"
                  className="w-full max-lg:text-sm text-base leading-5"
                >
                  {answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </section>
  );
}

function Bundle({
  title,
  content,
  url,
  price,
  slug,
}: {
  title: string;
  content: string[];
  url: string;
  price: {
    amount: number;
    percentage: number;
    bigAmount: number;
  };
  slug: string;
}) {
  const mentorship = [
    "Personalized Roadmap and Resume Review",
    "Access to all courses",
    "Mentorship calls and QnA",
    "24/7 Whatsapp Doubt Solving",
    "Biweekly events and interactions",
  ];

  return (
    <div className="flex max-phone:flex-col w-full max-w-4xl gap-7 mx-auto max-phone:px-6 px-10 py-10 tab:pb-8 ">
      <Link
        href={"/bundle/" + slug}
        className="flex-1 grid tab:grid-cols-2 gap-3 bg-second/30 rounded-lg py-6 pl-6"
      >
        <div className="max-tab:order-last flex flex-col gap-3">

          {/* <Badge
            className="rounded bg-lime-800/80  hover:bg-lime-800 p-3"
            variant={"secondary"}
          >
            <span className="text-sm">Best seller</span>
          </Badge> */}
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
            <span className="flex gap-2 items-center text-sm">
              <Plus className="h-5 w-5 text-prime shrink-0" />
              12 More Courses
            </span>

            <div className="relative mt-2">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
              <Button
                size={"sm"}
                variant={"outline"}
                className={`relative font-semibold text-foreground/80 hover:text-foreground w-full gap-1`}
              >
                Buy all 17 courses for ₹{price.amount}{" "}
                <span className="italic line-through text-muted-foreground">
                  ₹{price.bigAmount}
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={url}
            alt={"30DC Project Preview"}
            height={600}
            width={900}
            className="rounded-s-lg w-full md:w-4/5 aspect-[6/4] tab:h-4/5 my-auto ml-auto shadow-xl shadow-black/50 object-cover"
          />
        </div>
      </Link>
      {/* <Link
        href={"/mentorship"}
        className="max-phone:hidden flex-1 grid tab:grid-cols-2 gap-3 bg-second/30 rounded-lg py-6 pl-6"
      >
        <div className="max-tab:order-last flex flex-col gap-3">
          <h3 className="font-bold text-xl tab:text-2xl">
            Job Assistance and Mentorship
          </h3>
          <div className="flex flex-col gap-1 pr-5">
            {mentorship.map((e, i) => (
              <span key={i} className="flex gap-2 items-center text-sm">
                <CheckCheck className="h-5 w-5 text-prime shrink-0" />
                <p className="line-clamp-1">{e}</p>
              </span>
            ))}

            <div className="relative mt-2">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
              <Button
                size={"sm"}
                variant={"outline"}
                className={`relative font-semibold text-foreground/80 hover:text-foreground w-full gap-1`}
              >
                Job Support Mentorship
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={"/mentorship.jpeg"}
          alt={"30DC Mentorship"}
          height={600}
          width={900}
          className="rounded-s-lg w-full tab:h-4/5 my-auto shadow-xl shadow-black/50 object-cover"
        />
      </Link> */}
    </div>
  );
}
