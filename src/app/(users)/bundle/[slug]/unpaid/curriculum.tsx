"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

function Section({ title, items, isOpen }: { title: string; items: string[]; isOpen: boolean }) {
  if (!isOpen) return null;
  
  return (
    <div className="overflow-hidden">
      <div className="pl-8 relative">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-emerald-500/50 to-transparent" />
        <h3 className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <ul className="mt-2 space-y-1.5 text-emerald-100/90 relative">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center gap-2 group relative text-sm"
            >
              <div className="absolute -left-[16px] top-1/2 w-4 h-px bg-emerald-500/30" />
              <div className="shrink-0 p-1 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                <Check className="w-3 h-3 text-emerald-400" />
              </div>
              <span className="group-hover:text-emerald-300 transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Module({ module, index }: { module: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <div className="absolute -left-3 top-1/2 w-3 h-px bg-emerald-500/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-gradient-to-br from-[#112121] to-[#0A1A1A] p-4 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="text-xl bg-emerald-500/10 p-2 rounded-lg">
                {module.emoji}
              </div>
              <div>
                <h2 className="text-base font-semibold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                  {module.title}
                </h2>
                <p className="text-emerald-300/70 mt-1 text-xs line-clamp-1">
                  {module.description}
                </p>
              </div>
            </div>
            <ChevronDown 
              className={`w-4 h-4 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </button>
        <div className="mt-4 space-y-4">
          {module.sections.map((section: any, sIndex: number) => (
            <Section key={sIndex} {...section} isOpen={isOpen} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CourseCurriculum() {
  const [showMore, setShowMore] = useState(false);
  
  const mainModules = [
    {
      emoji: "🎯",
      title: "Master DSA - Job Ready Course",
      description: "Master DSA with this Job Ready Course which includes 250+ videos, revision guides, roadmaps, and more!",
      sections: [
        {
          title: "DSA Mastery",
          items: [
            "Comprehensive DSA Training",
            "Coding Interview Preparation",
            "Problem Solving Optimization",
          ]
        }
      ]
    },
    {
      emoji: "🔗",
      title: "Blockchain Mastery Complete Course",
      description: "Blockchain Mastery Complete Course - Solidity, Defi, NFTs, Projects",
      sections: [
        {
          title: "Blockchain Development",
          items: [
            "Smart Contracts & Solidity",
            "DeFi & NFT Development",
            "dApps Architecture",
          ]
        }
      ]
    },
    {
      emoji: "💻",
      title: "HTML, CSS, and JS Course",
      description: "HTML, CSS, and JavaScript Beginner to Advanced Course takes you from the basics of web development to building interactive, responsive websites",
      sections: [
        {
          title: "Web Development",
          items: [
            "HTML5 & CSS3 Mastery",
            "JavaScript Fundamentals",
            "Responsive Web Design",
          ]
        }
      ]
    },
    {
      emoji: "⚛️",
      title: "JavaScript and React.js Frontend",
      description: "Frontend Complete Course guides you through building and designing responsive, interactive websites",
      sections: [
        {
          title: "Frontend Development",
          items: [
            "Advanced JavaScript",
            "React.js Development",
            "Modern UI/UX Design",
          ]
        }
      ]
    },
    {
      emoji: "📊",
      title: "SQL Mastery - Data Analytics",
      description: "Elevate your SQL skills from basics to advanced techniques. Learn to design databases, craft complex queries, and optimize performance",
      sections: [
        {
          title: "SQL & Analytics",
          items: [
            "Database Design",
            "Advanced SQL Queries",
            "Data Analysis",
          ]
        }
      ]
    }
  ];

  const additionalModules = [
    {
      emoji: "🐍",
      title: "Complete Python Mastery Course",
      description: "The Complete Python Mastery Course equips you with the skills to master Python programming from scratch",
      sections: [
        {
          title: "Python Development",
          items: [
            "Python Core Concepts",
            "Advanced Applications",
            "Automation & Analysis",
          ]
        }
      ]
    },
    {
      emoji: "🤖",
      title: "Build Coding Projects with AI",
      description: "AI Complete Course offers an in-depth exploration of AI, Tools, Workflows, Prompts, Full stack projects, SaaS tools, Freelancing",
      sections: [
        {
          title: "AI Development",
          items: [
            "AI Tools Integration",
            "SaaS Development",
            "AI Project Building",
          ]
        }
      ]
    },
    {
      emoji: "🔮",
      title: "Prompt Engineering - ChatGPT",
      description: "The Prompt Engineering for ChatGPT Course teaches you how to craft effective prompts to maximize the potential of ChatGPT",
      sections: [
        {
          title: "Prompt Engineering",
          items: [
            "ChatGPT Mastery",
            "Effective Prompting",
            "AI Integration",
          ]
        }
      ]
    },
    {
      emoji: "☕",
      title: "Java Mastery Course",
      description: "Java Mastery Course guides you through the essentials to advanced concepts of Java programming",
      sections: [
        {
          title: "Java Development",
          items: [
            "Core Java Concepts",
            "Object-Oriented Programming",
            "Enterprise Applications",
          ]
        }
      ]
    },
    {
      emoji: "🚀",
      title: "25+ Full Stack Projects Course",
      description: "Master Full Stack Dev with 25+ Projects! Build real-world applications",
      sections: [
        {
          title: "Project Building",
          items: [
            "Real-world Projects",
            "Industry Best Practices",
            "Portfolio Development",
          ]
        }
      ]
    },
    {
      emoji: "📈",
      title: "Complete Excel Mastery Course",
      description: "The Complete Excel Mastery Course is designed to take you from beginner to advanced",
      sections: [
        {
          title: "Excel Skills",
          items: [
            "Advanced Formulas",
            "Data Analysis",
            "Business Intelligence",
          ]
        }
      ]
    },
    {
      emoji: "⚡",
      title: "Master MERN Stack",
      description: "Master MERN stack with this certified course which includes 300+ videos, 45+ projects, 25+ interview guides!",
      sections: [
        {
          title: "Full Stack Development",
          items: [
            "MongoDB & Express.js",
            "React.js & Node.js",
            "Full Stack Architecture",
          ]
        }
      ]
    },
    {
      emoji: "🎨",
      title: "Unique Full Stack Projects",
      description: "Dive into innovative projects like building real-time applications. Push the boundaries of creativity and technology",
      sections: [
        {
          title: "Creative Development",
          items: [
            "Real-time Applications",
            "Innovative Solutions",
            "Advanced Integration",
          ]
        }
      ]
    },
    {
      emoji: "🎯",
      title: "Interview Focused Prep Course",
      description: "Prepare for your interviews in the best possible way - Full stack, DSA, Python",
      sections: [
        {
          title: "Interview Preparation",
          items: [
            "Technical Interview Prep",
            "Problem Solving Skills",
            "Mock Interviews",
          ]
        }
      ]
    },
    {
      emoji: "📱",
      title: "Complete Next.js Mastery",
      description: "The Complete Next.js Mastery Course takes you from basics to advanced skills in server-rendered applications",
      sections: [
        {
          title: "Next.js Development",
          items: [
            "Server-side Rendering",
            "Dynamic Routing",
            "Full Stack Next.js",
          ]
        }
      ]
    }
  ];

  const modules = showMore ? [...mainModules, ...additionalModules] : mainModules;

  return (
    <div className="relative bg-gradient-to-br from-[#112121] via-[#0A1A1A] to-[#112121] py-12 text-white overflow-hidden">
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

        <div className="mt-8 space-y-4 relative pl-3">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent" />
          {modules.map((module, index) => (
            <Module key={index} module={module} index={index} />
          ))}
          
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group relative px-4 py-2 text-sm font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                <span>{showMore ? 'Show Less Courses' : 'View More Courses'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 