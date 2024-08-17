"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, X } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Btn from "../mentorship/btn";
import YoutubeEmbed from "@/app/(guide)/testimonials/youtube-embed";

export default function Hero({
  title,
  desc,
  heroImage,
  search,
  setSearch,
}: {
  title: string;
  desc: string;
  heroImage: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  const [filter, setFilter] = useState([
    "AI and Blockchain",
    "Backend",
    "Course",
    "Full Stack Development",
    "Job",
    "No Code Tools",
    "Package",
    "Programming Language",
    "Project",
    "Software & Technology",
  ]);

  const [select, setSelect] = useState([]);

  return (
    <div
      className={`w-full grid relative overflow-hidden min-h-[400px] bg-zinc-950`}
    >
      <Image
        alt="community image"
        fill
        loader={() => heroImage}
        src={heroImage}
        className="object-cover opacity-10 pointer-events-none"
      />
      <div className="relative bg-gradient-to-t from-bg from-0% to-transparent to-50%">
        <div className="sm:pt-[8.5rem] sm:p-[2.5rem_4.75rem] max-sm:pt-16 max-sm:pb-[0.5rem] m-auto max-w-[89rem] flex max-sm:flex-col text-white">
          <section className="flex-1 grid place-content-center max-sm:px-11 max-phone:px-6 gap-2">
            <h1
              className={`sm:max-w-3xl font-jakarta phone:text-[3.0rem] text-[2.3rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-pretty`}
            >
              {title}
            </h1>

            <p className="max-w-3xl max-sm:text-sm max-sm:leading-6 text-white/80 line-clamp-2 tab:line-clamp-3">
              {desc}
            </p>

            <div className="tab:hidden block pt-2 max-h-80 h-full w-full m-auto drop-shadow-[5px_6px_10px_#07928190]">
              <YoutubeEmbed embedId={"nTAHWER3K-0"} />
            </div>

            <span className="relative flex mt-3 w-full max-w-2xl">
              <Search className="absolute left-2.5 top-[30%] h-5 w-5 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for courses"
                className="phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none"
              />
            </span>
          </section>
          <div className="flex-1 max-tab:hidden flex max-tab:py-5 drop-shadow-[5px_6px_10px_#07928190]">
            <div className="h-full w-full tab:w-4/5 m-auto">
              <YoutubeEmbed embedId={"nTAHWER3K-0"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
