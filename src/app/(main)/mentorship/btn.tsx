'use client'

import { YTModal } from "@/app/(guide)/testimonials/slider";
import { Play } from "lucide-react";
import React from "react";

export default function Btn() {
    const [open, setOpen] = React.useState(false);
    return (
        <button onClick={() => setOpen(true)} className='h-20 w-20 rounded-full bg-white border-4 border-prime shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Play className='h-10 w-10 fill-prime text-prime m-auto drop-shadow-xl shadow-prime translate-x-0.5' />
            <YTModal url={"xjyfuYXGmMs"} open={open} setOpen={setOpen} />
        </button>
    )
}
