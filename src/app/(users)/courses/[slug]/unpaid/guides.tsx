import { Button } from "@/components/ui/button";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Guides() {
  const guides = [
    "dsa-revision-guide-2",
    "interview-guides",
    "resume-cold-email-guides",
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-xl tab:text-2xl">
          Premium Interview Guides Included ✨
        </h2>
        <p className="text-sm text-pretty text-muted-foreground">
          These projects mentioned below with clean code so that you can make
          you protfoilio look great.❤️
        </p>
      </div>
      <Slider guides={guides} />
    </section>
  );

  return (
    <section className="flex w-full bg-footer/60 mb-6">
      <div className="mx-auto max-w-[75rem] tab:p-[1.5rem_5.5rem_3.75rem] px-6 flex flex-col tab:items-center gap-2 py-5 tab:py-10">
        <h3 className="text-xl tab:text-2xl font-bold">
          Premium Interview Guides Included
        </h3>
        <p className="max-w-2xl tab:text-center text-sm text-white/70 tab:px-10 line-clamp-2 text-pretty">
          These projects mentioned below with clean code so that you can make
          you protfoilio look great.
        </p>
        <Slider guides={guides} />
      </div>
    </section>
  );
}

function Slider({ guides }: { guides: string[] }) {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {guides.map((e, index) => (
          <CarouselItem
            className="basis-full sm:basis-1/2 md:basis-1/3"
            key={index}
          >
            <Image
              src={`/guides/${e}.jpg`}
              alt="30DC project image"
              className="w-full aspect-square object-cover object-top shadow-lg"
              height={600}
              width={900}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 h-12 w-12" />
      <CarouselNext className="-right-4 h-12 w-12" />
    </Carousel>
  );
}
