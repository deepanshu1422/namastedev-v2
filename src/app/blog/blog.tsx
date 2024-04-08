"use client";

import Reveal from "@/components/framer/reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="m-auto flex flex-col items-start justify-between tab:px-[5.5rem] max-tab:px-11 max-phone:px-6 py-5 pb-14 gap-10 max-w-[75rem]">
      <Reveal width="100%">
        <div className="w-full flex max-md:flex-col-reverse gap-3 bg-second/40 rounded-md">
          <div className="lg:min-h-96 lg:w-6/12 h-full w-full flex flex-col gap-3 max-md:px-6 p-12 max-md:pt-0">
            <Reveal>
              <span className="text-2xl lg:text-3xl font-semibold max-w-2xl">
                Why Product Design must learning Motion
              </span>
            </Reveal>
            <Reveal>
              <p className="text-xs md:max-w-[70%] leading-6 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                nisi error esse amet nulla vitae, voluptatem alias aut fuga
                explicabo ea est. Aliquid soluta
              </p>
            </Reveal>
            <Reveal>
              <section className="flex gap-3 flex-wrap">
                <button className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 duration-200 border-prime bg-second box-border text-[0.65rem]">
                  Live Project
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 duration-200 border-prime bg-second box-border text-[0.65rem]">
                  UI/UX
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 duration-200 border-prime bg-second box-border text-[0.65rem]">
                  12 Min Read
                </button>
              </section>
            </Reveal>
            <Reveal>
              <button className="flex items-center gap-2 text-sm py-2 text-prime w-fit">
                Read blog <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          </div>
          <div className="lg:min-h-[450px] min-h-20 min-w-60 lg:w-5/12 flex max-md:flex-col lg:flex-col gap-2 lg:gap-3 px-6 p-12 max-md:pb-5 rounded-md overflow-hidden">
            <Image
              src={
                "https://w0.peakpx.com/wallpaper/1017/717/HD-wallpaper-cod-ghost-game-thumbnail.jpg"
              }
              loader={() =>
                "https://w0.peakpx.com/wallpaper/1017/717/HD-wallpaper-cod-ghost-game-thumbnail.jpg"
              }
              alt=""
              width={20}
              height={20}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
