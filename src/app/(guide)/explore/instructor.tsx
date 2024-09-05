import { Input } from "@/components/ui/input";
import { projectsData } from "@/util/globals";
import { ChevronRight, ChevronRightCircle, ChevronRightSquare, Quote, Search, Star, StarHalf } from "lucide-react";

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

export default function Instructor() {
    return (
        <div className="w-full text-white bg-card/50 flex flex-col px-4 pt-8 pb-10 lg:py-8 lg:px-8">
            <section className="flex flex-col gap-1.5 max-w-7xl w-full mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold">Our Instructors</h2>
                <p className="text-sm text-muted-foreground">Learn from best FAANG instructors, any time you want</p>
                <Slider />
            </section>
        </div>
    );
}

export function Slider() {

    const info = [
        {
            name: "Aryan Singh",
            image: "/instructor.jpg"
        },
        {
            name: "Deepanshu Udhwani",
            image: "/instructor2.jpg"
        },
        {
            name: "Abhinav Awasthi",
            image: "/instructor3.jfif"
        },
    ]
    return (
        <Carousel opts={{
            loop: true,
            align: "start"
        }} className="w-full py-3">
            <CarouselContent>
                {info.map(({ name, image }, index) => (
                    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3" key={index}>
                        <div className="p-1">
                            <Card className="select-none bg-second/50 border-prime/40">
                                <div className="flex items-start gap-3 text-muted-foreground p-6">
                                    <div className="flex w-full justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <StudentAvatar image={image} />
                                            <section className="flex flex-col max-md:text-sm">
                                                <span>{name}</span>
                                                <span>4.4k Students</span>
                                                {/* <span>1 course</span> */}
                                            </section>
                                        </div>
                                    </div>
                                    <section className="flex flex-col items-center max-md:text-xs">
                                        <section className="flex gap-1.5 items-center">
                                            <Star className="fill-yellow-500/60 stroke-yellow-500/60 h-4 w-4" />
                                        <span>4.65</span>
                                        </section>
                                        <span>Rating</span>
                                    </section>
                                </div>
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



export function StudentAvatar({ image }: { image: string }) {
    return (
        <Avatar className="h-16 w-16">
            <AvatarImage src={image || "/instructor.jpg"} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
