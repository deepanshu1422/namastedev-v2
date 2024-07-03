"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, TicketPercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
    title,
    image,
    width,
    height,
    author,
    amount,
    currency
}: {
    title: string;
    image: string
    width: number,
    height: number,
    author: string,
    amount: number
    currency: string
}) {
    return (
        <div
            className={`w-full grid bg-zinc-950/60`}
        >
            <div className="tab:p-[4.5rem_5.5rem_3.75rem] max-tab:pt-[3rem] max-tab:pb-[2.5rem] m-auto max-w-[90rem] flex flex-auto max-tab:flex-col w-full justify-between text-white gap-3 sm:gap-7 h-full">
                <section className="grid gap-2 h-fit tab:max-w-[50%]">
                    <Link href={"/courses"} className="flex text-white/70 items-center gap-2 w-fit hover:text-white transition-all hover:underline max-tab:px-11 max-phone:px-6">
                        <ArrowLeft className="h-3 w-3" />
                        <span className="uppercase font-semibold tracking-wide text-sm">Back</span>
                    </Link>

                    <div className="tab:hidden max-tab:px-11 max-phone:px-6 flex flex-col gap-4 relative max-tab:mx-auto">
                        <Image alt="30DayCoding New Challenge"
                            src={image}
                            height={height}
                            width={width * 2}
                            className="bg-prime/20" />
                    </div>

                    <h1
                        className={`text-white/80 tab:max-w-2xl font-jakarta text-[1.8rem] tab:text-[2.5rem] font-extrabold leading-[3rem] max-tab:px-11 max-phone:px-6 text-pretty`}
                    >
                        {title}
                    </h1>

                    <p className="tab:max-w-2xl max-tab:px-11 max-phone:px-6 max-tab:leading-6 line-clamp-3 text-white/60 max-sm:text-sm italic font-semibold">8h 16m 32s of total content</p>

                    <div className="flex items-center gap-3 max-tab:px-11 max-phone:px-6">
                        <section className="flex gap-1.5 items-center">
                            <span className="font-bold text-lime-500/70">5.0</span>
                            <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                            <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                            <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                            <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                            <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                        </section>
                        <span className="text-white/70 font-semibold text-sm">(48 reviews)</span>
                        <span></span>
                    </div>

                    <div className="text-white/70 max-tab:px-11 max-phone:px-6">Author: <span className="text-white font-bold px-1 underline">{author}</span></div>

                    <div className="text-sm text-white/40 max-tab:px-11 max-phone:px-6">Updated 4 months ago</div>

                    <div className="tab:hidden  flex flex-col gap-4 max-tab:px-11 max-phone:px-6">
                        <span className="uppercase text-white text-3xl sm:text-4xl font-bold flex gap-2 items-center">{currency} {amount}<span className="text-muted-foreground/70 italic text-2xl sm:text-3xl line-through">{amount * 4}</span></span>
                        <Button size={"lg"} className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >Buy Now</Button>
                        <span className="flex gap-2 max-sm:text-sm items-center"><TicketPercent className="sm:w-6 sm:h-6 h-5 w-5" />Get Access to all Resources Now.</span>
                    </div>
                </section>
            </div>
        </div>
    );
}