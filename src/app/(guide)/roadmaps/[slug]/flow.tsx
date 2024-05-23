import AnimatedButton from "@/components/animated-button";
import { Atom, BookOpen, Bookmark, Briefcase, Clock7, Code2, HelpCircle, Timer, Video } from "lucide-react";
import Image from "next/image";

export default function Flow() {

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

  return (
    <div className="min-h-screen max-w-7xl mx-auto w-full flex gap-2 p-5">
      <div className="flex-1 flex gap-2">
        <div className="h-full w-full"></div>
      </div>
      <div className="max-lg:hidden min-w-44 relative h-full">
        <div className="sticky top-7 p-3 flex flex-col gap-3 shadow-lg bg-second rounded-lg h-fit">
          <Image
            className="h-44 rounded shadow-md hover:scale-105 transition-transform object-cover"
            alt="course"
            src={"/courses/course1.jpg"}
            width={300}
            height={300}
          />

          <section className="flex items-end gap-2">
            <span className="font-jakarta text-lg">
              ₹<span className="text-2xl">2999</span>
              <span className="text-sm text-muted-foreground ml-1 line-through">
                ₹7500
              </span>
            </span>

            <span
              className={
                "font-jakarta text-secondary-foreground rounded py-0"
              }
            >
              40% off
            </span>
          </section>

          <AnimatedButton type="ext" link={"https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0"}>
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
