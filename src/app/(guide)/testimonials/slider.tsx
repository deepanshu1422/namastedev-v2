import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Dispatch, SetStateAction } from "react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { Play } from "lucide-react";

export function Slider({
  setApi,
  current,
  count,
  slides,
}: {
  setApi: Dispatch<SetStateAction<EmblaCarouselType | undefined>>;
  current: number;
  count: number;
  slides: {
    image: string;
    href: string;
  }[];
}) {
  const [url, setUrl] = React.useState("Z4gQbG4oR4k");
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mx-auto w-full max-w-xl gap-6 p-2">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnFocusIn: false,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {slides.map(({ image, href }, index) => (
            <CarouselItem
              key={index}
              className="basis-10/12 md:basis-full h-full"
            >
              <AspectRatio
                onClick={() => {
                  setOpen(true);
                  setUrl(href);
                }}
                className="relative cursor-pointer"
                ratio={16 / 9}
              >
                <Image
                  src={image}
                  alt="Image"
                  className="rounded-xl object-cover shadow-lg shadow-black"
                  fill
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full">
                  <div className="bg-second/70 p-3 rounded-full">
                    <Play className="w-6 h-5 stroke-[3] fill-white" />
                  </div>
                </div>
              </AspectRatio>
              <YTModal url={url} open={open} setOpen={setOpen} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export function YTModal({
  url,
  open,
  setOpen,
}: {
  url: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="p-3 max-w-3xl">
        {/* <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader> */}
        <AspectRatio ratio={16 / 9}>
          <iframe
            className="h-full w-full bg-zinc-900"
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  );
}
