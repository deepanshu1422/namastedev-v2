"use client";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { Slider } from "./slider";

export default function NewHero({
  title,
  desc,
  heroImage,
}: {
  title: string;
  desc: string;
  heroImage: string;
}) {
  const slides = [
    {
      image: "/thumbs/1.jpg",
      href: "Z4gQbG4oR4k",
    },
    {
      image: "/thumbs/2.jpg",
      href: "U-dc8t9jS64",
    },
    {
      image: "/thumbs/3.jpg",
      href: "N7AN5lcXljc",
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={`w-full grid relative overflow-hidden min-h-[400px] bg-zinc-950`}
    >
      {slides.map(({ image, href }, i) => (
        <Image
          key={i}
          alt="yt thumbnail image"
          fill
          src={image ?? "/thumbs/1.jpg  "}
          className={`object-cover ${
            current === i + 1 ? "opacity-10" : "opacity-0"
          } opacity-0 pointer-events-none transition-all duration-300`}
        />
      ))}
      <div className="relative bg-gradient-to-t from-bg from-0% to-transparent to-50%">
        <div className="tab:p-[10.5rem_5.5rem_3.75rem] max-tab:pt-[4rem] max-tab:pb-[2.5rem] m-auto max-w-[90rem] flex justify-center items-center text-white">
          <section className="grid gap-4 place-items-center text-center">
            <h1
              className={`max-w-2xl font-jakarta phone:text-[3.5rem] text-[2.5rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-[50px] max-tab:px-11 max-phone:px-6`}
            >
              {title}
            </h1>
            <p className="max-w-[35rem] max-tab:px-11 max-phone:px-6 text-lg max-tab:text-[1.05rem] max-tab:leading-6">
              {desc}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function YTCarousel({
  setApi,
}: {
  setApi: Dispatch<SetStateAction<EmblaCarouselType | undefined>>;
}) {
  const slides = [
    {
      image: "/thumbs/1.jpg",
      href: "https://www.youtube.com/watch?v=Z4gQbG4oR4k",
    },
    {
      image: "/thumbs/2.jpg",
      href: "https://www.youtube.com/watch?v=U-dc8t9jS64",
    },
    {
      image: "/thumbs/3.jpg",
      href: "https://www.youtube.com/watch?v=N7AN5lcXljc",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-xl gap-6 p-2">
      {/* Slider */}
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnFocusIn: false,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {slides.map(({ image, href }, index) => (
            <CarouselItem
              key={index}
              className="basis-4/5 md:basis-full h-full"
            >
              <AspectRatio className="relative" ratio={16 / 9}>
                <Image
                  src={image}
                  alt="Image"
                  className="rounded-lg object-cover"
                  fill
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
