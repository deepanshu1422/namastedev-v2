"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { projectsData } from "@/util/globals";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cards({ data }: { data: typeof projectsData }) {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[84rem] mx-auto text-black px-4 lg:px-8 py-8">
      {data.map(({ title, type, category, tech, image, projectURL }, i) => (
        <Card
          key={i}
          title={title}
          type={type}
          category={category}
          tech={tech}
          link={projectURL}
          image={
            image ??
            "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          }
        />
      ))}
    </div>
  );
}

function Card({
  title,
  type,
  category,
  tech,
  image,
  link,
}: {
  title: string;
  type: string;
  category: string[];
  tech: string[];
  image: string;
  link: string;
}) {
  return (
    <div className="shadow-lg flex flex-col">
      <Link
        href={link}
        className="group overflow-hidden bg-bg w-full h-60 shadow-lg relative"
      >
        <Image
          className="absolute object-cover group-hover:scale-105 transition-transform duration-200"
          fill
          src={image}
          loader={() => image}
          alt={title}
        />
      </Link>
      <div className="p-3 py-4 flex flex-col justify-between flex-1">
        <section className="flex flex-col gap-1 flex-1">
          <span className="font-bold flex gap-1 text-prime uppercase">
            <Badge className="text-black rounded" variant={"outline"}>
              {type}
            </Badge>
            {/* <Dot /> */}
            {category.map((category, i) => (
              <Badge
                className="rounded bg-second"
                variant={"secondary"}
                key={i}
              >
                {category}
              </Badge>
            ))}
          </span>
          <Link href={link} className="text-lg lg:text-xl font-semibold">
            {title}
          </Link>
          <section className="flex flex-wrap text-sm gap-2 py-2">
            {tech.map((stack, i) => (
              <button
                key={i}
                className="flex items-center justify-center rounded-md border px-2 py-1 duration-200 border-prime bg-second/10 box-border"
              >
                {stack}
              </button>
            ))}
          </section>
        </section>

        <section className="py-2 mb-auto mt-0 flex flex-col gap-2 w-full">
          {/* <hr className="border-muted-foreground" />
          <span className="flex items-center gap-1 text-muted-foreground">
            <CalendarDays className="w-5 h-5" />
            {date}
          </span> */}
          <Link className="w-full" href={link} target="_blank">
            <Button className="bg-second w-full hover:bg-second/90 text-white text-lg font-semibold shadow-[rgb(0,_0,_0)_8px_8px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_4px_4px_0px_0px] rounded-none">
              Start Building
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
