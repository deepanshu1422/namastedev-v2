import Achievements from "@/components/course-components/achievements";
import Companies from "@/components/course-components/companies";
import Course from "@/components/course-components/course";
import Faqs from "@/components/mentorship-comp/faq";
import Hero from "@/components/course-components/hero";
import Instructor from "@/components/course-components/instructor";
import Mission from "@/components/course-components/mission";
import Projects from "@/components/course-components/projects";
import Testimonials from "@/components/mentorship-comp/testimonials";
import type { Metadata } from "next";
import React from "react";
import { BASE_URL } from "@/util/constants";
import { Award, Brain, Check, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "MERN Full Stack Development Course",
  description:
    "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/mern.jpg",
  },
};

export default function Home() {
  return (
    <main className="bg-bg dark:bg-bg min-h-svh transition-all">
      <div className="max-w-[1800px] m-auto flex flex-col lg:px-20 lg:py-10 px-4 py-5 md:gap-10">
        <Hero
          courseLink="https://30dc.graphy.com/s/store"
          title="MERN Full Stack Development Course"
          youtube="dao2HaGzc3M"
        />
        <Achievements />
        <Learn />
        <Course
          courseLink="https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d"
          imageSrc="/mern.jpg"
        />
        {/* <Instructor />
        <Projects /> */}
        <Companies />
        <Testimonials />
        <Faqs
          faq={[
            {
              question: "What is the validity of the Course?",
              answer:
                "The course if lifetime valid. Take it once and never pay again.",
            },
            {
              question: "What's the refund policy?",
              answer:
                "We will refund you fully without any problem. Email us at projectsnightlight@gmail.com",
            },

            {
              question: "How do I contact you?",
              answer: "Please email us at projectsnightlight@gmail.com",
            },

            {
              question: "Would there be any kind of certificate?",
              answer: "Yes, you will get a certificate after completion.",
            },
          ]}
        />
      </div>
    </main>
  );
}

function Learn() {
  return (
    <div className="mb-12 mt-6 max-w-[80rem] mx-auto">
      <h2
        className={`text-4xl font-bold text-center mb-12 text-white`}
      >
        What You'll Master
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Brain,
            title: "Technical Skills",
            points: [
              "SQL & Database Management",
              "Python for Data Analysis",
              "Power BI & Tableau",
              "Statistical Analysis",
            ],
          },
          {
            icon: TrendingUp,
            title: "Business Impact",
            points: [
              "Data-Driven Decision Making",
              "Business Intelligence",
              "KPI Tracking",
              "ROI Analysis",
            ],
          },
          {
            icon: Award,
            title: "Career Growth",
            points: [
              "Portfolio Building",
              "Interview Preparation",
              "Resume Enhancement",
              "Job Application Strategy",
            ],
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="bg-second/20 backdrop-blur rounded-xl p-6 border border-prime/50"
          >
            <span className="flex gap-2">
              <section.icon className={`h-7 w-7 mb-4 text-emerald-500`} />
              <h3 className="text-xl font-bold text-white mb-4">
                {section.title}
              </h3>
            </span>
            <div className="space-y-2">
              {section.points.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className={`h-4 w-4 text-emerald-500`} />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
