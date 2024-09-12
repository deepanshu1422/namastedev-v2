"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";
import { YTModal } from "./slider";
import { Play } from "lucide-react";

function VideoCarousel() {
  const vids = [
    { imgSrc: "/thumbs/t9.jpg", id: "XSbsuxLfQuk" },
    { imgSrc: "/thumbs/t8.jpg", id: "DBHnTU8Glxk" },
    { imgSrc: "/thumbs/t7.jpg", id: "XSbsuxLfQuk" },
    { imgSrc: "/thumbs/t6.jpg", id: "_0byRr0WgZg" },
    { imgSrc: "/thumbs/t5.jpg", id: "G-q_thBCKL8" },
    { imgSrc: "/thumbs/t4.jpg", id: "bAVgLo6jxzA" },
    { imgSrc: "/thumbs/t3.jpg", id: "oi5mWIP1rt0" },
    { imgSrc: "/thumbs/t2.jpg", id: "oi5mWIP1rt0" },
    { imgSrc: "/thumbs/t1.jpg", id: "p3J3KlJbls0" },
    { imgSrc: "/thumbs/t0.jpg", id: "v2ICShDxcaY" },
  ];

  const [vidId, setVidId] = useState("XSbsuxLfQuk");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 1200,
            stopOnFocusIn: false,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
          align: "center",
        }}
        className="w-full pt-5"
      >
        <CarouselContent className="">
          {vids.map(({ id, imgSrc }, index) => (
            <CarouselItem
              onClick={() => {
                setOpen(true);
                setVidId(id);
              }}
              className="basis-4/5 md:basis-1/3 xl:basis-1/5"
              key={index}
            >
              <Card className="overflow-hidden cursor-pointer">
                <CardContent className="group relative flex w-full aspect-[10/16] items-center justify-center p-6">
                  <Image
                    src={imgSrc}
                    fill
                    className="object-cover scale-[1.2]"
                    alt={`30DC Testimonials Part ${index + 1}`}
                  />
                  <div className="absolute right-3 bottom-3 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-active:opacity-70 group-hover:shadow-prime group-hover:scale-110 transition-all">
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
                      <Play className="w-6 h-6 stroke-[3] fill-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 h-12 w-12 top-1/2" />
        <CarouselNext className="-right-4 h-12 w-12 top-1/2" />
      </Carousel>
      <YTModal open={open} setOpen={setOpen} url={vidId} />
    </>
  );
}

export default function VideoSlider() {
  return (
    <div
      className={"grid grid-cols-1 gap-1 w-full max-w-[75rem] m-auto px-6 lg:px-10"}
    >
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Video Testimonials
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-2xl text-center mx-auto text-sm text-white/70 px-10 line-clamp-2 text-balance">
        The love we get from our students can&apos;t go unnoticeable and
        unforgottable, here are some featured once.
      </p>

      <VideoCarousel />
    </div>
  );
}
