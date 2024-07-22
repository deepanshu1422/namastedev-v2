import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Dot, Video } from "lucide-react"
import Checkout from "./checkout"
import Reviews from "./reviews"
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Module = {
    total: number;
    items: {
        title: string;
        duration: string;
        chaptersCollection: {
            total: number;
            items: [{
                title: string;
                duration: string;
            }];
        };
    }[];
}

export type Review = {
    courseId: string
    total: number
    items: {
        name: string;
        star: number
        description: string;
        publishedDate: string;
    }[]
}

export default function Details({ title, techStack, description, image, amount, currency, module, courseId, reviews }: { title: string, techStack: string, description: string, image: string, amount: number; currency: string; module: Module, courseId: string; reviews: Review }) {

    const lessons = module.items.reduce((accumulator, currentValue) => accumulator + currentValue.chaptersCollection.total, 0);

    return (
        <div className="tab:p-[2.5rem_5.5rem_3.75rem] max-tab:pt-[2rem] max-tab:pb-[2.5rem] max-tab:px-11 max-phone:px-6 m-auto max-w-[90rem] flex w-full gap-10">
            <div className="flex flex-col w-full gap-10">
                <section className="tab:max-w-2xl flex flex-col gap-3">
                    <h2 className="text-3xl font-bold text-white/80">Course&apos;s Details</h2>
                    <MDXRemote source={description} />
                </section>
                <section className="tab:max-w-2xl flex flex-col gap-1 techStack">
                    <h2 className="text-3xl font-bold text-white/80">Tech Stack</h2>
                    <MDXRemote source={techStack} />
                </section>

                <section className="tab:max-w-2xl flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-white/80">Course&apos;s Content</h2>
                    <div className="flex justify-between">
                        <span className="flex items-center">{lessons} Lessons <Dot className="h-7 w-7" /> 8h 16m 13s </span>
                        <Link href={`/dashboard/course/${courseId}`}><Button className="text-white bg-prime/70 hover:bg-prime/90 text-xs h-8" size={"sm"}>Demo</Button></Link>
                    </div>
                    <Chapters module={module} />
                </section>

                <Reviews courseId={courseId} total={reviews.total} items={reviews.items} />
            </div>

            <Checkout title={title} courseId={courseId} amount={amount} currency={currency} image={image} />
        </div>
    )
}

export function Chapters({ module }: { module: Module }) {

    return (
        <Accordion type="single" collapsible className="w-full border border-prime/30">
            {module.items.map(({ title, duration, chaptersCollection }, i) => (
                <AccordionItem key={i} className="border-t border-prime/40" value={`item-${i + 1}`}>
                    <AccordionTrigger className="bg-second/40 px-5 font-bold text-sm">
                        <div className="flex max-sm:flex-col justify-between w-full items-start sm:items-center">
                            <span>{title}</span>
                            <span className="flex sm:ml-auto text-white/70 items-center pr-2">
                                <span>{chaptersCollection.total} Lessons</span>
                                <span className="flex items-center"><Dot className="h-7 w-7" />{duration}</span>
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 py-8 flex flex-col gap-6">
                        {chaptersCollection.items.map(({ duration, title }, i) => <div key={i} className="flex max-sm:flex-col gap-2 justify-between">
                            <span className="flex gap-2 sm:items-center">
                                <Video className="h-6 w-6" />
                                {title}
                            </span>
                            <span className="font-semibold text-muted-foreground">{duration}</span>
                        </div>)}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
