"use client";

import React, { useState } from "react";
import Hero from "./hero";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const topics = [
  {
    name: "JavaScript",
    description: "Programming for the web",
    slug: "javascript",
    icon: "https://img.icons8.com/?size=500&id=PXTY4q2Sq2lG&format=png&color=000000",
  },
  {
    name: "React",
    description: "UI library for building interfaces",
    slug: "react",
    icon: "https://img.icons8.com/?size=500&id=wPohyHO_qO1a&format=png&color=000000",
  },
  {
    name: "Python",
    description: "Versatile programming language",
    slug: "python",
    icon: "https://img.icons8.com/?size=500&id=13441&format=png&color=000000",
  },
  {
    name: "Data Structures",
    description: "Organizing and storing data efficiently",
    slug: "data-structures",
    icon: "https://img.icons8.com/?size=500&id=33149&format=png&color=000000",
  },
  {
    name: "Algorithms",
    description: "Step-by-step problem-solving methods",
    slug: "algorithms",
    icon: "https://img.icons8.com/?size=200&id=uZt9I5L9rHsu&format=png&color=000000",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for backend development",
    slug: "nodejs",
    icon: "https://img.icons8.com/?size=500&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    name: "HTML",
    description: "Standard markup language for web pages",
    slug: "html",
    icon: "https://img.icons8.com/?size=500&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    description: "Styling language for web design",
    slug: "css",
    icon: "https://img.icons8.com/?size=500&id=21278&format=png&color=000000",
  },
  {
    name: "SQL",
    description: "Structured Query Language for databases",
    slug: "sql",
    icon: "https://img.icons8.com/?size=100&id=UFF3hmipmJ2V&format=png&color=000000",
  },
  {
    name: "MongoDB",
    description: "NoSQL database for modern applications",
    slug: "mongodb",
    icon: "https://img.icons8.com/?size=500&id=74402&format=png&color=000000",
  },
  {
    name: "Redux",
    description: "State management library for JavaScript apps",
    slug: "redux",
    icon: "https://img.icons8.com/?size=300&id=jD-fJzVguBmw&format=png&color=000000",
  },
  {
    name: "Next.js",
    description: "React framework for server-side rendering",
    slug: "nextjs",
    icon: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "TypeScript",
    description: "JavaScript with static typing",
    slug: "typescript",
    icon: "https://img.icons8.com/?size=300&id=uJM6fQYqDaZK&format=png&color=000000",
  },
  {
    name: "Machine Learning",
    description: "Training models to make predictions",
    slug: "machine-learning",
    icon: "https://img.icons8.com/?size=100&id=VL9fDzni6aE5&format=png&color=ffffff",
  },
  {
    name: "Blockchain",
    description: "Decentralized and secure digital ledgers",
    slug: "blockchain",
    icon: "https://img.icons8.com/?size=300&id=63192&format=png&color=000000",
  },
  {
    name: "Git",
    description: "Version control system for developers",
    slug: "git",
    icon: "https://img.icons8.com/?size=300&id=20906&format=png&color=000000",
  },
  {
    name: "REST APIs",
    description: "Designing scalable and efficient APIs",
    slug: "rest-apis",
    icon: "https://img.icons8.com/?size=100&id=21888&format=png&color=ffffff",
  },
  {
    name: "GraphQL",
    description: "Query language for APIs",
    slug: "graphql",
    icon: "https://img.icons8.com/?size=100&id=KRA1PoZgRrca&format=png&color=000000",
  },
];

export default function Main() {
  const [filteredProijects, setFilteredProijects] = useState(["projects"]);

  return (
    <main className="w-full flex flex-col min-h-svh">
      <Hero data={[""]} filter={setFilteredProijects} />
      {/* <Cards data={filteredProijects} /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-6 lg:px-8">
        {topics.map((topic) => (
          <Link href={`/interview/${topic.slug}`} key={topic.slug}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex-row items-center p-2">
                <Image
                  loader={() => topic.icon}
                  src={topic.icon}
                  alt={topic.name}
                  height={256}
                  width={256}
                  className="object-contain h-16 w-16"
                />
                <div className="flex flex-col gap-1.5 p-2">
                  <CardTitle>{topic.name}</CardTitle>
                  <CardDescription className="line-clamp-1">{topic.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
