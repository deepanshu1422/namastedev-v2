"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Courses({
  name,
  link,
  img,
}: {
  name: string;
  link: string;
  img?: string;
}) {
  return (
    <Link
      href={link}
      className="relative flex flex-col gap-3 px-2 py-3 border-dashed border-2 border-prime/50 rounded-md bg-second/10 hover:bg-second/20 transition-all duration-300 overflow-hidden"
    >
      <Image
        loader={() => img ?? ""}
        src={img ?? ""}
        alt={name}
        fill
        className="object-cover opacity-20 blur-sm"
      />
      <section className="relative flex items-center gap-2">
        <Avatar>
          <AvatarImage src="/logo.png" />
          <AvatarFallback>
            {name
              .split(" ")
              .map((e) => e[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="flex flex-col">
          <span className="font-semibold text-white leading-4 line-clamp-2">
            {name}
          </span>
        </span>
      </section>

      {/* <Link target="_blank" href={link} className="flex gap-1 p-2 rounded-full bg-prime/90 hover:bg-prime/70 text-sm font-semibold shadow-[rgb(0,_0,_0)_6px_6px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_3px_3px_0px_0px]">
          <ShoppingBag className="h-5 w-5" />
        </Link> */}
    </Link>
  );
}

export default function Hero() {
  let courses = [
    {
      title: "All 15 Courses Package -  (Certificate + Lifetime)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/652a1994e4b05a145bae5cd0/652a1994e4b05a145bae5cd0_scaled_cover.jpg?v=10",
      link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
      category: ["fullstack", "package", "job"],
    },
    {
      title: "Job Ready - MERN Full Stack Web Dev Course (lifetime valid)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
      link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
      category: ["courses", "fullstack", "job"],
    },
    {
      title: "Tech Job Roadmap Mastery (Beginner to Advanced)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64ff7f1be4b0607f6f9001f6/64ff7f1be4b0607f6f9001f6_scaled_cover.jpg?v=2",
      link: "https://courses.30dayscoding.com/courses/FAANG-and-Startup-Tech-job-detailed-roadmap-64ff7f1be4b0607f6f9001f6",
      category: ["courses", "job"],
    },
    {
      title: "Backend Mastery Course -  (Beginner to Advanced)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/6652967ada4224461d9ece76/6652967ada4224461d9ece76_scaled_cover.jpg?v=1",
      link: "https://courses.30dayscoding.com/courses/Complete-Backend-development-course-lifetime-6652967ada4224461d9ece76",
      category: ["backend", "courses"],
    },
    {
      title: "Job Ready DSA Course (Certificate + Lifetime)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=8",
      link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
      category: ["courses", "job"],
    },
    {
      title: "Job Ready - NEXT JS Full Stack Web Dev Course (lifetime valid)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
      link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
      category: ["courses", "fullstack"],
    },
  ];

  return (
    <div className={"grid grid-cols-1 gap-1 pt-2 w-full max-w-[65rem] m-auto"}>
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Valuable Resources
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-3xl text-center mx-auto max-lg:text-sm line-clamp-2 text-white/70 px-10">
        A collection of exclusive resources highlighting the journeys of
        individuals who have overcome significant challenges to achieve
        remarkable accomplishments.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-10 pt-5 lg:pt-10 w-full">
        {courses.map(({ imgSrc, link, title }, i) => (
          <Courses
            key={i}
            name={title}
            link={link}
            img={imgSrc}
          />
        ))}
      </div>

      <div className="mt-5 flex mx-auto px-5 lg:px-10 w-full">
        <Link
          target="_blank"
          href={"https://www.youtube.com/channel/UCdu8HnchmMbDqbbC4GdPrjw"}
          className="mx-auto w-full max-w-xl flex justify-between gap-3 px-2 py-2 border-dashed border-2 border-prime/50 rounded-md bg-second/10 hover:bg-second/20 transition-all duration-300"
        >
          <div className="flex gap-2 items-center font-semibold">
            <Image src={"/youtube.svg"} alt="30dc logo" height={40} width={40} />
            <span className="max-sm:text-sm">30 Days Coding</span>
          </div>

          <Button variant={"outline"} className={`bg-red-800 hover:bg-red-900`}>
            Subscribe
          </Button>
        </Link>
      </div>
      
      <div className="mt-5 flex mx-auto px-5 lg:px-10 w-full">
        <Link
          target="_blank"
          href={"https://www.instagram.com/30dayscoding/"}
          className="mx-auto w-full max-w-xl flex justify-between gap-3 px-2 py-2 border-dashed border-2 border-prime/50 rounded-md bg-second/10 hover:bg-second/20 transition-all duration-300"
        >
          <div className="flex gap-2 items-center font-semibold">
            <Image src={"/insta.svg"} alt="30dc logo" height={40} width={40} />
            <span className="max-sm:text-sm">30 Days Coding</span>
          </div>

          <Button variant={"outline"} className={`bg-sky-800 hover:bg-sky-900`}>
            Follow
          </Button>
        </Link>
      </div>
    </div>
  );
}
