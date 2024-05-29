import { Input } from "@/components/ui/input";
import { projectsData } from "@/util/globals";
import { ChevronRight, ChevronRightCircle, ChevronRightSquare, Quote, Search, Star, StarHalf, Video } from "lucide-react";

import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link";

export default function Achieve() {
    return (
        <div className="w-full text-white bg-card/50 flex flex-col px-4 pt-8 pb-10 lg:py-8 lg:px-8">
            <section className="flex flex-col gap-1.5 max-w-7xl w-full mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold">See what others are achieving today</h2>
                <p className="text-sm text-muted-foreground">Learning paths are structured roadmaps to achieve a broader skillset.</p>
                <Slider />
            </section>
        </div>
    );
}

export function Slider() {
    return (
        <Carousel opts={{
            loop: true
        }} className="w-full py-3">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3" key={index}>
                        <div className="p-1">
                            <Card className="select-none bg-second/50 relative overflow-hidden border-prime/40">
                                <Quote className="text-prime/70 h-32 w-32 absolute -top-6 -left-4 -z-20" />
                                <CardHeader>
                                    {/* <CardTitle>Head {index + 1}</CardTitle> */}
                                    <p className="text-foreground/90 pt-5 md:pt-10">I have purchased your MERN Stack Course and it&apos;s very amazing and I also have to learn Nextjs,DSA and many more courses from you</p>
                                </CardHeader>
                                <CardContent className="max-md:hidden  p-6">
                                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                </CardContent>
                                <CardFooter className="flex flex-col items-start gap-3 text-muted-foreground">
                                    <div className="flex gap-2">
                                        <StudentAvatar />
                                        <section className="flex flex-col">
                                            <section className="flex gap-1.5 items-center">
                                                {/* <span className="text-head/80 font-semibold">1.6</span> */}
                                                <Star className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" />
                                                <Star className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" />
                                                <Star className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" />
                                                <Star className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" />
                                                <Star className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" />
                                                {/* <StarHalf className="fill-head/60 stroke-head/60 h-4 w-4" /> */}
                                            </section>
                                            <span>Student&apos;s Name</span>
                                        </section>
                                    </div>
                                    <Link href={"#"} className="flex gap-2 transition-all items-center bg-card rounded-md px-3 py-2 hover:text-prime">
                                        <Video className="sm:h-7 h-5 sm:w-7 w-5" />
                                        <span className="font-semibold max-sm:text-sm">Learn React Now</span>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 h-12 w-12" />
            <CarouselNext className="-right-4 h-12 w-12" />
        </Carousel>
    )
}



export function StudentAvatar() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.pdng" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
