"use client";

import Autoplay from "embla-carousel-autoplay";
import { Linkedin, Quote, ShoppingBagIcon, Star } from "lucide-react";

import * as React from "react";

import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { testimonials } from "@/components/mentorship-comp/success";
import TestimonyVideo from "@/app/(users)/testimony-video";

type TestimonialType = {
  name: string;
  review: JSX.Element;
  pos: string;
  linkedin: string;
  profile: string;
  // course?: string;
  link: string;
};

function Testimonial({
  name,
  review,
  link,
  linkedin,
  pos,
  profile,
}: TestimonialType) {
  return (
    <div className="lg:hover:bg-opacity-70 transition-all duration-200 flex flex-col p-6 gap-4 bg-second rounded-lg min-h-80">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={profile} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((e) => e[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="flex flex-col">
            <span className="flex gap-1 font-bold leading-4">{name}</span>
            <span className="text-white/60 text-sm">{pos}</span>
          </span>
        </div>

        <Link
          target="_blank"
          href={linkedin}
          className="flex gap-1 p-2 rounded-full bg-sky-600/90 hover:bg-sky-600/70 text-sm font-semibold shadow-[rgb(0,_0,_0)_6px_6px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_3px_3px_0px_0px]"
        >
          <Linkedin className="h-5 w-5" />
          {/* Try Now */}
        </Link>
      </div>
      {review}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-xl tab:text-2xl">
          1000+ student success stories
        </h2>
        <p className="text-sm text-pretty text-muted-foreground">
          Get started with 20,000+ students learning from 10+ countries
        </p>
      </div>
      <TestimonyVideo />
      <Slider />
    </section>
  );
}

export function Slider() {
  return (
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
        {testimonials.map(
          ({ name, review, link, linkedin, pos, profile }, index) => (
            <CarouselItem className="basis-full md:basis-1/2" key={index}>
              {/* <div className="p-1"> */}
              <Testimonial
                name={name}
                review={review}
                link={link}
                linkedin={linkedin}
                pos={pos}
                profile={profile}
              />
              {/* </div> */}
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious className="-left-4 h-12 w-12" />
      <CarouselNext className="-right-4 h-12 w-12" />
    </Carousel>
  );
}

export function StudentAvatar({ name }: { name: string }) {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.pdng" alt="" />
      <AvatarFallback>
        {name
          .toUpperCase()
          .split(" ")
          .map((e) => e[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}
