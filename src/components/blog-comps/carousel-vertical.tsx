import * as React from "react";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export function CarouselVertical({
  blogs,
}: {
  blogs: {
    title: string;
    slug: string;
    description: string;
    heroImage: {
      alt: string;
      url: string;
    } | null;
  }[];
}) {
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
      className="w-full max-w-xs max-lg:hidden mr-11"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {blogs.map(({ title, description, heroImage, slug }, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Link href={`/blog/${slug}`}>
                <Card className="border-second bg-background/30 overflow-hidden hover:scale-105 transition-all duration-200">
                  <CardContent className="flex p-0">
                    <Image
                      width={100}
                      height={100}
                      className="min-h-20 w-2/5 object-cover"
                      alt={heroImage?.alt || ""}
                      src={heroImage?.url || ""}
                    />
                    <section className="p-3 py-2 flex flex-col gap-2">
                      <span className="font-semibold line-clamp-1">
                        {title}
                      </span>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {description}
                      </p>
                    </section>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
