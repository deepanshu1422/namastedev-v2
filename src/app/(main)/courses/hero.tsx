"use client";
import YoutubeEmbed from "@/app/(main)/testimonials/youtube-embed";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Btn from "../mentorship/btn";
import Link from "next/link";

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
          <section className="my-auto flex-1 flex flex-col items-center h-full max-sm:px-11 max-phone:px-6 gap-2">
            <h1
              className={` sm:text-center tab:text-start sm:max-w-3xl phone:text-5xl text-3xl font-extrabold leading-[1.3] sm:leading-[1.2]`}
            >
              
              The BEST courses trusted by <Link href={"/mentorship"} className="bg-prime/50">20,000+ developers</Link> from 10+ countries
            </h1>

            <p className="max-w-3xl max-sm:text-sm max-sm:leading-6 text-white/80 line-clamp-2 tab:line-clamp-3 sm:text-center tab:text-start">
              {desc}
            </p>

            <div className="tab:hidden block pt-2 max-h-80 h-full max-w-xs m-auto w-full drop-shadow-[5px_6px_10px_#07928190] ">
              <Btn cover="/welcome.jpg" yt={"nTAHWER3K-0"} />
            </div>

            {/* <span className="relative flex mt-3 w-full max-w-2xl">
              <Search className="absolute left-2.5 top-[30%] h-5 w-5 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for courses"
                className="phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none"
              />
            </span> */}
          </section>
          <div className="flex-1 max-tab:hidden flex max-tab:py-5 drop-shadow-[5px_6px_10px_#07928190]">
            <div className="h-full w-full tab:w-4/5 m-auto">
              <Btn cover="/welcome.jpg" yt={"nTAHWER3K-0"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
