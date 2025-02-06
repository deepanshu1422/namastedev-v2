"use client";

import { Card } from "@/components/ui/card";
import { Database, Binary, Code2, Sparkles, FileCode } from "lucide-react";
import Link from "next/link";

const playgrounds = [
  {
    title: "SQL Practice",
    description: "Write and execute SQL queries with instant feedback",
    icon: Database,
    href: "/playground/sql",
    badge: "New"
  },
  {
    title: "HTML Practice",
    description: "Practice HTML with interactive examples and live preview",
    icon: FileCode,
    href: "/playground/html",
    badge: "New"
  },
  {
    title: "JavaScript Practice",
    description: "Write and run JavaScript code with live console output",
    icon: Code2,
    href: "/playground/javascript",
    badge: "New"
  },
  // Add more playgrounds here as they're developed
];

export default function Main() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Interactive Playgrounds</h1>
        <p className="text-muted-foreground">
          Practice coding with interactive environments and real-time feedback
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playgrounds.map((playground, i) => (
          <Link key={i} href={playground.href}>
            <Card className="p-6 hover:shadow-lg transition-shadow h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <playground.icon className="h-6 w-6 text-primary" />
                </div>
                {playground.badge && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {playground.badge}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{playground.title}</h2>
              <p className="text-muted-foreground">{playground.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 