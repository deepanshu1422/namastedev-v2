"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { TicketPercent } from "lucide-react";
// import { CarouselVertical } from "@/components/blog-comps/carousel-vertical";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
    title,
    desc,
    heroImage,
    startDate,
}: {
    title: string;
    desc: string;
    heroImage: string;
    startDate: string;
}) {
    return (
        <div
            className={`w-full grid relative overflow-hidden min-h-[400px] bg-zinc-950`}
        >
            {/* <Image
                alt="community image"
                fill
                loader={() => heroImage}
                src={heroImage}
                className="object-cover opacity-10 pointer-events-none"
            /> */}
            <div className="relative bg-gradient-to-t from-bg from-0% to-transparent to-50%">
                <div className="tab:p-[8.5rem_5.5rem_4.75rem] max-tab:pt-[5rem] max-tab:pb-[2.5rem] m-auto max-w-[90rem] flex flex-auto max-tab:flex-col tab:items-end items-center w-full justify-between text-white gap-7">
                    <section className="grid gap-7 h-fit max-tab:place-items-center max-tab:text-center">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2 w-fit px-9 shadow-lg shadow-second p-3 rounded-full border border-prime">
                                <div className="bg-red-700/40 p-1 rounded-full animate-pulse" >
                                    <div className="bg-red-500 h-2.5 w-2.5 rounded-full"></div>
                            </div>
                            <span className="uppercase font-semibold tracking-wide">Live Cohort</span>
                        </div>
                        <div className="flex items-center gap-2 w-fit px-9 shadow-lg shadow-second p-3 rounded-full border border-prime">
                                <span className="uppercase font-semibold tracking-wide">📅 {startDate}</span>
                            </div>
                        </div>
                        <h1
                            className={`tab:max-w-xl max-tab:max-w-2xl font-jakarta phone:text-[3.5rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight max-tab:px-11 max-phone:px-6`}
                        >
                            {title}
                        </h1>

                        <p className="tab:max-w-[35rem] max-w-4xl max-tab:px-11 max-phone:px-6 text-lg max-tab:text-[1.05rem] max-tab:leading-6 line-clamp-3">
                            {desc}
                        </p>
                    </section>
                    <AspectRatioDemo />
                </div>
            </div>
        </div>
    );
}

function AspectRatioDemo() {
    return (
        <div className="w-full h-fit flex-1 p-4">
            <Link href={"https://rzp.io/l/psRXoa6"} target="_blank" className="p-9 py-12 max-w-lg bg-gradient-to-b from-head to-second/20 rounded-md flex flex-col gap-4 sm:gap-7 relative max-tab:mx-auto ml-auto shadow-lg">
                <section className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="uppercase text-white/60 sm:text-lg font-semibold">live cohort price</span>
                        <span className="uppercase text-white text-3xl sm:text-5xl font-bold flex gap-2 items-center">Rs.5,499<span className="text-muted-foreground/70 italic text-2xl sm:text-3xl line-through">Rs.14,999</span></span>
                    </div>
                    {/* <Image alt="30DayCoding New Challenge"
                        src="/NEW2.gif"
                        height={200}
                        width={200}
                        className="absolute -top-10 right-0 max-tab:h-36 max-tab:w-36" /> */}
                </section>
                <section className="flex flex-col gap-3">
                    <Button size={"lg"} className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >Join Now</Button>
                    <span className="flex gap-2 max-sm:text-sm items-center"><TicketPercent className="sm:w-6 sm:h-6 h-5 w-5" />Early Access starting soon.</span>
                </section>
            </Link>
        </div>
    )
}
