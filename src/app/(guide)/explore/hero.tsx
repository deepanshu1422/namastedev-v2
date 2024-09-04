import { Input } from "@/components/ui/input";
import { projectsData, roadmapsData } from "@/util/globals";
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

export default function Hero() {
  return (
    <div className="w-full text-white bg-bg flex flex-col px-4 pt-8 pb-10 lg:py-8 lg:px-8">
      <section className="flex flex-col gap-1.5 max-w-7xl w-full mx-auto ">
        <h1 className="text-2xl md:text-3xl font-semibold">Explore Roadmaps</h1>
        <p className="text-sm text-muted-foreground">These paths are structured roadmaps to achieve a broader skillset.</p>
        <Slider />
        <Link href={"/courses"}
          className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 rounded-md w-fit self-end"
        >
          <span className="text-sm">Explore all Roadmaps</span>
          {/* <ArrowRight className="max-md:hidden h-4 w-4" /> */}
        </Link>
      </section>
    </div>
  );
}

export function Slider() {
  return (
    <Carousel opts={{
      loop: true
    }} className="py-3">
      <CarouselContent>
        {roadmapsData.map(({ name, description, slug }, index) => (
          <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3" key={index}>
            <Link href={`/roadmaps/${slug}`} className="p-1">
              <Card className="select-none bg-card/50">
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription className="line-clamp-3">{description}</CardDescription>
                </CardHeader>
                <CardContent className="max-md:hidden flex items-center justify-center p-10">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                </CardContent>
                <CardFooter className="flex-col items-start text-sm text-muted-foreground">
                  <span>4.8k Students Enrolled</span>
                  <section className="flex gap-1 items-center">
                    <span className="text-yellow-500/80 font-semibold">5</span>
                    <Star className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" />
                    <span className="text-muted-foreground">21.5k reviews</span>
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
