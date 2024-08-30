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
                <h2 className="text-2xl md:text-3xl font-semibold">Know what our students say about us</h2>
                <p className="text-sm text-muted-foreground">These are the love we get from our users</p>
                <Slider />
            </section>
        </div>
    );
}

export function Slider() {

    const testimonials = [{
        time: "3/10/2024 21:53:08",
        name: "Utsav Bansal",
        email: "ubansal1996@gmail.com",
        review:
            "Truly supportive mentors, Through regular one-on-one sessions and constructive feedback, Aryan has helped me refine my technical skills.",
    },
    {
        time: "3/10/2024 22:04:05",
        name: "Darshan ",
        email: "darsingh07@yahoo.com",
        review:
            "I have taken a mern stack course ,its a veey good course for professional as well as beginner,deep learning concepts plenty of projects. Interview question etc lot of things its a job ready course in such a small amount. \nThankyou",
    },
    {
        time: "3/10/2024 22:09:11",
        name: "Mohit",
        email: "mohitpatil.np@gmail.com",
        review:
            "Amazing courses with diverse topics and very well taught. And the highlight is the price compared to the others. Learning MERN rn, going to go for nextjs course afterwards. ",
    },
    {
        time: "3/10/2024 23:09:03",
        name: "Nimish Sharma",
        email: "snimish123@gmail.com",
        review:
            "Content across 30days coding is great and its really easy to understand, and best part about it is project based learning which starts with beginner to intermediate to hard and handholding support by aryan and his team is impeccable. ",
    },
    {
        time: "3/10/2024 23:53:02",
        name: "Aditya Nitin Pawar",
        email: "adityanitinpawar9@gmail.com",
        review:
            "Love the courses and the personal advice. Definitely most practical courses in terms of learning things from first principles and then slowly increasing the application part along the course.",
    },]

    return (
        <Carousel opts={{
            loop: true
        }} className="w-full py-3">
            <CarouselContent>
                {testimonials.map(({ name, review }, index) => (
                    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3" key={index}>
                        <div className="p-1">
                            <Card className="flex flex-col select-none bg-second/50 relative overflow-hidden border-prime/40 min-h-80">
                                <Quote className="text-prime/70 h-32 w-32 absolute -top-6 -left-4 -z-20" />
                                <CardHeader>
                                    {/* <CardTitle>Head {index + 1}</CardTitle> */}
                                    <p className="text-foreground/90 pt-5 md:pt-10">{review}</p>
                                </CardHeader>
                                <CardFooter className="flex flex-col items-start gap-3 text-muted-foreground mt-auto">
                                    <div className="flex gap-2">
                                        <StudentAvatar name={name} />
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
                                            <span>{name}</span>
                                        </section>
                                    </div>
                                    {/* <Link href={"https://courses.30dayscoding.com/s/store"} className="flex gap-2 transition-all items-center bg-card rounded-md px-3 py-2 hover:text-prime">
                                        <Video className="sm:h-7 h-5 sm:w-7 w-5" />
                                        <span className="font-semibold max-sm:text-sm">Learn Now</span>
                                    </Link> */}
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



export function StudentAvatar({ name }: { name: string; }) {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.pdng" alt="" />
            <AvatarFallback>{name.toUpperCase().split(" ").map(e => e[0]).join("")}</AvatarFallback>
        </Avatar>
    )
}
