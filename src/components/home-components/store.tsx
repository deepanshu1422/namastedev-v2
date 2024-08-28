import Link from "next/link";
import Image from "next/image";
import { CourseTabMenu } from "./course-tabs";
import { courses } from "@/util/constants";

export default function Store() {

  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
        <span className="text-prime font-semibold uppercase">Courses</span>
      <div className="flex w-full max-lg:flex-col lg:gap-6 max-lg:items-center max-lg:gap-10 max-lg:max-w-[550px] max-lg:px-0 lg:max-w-[925px]">
        <CourseTabMenu
          data={[
            {
              title: "All Courses",
              courses: courses,
            },
            {
              title: "AI and Blockchain",
              courses: courses.filter(e => e.category.includes("ai"))
            },
            {
              title: "Backend",
              courses: courses.filter(e => e.category.includes("backend"))
            },
            {
              title: "Course",
              courses: courses.filter(e => e.category.includes("courses"))
            },
            {
              title: "Full Stack Development",
              courses: courses.filter(e => e.category.includes("fullstack"))
            },
            {
              title: "Job",
              courses: courses.filter(e => e.category.includes("job"))
            },
            {
              title: "No Code Tools",
              courses: courses.filter(e => e.category.includes("nocode"))
            },
            {
              title: "Package",
              courses: courses.filter(e => e.category.includes("package"))
            },
            {
              title: "Programming Language",
              courses: courses.filter(e => e.category.includes("language"))
            },
            {
              title: "Project",
              courses: courses.filter(e => e.category.includes("project"))
            },
            {
              title: "Software & Technology",
              courses: courses.filter(e => e.category.includes("tech"))
            },
          ]}
        />
      </div>

        <Link
          className="text-sm"
          href={"/courses"}
        >
          <button
            className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
          >
            Check More Courses
          </button>
        </Link>
    </div>
  );
}
