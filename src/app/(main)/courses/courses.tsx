import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { getContentfulData } from "@/lib/cotentful";
import { courses } from "@/util/constants";
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
    <>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[85rem] gap-7 mx-auto max-phone:px-6 px-10 py-5 tab:pb-8">
        {state
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
            )}
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
        ).length &&
        !courses.bundleCollection.items.filter((e) =>
          e.bundleTitle.toLowerCase().includes(state.toLowerCase())
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
      countryCode: string;
      currencyCode: string;
    }[];
  };
}) {
  const amount =
    pricingsCollection.items.find((e) => e.countryCode == "IN")?.amount ?? 0;
  return (
    <Card className="select-none flex flex-col gap-2 bg-transparent border-none max-w-80 mx-auto">
      <Link
        href={`/courses/${slug}`}
        className="flex flex-col gap-2 h-fit group"
      >
        <div className="relative bg-card/50 min-h-48 rounded-md overflow-hidden aspect-[6/4]">
          <Image
            src={courseImage?.url ?? ""}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-all"
          />
        </div>
        <CardFooter className="px-0 py-0 flex-col gap-0.5 items-start text-muted-foreground">
          <h3 className="text-foreground font-semibold">{title}</h3>
          {/* <span className="taxt-xs tab:text-sm">Aryan Singh</span> */}
          <section className="flex gap-1 items-center">
            <span className="text-lime-500/70">{rating}</span>
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="fill-lime-500/60 stroke-lime-500/60 h-3 tab:h-4 w-3 tab:w-4"
              />
            ))}
          </section>
          <span className="flex gap-2 text-lg text-white font-semibold">
            ₹{amount}
            <span className="text-muted-foreground line-through">
              ₹{(amount + 1) * 4}
            </span>
            {/* <span className="text-lime-500">75%off</span> */}
            <Badge
              className="bg-second/80 hover:bg-second"
              variant={"secondary"}
            >
              75% off
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

function Bundle({
  courseImage,
  tags,
  slug,
  rating,
  title,
  pricingsCollection,
}: {
  courseImage: { url: string; height: number; width: number };
  tags: string[];
  slug: string;
  rating: number;
  title: string;
  pricingsCollection: {
    items: {
      title: string;
      amount: number;
      countryCode: string;
      currencyCode: string;
    }[];
  };
}) {
  const amount =
    pricingsCollection.items.find((e) => e.countryCode == "IN")?.amount ?? 0;
  return (
    <Card className="select-none flex flex-col gap-2 bg-transparent drop-shadow-[30px_20px_100px_#07928183] border-none max-w-80 mx-auto">
      <Link
        href={`/bundle/${slug}`}
        className="flex flex-col gap-2 h-fit group"
      >
        <div className="relative bg-card/50 min-h-48 rounded-md overflow-hidden aspect-[6/4]">
          <Image
            src={courseImage?.url ?? ""}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-all"
          />
        </div>
        <CardFooter className="px-0 py-0 flex-col gap-0.5 items-start text-muted-foreground">
          <h3 className="text-foreground font-semibold">{title}</h3>
          {/* <span className="taxt-xs tab:text-sm">Aryan Singh</span> */}
          <section className="flex gap-1 items-center">
            <span className="text-lime-500/70">{rating}</span>
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="fill-lime-500/60 stroke-lime-500/60 h-3 tab:h-4 w-3 tab:w-4"
              />
            ))}
          </section>
          <span className="flex gap-2 text-lg text-white font-semibold">
            ₹{amount}
            <span className="text-muted-foreground line-through">
              ₹{(amount * 100) / 15}
            </span>
            {/* <span className="text-lime-500">75%off</span> */}
            <Badge
              className="bg-second/80 hover:bg-second"
              variant={"secondary"}
            >
              85% off
            </Badge>
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
}
