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
import { Button } from "../ui/button";

export function CourseScroll() {
  const courses = [
    {
      title: "All 10 courses package -  (Lifetime Validity)",
      imageSrc: "/courses/course1.jpg",
      href: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
    },
    {
      title: "DSA Complete Placement Course",
      imageSrc: "/courses/dsa.jpg",
      href: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
    },
    {
      title: "MERN FullStack Web Development",
      imageSrc: "/courses/mern.jpg",
      href: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
    },
    {
      title: "Next JS FullStack Web Development",
      imageSrc: "/courses/nextjs.jpg",
      href: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
    },
  ];

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
      className="w-full phone:px-[1.2rem]"
    >
      <CarouselContent>
        {courses.map(({ title, imageSrc, href }, index) => (
          <CarouselItem key={index} className="pt-1">
            <div className="shadow-lg flex flex-col mx-auto max-w-sm bg-second border ">
              <Link
                href={href}
                className="group overflow-hidden bg-bg w-full h-60 shadow-lg relative"
              >
                <Image
                  className="absolute object-cover group-hover:scale-105 transition-transform duration-200"
                  fill
                  src={imageSrc}
                  loader={() => imageSrc}
                  alt={title}
                />
              </Link>
              <div className="p-3 py-4 flex flex-col justify-between flex-1">
                <section className="flex flex-col gap-2 flex-1">
                  <Link
                    href={href}
                    className="text-lg lg:text-xl font-semibold"
                  >
                    {title}
                  </Link>
                </section>

                <section className="py-2 mb-auto mt-0 flex flex-col gap-2 w-full">
                  <Link className="w-full" href={href} target="_blank">
                    <Button className="bg-prime/90 w-full hover:bg-prime/70 text-white text-lg font-semibold shadow-[rgb(0,_0,_0)_8px_8px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_4px_4px_0px_0px] rounded-none font-bric">
                      Try Now
                    </Button>
                  </Link>
                </section>
              </div>
            </div>

            {/* <div className="p-1">
              <Link href={href}>
                <Card className="border-second bg-background/30 overflow-hidden">
                  <CardContent className="flex p-0">
                    <Image
                      width={100}
                      height={100}
                      className="h-28 w-2/5 object-cover"
                      alt={imageSrc}
                      src={imageSrc}
                    />
                    <section className="p-3 flex flex-col gap-2">
                      <span className="text-lg font-semibold line-clamp-1">
                        {title}
                      </span>
                    </section>
                  </CardContent>
                </Card>
              </Link>
            </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
