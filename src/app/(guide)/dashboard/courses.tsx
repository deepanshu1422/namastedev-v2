import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCheck, Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getCourses = async () => {
  const query = `query {
        courseCollection(where: { publish: true,domain: "30dayscoding.com"}, limit: 8){
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

  const content = [
    "Full stack Web Development",
    "Data Structures and Algorithms",
    "Data Analytics mastery",
    "AI and Blockchain",
    "Lifetime valid and Certificates",
    "12 More Courses",
  ];

  return (
    <div className="flex flex-col w-full gap-7 mx-auto py-5 tab:pb-8 ">
      <span className="md:text-lg font-bold">Other Courses</span>
      <Link
        href={"/bundle/complete-package-all-course-bundle"}
        className="flex-1 grid tab:grid-cols-2 gap-3 bg-second/30 rounded-lg py-6 pl-6"
      >
        <div className="max-tab:order-last flex flex-col gap-3">
          <h3 className="font-bold text-xl tab:text-2xl line-clamp-2">
            All 17 Courses Bundle - DSA, Full stack, Blockchain, AI, Data
            analytics, Python, Interview and 12 more.
          </h3>
          <div className="flex flex-col gap-1 pr-5">
            {content.map((e, i) => (
              <span key={i} className="flex gap-2 items-center text-sm">
                <CheckCheck className="h-5 w-5 text-prime shrink-0" />
                {e}
              </span>
            ))}
            <span className="flex gap-2 items-center text-sm">
              <Plus className="h-5 w-5 text-prime shrink-0" />
              12 More Courses
            </span>

            <div className="relative mt-2">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
              <Button
                size={"sm"}
                variant={"outline"}
                className={`relative font-semibold text-foreground/80 hover:text-foreground w-full gap-1`}
              >
                Buy all 17 courses for ₹999{" "}
                <span className="italic line-through text-muted-foreground">
                  ₹25000
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={
              "https://images.ctfassets.net/3pv3o0yr6pgj/70h8KSfhjqdiIecfwf6fJY/c67a069d098b3c87e0774b1db9f6f920/17_courses.jpg"
            }
            alt={"30DC Project Preview"}
            height={600}
            width={900}
            className="rounded-s-lg w-full md:w-4/5 aspect-[6/4] tab:h-4/5 my-auto ml-auto shadow-xl shadow-black/50 object-cover"
          />
        </div>
      </Link>
    </div>
  );

  return (
    <section className="flex max-md:flex-col rounded-lg gap-2 overflow-hidden">
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
            className="aspect-[6/4] max-phone:basis-4/5 phone:basis-1/2 md:basis-1/3 w-full h-fit"
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
                    className="object-contain group-hover:scale-105 transition-all"
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
