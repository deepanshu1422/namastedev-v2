'use client';

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
          Know what our students say about us
        </h2>
        <p className="text-sm text-pretty text-muted-foreground">
          These are the love we get from our users❤️
        </p>
      </div>
      <Slider />
    </section>
  );
}

export function Slider() {
  const testimonials: TestimonialType[] = [
    {
      review: (
        <p className="leading-6 text-sm font-normal">
          Before joining 30DC, I was struggling to make sense of the vast world
          of tech.{" "}
          <span className="bg-lime-500/40">
            The mentorship program gave me a structured approach and
            personalized guidance that I desperately needed.
          </span>{" "}
          With 30DC&apos;s resources and community, I successfully transitioned
          from a non-tech background to securing a software engineering role.
        </p>
      ),
      name: "Rojal Sapkota",
      link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
      linkedin: "https://www.linkedin.com/in/rojal-sapkota-787130237/",
      pos: "SDE@Google",
      profile: "/rojal-in.jpg",
    },
    {
      review: (
        <p className="leading-6 text-sm font-normal">
          I was stuck in a low-paying job and felt lost in my career.
          30DC&apos;s mentorship group changed everything for me.{" "}
          <span className="bg-lime-500/40">
            The courses and community support helped me sharpen my skills and
            regain confidence.
          </span>{" "}
          With the support from 30DC, I landed a remote job, doubling my salary
          and setting a new career trajectory.
        </p>
      ),
      name: "Harsh",
      link: "https://courses.30dayscoding.com/courses/Full-stack-package-652a0a17e4b0db14394522ed",
      linkedin: "https://www.linkedin.com/in/harshpandey002/",
      pos: "SDE (Remote) USA",
      profile: "/harsh-in.jpg",
    },
    {
      review: (
        <p className="leading-6 text-sm font-normal">
          Joining 30DC was the best decision I made for my career.{" "}
          <span className="bg-lime-500/40">
            The personalized mentorship and the comprehensive courses provided
            me with the tools and strategies I needed to excel in interviews.
          </span>{" "}
          Thanks to 30DC and the community, I secured an internship at LinkedIn,
          which eventually turned into a full-time software engineering position
          at Apple.
        </p>
      ),
      name: "Umang Chaudhary",
      link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
      linkedin: "https://www.linkedin.com/in/umang18oct/",
      pos: "SDE@Amazon",
      profile: "/umang-in.jpg",
    },
    {
      review: (
        <p className="leading-6 text-sm font-normal">
          I had been applying to tech jobs for months with no success.{" "}
          <span className="bg-lime-500/40">
            The 30DC mentorship program, particularly the courses and the
            supportive community, provided me with a clear roadmap and the
            confidence to ace my interviews.
          </span>{" "}
          30DC&apos;s guidance was instrumental in helping me land a high-paying
          role at Microsoft right after graduation.
        </p>
      ),
      name: "Kevin",
      link: "https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view",
      linkedin: "https://www.linkedin.com/in/kevinmsmith131/",
      pos: "SDE@Tesla",
      profile: "",
    },
    {
      review: (
        <p className="leading-6 text-sm font-normal">
          After struggling with countless job applications and rejections, I
          discovered 30DC.{" "}
          <span className="bg-lime-500/40">
            The structured courses and mentorship provided me with the direction
            and skills I needed to stand out.
          </span>{" "}
          The supportive community kept me motivated throughout the process, and
          I eventually landed a software engineering position at Netflix,
          transforming my career.
        </p>
      ),
      name: "Manan Patel",
      link: "https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view",
      linkedin: "https://www.linkedin.com/in/themananpatel/",
      pos: "SDE@Nasdaq",
      profile: "/manan-in.jpg",
    },
    {
      review: (
        <p className="leading-6 text-sm font-normal">
          I&apos;m happy to share that I&apos;m starting a new position as
          Software Engineer 1-B at Bank of America! I&apos;m grateful to Vellore
          Institute of Technology for providing this amazing opportunity.
          <span className="bg-lime-500/40">
            I&apos;d also like to thank Aryan Singh and Deepanshu Udhwani, who
            continuously guided me with placements with their community (30 Days
            Coding).
          </span>
        </p>
      ),
      name: "Sneha Michelle V.",
      link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
      linkedin: "https://www.linkedin.com/in/sneha-michelle-v-1b73b0213/",
      pos: "SDE@Bank of America",
      profile: "/sneha-in.jpg",
    },
  ];

  return (
    <Carousel
      opts={{
        loop: true,
        align: "start"
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
      {/* <CarouselPrevious className="-left-4 h-12 w-12" />
      <CarouselNext className="-right-4 h-12 w-12" /> */}
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
