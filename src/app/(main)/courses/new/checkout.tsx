import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Circle,
  Folder,
  NotebookText,
  Play,
  PlayCircle,
  Phone,
  Smartphone,
  Star,
} from "lucide-react";
import React from "react";

export default function Checkout() {
  return (
    <section className="flex flex-col gap-3 min-w-[25%] shrink-0">
      <div className="bg-gradient-to-b from-head/30 to-second/20 flex flex-col gap-1 rounded-md min-h-60 shadow-lg backdrop-blur-sm shadow-black/40 p-3">
        <span className="text-xs text-white/80">Complete Course</span>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">₹1000</span>
            <span className="text-sm line-through text-muted-foreground">
              4000
            </span>
          </div>
          <Badge className="bg-prime/50 hover:bg-prime/60 text-white">
            75% off
          </Badge>
        </div>

        <span className="text-white/80 text-sm font-semibold py-2">
          Course Includes:
        </span>
        <div className="flex flex-col gap-2 text-white/60 font-semibold">
          <p className="flex items-center gap-1 text-xs">
            <span className="bg-prime/40 h-6 w-6 grid place-items-center rounded-full text-white/80 font-bold">
              56
            </span>
            hours on demand videos
          </p>
          <p className="flex items-center gap-1 text-xs">
            <span className="bg-prime/40 h-6 w-6 grid place-items-center rounded-full text-white/80 font-bold">
              6
            </span>
            Downloadable Resourses
          </p>
          <p className="flex items-center gap-1 text-xs">
            <span className="bg-prime/40 h-6 w-6 grid place-items-center rounded-full text-white/80 font-bold">
              10
            </span>
            Articles
          </p>
          <p className="flex items-center gap-1 text-xs">
            <span className="bg-prime/40 h-6 w-6 grid place-items-center rounded-full text-white/80 font-bold">
              <Smartphone className="w-3 h-3" />
            </span>
            Mobile Friendly
          </p>
        </div>
        <Button
          size={"lg"}
          className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg mt-3"
        >
          Buy Now
        </Button>
      </div>

      <div className="bg-gradient-to-b from-head/30 to-second/20 flex justify-between rounded-md shadow-lg backdrop-blur-sm shadow-black/40 p-4 px-2">
        <div className="flex items-center gap-1 w-full">
          <span className="text-5xl">🌟</span>
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex w-full justify-between">
              <span className="text-sm font-bold">Rating</span>
              <div className="flex gap-0.5">
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
              </div>
            </div>
            <div className="flex text-xs w-full justify-between">
              <span className="text-white/80">120 Reviews</span>
              <span className="text-prime font-bold">4.78</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
