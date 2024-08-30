import Link from "next/link";
import Image from "next/image";
import { CourseTabMenu } from "./course-tabs";
import { courses } from "@/util/constants";

export default function Store() {
  const courses = [
    {
      title: "All 15 Courses Package -  (Certificate + Lifetime)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/652a1994e4b05a145bae5cd0/652a1994e4b05a145bae5cd0_scaled_cover.jpg?v=10",
      link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
      category: ["fullstack", "package", "job"],
    },
    {
      title: "Job Ready - MERN  Full Stack Web Dev Course (lifetime valid)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=1",
      link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
      category: ["courses", "fullstack", "job"],
    },
    {
      title: "Job ready DSA course  (Certificate + Lifetime)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=1",
      link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
      category: ["courses", "job"],
    },
    {
      title:
        "AI full stack dev, Tools, Chat GPT, and prompting course (lifetime valid)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe76e4b002b964b5645d/64eebe76e4b002b964b5645d_scaled_cover.jpg?v=8",
      link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
      category: ["ai", "courses"],
    },
    {
      title: "Tech job roadmap mastery (beginner to advanced)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64ff7f1be4b0607f6f9001f6/64ff7f1be4b0607f6f9001f6_scaled_cover.jpg?v=2",
      link: "https://courses.30dayscoding.com/courses/FAANG-and-Startup-Tech-job-detailed-roadmap-64ff7f1be4b0607f6f9001f6",
      category: ["courses", "job"],
    },
    {
      title: "Backend mastery course -  (beginner to advanced)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/6652967ada4224461d9ece76/6652967ada4224461d9ece76_scaled_cover.jpg?v=1",
      link: "https://courses.30dayscoding.com/courses/Complete-Backend-development-course-lifetime-6652967ada4224461d9ece76",
      category: ["backend", "courses"],
    },
    {
      title: "Job ready - NEXT JS full stack web dev course (lifetime valid)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
      link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
      category: ["courses", "fullstack"],
    },
    {
      title: "Chat GPT AI prompt engineering course (lifetime)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/6527591fe4b06a00b8c751a5/6527591fe4b06a00b8c751a5_scaled_cover.jpg?v=2",
      link: "https://courses.30dayscoding.com/courses/Chat-GPT-AI-prompt-engineering-course-6527591fe4b06a00b8c751a5",
      category: ["nocode"],
    },
    {
      title:
        "15 Full stack Projects, MVP, SaaS tools, Ideas, tools (lifetime valid)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/6525cb14e4b07ef99d14b75b/6525cb14e4b07ef99d14b75b_scaled_cover.jpg?v=4",
      link: "https://courses.30dayscoding.com/courses/Idea-to-MVP-full-stack-project-course-6525cb14e4b07ef99d14b75b",
      category: ["courses", "fullstack", "project"],
    },
    {
      title: "Complete Blockchain and Web3 course",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/64eec408e4b002b964b568be/64eec408e4b002b964b568be_scaled_cover.jpg?v=4",
      link: "https://courses.30dayscoding.com/courses/Blockchain-developer-course-64eec408e4b002b964b568be",
      category: ["ai", "courses"],
    },
    {
      title: "React JS Mastery Course",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/667097fa0c06f41233aa32d9/667097fa0c06f41233aa32d9_scaled_cover.jpg?v=1",
      link: "https://courses.30dayscoding.com/courses/Job-ready-React-JS-course-lifetime-valid--certificates-667097fa0c06f41233aa32d9",
      category: ["tech"],
    },
    {
      title: "Full stack INTERVIEW course and projects",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/66590ad5d293ec24604764bb/66590ad5d293ec24604764bb_scaled_cover.jpg?v=1",
      link: "https://courses.30dayscoding.com/courses/Full-stack-Interview-Preparation-Job-ready-course-lifetime--66590ad5d293ec24604764bb",
      category: ["tech"],
    },
    {
      title: "Complete Java course (lifetime)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/659ef388e4b0f601f93531b8/659ef388e4b0f601f93531b8_scaled_cover.jpg?v=2",
      link: "https://courses.30dayscoding.com/courses/Complete-Java-course-659ef388e4b0f601f93531b8",
      category: ["courses", "language"],
    },
    {
      title: "Complete Python course (lifetime)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/652da4c5e4b010a575e0254b/652da4c5e4b010a575e0254b_scaled_cover.jpg?v=2",
      link: "https://courses.30dayscoding.com/courses/Complete-Python-course-for-developers-652da4c5e4b010a575e0254b",
      category: ["courses", "language"],
    },
    {
      title: "Complete JavaScript course (lifetime)",
      imgSrc:
        "https://d502jbuhuh9wk.cloudfront.net/courses/652da487e4b0dce56ddde296/652da487e4b0dce56ddde296_scaled_cover.jpg?v=2}",
      link: "https://courses.30dayscoding.com/courses/Complete-Javascript-course-for-developers-652da487e4b0dce56ddde296",
      category: ["courses", "language"],
    },
  ];

  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
      <span className="flex items-center justify-center gap-4 relative lg:pb-4">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta text-pretty text-[2rem] font-extrabold text-center">
        Resources to get you JOB-READY
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <div className="flex w-full max-lg:flex-col lg:gap-6 max-lg:items-center max-lg:gap-10 max-lg:px-0 lg:max-w-[925px]">
        <CourseTabMenu
          data={[
            {
              title: "All Courses",
              courses: courses,
            },
            {
              title: "AI and Blockchain",
              courses: courses.filter((e) => e.category.includes("ai")),
            },
            {
              title: "Backend",
              courses: courses.filter((e) => e.category.includes("backend")),
            },
            {
              title: "Course",
              courses: courses.filter((e) => e.category.includes("courses")),
            },
            {
              title: "Full Stack Development",
              courses: courses.filter((e) => e.category.includes("fullstack")),
            },
            {
              title: "Job",
              courses: courses.filter((e) => e.category.includes("job")),
            },
            {
              title: "No Code Tools",
              courses: courses.filter((e) => e.category.includes("nocode")),
            },
            {
              title: "Package",
              courses: courses.filter((e) => e.category.includes("package")),
            },
            {
              title: "Programming Language",
              courses: courses.filter((e) => e.category.includes("language")),
            },
            {
              title: "Project",
              courses: courses.filter((e) => e.category.includes("project")),
            },
            {
              title: "Software & Technology",
              courses: courses.filter((e) => e.category.includes("tech")),
            },
          ]}
        />
      </div>

      <Link
        className="text-sm"
        href={"https://courses.30dayscoding.com/s/store"}
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
