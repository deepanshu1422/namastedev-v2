"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Details() {
  return (
    <div className="flex flex-col gap-2 tab:w-3/4 w-full">
      <div className="relative aspect-video rounded-md overflow-hidden w-full">
        <Image
          loader={() =>
            "https://cdn.motiondesign.school/uploads/2023/10/blender-and-after-effects.jpg"
          }
          src={
            "https://cdn.motiondesign.school/uploads/2023/10/blender-and-after-effects.jpg"
          }
          alt="blender course"
          fill
          className="object-cover"
        />
        <button className="h-14 tab:h-24 aspect-square bg-white/30 backdrop-blur-lg rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
          <Play className="tab:h-12 h-8 tab:w-12 w-8 fill-white m-auto translate-x-1" />
        </button>
      </div>
    </div>
  );
}
