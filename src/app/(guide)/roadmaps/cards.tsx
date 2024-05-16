"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { roadmapsData } from "@/util/globals";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cards({ data }: { data: typeof roadmapsData }) {
  return data.length > 0 ? (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[84rem] mx-auto  px-4 lg:px-8 py-8">
      {data.map(({ name, description }, i) => (
        <Card
          key={i}
          title={name}
          description={description}
          link={"#"}
          image={
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-2xl font-bold tracking-tight">No Such Roadmaps</h3>
        <p className="text-sm max-w-64 text-muted-foreground">
          You can request a new roadmaps.
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
    <Link
      href={link}
      className="shadow-lg flex flex-col bg-second border relative group"
    >
      <div className="overflow-hidden bg-bg w-full h-60 shadow-lg relative">
        <Image
          className="absolute object-cover group-hover:scale-105 transition-transform duration-200"
          fill
          src={image}
          loader={() => image}
          alt={title}
        />
      </div>
      <div className="absolute bottom-0 left-0 p-3 py-4 flex flex-col flex-1 bg-gradient-to-t from-bg/50 from-50% to-transparent h-full">
        <div className="flex flex-col gap-1 mt-auto">
          <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
          <p className="max-sm:text-sm text-white/90 leading-5 font-medium line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
