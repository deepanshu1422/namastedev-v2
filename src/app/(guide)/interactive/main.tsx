"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

const topics = [
  {
    title: "JavaScript Fundamentals",
    description: "Master core JavaScript concepts through interactive examples",
    lessons: ["Variables & Types", "Functions", "Arrays & Objects", "Async/Await"],
    href: "/interactive/javascript"
  },
  {
    title: "React Essentials",
    description: "Learn React with hands-on exercises and live code examples",
    lessons: ["Components", "Hooks", "State Management", "React Router"],
    href: "/interactive/react"
  },
  {
    title: "Node.js & Express",
    description: "Build backend services with interactive Node.js tutorials",
    lessons: ["REST APIs", "Database Integration", "Authentication", "WebSockets"],
    href: "/interactive/nodejs"
  }
];

export default function Main() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Interactive Learning</h1>
        <p className="text-muted-foreground">
          Master full stack development through hands-on, interactive lessons
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card key={topic.title} className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3">{topic.title}</h2>
            <p className="text-muted-foreground mb-4">{topic.description}</p>
            <ul className="space-y-2 mb-6">
              {topic.lessons.map((lesson) => (
                <li key={lesson} className="flex items-center gap-2">
                  <PlayCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{lesson}</span>
                </li>
              ))}
            </ul>
            <Link href={topic.href}>
              <Button className="w-full">Start Learning</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
} 