"use client";
import Reveal from "@/components/framer/reveal";
import { CarouselVertical } from "@/components/blog-comps/carousel-vertical";
import Image from "next/image";

export default function Hero({
  title,
  desc,
  heroImage,
}: {
  title: string;
  desc: string;
  heroImage: string;
}) {
  return (
    <Reveal>
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
          <div className="tab:p-[12.5rem_5.5rem_6.75rem] max-tab:pt-[12rem] max-tab:pb-[2.5rem] m-auto max-w-[75rem] flex justify-between text-white">
            <section className="grid gap-7">
              <h1
                className={`max-w-xl font-jakarta phone:text-[3.5rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight max-tab:px-11 max-phone:px-6`}
              >
                {title}
              </h1>

              <p className="max-w-[35rem] max-tab:px-11 max-phone:px-6 text-lg max-tab:text-[1.05rem] max-tab:leading-6">
                {desc}
              </p>
            </section>

            <CarouselVertical />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
