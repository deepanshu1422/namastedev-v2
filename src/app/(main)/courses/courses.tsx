import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { getContentfulData } from "@/lib/cotentful";
import { courses } from "@/util/constants";
import { HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CoursesType } from "./page";

export default function Courses({
  state,
  courses,
}: {
  state: string;
  courses: CoursesType;
}) {
  if (courses.courseCollection?.items.length == 0)
    return (
      <div className="mx-auto max-w-[90rem] w-full text-center py-10 pb-40">
        <span className="font-semibold rounded-full p-2 px-4 border-4 border-double w-fit mx-auto items-center border-prime shadow-2xl text-sm text-white/60 flex gap-1">
          {" "}
          <HelpCircle className="h-5 w-5" /> No Such Course Found
        </span>
      </div>
    );

  return (
    <>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[85rem] gap-7 mx-auto max-phone:px-6 phone:px-10 max-tab:py-5 tab:pb-14">
        {state
          ? courses.courseCollection.items
            .filter((e) =>
              e.title.toLowerCase().includes(state.toLowerCase())
            )
            .map(({ courseImage, tags, slug, title }, i) => (
              <Course key={i} courseImage={courseImage} tags={tags} slug={slug} title={title} />
            ))
          : courses.courseCollection.items.map(
            ({ courseImage, tags, slug, title }, i) => (
              <Course key={i} courseImage={courseImage} tags={tags} slug={slug} title={title} />
            )
          )}
      </section>
      {state &&
        !courses.courseCollection.items.filter((e) =>
          e.title.toLowerCase().includes(state.toLowerCase())
        ).length && (
          <div className="mx-auto max-w-[90rem] w-full text-center py-10 pb-40">
            <span className="font-semibold rounded-full p-2 px-4 border-4 border-double w-fit mx-auto items-center border-prime shadow-2xl text-sm text-white/60 flex gap-1">
              {" "}
              <HelpCircle className="h-5 w-5" /> No Such Course Found
            </span>
          </div>
        )}
    </>
  );
}

function Course({ courseImage, tags, slug, title }: { courseImage: { url: string, height: number, width: number }, tags: string[], slug: string, title: string }) {
  return <Link
    href={`/courses/${slug}`}
    className="rounded bg-second/40 flex flex-col group transition-all duration-200 hover:bg-second/60 hover:shadow-xl shadow-black overflow-hidden sm:mb-3 max-w-xs w-[90%] sm:max-w-xs mx-auto"
  >
    <Image
      className="rounded-t-lg shadow-lg max-h-40 h-full object-cover"
      src={courseImage.url}
      alt={`30DC ${title} Course`}
      height={courseImage.height}
      width={courseImage.width}
    />
    <div className="flex flex-col items-start gap-2 p-3">
      <span className="text-lg font-bold">{title}</span>
    </div>
    <div className="flex flex-wrap gap-1 p-4 pt-0 px-3 mt-auto">
      {tags?.map((e, i) => (
        <Badge
          className="rounded bg-background text-sm"
          variant={"secondary"}
          key={i}
        >
          #{e}
        </Badge>
      ))}
    </div>
  </Link>
}