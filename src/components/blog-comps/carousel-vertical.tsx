"use client";
import * as React from "react";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselVertical() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-full max-w-xs max-lg:hidden"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card className="border-second overflow-hidden">
                <CardContent className="flex p-0">
                  <Image
                    width={90}
                    height={90}
                    className="min-h-20 w-2/5 object-cover"
                    alt="blog image"
                    loader={() =>
                      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE5fHx3b3JrfGVufDB8fHx8MTcwODU4MDA2Nnww&ixlib=rb-4.0.3&q=80&w=1200"
                    }
                    src={
                      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE5fHx3b3JrfGVufDB8fHx8MTcwODU4MDA2Nnww&ixlib=rb-4.0.3&q=80&w=1200"
                    }
                  />
                  <section className="p-3 py-2 flex flex-col gap-2">
                    <span className="font-semibold line-clamp-1">
                      Blog Title {index + 1}
                    </span>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique labore accusamus quibusdam atque illum,
                      aspernatur sint cum quaerat placeat veritatis quia impedit
                      porro, vero earum reiciendis harum a excepturi eveniet.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
