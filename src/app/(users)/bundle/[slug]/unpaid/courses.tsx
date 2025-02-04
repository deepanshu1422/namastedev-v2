"use client";

import Autoplay from "embla-carousel-autoplay";

import * as React from "react";

import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Courses({
  coursesCollection,
}: {
  coursesCollection: {
    items: {
      title: string;
      slug: string;
      rating: number;
      courseImage: {
        url: string;
      };
    }[];
  };
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-xl tab:text-2xl">Lifetime Access to 15+ Courses</h2>
        <p className="text-sm text-pretty text-muted-foreground">
          This bundle contains all these complete courses❤️
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {coursesCollection.items.filter(e => !["data-analytics-course", "ai-complete-course"].includes(e.slug)).map(
          ({ courseImage, slug, title, rating }, index) => (
            <Course
              key={index}
              rating={rating ?? 0}
              title={title}
              courseImage={courseImage}
              slug={slug}
            />
          )
        )}
      </div>

      {/* <Carousel
        className="max-md:hidden"
        opts={{
          loop: true,
          align: "center",
          startIndex: -1,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {coursesCollection.items.map(
            ({ courseImage, slug, title, rating }, index) => (
              <CarouselItem
                className="basis-full md:basis-1/2 max-w-80"
                key={index}
              >
                <Course
                  rating={rating ?? 0}
                  title={title}
                  courseImage={courseImage}
                  slug={slug}
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="-left-4 h-12 w-12" />
        <CarouselNext className="-right-4 h-12 w-12" />
      </Carousel> */}
    </section>
  );
}

function Course({
  title,
  slug,
  courseImage,
  rating,
}: {
  title: string;
  slug: string;
  rating: number;
  courseImage: {
    url: string;
  };
}) {
  return (
    <Card className="select-none flex gap-2 bg-second/50 p-1 border-dashed border-2 border-prime/40 rounded-none">
      <Link
        href={`/courses/${slug}`}
        className="flex gap-2 h-fit group w-full"
      >
        <div className="relative bg-card/50 aspect-square rounded-md overflow-hidden min-h-11 h-full shrink-0">
          <Image
            src={courseImage?.url ?? ""}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-all"
          />
        </div>
        <CardFooter className="text-sm px-0 py-0 flex-col gap-0.5 items-start text-muted-foreground">
          <h3 className="text-foreground font-semibold line-clamp-1">
            {title}
          </h3>
          {/* <span className="taxt-xs tab:text-sm">Aryan Singh</span> */}
          <section className="flex gap-1 items-center">
            <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
            <span className="text-lime-500/80 font-semibold">{rating}</span>
          </section>
        </CardFooter>
      </Link>
    </Card>
  );
}
