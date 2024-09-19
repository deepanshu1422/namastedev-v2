import Link from "next/link";
import Image from "next/image";
import { CourseTabMenu } from "./course-tabs";
import { courses } from "@/util/constants";

export default function Store() {
  // const courses = [
  //   {
  //     title: "All 15 Courses Package -  (Certificate + Lifetime)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/652a1994e4b05a145bae5cd0/652a1994e4b05a145bae5cd0_scaled_cover.jpg?v=10",
  //     link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
  //     category: ["fullstack", "package", "job"],
  //   },
  //   {
  //     title: "Job Ready - MERN  Full Stack Web Dev Course (lifetime valid)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=1",
  //     link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
  //     category: ["courses", "fullstack", "job"],
  //   },
  //   {
  //     title: "Job ready DSA course  (Certificate + Lifetime)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=1",
  //     link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
  //     category: ["courses", "job"],
  //   },
  //   {
  //     title:
  //       "AI full stack dev, Tools, Chat GPT, and prompting course (lifetime valid)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe76e4b002b964b5645d/64eebe76e4b002b964b5645d_scaled_cover.jpg?v=8",
  //     link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
  //     category: ["ai", "courses"],
  //   },
  //   {
  //     title: "Job ready - NEXT JS full stack web dev course (lifetime valid)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
  //     link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
  //     category: ["courses", "fullstack"],
  //   },
  //   {
  //     title: "Chat GPT AI prompt engineering course (lifetime)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/6527591fe4b06a00b8c751a5/6527591fe4b06a00b8c751a5_scaled_cover.jpg?v=2",
  //     link: "https://courses.30dayscoding.com/courses/Chat-GPT-AI-prompt-engineering-course-6527591fe4b06a00b8c751a5",
  //     category: ["nocode"],
  //   },
  //   {
  //     title: "Complete Blockchain and Web3 course",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64eec408e4b002b964b568be/64eec408e4b002b964b568be_scaled_cover.jpg?v=4",
  //     link: "https://courses.30dayscoding.com/courses/Blockchain-developer-course-64eec408e4b002b964b568be",
  //     category: ["ai", "courses"],
  //   },
  // ];

  

  const courses = [
    {
      title: "Premium Complete Package All Course Bundle",
      category: ["courses"],
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/1NG12iPdUfv110we4DriYM/552ef0f60a858aa8cd084a2fc8238705/ALL_Courses.jpg",
        link: "/bundle/complete-package-all-course-bundle"
    },
    // {
    //   title:
    //     "Certified Full Stack Web development Job ready Course with 50+ projects",
    //   category: ["fullstack"],
    //   imgSrc:
    //     "https://images.ctfassets.net/3pv3o0yr6pgj/1A48UlmU2KT534PwkHroKj/70609095acfd38e53a56e332203e2687/WhatsApp_Image_2024-08-24_at_09.56.26_b0ddc2b6.jpg",
    //     link: "/courses/complete-webdev-course"
    // },
    {
      title: "DSA Complete Job Ready Course with 250+ videos, revision guide",
      category: ["dsa"],
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/5KSVf7vuNxFjxcHfm9idjM/4e5563dfa5f1ca9cc169a7274a7dbcac/64f93394e4b0e75ce98af312_scaled_cover.jpg",
        link: "/courses/dsa-complete-course"
    },
    // {
    //   title:
    //     "Complete Data Analytics Mastery Job ready Course - Python, SQL, Excel, Stats, Interview prep",
    //   category: ["data analytics"],
    //   imgSrc:
    //     "https://images.ctfassets.net/3pv3o0yr6pgj/mdRH1g3VSgansurxZCQtC/648860d07f5b852370124b1d8d674791/data_analyst.jpg",
    //     link: "/courses/data-analytics-course"
    // },
    {
      title:
        "Blockchain Mastery Complete Course - Solidity, Defi, NFTs, Projects",
      category: ["blockchain", "web3"],
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/6CtQOysdzsX1zU7T1K0Enw/b704554e417531369ed125131eb0b806/blockchain_mastery2.jpg",
        link: "/courses/complete-blockchain-course"
    },
    // {
    //   title:
    //     "AI Mastery Complete Course - Tools, Workflows, Prompts, Projects, SaaS",
    //   category: ["ai"],
    //   imgSrc:
    //     "https://images.ctfassets.net/3pv3o0yr6pgj/ycDwzGFLof8SimHWAMUGa/9905e118e6f5ab0c4646f63155520428/64eebe76e4b002b964b5645d_scaled_cover.jpg",
    //     link: "/courses/ai-complete-course"
    // },
  ];

  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
      <span className="flex items-center justify-center gap-4 relative lg:pb-4">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta text-pretty text-[2rem] font-extrabold text-center">
          Pocket Friendly Courses with Certificates!
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
              title: "Offer Course",
              courses: courses.filter((e) => e.category.includes("courses")),
            },
            {
              title: "AI",
              courses: courses.filter((e) => e.category.includes("ai")),
            },
            {
              title: "Full Stack Development",
              courses: courses.filter((e) => e.category.includes("fullstack")),
            },
            {
              title: "Blockchain",
              courses: courses.filter((e) => e.category.includes("blockchain")),
            },
            {
              title: "DSA",
              courses: courses.filter((e) => e.category.includes("dsa")),
            },
            {
              title: "Data Analyst",
              courses: courses.filter((e) => e.category.includes("data analytics")),
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
