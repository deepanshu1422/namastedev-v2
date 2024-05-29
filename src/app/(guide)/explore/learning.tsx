import { Input } from "@/components/ui/input";
import { projectsData } from "@/util/globals";
import { Search, Star, StarHalf } from "lucide-react";

import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Learning() {
  return (
    <div className="w-full text-white bg-bg flex flex-col px-4 pt-8 pb-10 lg:py-8 lg:px-8">
      <section className="flex flex-col gap-1.5 max-w-7xl w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">What we are offering</h2>
        <p className="text-sm text-muted-foreground">We offer a wide range of collection for latest trending technologies</p>
        <Slider />
        <Link href={"https://courses.30dayscoding.com/s/store"}
          className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 rounded-md w-fit self-end"
        >
          <span className="text-sm">See Full Courses</span>
          {/* <ArrowRight className="max-md:hidden h-4 w-4" /> */}
        </Link>
      </section>
    </div>
  );
}

export function Slider() {

  const course = [
    {
      title: "All 10 courses package -  (Lifetime Validity)",
      imgSrc: "/courses/course1.jpg",
      link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
    },
    {
      title:
        "Full stack package - MERN, Next JS, Projects (Lifetime Validity)",
      imgSrc: "/courses/course2.jpg",
      link: "https://courses.30dayscoding.com/courses/Full-stack-package-652a0a17e4b0db14394522ed",
    },
    {
      title: "DSA Complete Placement Course",
      imgSrc: "/courses/dsa.jpg",
      link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
    },
    {
      title: "MERN FullStack Web Development",
      imgSrc: "/courses/mern.jpg",
      link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
    },
    {
      title:
        "Idea to MVP, India builder, Saas, Solopreneur course - (Lifetime Validity)",
      imgSrc: "/courses/cohort.jpg",
      link: "https://courses.30dayscoding.com/courses/Idea-to-MVP-full-stack-project-course-6525cb14e4b07ef99d14b75b",
    },
    {
      title: "Next JS FullStack Web Development",
      imgSrc: "/courses/nextjs.jpg",
      link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
    },
    {
      title: "Complete Blockchain and Web3 course",
      imgSrc: "/courses/blockchain.jpg",
      link: "https://courses.30dayscoding.com/courses/Blockchain-developer-course-64eec408e4b002b964b568be",
    },
    {
      title: "ChatGPT Full Stack Course",
      imgSrc: "/courses/ai.jpg",
      link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
    },
    {
      title: "Complete JavaScript Course - (Lifetime Validity)",
      imgSrc: "/courses/javascript.jpg",
      link: "https://courses.30dayscoding.com/courses/Complete-Javascript-course-for-developers-652da487e4b0dce56ddde296",
    },
    {
      title: "Complete Python Course - (Lifetime Validity)",
      imgSrc: "/courses/python.jpg",
      link: "https://courses.30dayscoding.com/courses/Complete-Python-course-for-developers-652da4c5e4b010a575e0254b",
    },
    {
      title: "Complete Java Course - (Lifetime Validity)",
      imgSrc: "/courses/java.jpg",
      link: "https://courses.30dayscoding.com/courses/Complete-Java-course-659ef388e4b0f601f93531b8",
    },
  ]

  return (
    <Carousel opts={{
      loop: true
    }} className="w-full py-3">
      <CarouselContent>
        {course.map(({ title, link, imgSrc }, index) => (
          <CarouselItem className="max-sm:basis-4/5 sm:basis-1/2 md:basis-1/3  xl:basis-1/4" key={index}>
            <Link href={link} className="p-1 group">
              <Card className="select-none flex flex-col gap-2 bg-transparent border-none">
                <div className="relative bg-card/50 max-sm:min-h-44 min-h-40 rounded-md overflow-hidden">
                  <Image src={imgSrc} alt="" fill className="object-cover group-hover:scale-105 transition-all" />
                </div>
                {/* <CardHeader>
                  <CardTitle>Head {index + 1}</CardTitle>
                  <CardDescription>Get started with our interactive Dev Ops learning path, that teaches you all the necessary tools and skills you need to become a proficient dev ops engineer</CardDescription>
                </CardHeader> */}
                {/* <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent> */}
                <CardFooter className="px-0 flex-col items-start text-sm text-muted-foreground">
                  <span className="text-lg text-foreground font-semibold">{title}</span>
                  <span>Aryan Singh</span>
                  <section className="flex gap-1 items-center">
                    <span className="text-yellow-500/80 font-semibold">4.7</span>
                    <Star className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" />
                    {/* <StarHalf className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" /> */}
                    {/* <span className="text-muted-foreground">21.5k Enrolled</span> */}
                  </section>
                </CardFooter>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 h-12 w-12" />
      <CarouselNext className="-right-4 h-12 w-12" />
    </Carousel>
  )
}
