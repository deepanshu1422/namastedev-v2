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
        <h2 className="font-bold text-xl tab:text-2xl">Bundle Content</h2>
        <p className="text-sm text-pretty text-muted-foreground">
          This bundle contains all these complete courses❤️
        </p>
      </div>
      <Carousel
        opts={{
          loop: true,
          align: "start",
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
              <CarouselItem className="basis-full md:basis-1/2" key={index}>
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
      </Carousel>
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
    <Card className="select-none flex flex-col gap-2 bg-transparent border-none">
      <Link
        href={`/courses/${slug}`}
        className="flex flex-col gap-2 h-fit group"
      >
        <div className="relative bg-card/50 min-h-48 rounded-md overflow-hidden">
          <Image
            src={courseImage?.url ?? ""}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-all"
          />
        </div>
        <CardFooter className="px-0 py-0 flex-col gap-0.5 items-start text-muted-foreground">
          <h3 className="text-foreground font-semibold line-clamp-2">
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
