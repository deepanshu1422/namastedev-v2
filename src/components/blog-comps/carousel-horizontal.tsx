"use client";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export function CarouselHorizontail({
  blogs,
}: {
  blogs: {
    title: string;
    slug: string;
    metaDescription: string;
    heroImage: {
      title: string;
      description: string;
      url: string;
      height: number;
      width: number;
    };
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
      className="w-full lg:hidden phone:px-[1.2rem]"
    >
      <CarouselContent>
        {blogs.map(({ title, metaDescription, heroImage, slug }, index) => (
          <CarouselItem key={index} className="pt-1 sm:basis-1/2">
            <div className="p-1">
              <Link href={`/blog/${slug}`}>
                <Card className="border-second bg-background/30 overflow-hidden">
                  <CardContent className="flex p-0">
                    <Image
                      width={100}
                      height={100}
                      className="h-28 w-2/5 object-cover"
                      alt={heroImage.description}
                      src={heroImage.url}
                    />
                    <section className="p-3 flex flex-col gap-2">
                      <span className="text-lg font-semibold line-clamp-1">
                        {title}
                      </span>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {metaDescription}
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
