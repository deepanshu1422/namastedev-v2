"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import FloatingButton from "./FloatingButton";

function Section({ title, items, isOpen }: { title: string; items: string[]; isOpen: boolean }) {
  if (!isOpen) return null;
  
  return (
    <div className="overflow-hidden">
      <div className="pl-8 relative">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-emerald-500/50 to-transparent" />
        <h3 className="text-base font-medium bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <ul className="mt-4 space-y-3 text-emerald-100/90 relative">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 group relative text-sm"
            >
              <div className="absolute -left-[16px] top-1/2 w-4 h-px bg-emerald-500/30" />
              <div className="shrink-0 p-1.5 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="group-hover:text-emerald-300 transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Module({ module, index, bundle }: { module: any; index: number; bundle: string }) {
  return (
    <Link href={`/${bundle}`} className="relative group">
      <div className="absolute -left-3 top-1/2 w-3 h-px bg-emerald-500/30" />
      <div className="relative bg-gradient-to-br from-[#112121] to-[#0A1A1A] p-4 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center gap-3">
          <div className="text-xl bg-emerald-500/10 p-2 rounded-lg">
            {module.emoji}
          </div>
          <div>
            <h2 className="text-base font-semibold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {module.title}
            </h2>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">{module.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

const mainModules = [
  {
    bundle: "beginner",
    bundleTitle: "🌟 Beginner Bundle",
    bundleDescription: "Perfect starting point for aspiring developers",
    courses: [
      {
        emoji: "💻",
        title: "HTML, CSS complete mastery course",
        description: "Master modern web development with HTML and CSS to create stunning websites and web applications"
      },
      {
        emoji: "⚡",
        title: "Complete JavaScript mastery course (lifetime + certificate)",
        description: "Master JavaScript from basics to advanced concepts with hands-on projects and lifetime access"
      },
      {
        emoji: "☕",
        title: "Complete Java course (lifetime)",
        description: "Comprehensive Java programming course from basics to advanced concepts with lifetime access"
      },
      {
        emoji: "🐍",
        title: "Complete Python course (lifetime)",
        description: "Learn Python programming from scratch and master core concepts through practical exercises"
      },
      {
        emoji: "📊",
        title: "SQL and Databases mastery course",
        description: "Master database concepts, SQL queries, and data management with practical examples"
      }
    ]
  },
  {
    bundle: "intermediate",
    bundleTitle: "🚀 Intermediate Bundle",
    bundleDescription: "Level up with full-stack development and modern frameworks",
    bonusDescription: "BONUS: Includes all Beginner courses worth ₹999!",
    courses: [
      {
        emoji: "⚡",
        title: "MERN full-stack web development course",
        description: "Master Full-Stack Web Development with MongoDB, Express.js, React, and Node.js"
      },
      {
        emoji: "📱",
        title: "Next JS full stack web development course",
        description: "Learn server-side rendering, static generation, and full-stack development with Next.js"
      },
      {
        emoji: "🖥️",
        title: "Backend development with Node-Express JS",
        description: "Master backend development with Node.js and Express.js framework"
      },
      {
        emoji: "🤖",
        title: "Chat GPT AI prompt engineering course (lifetime)",
        description: "Master AI integration, prompt engineering, and building AI-powered applications"
      },
      {
        emoji: "⚛️",
        title: "React JS course",
        description: "Master React.js and build modern web applications"
      }
    ]
  },
  {
    bundle: "advanced",
    bundleTitle: "💎 Advanced Bundle",
    bundleDescription: "Master advanced technologies and prepare for top tech roles",
    bonusDescription: "BONUS: Includes all Beginner (₹999) & Intermediate (₹1,999) courses!",
    courses: [
      {
        emoji: "🤖",
        title: "AI mastery course - Workflows, Tools, Chat GPT, Full stack projects",
        description: "Comprehensive AI development course with practical applications"
      },
      {
        emoji: "🎯",
        title: "DSA revision and mastery course",
        description: "Master Data Structures and Algorithms with interview preparation"
      },
      {
        emoji: "📈",
        title: "FAANG and Startup Tech job roadmap",
        description: "Complete preparation guide for top tech company interviews"
      },
      {
        emoji: "🔗",
        title: "Blockchain, Solidity, Defi complete course",
        description: "Master blockchain development, smart contracts, and DeFi"
      },
      {
        emoji: "📊",
        title: "Data analytics course",
        description: "Comprehensive data analytics and visualization"
      }
    ]
  }
];

function BundleSection({ bundle, index }: { bundle: any; index: number }) {
  const bundleColors = {
    beginner: "from-green-400/20 to-emerald-400/20",
    intermediate: "from-blue-400/20 to-cyan-400/20",
    advanced: "from-purple-400/20 to-pink-400/20"
  };

  return (
    <div className="space-y-4" data-bundle={bundle.bundle}>
      <div className={`p-4 rounded-xl bg-gradient-to-r ${bundleColors[bundle.bundle]} border border-emerald-500/20`}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">{bundle.bundleTitle}</h2>
              <p className="text-gray-300 text-sm mt-1">{bundle.bundleDescription}</p>
            </div>
            <div className="text-right">
              <div className="text-emerald-400 font-bold text-lg">
                {bundle.bundle === "beginner" ? "₹999" : bundle.bundle === "intermediate" ? "₹1,999" : "₹2,999"}
              </div>
              <div className="text-sm text-emerald-500">
                {bundle.bundle === "beginner" ? "50% OFF" : bundle.bundle === "intermediate" ? "33% OFF" : "25% OFF"}
              </div>
            </div>
          </div>
          {bundle.bonusDescription && (
            <p className="text-emerald-400 text-sm font-medium">{bundle.bonusDescription}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 pl-4">
        {bundle.courses.map((module: any, moduleIndex: number) => (
          <Module key={moduleIndex} module={module} index={moduleIndex} bundle={bundle.bundle} />
        ))}
      </div>
    </div>
  );
}

export default function CourseCurriculum() {
  return (
    <div className="relative bg-gradient-to-br from-[#112121] via-[#0A1A1A] to-[#112121] py-12 text-white overflow-hidden course-curriculum-section">
      <FloatingButton />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-emerald-500 opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 -right-4 w-[600px] h-[600px] bg-green-500 opacity-20 blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
            Course Curriculum
          </h1>
          <p className="text-lg text-emerald-300/80">
            Your Learning Journey Map
          </p>
          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </div>

        <div className="mt-8 space-y-8 relative pl-3">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent" />
          {mainModules.map((bundle, index) => (
            <BundleSection key={index} bundle={bundle} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
} 