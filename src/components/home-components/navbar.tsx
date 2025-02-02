"use client";

import Image from "next/image";
import { NavMenu } from "../nav-menu";
import Link from "next/link";
import MobileMenu from "../mobile-menu";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    title: "Learn",
    items: [
      {
        title: "Courses",
        href: "/courses",
        description: "Browse our comprehensive collection of programming courses",
      },
      {
        title: "Roadmaps",
        href: "/roadmaps",
        description: "Follow structured learning paths to achieve your goals",
      },
      {
        title: "DSA",
        href: "/dsa",
        description: "Master Data Structures and Algorithms",
      },
    ],
  },
  {
    title: "Practice",
    items: [
      {
        title: "Projects",
        href: "/projects",
        description: "Build real-world projects to strengthen your portfolio",
      },
      {
        title: "Coding Challenges",
        href: "/challenges",
        description: "Solve programming challenges to improve your skills",
      },
      {
        title: "Interview Prep",
        href: "/interview",
        description: "Practice technical interview questions and solutions",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Success Journey",
        href: "/journey",
        description: "Read inspiring stories of developers who made it",
      },
      {
        title: "Daily Motivation",
        href: "/motivation",
        description: "Get your daily dose of tech inspiration and tips",
      },
      {
        title: "Resume Builder",
        href: "/resume",
        description: "Create an ATS-friendly resume with our AI-powered builder",
      },
    ],
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className={`relative font-jakarta tab:min-h-9`}>
      <div className="min-h-16" />

      <div className="flex bg-bg items-center justify-center text-lg text-white sm:h-20 fixed top-0 w-full z-20 pt-2">
        <div className={`sm:p-[.875rem_2.25rem] p-[0.5rem_1rem] text-white flex gap-6 justify-between items-center w-full max-w-[90rem]`}>
          <section className="flex gap-6">
            <Link href={"/"} className="flex items-center gap-1 shrink-0">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className="max-phone:h-8 max-phone:w-8 shadow-xl"
              />
              <span className="max-phone:hidden text-[1.6rem] font-medium">
                30DC
              </span>
            </Link>

            <div className="max-md:hidden font-jakarta flex items-center font-medium gap-8">
              <NavMenu items={navItems} />
            </div>
          </section>

          <section className="flex items-center gap-4">
            <Link
              href={pathName === "/studyabroad-mentors" ? "/mentor" : "/dashboard"}
              className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:p-2 rounded-md"
            >
              <span className="text-sm">
                {pathName === "/studyabroad-mentors" ? "Mentor Login" : "Dashboard"}
              </span>
            </Link>
            <MobileMenu items={navItems} />
          </section>
        </div>
      </div>
    </div>
  );
}
