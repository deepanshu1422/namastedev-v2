'use client'

import { YTModal } from "@/app/(guide)/testimonials/slider";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Btn({ yt, cover }: { yt: string, cover: string }) {
    const [open, setOpen] = React.useState(false);
    return (
        <div onClick={() => setOpen(true)} className='cursor-pointer mx-auto max-w-xl w-full py-3'>
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                    src={cover}
                    alt="30 days coding mentorship"
                    fill
                    className="rounded-md object-cover shadow-xl"
                />
                <button className='h-20 w-20 rounded-full bg-white border-4 border-prime shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Play className='h-10 w-10 fill-prime text-prime m-auto drop-shadow-xl shadow-prime translate-x-0.5' />
                </button>
            </AspectRatio>
            <YTModal url={yt} open={open} setOpen={setOpen} />
        </div>
    )
}
