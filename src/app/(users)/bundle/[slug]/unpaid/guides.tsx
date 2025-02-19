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
            className="basis-1/3"
            key={index}
          >
            <Image
              src={`/guides/${e}.jpg`}
              alt="30DC project image"
              className="w-full aspect-square object-cover object-top rounded-lg border border-gray-200 shadow-md"
              height={600}
              width={900}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
