"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRightFromSquare, TicketPercent } from "lucide-react";
// import { CarouselVertical } from "@/components/blog-comps/carousel-vertical";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero({
    title,
    desc,
    heroImage,
    details,
    images,
    checkout,
    live
}: {
    title: string;
    desc: string;
    heroImage: string;
    details: string[],
    images: string[]
    checkout: string,
    live: string
}) {
    const [state, setState] = useState(0)
    return (
        <div
            className={`w-full grid relative min-h-[400px] bg-zinc-950`}
        >
            <Image
                alt="community image"
                fill
                src={heroImage}
                className="object-contain object-top opacity-10 pointer-events-none"
            />
            <div className="relative bg-gradient-to-t from-bg from-0% to-transparent to-50%">
                <div className="relative tab:p-[6.5rem_5.5rem_4.75rem] max-tab:pt-[5rem] max-tab:pb-[2.5rem] m-auto max-w-[90rem] flex flex-auto max-tab:flex-col w-full justify-between text-white gap-3 sm:gap-7 h-full">
                    <section className="grid gap-3 h-fit tab:max-w-[50%]">
                        <Link href={"/products"} className="flex text-white/70 items-center gap-2 w-fit hover:text-white transition-all hover:underline max-tab:px-11 max-phone:px-6">
                            <ArrowLeft className="h-3 w-3" />
                            <span className="uppercase font-semibold tracking-wide text-xs">Back</span>
                        </Link>
                        <h1
                            className={`tab:max-w-xl max-tab:max-w-2xl font-jakarta text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-[3rem] max-tab:px-11 max-phone:px-6`}
                        >
                            {title}
                        </h1>

                        <div className="flex flex-col gap-2">
                            <Image src={`/templates/${images[state]}` ?? heroImage} alt={title} height={700} width={700} />

                            <Link href={live} target="_blank" className={buttonVariants({ variant: "link", size: "lg", className: "text-lg max-tab:mx-6 gap-1" })} >Live Preview <ArrowUpRightFromSquare className="w-4 h-4" /></Link>

                            <section className="flex gap-4 mx-auto">
                                {images?.map((e, i) => (
                                    <div onClick={() => setState(i)} key={i} className={`relative cursor-pointer aspect-square h-14 bg-prime/30 border-2 ${state === i && "border-prime"} `}>
                                        <Image className="object-cover" src={`/templates/${e}`} alt='30DC AI SaaS Template' fill />
                                    </div>
                                ))}
                            </section>
                        </div>

                        <p className="max-w-2xl max-tab:px-11 max-phone:px-6 max-tab:leading-6 line-clamp-3 text-white/80 max-sm:text-sm">
                            {desc}
                        </p>
                        <div className="max-tab:hidden py-2 flex flex-col gap-2 max-tab:px-11 max-phone:px-6">
                            <span className="text-lg uppercase font-semibold text-white/80">Details</span>
                            <ul className="flex flex-col gap-1 text-sm list-disc list-inside text-white/70">
                                {details?.map((e, i) => (
                                    <li key={i} className="list-item">{e}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="relative h-full flex-1">
                        <Price checkout={checkout} />
                    </section>

                    <div className="tab:hidden py-2 flex flex-col gap-2 max-tab:px-11 max-phone:px-6">
                        <span className="text-lg uppercase font-semibold text-white">Details</span>
                        <ul className="flex flex-col gap-2 text-sm list-disc list-inside text-white/70">
                            {details?.map((e, i) => (
                                <li key={i} className="list-item">{e}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Price({ checkout }: { checkout: string }) {
    return (
        <div className="w-full h-fit p-4 sticky top-52">
            <Link href={checkout} target="_blank" className="p-9 py-12 max-w-lg bg-gradient-to-b from-head to-second/20 rounded-md flex flex-col gap-4 sm:gap-7 relative max-tab:mx-auto ml-auto shadow-lg">
                <section className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="uppercase text-white/60 sm:text-lg font-semibold">discounted price</span>
                        <span className="uppercase text-white text-3xl sm:text-5xl font-bold flex gap-2 items-center">$20<span className="text-muted-foreground/70 italic text-2xl sm:text-3xl line-through">$25</span></span>
                    </div>
                    <Image alt="30DayCoding New Challenge"
                        src="/discount.gif"
                        height={200}
                        width={200}
                        className="absolute -top-10 right-0 max-tab:h-36 max-tab:w-36" />
                </section>
                <section className="flex flex-col gap-3">
                    <Button size={"lg"} className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >Buy Now</Button>
                    <span className="flex gap-2 max-sm:text-sm items-center"><TicketPercent className="sm:w-6 sm:h-6 h-5 w-5" />Get Access to all Resources Now.</span>
                </section>
            </Link>
        </div>
    )
}