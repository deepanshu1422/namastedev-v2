"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { guidesData, projectsData } from "@/util/globals";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cards({ data }: { data: typeof guidesData }) {
  return data.length > 0 ? (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[84rem] mx-auto  px-4 lg:px-8 py-8">
      {data.map(({ title, description, image, url }, i) => (
        <Card
          key={i}
          title={title}
          description={description}
          link={url}
          image={
            "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-2xl font-bold tracking-tight">No Such Gudies</h3>
        <p className="text-sm max-w-64 text-muted-foreground">
          You can request a new gudies.
        </p>
        <Link href={"https://nas.io/30dayscoding"}>
          <Button className="text-white bg-prime">Join Coummunity</Button>
        </Link>
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <div className="shadow-lg flex flex-col bg-second border ">
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
        <section className="flex flex-col gap-2 flex-1">
          <Link href={link} className="flex flex-col gap-2">
            <h3 className="text-lg lg:text-xl font-semibold">{title}</h3>
            <p className="max-sm:text-sm text-muted-foreground font-medium">
              {description}
            </p>
          </Link>
        </section>

        <section className="py-2 mb-auto mt-0 flex flex-col gap-2 w-full">
          {/* <hr className="border-muted-foreground" />
          <span className="flex items-center gap-1 text-muted-foreground">
            <CalendarDays className="w-5 h-5" />
            {date}
          </span> */}
          <Link className="w-full" href={link} target="_blank">
            <Button className="bg-prime/90 w-full hover:bg-prime/70 text-white text-lg font-semibold shadow-[rgb(0,_0,_0)_8px_8px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_4px_4px_0px_0px] rounded-none font-bric">
              Visit Website
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
