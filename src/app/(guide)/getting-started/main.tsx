"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Circle,
  Search,
  Code2,
  BookOpen,
  Brain,
  Rocket,
  GraduationCap,
  Sparkles,
  Target,
  Blocks,
  Binary,
  Database,
  Network,
  FileText,
  Bot
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const steps = [
  {
    title: "Getting Started Path",
    icon: Target,
    items: [
        {
          label: "Complete Software Engineer journey",
          description: "Start your journey to become a software engineer",
          link: "/journey"
        },
      {
        label: "Follow Learning Roadmaps",
        description: "Choose and follow your personalized learning roadmap",
        link: "/roadmaps"
      },
      {
        label: "Daily Motivation",
        description: "Access daily tech motivation and learning tips",
        link: "/motivation"
      }
    ]
  },
  {
    title: "Full Stack Development",
    icon: Code2,
    items: [
      {
        label: "MERN Stack Course",
        description: "Master MongoDB, Express.js, React, and Node.js",
        link: "https://30dayscoding.com/dashboard/complete-mern-stack-course"
      },
      {
        label: "Next.js Full Stack",
        description: "Learn modern full stack development with Next.js 14",
        link: "https://30dayscoding.com/dashboard/complete-next-js-mastery-course"
      },
      {
        label: "Projects Course",
        description: "Build real-world projects for your portfolio",
        link: "https://30dayscoding.com/dashboard/25-full-stack-projects-complete-course"
      },
      {
        label: "Advanced Projects",
        description: "Build unique and creative full stack applications",
        link: "https://30dayscoding.com/dashboard/unique-and-crazy-coding-full-stack-projects"
      }
    ]
  },
  {
    title: "DSA Mastery",
    icon: Brain,
    items: [
      {
        label: "DSA Complete Course",
        description: "Master Data Structures and Algorithms fundamentals",
        link: "https://30dayscoding.com/dashboard/dsa-complete-course"
      },
      {
        label: "DSA Problem Sheet",
        description: "Practice curated DSA problems with solutions",
        link: "/dsa"
      },
      {
        label: "Algorithm Visualizer",
        description: "Learn algorithms through interactive visualizations",
        link: "/visualizer"
      }
    ]
  },
  {
    title: "Interview Preparation",
    icon: Target,
    items: [
      {
        label: "Interview Mastery Course",
        description: "Complete interview preparation for full stack, DSA, and Python",
        link: "https://30dayscoding.com/dashboard/interview-prep-mastery-course-full-stack-dsa-python"
      }
    ]
  },
  {
    title: "AI Development",
    icon: Sparkles,
    items: [
      {
        label: "AI Projects Course",
        description: "Learn to build projects with AI integration",
        link: "https://30dayscoding.com/dashboard/build-coding-projects-with-ai"
      }
    ]
  }
];

const categories = [
  { title: "Projects", icon: Blocks, link: "/projects" },
  { title: "Interview Prep", icon: GraduationCap, link: "/interview" },
  { title: "Courses", icon: BookOpen, link: "/courses" },
  { title: "DSA", icon: Binary, link: "/dsa" },
  { title: "Additional", icon: Database, link: "/backend" },
  { title: "AI Learning", icon: Sparkles, link: "/dashboard/build-coding-projects-with-ai" },
];

export default function Main() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleComplete = (label: string) => {
    setCompleted(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const filteredSteps = steps.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[280px] md:h-[320px] bg-gradient-to-b from-primary/20 to-background/20">
        <div className="mx-auto px-4 h-full flex flex-col gap-2 justify-center items-center text-center">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">Welcome to 30 Days Coding!</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Let's Get You Started
          </h1>
          <p className="md:text-lg text-muted-foreground max-w-2xl">
            Follow this roadmap to kickstart your coding journey
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            We've carefully curated a learning path that takes you from basics to advanced concepts.
            <br />
            Start with the fundamentals and progress through hands-on projects and real-world applications.
          </p>
        </div>
      </section>

      {/* Quick Start Info - Moved here */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <Card className="p-6 bg-muted/30">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Before You Start</span>
            </div>
            <div className="space-y-3">
              <Link 
                href="https://docs.google.com/document/d/1Z1uKHBU5Shb3UeFYWkuAu2rHACU-uOx-1sYsyrX7meM/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary"
              >
                <FileText className="h-5 w-5" />
                <span>📚 Download all learning guides and resources</span>
              </Link>
              <Link 
                href="https://senja.io/p/30-days-coding/r/AgSF4E"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary"
              >
                <GraduationCap className="h-5 w-5" />
                <span>🎓 Get your course completion certificate</span>
              </Link>
              <div className="flex items-center gap-2 text-base">
                <Target className="h-5 w-5" />
                <span>🆕 Look out for sections marked as [NEW] - recently updated content</span>
              </div>
              <div className="flex items-center gap-2 text-base">
                <Bot className="h-5 w-5" />
                <span>🤖 Enhanced learning with AI features across all courses</span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Categories */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div key={category.title} className="group cursor-pointer">
              <Link 
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="p-4 transition-all group-hover:bg-muted/50 group-hover:shadow-md h-full">
                  <div className="text-center">
                    <category.icon className="h-6 w-6 mx-auto mb-2 group-hover:text-primary transition-colors" />
                    <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Checklist Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8 bg-muted rounded-lg p-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search roadmap items..."
            className="border-none bg-transparent focus-visible:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-8">
          {filteredSteps.map((section, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <button
                      onClick={() => toggleComplete(item.label)}
                      className="mt-1"
                    >
                      {completed.includes(item.label) ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{item.label}</h3>
                        <Link 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm">
                            Start →
                          </Button>
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 