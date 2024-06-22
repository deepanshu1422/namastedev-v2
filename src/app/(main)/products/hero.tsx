"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

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
        <div className="tab:pt-[10.5rem] tab:p-[2.5rem_6.75rem] max-tab:pt-[12rem] max-tab:pb-[0.5rem] m-auto max-w-[90rem] flex max-tab:flex-col text-white">
          <section className="grid place-content-start max-tab:px-11 max-phone:px-6">
            <h1
              className={`tab:max-w-xl font-jakarta phone:text-[3.2rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight text-pretty`}
            >
              {title}
            </h1>

            <p className="max-w-[35rem] max-tab:text-[1.05rem] max-tab:leading-6 text-white/80">
              {desc}
            </p>

            <span className="flex my-5 w-full">
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search templates" className="rounded-e-none border-e-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
              <Button className="text-white bg-prime/70 rounded-s-none px-7 hover:bg-prime/90" >Search</Button>
            </span>
          </section>
          <div className="flex-1 max-tab:hidden flex max-tab:pt-10 drop-shadow-[5px_6px_10px_#07928190] max-tab:pb-20">
            <div className="relative mx-auto tab:-translate-y-10">
              <Image src={"/templates/ai-saas.png"} alt="30DC Products Templates" height={332} width={332} />
              <Image className="absolute top-10 left-10 z-[1]" src={"/templates/blog.png"} alt="30DC Products Templates" height={332} width={332} />
              <Image className="absolute top-20 left-20 z-[2]" src={"/templates/dev-port.png"} alt="30DC Products Templates" height={332} width={332} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
