"use client";

import { PaymentModal, PaymentSheet, Floating } from "./payments";
import React, { Suspense, useEffect, useState } from "react";

import { addToCart, viewItem } from "@/services/gaEvents";
import { usePathname } from "next/navigation";
import { Mentors } from "./page";
import Image from "next/image";
import {
  GraduationCap,
  Home,
  Medal,
  Phone,
  School,
  Trophy,
  Tv,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import MentorSlider from "./slider";
import Link from "next/link";

export default function Main({
  mentorsCollection: { items },
  moreMentors,
}: Mentors) {
  const {
    mentorId,
    name,
    pricingCollection,
    slug,
    image,
    about,
    available,
    colleges,
    countries,
    degrees,
    expertiseTopics,
    languages,
    major,
    states,
    workExperience,
    insights,
  } = items[0];

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    // @ts-ignore
    viewItem({
      title: name,
      slug: `/mentors/${slug}`,
      itemId: mentorId,
      itemType: "mentor",
      value: pricingCollection.items[0].amount,
    });
  }, [pathName]);

  function Unpaid() {
    function addToCartEvent() {
      addToCart({
        itemId: mentorId,
        itemType: "mentor",
        slug: `/mentors/${slug}`,
        title: name,
        value: pricingCollection.items[0].amount,
      });
    }

    function Achivements() {
      return (
        <>
          <div className="bg-white p-6 pb-3 flex flex-col gap-4 rounded-xl">
            <span className="text-lg font-bold">Acheivements</span>
            <div className="grid phone:grid-cols-2 gap-4">
              <div className="flex-1 flex gap-2">
                <span className="bg-lime-200 p-3 rounded-lg">
                  <UsersRound className="stroke-lime-600 fill-lime-200" />
                </span>
                <div className="flex flex-col">
                  <span className="font-bold">1,590</span>
                  <p className="leading-3 text-xs text-balance text-black/60 font-semibold">
                    Interation with Students
                  </p>
                </div>
              </div>
              <div className="flex-1 flex gap-2">
                <span className="bg-blue-200 p-3 rounded-lg">
                  <GraduationCap className="stroke-blue-600" />
                </span>
                <div className="flex flex-col">
                  <span className="font-bold">4 Years</span>
                  <p className="leading-3 text-xs text-balance text-black/60 font-semibold">
                    of Experience
                  </p>
                </div>
              </div>
              <div className="flex-1 flex gap-2">
                <span className="bg-orange-200 p-3 rounded-lg">
                  <Tv className="stroke-orange-600 fill-orange-200" />
                </span>
                <div className="flex flex-col">
                  <span className="font-bold">20</span>
                  <p className="leading-3 text-xs text-balance text-black/60 font-semibold">
                    Live Sessions
                  </p>
                </div>
              </div>
              <div className="flex-1 flex gap-2">
                <span className="bg-red-200 p-3 rounded-lg">
                  <Phone className="stroke-red-600 fill-red-200" />
                </span>
                <div className="flex flex-col">
                  <span className="font-bold">2,000 Min</span>
                  <p className="leading-3 text-xs text-balance text-black/60 font-semibold">
                    Total Call Duration
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button
            disabled={available !== "Available"}
            onClick={() => {
              setOpen(true);
              addToCartEvent();
            }}
            className={`${
              available === "Available" && "bg-head/90 hover:bg-head"
            } ${
              available === "Coming Soon" &&
              "bg-amber-800/90 hover:bg-amber-800/90"
            } ${
              available === "Unavailable" && "bg-red-800/90 hover:bg-red-800/90"
            } text-white font-semibold disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-70`}
          >
            {available === "Available" && "Book a Call"}
            {available === "Coming Soon" && available + "..."}
            {available === "Unavailable" && "Seats already full"}
          </Button>
        </>
      );
    }

    return (
      <main className="relative min-h-dvh bg-gray-100 text-black overflow-clip">
        <Link
          href={"/mentors"}
          className="absolute top-5 right-5 hidden max-md:flex h-fit items-center gap-1.5 rounded-lg text-sm font-bold bg-white p-2 hover:bg-slate-50 transition-all duration-150"
        >
          <Home className="h-5 w-5" />
        </Link>
        <section className="max-w-[75rem] flex flex-col mx-auto px-6 md:px-10 py-5">
          <div className="flex justify-between max-md:flex-col gap-2">
            <div className="flex flex-1 items-center max-md:flex-col gap-2">
              <div className="relative overflow-hidden h-40 w-40 rounded-full border-2 border-black bg-white shadow-[rgb(0,_0,_0)_6px_6px_0px_0px]">
                <Image
                  src={image?.url || "/profile3.webp"}
                  fill
                  className="object-cover"
                  alt={`30DC ${name} Mentor`}
                />
              </div>

              <div className="flex flex-col gap-2 md:px-5 py-3 md:py-6 max-w-md w-full">
                <h2 className="text-3xl font-bold max-md:text-center">
                  {name}
                </h2>
                <div className="flex max-md:items-center max-md:flex-col gap-2">
                  <span className="flex items-center justify-center w-fit gap-1 text-black/70 text-xs font-bold px-3 p-2 rounded-lg bg-lime-400/30">
                    <School className="h-4 w-4" />
                    {degrees?.map((e) => `${e}, `)}
                  </span>
                  <span className="flex items-center justify-center w-fit gap-1 text-black/70 text-xs font-bold px-3 p-2 rounded-lg bg-sky-400/30">
                    <Trophy className="h-4 w-4" />
                    {major}
                  </span>
                </div>

                <div className="flex max-md:justify-around rounded-lg p-6 bg-zinc-200/60">
                  <div className="md:flex-1 flex flex-col gap-0.5">
                    <span className="text-gray-500 font-bold text-xs">
                      Per Session
                    </span>
                    <span className="font-bold text-lg leading-4">
                      ₹{JSON.stringify(pricingCollection.items[0].amount)}
                    </span>
                  </div>
                  <div className="h-6 border border-border/40 md:hidden my-auto" />
                  <div className="md:flex-1 flex flex-col gap-0.5">
                    <span className="text-gray-500 font-bold text-xs">
                      Duration
                    </span>
                    <span className="font-bold text-lg leading-4">30 Min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-md:mx-auto flex md:py-12 gap-2">
              <span className="flex h-fit items-center gap-1.5 rounded-lg text-sm font-bold bg-white px-3 py-2">
                {available === "Available" && (
                  <>
                    <div className="h-3 w-3 rounded shrink-0 animate-pulse bg-lime-600" />
                    {available}
                  </>
                )}
                {available === "Coming Soon" && (
                  <>
                    <div className="h-3 w-3 rounded shrink-0 animate-pulse bg-amber-600" />
                    {available}
                  </>
                )}
                {available === "Unavailable" && (
                  <>
                    <div className="h-3 w-3 rounded shrink-0 animate-pulse bg-red-600" />
                    {available}
                  </>
                )}
              </span>
              <Link
                href={"/mentors"}
                className="hidden md:flex h-fit items-center gap-1.5 rounded-lg text-sm font-bold bg-white p-2 hover:bg-slate-50 transition-all duration-150"
              >
                <Home className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="md:ml-5 flex max-md:justify-center gap-5">
              <button className="text-emerald-700 font-bold py-3 border-b-2 border-emerald-700">
                Overview
              </button>
              <button className="text-emerald-700 font-bold py-3 border-b-2 border-transparent">
                Reviews
              </button>
              {/* <button className="text-emerald-700 text-lg font-bold">Overview</button> */}
            </div>
            <hr className="border-border/20" />

            <div className="flex max-md:flex-col w-full">
              <div className="flex-1 flex flex-col gap-4">
                <p className="py-3 pt-5 text-sm font-semibold">{about}</p>
                <div className="md:hidden flex flex-col gap-2">
                  <Achivements />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold">Profile Insights</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {insights?.map((e, i) => (
                      <div
                        key={i}
                        className="flex gap-2 border-2 rounded-xl border-border/20 p-4 px-5"
                      >
                        <Medal className="shrink-0 h-5 w-5 stroke-blue-700" />
                        <div className="flex flex-col gap-1">
                          <h2 className="text-sm font-extrabold text-blue-700">
                            {e.split(":")[0]}
                          </h2>
                          <p className="text-xs text-black/90">
                            {e.split(":")[1]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold">Background</h3>
                  <div className="grid gap-2 rounded-xl border border-border/40 divide-border/40">
                    <div className="flex max-md:flex-col md:justify-between gap-2 p-3 md:p-6 border-b border-border/40">
                      <span className="flex-1 font-semibold">Expertise</span>
                      <div className="flex-[3] flex flex-wrap md:justify-end gap-1.5">
                        {expertiseTopics?.map((e, i) => (
                          <span
                            key={i}
                            className="text-xs p-2 px-3 rounded-md border border-prime bg-prime/5 text-prime font-semibold"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex max-md:flex-col md:justify-between gap-2 p-3 md:p-6 border-b border-border/40">
                      <span className="flex-1 font-semibold">
                        Work Experience
                      </span>
                      <div className="flex-[2] flex flex-wrap md:justify-end gap-1.5">
                        {workExperience?.map((e, i) => (
                          <span
                            key={i}
                            className="text-xs p-2 px-3 rounded-md border border-border/40 border-sky-600 bg-sky-600/5 text-sky-600 font-semibold"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex max-md:flex-col md:justify-between gap-2 p-3 md:p-6 border-b border-border/40">
                      <span className="flex-1 font-semibold">College</span>
                      <div className="flex-[2] flex flex-wrap md:justify-end gap-1.5">
                        {colleges?.map((e, i) => (
                          <span
                            key={i}
                            className="text-xs p-2 px-3 rounded-md border border-border/40 border-orange-600 bg-orange-600/5 text-orange-600 font-semibold"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex max-md:flex-col md:justify-between gap-2 p-3 md:p-6 border-b border-border/40">
                      <span className="flex-1 font-semibold">States</span>
                      <div className="flex-[2] flex flex-wrap md:justify-end gap-1.5">
                        {states?.map((e, i) => (
                          <span
                            key={i}
                            className="text-xs p-2 px-3 rounded-md border border-border/40 font-semibold"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex max-md:flex-col md:justify-between gap-2 p-3 md:p-6 border-b border-border/40">
                      <span className="flex-1 font-semibold">Countries</span>
                      <div className="flex-[2] flex flex-wrap md:justify-end gap-1.5">
                        {countries?.map((e, i) => (
                          <span
                            key={i}
                            className="text-xs p-2 px-3 rounded-md border border-border/40 font-semibold"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex max-md:flex-col md:justify-between gap-2 p-3 md:p-6">
                      <span className="flex-1 font-semibold">Languages</span>
                      <div className="flex-[2] flex flex-wrap md:justify-end gap-1.5">
                        {languages?.map((e, i) => (
                          <span
                            key={i}
                            className="text-xs p-2 px-3 rounded-md border border-border/40 font-semibold"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative flex flex-col pt-6 md:pl-10">
                <div className="max-md:hidden flex-1 pb-14">
                  <div className="flex sticky top-28 flex-col gap-2">
                    <Achivements />
                  </div>
                </div>

                <MentorSlider
                  mentorsCollection={moreMentors.mentorsCollection}
                />
              </div>
            </div>
          </div>
        </section>
        <PaymentSheet
          slug={slug}
          open={open}
          setOpen={setOpen}
          mentorId={mentorId}
          title={name}
          cover={image?.url || "/profile3.webp"}
          amount={pricingCollection.items[0].amount}
          bigAmount={pricingCollection.items[0].bigAmount ?? 0}
          percentage={pricingCollection.items[0].percentage ?? 0}
          curreny={"INR"}
          setOpenPay={setOpenModal}
        />
        <Floating
          available={available}
          addToCart={addToCartEvent}
          mentorId={mentorId}
          price={{
            amount: pricingCollection.items[0].amount,
            bigAmount: pricingCollection.items[0].bigAmount,
            percentage: pricingCollection.items[0].percentage,
          }}
          setOpen={setOpen}
          slug={slug}
        />
      </main>
    );
  }

  return (
    <>
      <Unpaid />
      <PaymentModal
        slug={slug}
        payModal={openModal}
        setOpenPay={setOpenModal}
      />
    </>
  );
}
