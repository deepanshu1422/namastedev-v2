"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, X } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function Hero({
  title,
  desc,
  heroImage,
  search,
  setSearch
}: {
  title: string;
  desc: string;
  heroImage: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>
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
    "Software & Technology"])

  const [select, setSelect] = useState([])

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
          <section className="grid place-content-start max-sm:px-11 max-phone:px-6 gap-2">
            <h1
              className={`sm:max-w-3xl font-jakarta phone:text-[3.0rem] text-[2.3rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-pretty`}
            >
              {title}
            </h1>

            <p className="max-w-3xl max-sm:text-sm max-sm:leading-6 text-white/80">
              {desc}
            </p>

            <span className="relative flex mt-3 w-full max-w-2xl">
              <Search className="absolute left-2.5 top-[30%] h-5 w-5 text-muted-foreground" />
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for courses" className="phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" />
              {/* <Button className="text-white bg-prime/70 rounded-none p-6 sm:p-7 px-5 hover:bg-prime/90" ><Search className="sm:h-6 h-5 sm:w-6 w-5" /></Button> */}
            </span>

          </section>
        </div>
      </div>
    </div>
  );
}
