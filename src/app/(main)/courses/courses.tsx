"use client";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CoursesType } from "./page";
import { Card, CardFooter } from "@/components/ui/card";

export default function Courses({
  state,
  courses,
}: {
  state: string;
  courses: CoursesType;
}) {
  if (courses.courseCollection?.items.length == 0)
    return (
      <div className="mx-auto max-w-[90rem] w-full text-center py-10 pb-40">
        <span className="font-semibold rounded-full p-2 px-4 border-4 border-double w-fit mx-auto items-center border-prime shadow-2xl text-sm text-white/60 flex gap-1">
          {" "}
          <HelpCircle className="h-5 w-5" /> No Such Course Found
        </span>
      </div>
    );

  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
      <span className="flex items-center justify-center gap-4 relative lg:pb-4">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta text-balance text-3xl font-extrabold text-center max-sm:px-6">
          Pocket Friendly Courses with Certificates!
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <span className="inline-flex items-center justify-center whitespace-nowrap border rounded-3xl py-2 px-3 max-lg:text-xs text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border-prime bg-prime/20 shadow-md ring-0">All Bundles</span>
      <div className="mx-auto grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 gap-4 max-lg:gap-8 max-lg:place-items-center horizontal-scroll p-2 max-lg:px-6 max-w-6xl">
        {courses.bundleCollection.items.map(
          ({ bundleTitle, coverImage, pricingsCollection, slug }, index) => {
            const amount =
              pricingsCollection.items.find((e) => e.countryCode == "IN")
                ?.amount ?? 0;
            const bigAmount =
              pricingsCollection.items.find((e) => e.countryCode == "IN")
                ?.bigAmount ?? 0;
            const percentage =
              pricingsCollection.items.find((e) => e.countryCode == "IN")
                ?.percentage ?? 0;

            return (
              <Link
                key={index}
                href={`/bundle/${slug}`}
                className="flex-1 max-w-[300px] w-full lg:hover:-translate-y-1 h-full transition-all"
              >
                <div className="max-lg:m-auto flex flex-col justify-between max-lg:justify-center rounded-xl bg-stone-900 p-1 h-full">
                  <div className="flex flex-col gap-1">
                    <Image
                      className="rounded-lg w-96 aspect-[6/4]"
                      src={coverImage.url}
                      width={280}
                      height={280}
                      alt={`30 days coding ${bundleTitle}`}
                    />
                    <p className="text-sm font-semibold p-1 line-clamp-2 text-wrap">
                      {bundleTitle}
                    </p>
                  </div>
                  <span className="flex gap-2 justify-between sm:text-lg text-white font-semibold p-1">
                    <span className="flex gap-2">
                      ₹{amount}
                      <span className="text-muted-foreground line-through">
                        ₹{bigAmount}
                      </span>
                    </span>
                    {/* <span className="text-lime-500">75%off</span> */}
                    <Badge
                      className="rounded bg-lime-800/80  hover:bg-lime-800"
                      variant={"secondary"}
                    >
                      {percentage}% off
                    </Badge>
                  </span>
                </div>
              </Link>
            );
          }
        )}
      </div>
      <div className="flex max-lg:flex-col lg:gap-6 max-lg:items-center max-lg:gap-10 max-lg:px-0 mx-auto">
        <CourseTabMenu
          data={[
            {
              title: "All Courses",
              courses: [...courses.courseCollection.items],
            },
            {
              title: "AI",
              courses: courses.courseCollection.items.filter((e) =>
                e.tags?.includes("ai")
              ),
            },
            {
              title: "Full Stack Development",
              courses: courses.courseCollection.items.filter((e) =>
                e.tags?.includes("fullstack")
              ),
            },
            {
              title: "Blockchain",
              courses: courses.courseCollection.items.filter((e) =>
                e.tags?.includes("blockchain")
              ),
            },
            {
              title: "DSA",
              courses: courses.courseCollection.items.filter((e) =>
                e.tags?.includes("dsa")
              ),
            },
            {
              title: "Data Analyst",
              courses: courses.courseCollection.items.filter((e) =>
                e.tags?.includes("data analytics")
              ),
            },
            {
              title: "Language",
              courses: courses.courseCollection.items.filter((e) =>
                e.tags?.includes("language")
              ),
            },
            {
              title: "Web Dev",
              courses: courses.courseCollection.items.filter((e) =>
                e.tags?.includes("web development")
              ),
            },
            {
              title: "Projects",
              courses: courses.courseCollection.items.filter((e) =>
                e.tags?.includes("projects")
              ),
            },
          ]}
        />
      </div>
    </div>
  );

  return (
    <>
      <span className="flex items-center justify-center gap-4 relative mt-8">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Premium Courses for Job-Ready Skills
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-2xl text-center mx-auto text-sm text-white/70 px-10 line-clamp-2">
        Our students are working at top companies like Google, Facebook, Amazon,
        Microsoft, and many more. We are a community of 20,000+ students from
        10+ countries.
      </p>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[85rem] gap-7 mx-auto max-phone:px-6 px-10 py-5 tab:pb-8">
        {/* {state
          ? courses.bundleCollection.items
              .filter((e) =>
                e.bundleTitle.toLowerCase().includes(state.toLowerCase())
              )
              .map(
                (
                  { coverImage, slug, bundleTitle, pricingsCollection, rating },
                  i
                ) => (
                  <Bundle
                    rating={rating}
                    key={i}
                    courseImage={coverImage}
                    tags={[""]}
                    slug={slug}
                    title={bundleTitle}
                    pricingsCollection={pricingsCollection}
                  />
                )
              )
          : courses.bundleCollection.items.map(
              (
                { coverImage, slug, bundleTitle, pricingsCollection, rating },
                i
              ) => (
                <Bundle
                  rating={rating}
                  key={i}
                  courseImage={coverImage}
                  tags={[""]}
                  slug={slug}
                  title={bundleTitle}
                  pricingsCollection={pricingsCollection}
                />
              )
            )} */}
        {state
          ? courses.courseCollection.items
              .filter((e) =>
                e.title.toLowerCase().includes(state.toLowerCase())
              )
              .map(
                (
                  {
                    courseImage,
                    tags,
                    slug,
                    title,
                    pricingsCollection,
                    rating,
                  },
                  i
                ) => (
                  <Course
                    rating={rating}
                    key={i}
                    courseImage={courseImage}
                    tags={tags}
                    slug={slug}
                    title={title}
                    pricingsCollection={pricingsCollection}
                  />
                )
              )
          : courses.courseCollection.items.map(
              (
                { courseImage, tags, slug, title, pricingsCollection, rating },
                i
              ) => (
                <Course
                  rating={rating}
                  key={i}
                  courseImage={courseImage}
                  tags={tags}
                  slug={slug}
                  title={title}
                  pricingsCollection={pricingsCollection}
                />
              )
            )}
      </section>
      {state &&
        !courses.courseCollection.items.filter((e) =>
          e.title.toLowerCase().includes(state.toLowerCase())
        ).length && (
          <div className="mx-auto max-w-[90rem] w-full text-center py-10 pb-40">
            <span className="font-semibold rounded-full p-2 px-4 border-4 border-double w-fit mx-auto items-center border-prime shadow-2xl text-sm text-white/60 flex gap-1">
              {" "}
              <HelpCircle className="h-5 w-5" /> No Such Course Found
            </span>
          </div>
        )}
    </>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CourseTabMenu({
  data,
}: {
  data: {
    title: string;
    courses: {
      title: string;
      shortDescription: string;
      slug: string;
      rating: number;
      tags: string[];
      courseImage: { url: string; width: number; height: number };
      pricingsCollection: {
        items: {
          title: string;
          amount: number;
          percentage: number;
          bigAmount: number;
          countryCode: string;
          currencyCode: string;
        }[];
      };
    }[];
  }[];
}) {
  return (
    <Tabs defaultValue="chapter1" className="flex shrink-0 flex-col gap-2">
      <TabsList className="mx-auto text-muted-foreground flex flex-wrap justify-center gap-3 h-fit max-w-2xl">
        {data.map(({ title }, i) => (
          <TabsTrigger
            className="inline-flex items-center justify-center whitespace-nowrap border border-white/50 rounded-3xl py-2 px-3 max-lg:text-xs text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-prime data-[state=active]:bg-prime/20 data-[state=active]:shadow-md ring-0"
            key={i}
            value={`chapter${i + 1}`}
          >
            <span>{title}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mx-auto">
        {data.map(({ courses }, i) => (
          <TabsContent
            key={i}
            className="w-full px-4"
            value={`chapter${i + 1}`}
          >
            <div className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 gap-4 max-lg:gap-8 max-lg:place-items-center horizontal-scroll p-2 max-w-6xl">
              {courses.map(
                (
                  {
                    title,
                    courseImage,
                    pricingsCollection,
                    rating,
                    shortDescription,
                    slug,
                    tags,
                  },
                  index
                ) => {
                  const amount =
                    pricingsCollection.items.find((e) => e.countryCode == "IN")
                      ?.amount ?? 0;
                  const bigAmount =
                    pricingsCollection.items.find((e) => e.countryCode == "IN")
                      ?.bigAmount ?? 0;
                  const percentage =
                    pricingsCollection.items.find((e) => e.countryCode == "IN")
                      ?.percentage ?? 0;

                  return (
                    <Link
                      key={index}
                      href={`/courses/${slug}`}
                      className="flex-1 max-w-[300px] w-full lg:hover:-translate-y-1 h-full transition-all"
                    >
                      <div className="max-lg:m-auto flex flex-col justify-between max-lg:justify-center rounded-xl bg-second/40 p-1 h-full">
                        <div className="flex flex-col gap-1">
                          <Image
                            className="rounded-lg w-96 aspect-[6/4]"
                            src={courseImage.url}
                            width={280}
                            height={280}
                            alt={`30 days coding ${title}`}
                          />
                          <p className="text-sm font-semibold p-1 line-clamp-2 text-wrap">
                            {title}
                          </p>
                        </div>
                        <span className="flex gap-2 justify-between sm:text-lg text-white font-semibold p-1">
                          <span className="flex gap-2">
                            ₹{amount}
                            <span className="text-muted-foreground line-through">
                              ₹{bigAmount}
                            </span>
                          </span>
                          {/* <span className="text-lime-500">75%off</span> */}
                          <Badge
                            className="rounded bg-prime/60  hover:bg-prime/80"
                            variant={"secondary"}
                          >
                            {percentage}% off
                          </Badge>
                        </span>
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}

function Course({
  courseImage,
  tags,
  slug,
  title,
  rating,
  pricingsCollection,
}: {
  courseImage: { url: string; height: number; width: number };
  tags: string[];
  slug: string;
  title: string;
  rating: number;
  pricingsCollection: {
    items: {
      title: string;
      amount: number;
      percentage: number;
      bigAmount: number;
      countryCode: string;
      currencyCode: string;
    }[];
  };
}) {
  const amount =
    pricingsCollection.items.find((e) => e.countryCode == "IN")?.amount ?? 0;
  const bigAmount =
    pricingsCollection.items.find((e) => e.countryCode == "IN")?.bigAmount ?? 0;
  const percentage =
    pricingsCollection.items.find((e) => e.countryCode == "IN")?.percentage ??
    0;
  return (
    <Card className="select-none flex flex-col gap-2 bg-transparent border-none w-full sm:max-w-80 mx-auto">
      <Link
        href={`/courses/${slug}`}
        className="flex sm:flex-col gap-2 h-fit group"
      >
        <div className="relative bg-card/50 max-sm:min-w-20 h-fit sm:min-h-48 rounded-md overflow-hidden aspect-square shrink-0 sm:aspect-[6/4]">
          <Image
            src={courseImage?.url ?? ""}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-all"
          />
        </div>
        <CardFooter className="px-0 py-0 flex-col gap-0.5 items-start text-muted-foreground">
          <h3 className="sm:hidden text-foreground font-semibold line-clamp-2">
            {title}
          </h3>
          {/* <span className="taxt-xs tab:text-sm">Aryan Singh</span> */}
          <section className="sm:hidden flex gap-1 items-center">
            <span className="text-lime-500/70 text-sm">{rating}</span>
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="fill-lime-500/60 stroke-lime-500/60 h-3 tab:h-4 w-3 tab:w-4"
              />
            ))}
          </section>
          <span className="flex gap-2 sm:text-lg text-white font-semibold">
            ₹{amount}
            <span className="text-muted-foreground line-through">
              ₹{bigAmount}
            </span>
            {/* <span className="text-lime-500">75%off</span> */}
            <Badge
              className="bg-second/80 hover:bg-second"
              variant={"secondary"}
            >
              {percentage}% off
            </Badge>
          </span>
        </CardFooter>
      </Link>
    </Card>
  );

  return (
    <Link
      href={`/courses/${slug}`}
      className="rounded bg-second/40 flex flex-col group transition-all duration-200 hover:bg-second/60 hover:shadow-xl shadow-black overflow-hidden sm:mb-3 max-w-xs w-[90%] sm:max-w-xs mx-auto"
    >
      <Image
        className="rounded-t-lg shadow-lg max-h-40 h-full object-cover"
        src={courseImage.url}
        alt={`30DC ${title} Course`}
        height={courseImage.height}
        width={courseImage.width}
      />
      <div className="flex flex-col items-start gap-2 p-3">
        <span className="text-lg font-bold">{title}</span>
      </div>
      <div className="flex flex-wrap gap-1 p-4 pt-0 px-3 mt-auto">
        {tags?.map((e, i) => (
          <Badge
            className="rounded bg-background text-sm"
            variant={"secondary"}
            key={i}
          >
            #{e}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
