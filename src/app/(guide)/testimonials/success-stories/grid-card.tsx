"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Play, PlayCircle } from "lucide-react";

export default function GridCard({
  story,
  setOpen,
  setYtId
}: {
  story: {
    id: number;
    name: string;
    role: string;
    company: string;
    ytId: string;
    thumbnail?: string;
    description: string;
    story: string;
  };
  setOpen: Dispatch<SetStateAction<boolean>>
  setYtId: Dispatch<SetStateAction<string>>
}) {
  return (
    <div
      key={story.id}
      className="flex flex-col bg-card border-[2px] border-prime/40 hover:border-prime/60 transition-all overflow-hidden"
    >
      <div onClick={() => {
        setOpen(true)
        setYtId(story.ytId)
      }} className="relative aspect-video max-h-60 group cursor-pointer">
        <img
          src={story.thumbnail ? story.thumbnail : `https://i3.ytimg.com/vi/${story.ytId}/maxresdefault.jpg`}
          alt={story.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-hover:-translate-y-2/3 transition-transform">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
            <Play className="w-8 h-8 stroke-[3] fill-white" />
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="relative z-0 text-[#0a0a0a] px-6 py-4 w-fit mb-1">
          <div className="absolute inset-0 -rotate-2 bg-lime-400 -z-10 w-fit px-1">
            <h3 className="text-xl font-semibold">{story.name}</h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-1">
          {story.role} at <span className="text-prime">{story.company}</span>
        </p>
        <p className="text font-medium mb-3 text-wrap line-clamp-1">
          {story.description}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-3 text-wrap">
          {story.story}
        </p>
      </div>
    </div>
  );
}
