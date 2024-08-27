import { Card, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getCourses = async () => {
  const query = `query {
        courseCollection(limit:5){
           items{
                title,
                slug,
                rating,
                courseImage{
                    url,
                    width,
                    height,
                }
              },
            }
        }`;

  const fetchedData = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      cache: "no-cache",
    }
  );

  const data = await fetchedData.json();

  return data.data;
};

export default async function Courses() {
  const data = await getCourses();

  const {
    courseCollection: { items },
  } = data;

  return (
    <section className="flex max-md:flex-col rounded-lg gap-2">
      <Slider course={items} />
    </section>
  );
}

export function Slider({ course }: { course: any }) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full mx-auto h-fit"
    >
      <CarouselContent>
        {course.map((e: any, i: any) => (
          <CarouselItem
            className="max-sm:basis-4/5 sm:basis-1/2 md:basis-1/3 w-full h-fit"
            key={i}
          >
            <Card className="select-none flex flex-col gap-2 bg-transparent border-none">
              <Link
                href={`/courses/${e?.slug}`}
                className="flex flex-col gap-2 h-fit group"
              >
                <div className="relative bg-card/50 min-h-48 rounded-md overflow-hidden">
                  <Image
                    src={e?.courseImage?.url ?? ""}
                    alt={e?.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all"
                  />
                </div>
                <CardFooter className="px-0 py-0 flex-col items-start text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold line-clamp-1">
                    {e?.title}
                  </span>
                  {/* <span>Aryan Singh</span> */}
                  <section className="flex gap-1 items-center">
                    <span className="text-prime/80 font-semibold">
                      {e?.rating}
                    </span>
                    <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                  </section>
                </CardFooter>
              </Link>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 h-12 w-12 top-1/3" />
      <CarouselNext className="-right-4 h-12 w-12 top-1/3" />
    </Carousel>
  );
}
