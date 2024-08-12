"use client";

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
      className="flex flex-col px-2 py-2 border-dashed border-2 border-prime/50 rounded-md bg-second/10 hover:bg-second/20 transition-all duration-300 overflow-hidden shadow-md shadow-black"
    >
      <section className="relative flex items-center gap-3">
        <Image
          loader={() => img ?? ""}
          src={img ?? ""}
          alt={name}
          height={45}
          width={45}
          className="object-cover aspect-square rounded-md"
        />
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
      title: "1:1 Mentorship",
      imgSrc: "/logo.png",
      link: "/mentorship",
      category: ["mentorship", "job"],
    },
    {
      title: "All 15 Courses Package",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/652a1994e4b05a145bae5cd0/652a1994e4b05a145bae5cd0_scaled_cover.jpg?v=10",
      link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
      category: ["fullstack", "package", "job"],
    },
    {
      title: "MERN Web Dev Course",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=5",
      link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
      category: ["courses", "fullstack", "job"],
    },
    {
      title: "AI Mastery Full Course",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe76e4b002b964b5645d/64eebe76e4b002b964b5645d_scaled_cover.jpg?v=8",
      link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
      category: ["ai", "courses"],
    },
    {
      title: "Job Ready DSA Course",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=8",
      link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
      category: ["courses", "job"],
    },
    {
      title: "NEXT JS Full Stack Web Dev",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
      link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
      category: ["courses", "fullstack"],
    },
  ];

  return (
    <div className={"grid grid-cols-1 gap-1 pt-5 w-full max-w-[65rem] m-auto"}>
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center text-pretty">
          Resources to get you JOB-READY
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-3xl text-center mx-auto max-lg:text-sm line-clamp-2 text-white/90 px-10">
        Premium resources for less than your dinner! Lifetime valid and
        money-back guarantee
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-10 pt-5 lg:pt-10 w-full">
        {courses.map(({ imgSrc, link, title }, i) => (
          <Courses key={i} name={title} link={link} img={imgSrc} />
        ))}
      </div>

      <div className="flex flex-col items-center mt-3 gap-3 mx-auto">
        <span className="text-muted-foreground text-sm font-semibold">
          Follow Us:
        </span>
        <section className="flex gap-4">
          <Link href={"https://www.linkedin.com/company/30dc/"}>
            <svg
              className="h-6 w-6 fill-white stroke-white transition-all lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </Link>

          <Link href={"https://www.instagram.com/30dayscoding/"}>
            <svg
              className="h-6 w-6 fill-white stroke-white transition-all lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </Link>

          <Link
            href={"https://www.youtube.com/channel/UCdu8HnchmMbDqbbC4GdPrjw"}
          >
            <svg
              className="h-6 w-6 fill-white stroke-white transition-all lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </Link>

          <Link href={"https://twitter.com/30dayscoding"}>
            <svg
              className="h-6 w-6 fill-white stroke-white transition-all lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Link>
        </section>
      </div>

      {/* <div className="mt-5 flex mx-auto px-5 lg:px-10 w-full">
          <Link
            target="_blank"
            href={"https://www.youtube.com/channel/UCdu8HnchmMbDqbbC4GdPrjw"}
            className="mx-auto w-full max-w-xl flex items-center justify-between gap-3 px-2 py-2 border-dashed border-2 border-prime/50 rounded-md bg-second/10 hover:bg-second/20 transition-all duration-300 shadow-md shadow-black"
          >
            <div className="flex gap-3 items-center font-semibold">
              <Image
                src={"/youtube.svg"}
                alt="30dc logo"
                height={45}
                width={45}
              />
              <span className="max-sm:text-sm">30 Days Coding</span>
            </div>

            <Button size={"sm"} variant={"outline"} className={`bg-red-800 hover:bg-red-900`}>
              Subscribe
            </Button>
          </Link>
        </div>

        <div className="mt-5 flex mx-auto px-5 lg:px-10 w-full">
          <Link
            target="_blank"
            href={"https://www.instagram.com/30dayscoding/"}
            className="mx-auto w-full max-w-xl flex items-center justify-between gap-3 px-2 py-2 border-dashed border-2 border-prime/50 rounded-md bg-second/10 hover:bg-second/20 transition-all duration-300 shadow-md shadow-black"
          >
            <div className="flex gap-3 items-center font-semibold">
              <Image src={"/insta.svg"} alt="30dc logo" height={45} width={45} />
              <span className="max-sm:text-sm">@30dayscoding</span>
            </div>

            <Button size={"sm"} variant={"outline"} className={`bg-sky-800 hover:bg-sky-900`}>
              Follow
            </Button>
          </Link>
        </div> */}
    </div>
  );
}
