import AnimatedButton from "@/components/animated-button";
import { Atom, BookOpen, Bookmark, Briefcase, Clock7, Code2, HelpCircle, Timer, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Flow({ courses, cover = "/courses/course1.jpg" ,url = "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0" }: { cover?: string, courses?: string[], url?: string }) {

  function CoursePerks({
    children,
    title,
  }: {
    children: React.ReactNode;
    title: string;
  }) {
    return (
      <span className="flex items-start gap-2 font-semibold text-foreground">
        {children}
        {title}
      </span>
    );
  }

  function Tile({ title, href, index }: { title: string, href: string, index: number }) {
    return (<span className="flex flex-col gap-1 items-start">
      <span className="text-muted-foreground font-semibold uppercase text-xs">Step {index}:</span>
      <Link href={href} className="py-2 px-3 w-fit text-center rounded-md border-2 border-prime bg-second text-white lg:hover:bg-second/70">{title}</Link>
    </span>)
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto w-full flex gap-2 p-5">
      <div className="relative flex-1 flex flex-col items-center gap-10 p-2">
        {courses && courses.map((e, i) => (<Tile key={i} title={e} href={url} index={i+1} />))}
        <div className="absolute top-0 -z-10 w-px h-full border border-white/60 border-dashed" />
      </div>
      <div className="relative max-lg:hidden overflow-hidden w-80">
        <div className="fixed -z-30 top-20 right-4 p-3 flex flex-col gap-3 shadow-lg bg-second rounded-lg h-fit">
          <Image
            className="h-44 rounded shadow-md hover:scale-105 transition-transform object-cover"
            alt="course"
            src={cover}
            width={300}
            height={300}
          />

          <section className="flex items-end gap-2">
            <span className="font-jakarta text-lg">
              ₹<span className="text-2xl">389</span>
              <span className="text-sm text-muted-foreground ml-1 line-through">
                ₹3499
              </span>
            </span>

            <span
              className={
                "font-jakarta text-secondary-foreground rounded py-0"
              }
            >
              90% off
            </span>
          </section>

          <AnimatedButton type="ext" link={url}>
            Buy Now
          </AnimatedButton>

          <div className="grid grid-col-1 gap-5 text-sm py-3">
            <CoursePerks title={"50+ hours of video content"}>
              <Video className="h-5 w-5" />
            </CoursePerks>

            <CoursePerks title={"Machine Coding round tips"}>
              <Bookmark className="h-5 w-5" />
            </CoursePerks>

            <CoursePerks title={"3 Major project"}>
              <Briefcase className="h-5 w-5" />
            </CoursePerks>

            <CoursePerks title={"Resume building sessions"}>
              <Code2 className="h-5 w-5" />
            </CoursePerks>
            <CoursePerks title={"Interviews Questions covered"}>
              <HelpCircle className="h-5 w-5" />
            </CoursePerks>

            <CoursePerks title={"Latest React Practices"}>
              <Atom className="h-5 w-5" />
            </CoursePerks>

            <CoursePerks title={"3 years of access"}>
              <Clock7 className="h-5 w-5" />
            </CoursePerks>

            <CoursePerks title={"Learn everything from scratch"}>
              <BookOpen className="h-5 w-5" />
            </CoursePerks>
          </div>
        </div>
      </div>
    </div>
  );
}
