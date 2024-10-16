import React, { Dispatch, SetStateAction } from "react";
import Btn from "./btn";
import { CheckCheck, ShoppingBag } from "lucide-react";
import Link from "next/link";

const items1 = [
  "Resume, Cold emails, Applying, Internships",
  "Complete AI mastery course",
  "LinkedIn job mastery course",
  "25+ Tech projects for resume",
  "15+ Revision and Interview guides",
  "Job search strategy optimization",
  "Remote work preparation practices",
  "Job search strategy optimization",
];

const items2 = [
  "Data Structures and Algorithms (DSA)",
  "Full Stack Web Development",
  "Python Programming",
  "SQL and Database Management",
  "Technical Interview Preparation",
  "15+ more courses",
];

const items3 = [
  "Resume review and optimization",
  "LinkedIn profile enhancement",
  "One-on-one Q&A calls with industry experts",
  "Mock interview practice sessions",
  "Career path guidance and planning",
  "Job search strategy consultation",
];

export default function CourseGrid({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col gap-3 max-w-6xl mx-auto px-6 lg:px-10 pt-10">
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          25+ Job ready Courses included
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-2xl text-center mx-auto text-sm text-white/70 px-10 line-clamp-2">
        Top courses prepared to help you land big jobs - LinkedIn, Resume, Full
        stack, Referrals, Applications, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-6">
        <div className="bg-second p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Job ready Courses</h2>
          <div className="aspect-[6/4] rounded-lg">
            <Btn cover="/new-mentorship.jpg" yt="RzYRPwAx1oE" />
          </div>
          <ul className="space-y-2 mb-4">
            {items1.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <CheckCheck className="h-6 w-6 text-lime-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="bg-second p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              20+ Technical courses
            </h2>
            <ul className="space-y-2 mb-4">
              {items2.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <CheckCheck className="h-6 w-6 text-lime-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-second p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Job Assistance and Mentorship
            </h2>
            <ul className="space-y-2 mb-4">
              {items3.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <CheckCheck className="h-6 w-6 text-lime-500" />
                  {item}
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}
