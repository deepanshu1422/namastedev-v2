"use client";
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
        <div className="tab:pt-[10.5rem] tab:p-[2.5rem_4.75rem] max-tab:pt-[12rem] max-tab:pb-[0.5rem] m-auto max-w-[89rem] flex max-tab:flex-col text-white">
          <section className="grid place-content-start max-tab:px-11 max-phone:px-6 gap-2">
            <h1
              className={`tab:max-w-3xl font-jakarta phone:text-[3.0rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-pretty`}
            >
              {title}
            </h1>

            <p className="max-w-3xl max-tab:text-sm max-tab:leading-6 text-white/80">
              {desc}
            </p>

            <span className="flex mt-3 w-full max-w-2xl">
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for courses" className="rounded-none outline-none border-e-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none bg-second/50 focus:bg-second/70 transition-all p-6 tab:p-7" />
              <Button className="text-white bg-prime/70 rounded-none p-6 tab:p-7 px-5 hover:bg-prime/90" ><Search className="tab:h-6 h-5 tab:w-6 w-5" /></Button>
            </span>

            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-muted-foreground flex gap-1 font-bold items-center"><Filter className="w-4 h-4" />Filter</span>
              <div className="flex flex-wrap gap-2 max-phone:text-[13px]">
                {select.map((e, i) => (<button key={i} className="rounded border-prime text-prime px-2 py-1 text-muted-foreground transition-all duration-300">{e} <X className="h-4 w-4" /></button>))}
                {filter.map((e, i) => (<button key={i} className="rounded bg-second/40 hover:bg-second/70 hover:text-white px-2 py-1 text-muted-foreground transition-all duration-300">{e}</button>))}
              </div>
            </div>

          </section>
          {/* <div className="flex-1 max-tab:hidden flex max-tab:pt-10 drop-shadow-[5px_6px_10px_#07928190] max-tab:pb-20">
            <div className="relative mx-auto tab:-translate-y-10">
              <Image src={"/templates/ai-saas.png"} alt="30DC Products Templates" height={332} width={332} />
              <Image className="absolute top-10 left-10 z-[1]" src={"/templates/blog.png"} alt="30DC Products Templates" height={332} width={332} />
              <Image className="absolute top-20 left-20 z-[2]" src={"/templates/dev-port.png"} alt="30DC Products Templates" height={332} width={332} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
