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
import Image from "next/image";

export default function Interview() {
    return (
        <div className="w-full text-white bg-bg flex flex-col px-4 pt-8 pb-10 lg:py-8 lg:px-8">
            <section className="flex flex-col gap-1.5 max-w-7xl w-full mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold">Prepare for your upcoming interview</h2>
                <p className="text-sm text-muted-foreground">Use interview kits to simulate real-world interview situations and help you get ready for the big day</p>
                <Slider />
                {/* <Link href={"/mentorship"}
                    className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 rounded-md w-fit self-end"
                >
                    <span className="text-sm">See Full Courses</span>
                    <ArrowRight className="max-md:hidden h-4 w-4" />
                </Link> */}
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
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem className="max-sm:basis-4/5 sm:basis-1/2 md:basis-1/3  xl:basis-1/4" key={index}>
                        <Link href={"https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"} className="p-1 group">
                            <Card className="select-none flex flex-col gap-4 bg-transparent border-none">
                                <div className="relative bg-card/50 min-h-36 min-w-16 rounded-md overflow-hidden">
                                    <Image src={"/mentorship.jpeg"} alt="" fill className="object-cover group-hover:scale-105 transition-all" />
                                </div>
                                {/* <CardHeader>
                                    <CardTitle></CardTitle>
                                </CardHeader> */}
                                {/* <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent> */}
                                <CardFooter className="px-0 flex-col items-start text-sm text-muted-foreground">
                                    <span className="text-foreground pb-2 text-2xl font-semibold leading-none tracking-tight">1:1 Mentorship</span>
                                    <span>Interview by Deepanshu Udhwani</span>
                                    <section className="flex gap-1 items-center">
                                        <span className="text-muted-foreground">21 Interviews Done</span>
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
