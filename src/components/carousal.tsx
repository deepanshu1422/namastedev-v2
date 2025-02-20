"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Testimonial, testimonials } from "./course-components/testimonials";

export default function Carousal() {
  return (
    <div className="w-full px-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((e, i) => (
            <CarouselItem key={i} className="flex justify-center">
              <Testimonial
                name={e.name}
                review={e.review}
                profile={e.profile}
                social={e.social}
                link={e.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
