'use client'

import React, { Suspense, useState } from 'react'
import Link from "next/link";
import {
    Book,
    Box,
    ChevronLeft,
    ChevronRight,
    ChevronRightCircle,
    Circle,
    Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Player from "./video-player";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import UserProfile from "@/app/(users)/user-profile";
import NewPlayer from './vidstack';
export default function Main({ title, modulesCollection }: {
    title: string;
    modulesCollection: {
        total: number,
        items: {
            title: string,
            duration: string,
            chaptersCollection: {
                total: number,
                items: [
                    {
                        title: string,
                        duration: string,
                        youtubeId: string
                    },

                ]
            }
        }[]
    }
}) {

    const [vidIndex, setVidIndex] = useState<{
        modIndex: number;
        chapterIndex: number;
    }>({
        modIndex: 0,
        chapterIndex: 0
    })

    function prevVideo() {
        if (vidIndex.chapterIndex === 0 && vidIndex.modIndex === 0) return 0
        if (vidIndex.chapterIndex === 0 && vidIndex.modIndex !== 0) {
            setVidIndex({
                modIndex: vidIndex.modIndex - 1,
                chapterIndex: modulesCollection.items[vidIndex.modIndex - 1].chaptersCollection.items.length - 1
            })
        }
        if (vidIndex.chapterIndex !== 0) {
            setVidIndex({ ...vidIndex, chapterIndex: vidIndex.chapterIndex -= 1 })
        }
    }

    function nextVideo() {
        if (vidIndex.chapterIndex ===
            modulesCollection.items[modulesCollection.items.length - 1].chaptersCollection.items.length - 1 && vidIndex.modIndex === modulesCollection.items.length - 1) return 0
        if (vidIndex.chapterIndex === 0 && vidIndex.modIndex !== 0) {
            setVidIndex({
                modIndex: vidIndex.modIndex - 1,
                chapterIndex: modulesCollection.items[vidIndex.modIndex - 1].chaptersCollection.items.length - 1
            })
        }
        if (vidIndex.chapterIndex !== 0) {
            setVidIndex({ ...vidIndex, chapterIndex: vidIndex.chapterIndex -= 1 })
        }
    }

    return (
        <>
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
                    <div className="sticky z-10 top-0 flex items-center border-b bg-bg">
                        <Link href="/" className="h-14 bg-muted/40 px-4 py-2 lg:h-[60px] lg:px-6 w-full flex items-center gap-2 font-semibold">
                            <Image src={"/logo.png"} alt="logo" width={35} height={35} />
                            <span className="max-lg:hidden">30DC</span>
                        </Link>
                    </div>
                    <div className="flex-1 overflow-y-auto overflow-x-hidden horizontal-scroll">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            {modulesCollection.items.map(({ title, chaptersCollection }, modIndex) => (
                                <div key={modIndex} className="flex flex-col gap-2">
                                    <button
                                        className={`flex items-center gap-2 rounded-lg pr-2 max-lg:py-3 lg:py-2 text-white/70 transition-all font-extrabold bg-white bg-clip-text`}
                                    >
                                        <Book className="h-4 w-4" />
                                        <span className="hidden text-left md:block">
                                            {title}
                                        </span>
                                    </button>

                                    {chaptersCollection.items.map(({ title }, chapterIndex) => (
                                        <div key={chapterIndex} className="flex flex-col gap-2">
                                            <button
                                                onClick={() => setVidIndex({ chapterIndex, modIndex })}
                                                className={`flex items-center gap-2 rounded-lg px-2 max-lg:py-3 lg:py-2 transition-all hover:text-prime/90 bg-white/20 bg-clip-text duration-300 ${chapterIndex == vidIndex.chapterIndex && modIndex == vidIndex.modIndex ? "pl-5 text-prime/90" : "text-white/70"}`}
                                            >
                                                {chapterIndex == vidIndex.chapterIndex && modIndex == vidIndex.modIndex ? <ChevronRightCircle className="h-4 w-4 shrink-0" /> : <Circle className="h-4 w-4 shrink-0" />}
                                                <span className="hidden text-xs text-left md:block">
                                                    {title}
                                                </span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </nav>
                    </div>
                    <div className="max-lg:hidden relative mt-auto p-4">
                        <Card>
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>New Courses</CardTitle>
                                <CardDescription>
                                    Upskill yourself with pocket friendly courses — Enroll Now
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Link href={"https://courses.30dayscoding.com/s/store"}>
                                    <Button
                                        size="sm"
                                        className="bg-prime hover:bg-prime/80 text-white w-full"
                                    >
                                        Enroll Now
                                    </Button>
                                </Link>
                            </CardContent>
                            <Image
                                alt="30DayCoding New Challenge"
                                src={"/best.gif"}
                                height={120}
                                width={120}
                                className="absolute top-0 -translate-y-5 translate-x-3 right-0"
                            />
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex flex-col overflow-hidden">
                {/* <div className="h-20" ></div> */}
                <header className="bg-bg">
                    <div className="bg-muted/40 flex items-center gap-4 border-b px-2 h-14 lg:h-[60px]">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="md:hidden px-2"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-full flex flex-col overflow-hidden overflow-y-auto">
                                <>
                                    <nav className="grid gap-2 text-lg font-medium">
                                        <Link
                                            href="#"
                                            className="flex items-center gap-2 text-lg font-semibold"
                                        >
                                            <Image
                                                src={"/logo.png"}
                                                alt="logo"
                                                width={30}
                                                height={30}
                                            />
                                            <span className="sr-only">30DC</span>
                                        </Link>

                                        {modulesCollection.items.map(({ title, chaptersCollection }, i) => (
                                            <button
                                                key={i}
                                                className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground transition-all`}
                                            >
                                                {title}
                                            </button>
                                        ))}
                                    </nav>
                                    <div className="relative mt-auto">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>New Courses</CardTitle>
                                                <CardDescription>
                                                    Upskill yourself with pocket friendly courses — Enroll Now
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Link
                                                    href={
                                                        "https://courses.30dayscoding.com/s/store"
                                                    }
                                                >
                                                    <Button
                                                        size="sm"
                                                        className="bg-prime hover:bg-prime/80 text-white w-full"
                                                    >
                                                        Enroll Now
                                                    </Button>
                                                </Link>
                                            </CardContent>
                                        </Card>
                                        <Image
                                            alt="30DayCoding New Challenge"
                                            src={"/best.gif"}
                                            height={120}
                                            width={120}
                                            className="absolute top-0 -translate-y-10 translate-x-10 right-0"
                                        />
                                    </div>
                                </>
                            </SheetContent>
                        </Sheet>
                        <span className="flex items-center gap-1">
                            <Box className="w-5 h-5 shrink-0" />
                            <h2 className="font-bold line-clamp-1">{title}</h2>
                        </span>
                        <UserProfile />
                    </div>
                </header>
                <div className="flex-1 flex flex-col gap-1 items-center p-6 md:pt-10 lg:pt-6 max-md:pt-20 pb-10">
                    <span className="text-xl md:text-2xl lg:text-3xl p-2 rounded-md bg-prime/30 mb-3">{modulesCollection.items[vidIndex.modIndex].chaptersCollection.items[vidIndex.chapterIndex].title}</span>
                    <div className="max-w-[1000px] w-full">
                        <NewPlayer ytId={modulesCollection.items[vidIndex.modIndex].chaptersCollection.items[vidIndex.chapterIndex].youtubeId} title={modulesCollection.items[vidIndex.modIndex].chaptersCollection.items[vidIndex.chapterIndex].title} />
                    </div>
                    <div className='flex justify-between w-full max-w-[1000px]'>
                        <Button onClick={() => prevVideo()} disabled={(vidIndex.modIndex == 0) && (vidIndex.chapterIndex == 0)} variant={"outline"}><ChevronLeft className='h-4 w-4' /> Prev</Button>
                        <Button disabled={vidIndex.chapterIndex ===
                            modulesCollection.items[modulesCollection.items.length - 1].chaptersCollection.items.length - 1 && vidIndex.modIndex === modulesCollection.items.length - 1} variant={"outline"}>Next <ChevronRight className='h-4 w-4' /></Button>
                    </div>
                </div>
            </div></>
    )
}
