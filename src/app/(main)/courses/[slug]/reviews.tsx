'use client'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { CornerDownRight, Star } from "lucide-react";
import { Review as ReviewType } from "./details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Suspense, useState } from "react";
import getReviews from "../../../../../actions/getReviews";

export default function Reviews({ items, total, courseId }: ReviewType) {

    const [pending, setPening] = useState(false)
    const [review, setReview] = useState(items)

    const moreReviews = async () => {
        setPening(true)
        const data = await getReviews({ courseId, skip: review.length })
        setReview([...review, ...data])
        setPening(false)
    }


    return (
        <section className="max-w-2xl flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-white/80">Reviews</h2>
            <div className="flex flex-col gap-6">
                {total > 0 ? review.map(({ description, name, publishedDate, star }, i) => {
                    return (<Review key={i} name={name} date={publishedDate} review={description} stars={star + 1} />)
                }) : <div className="w-full flex h-20">
                    <Badge variant={"outline"} className="rounded m-auto text-base">No Reviews Yet</Badge>
                </div>}
                {total !== review.length && <Button disabled={pending} onClick={() => moreReviews()} variant={"outline"} className="gap-2 disabled:cursor-wait"><Star className="text-white h-4 w-4 fill-white" />Load More</Button>}
                {/* <Reply name="Mohit Varma" date={new Date("2024-07-01T12:21:16.234Z")} review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae suscipit sequi fugit veritatis vero, officiis consequatur ut eius nam, veniam eveniet a quidem nulla id harum minus pariatur ducimus." /> */}
            </div>
        </section>
    )

}

function Review({ name, stars, date, review }: { name: string; stars: number; date: string; review: string }) {
    return (
        <div className="flex gap-3 tab:max-w-lg w-full">
            <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>{name.split(" ").map(e => e[0]).join("")}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <span className="font-bold text-lg">{name}</span>
                    <div className="flex items-center gap-3">
                        <span className="flex gap-1.5">
                            {Array.from({ length: stars }).map((e, i) => (
                                <Star key={i} className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                            ))}
                            {Array.from({ length: 5 - stars }).map((e, i) => (
                                <Star key={i} className="fill-bg stroke-lime-500/60 h-4 w-4" />
                            ))}
                        </span>
                        <span className="italic">{new Date(date).toLocaleDateString()}</span>
                    </div>
                </div>

                <p>{review}</p>
            </div>
        </div>
    )
}


function Reply({ name, date, review }: { name: string; date: Date; review: string }) {
    return (
        <div className="flex gap-3 tab:max-w-lg w-full translate-x-4">
            <CornerDownRight className="h-14 w-14 -translate-y-2 text-white/50" />
            <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>{name.split(" ").map(e => e[0]).join("")}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <span className="font-bold text-lg">{name}</span>
                    <span className="italic">{date.toLocaleDateString()}</span>
                </div>

                <p>{review}</p>
            </div>
        </div>
    )
}
