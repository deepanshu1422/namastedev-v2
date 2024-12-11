"use client";

import { YTModal } from "@/app/(guide)/testimonials/slider";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Btn({ yt, cover }: { yt: string; cover: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      onClick={() => setOpen(true)}
      className="cursor-pointer mx-auto max-w-xl w-full py-3"
    >
      <AspectRatio ratio={16 / 9} className="group bg-muted">
        <Image
          src={cover}
          alt="30 days coding mentorship"
          fill
          className="rounded-md object-cover shadow-xl"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-active:-translate-y-[58%] group-hover:-translate-y-2/3 transition-transform">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
            <Play className="w-8 h-8 stroke-[3] fill-white" />
          </div>
        </div>
      </AspectRatio>
      <YTModal url={yt} open={open} setOpen={setOpen} />
    </div>
  );
}
