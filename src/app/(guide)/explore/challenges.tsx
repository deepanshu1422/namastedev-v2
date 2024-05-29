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

export default function Challenge() {
  return (
    <div className="w-full text-white bg-bg flex flex-col px-4 pt-8 pb-10 lg:py-8 lg:px-8">
      <section className="flex flex-col gap-1.5 max-w-7xl w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Got time? Start exploring our products for free</h2>
        <p className="text-sm text-muted-foreground">Coding products on 30 Days Coding are great to form a everyday coding habit.</p>
        <Slider />
        {/* <Link href={"/mentorship"}
          className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 rounded-md w-fit self-end"
        >
          <span className="text-sm">See All Challenges</span>
        </Link> */}
      </section>
    </div>
  );
}

export function Slider() {

  const products = [
    {
      name: "30 Days of DSA",
      link: "https://dsa.30dayscoding.com/"
    },
    {
      name: "30DC Jobs and Coding Challenges",
      link: "https://nas.io/30dc-challenges-n-hackathons"
    }, 
    {
      name: "AI Mock Interview",
      link: "https://talktohire.com/"
    },
    {
      name: "Resume Builder",
      link: "https://resumebldr.vercel.app/app/personal-detail"
    },
    {
      name: "Premium Guides",
      link: "https://courses.30dayscoding.com/products"
    },
  ]

  return (
    <Carousel opts={{
      loop: true
    }} className="w-full py-3">
      <CarouselContent>
        {products.map(({ name, link }, index) => (
          <CarouselItem className="max-sm:basis-4/5 sm:basis-1/2 md:basis-1/3  xl:basis-1/4" key={index}>
            <Link href={link} className="p-1">
              <Card className="select-none bg-card/50 min-h-60 flex flex-col">
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  {/* <CardDescription>Get started with our interactive Dev Ops learning path, that teaches you all the necessary tools and skills you need to become a proficient dev ops engineer</CardDescription> */}
                </CardHeader>
                {/* <CardContent className="flex items-center justify-center p-6">
                </CardContent> */}
                <CardFooter className="mt-auto flex-col gap-4 items-start text-sm text-muted-foreground">
                  <Image src={"/logo.png"} alt="" width={35} height={35} />
                  <span>4.8k Students practicing</span>
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