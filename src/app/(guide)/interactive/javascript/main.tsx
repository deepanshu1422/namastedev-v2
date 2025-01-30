"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  PlayCircle, 
  Code2, 
  Variable, 
  Box, 
  Brackets,
  Database 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const lessons = [
  {
    id: "variables",
    title: "Variables & Types",
    icon: Variable,
    description: "Learn about JavaScript variables and data types",
    interactive: {
      code: `let count = 0;
const message = "Hello";
var isActive = true;`,
      visualization: {
        memory: [
          { name: "count", type: "number", value: "0", mutable: true },
          { name: "message", type: "string", value: '"Hello"', mutable: false },
          { name: "isActive", type: "boolean", value: "true", mutable: true }
        ]
      }
    }
  },
  {
    id: "functions",
    title: "Functions",
    icon: Brackets,
    description: "Understanding functions and scope",
    interactive: {
      code: `function greet(name) {
  return "Hello, " + name;
}

const result = greet("User");`,
      visualization: {
        stack: [
          { name: "greet", params: ["name"], scope: "global" },
          { name: "result", value: '"Hello, User"', scope: "global" }
        ]
      }
    }
  },
  {
    id: "fetch",
    title: "Fetch API",
    icon: Database,
    description: "Making API calls with fetch",
    interactive: {
      code: `async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}`,
      visualization: {
        steps: [
          { status: "pending", message: "Initiating request..." },
          { status: "loading", message: "Fetching data..." },
          { status: "success", message: "Data received!" }
        ]
      }
    }
  }
];

export default function Main() {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [isRunning, setIsRunning] = useState(false);

  const runVisualization = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/interactive" className="hover:text-primary">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold mb-2">JavaScript Interactive Learning</h1>
          <p className="text-muted-foreground">
            Master JavaScript concepts through visual examples
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-6">
        {/* Sidebar */}
        <div className="space-y-2">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLesson(lesson)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg transition-colors",
                activeLesson.id === lesson.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <lesson.icon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">{lesson.title}</div>
                <div className="text-sm text-muted-foreground">
                  {lesson.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <activeLesson.icon className="h-6 w-6" />
              {activeLesson.title}
            </h2>
            
            {/* Code Example */}
            <div className="bg-muted p-4 rounded-lg mb-6">
              <pre className="text-sm">
                <code>{activeLesson.interactive.code}</code>
              </pre>
            </div>

            {/* Visualization */}
            <div className="border rounded-lg p-6">
              {activeLesson.id === "variables" && (
                <div className="space-y-4">
                  {activeLesson.interactive.visualization.memory.map((variable) => (
                    <div key={variable.name} className="flex items-center gap-4 p-2 bg-muted rounded">
                      <div className="w-24 font-mono">{variable.name}</div>
                      <div className="px-2 py-1 bg-primary/10 rounded text-sm">{variable.type}</div>
                      <div className="font-mono">{variable.value}</div>
                      <div className={cn(
                        "ml-auto px-2 py-1 rounded text-xs",
                        variable.mutable ? "bg-yellow-500/20" : "bg-blue-500/20"
                      )}>
                        {variable.mutable ? "mutable" : "immutable"}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeLesson.id === "functions" && (
                <div className="space-y-4">
                  {activeLesson.interactive.visualization.stack.map((item, index) => (
                    <div key={index} className="p-3 bg-muted rounded">
                      <div className="font-medium mb-1">{item.name}</div>
                      {item.params && (
                        <div className="text-sm text-muted-foreground">
                          Parameters: {item.params.join(", ")}
                        </div>
                      )}
                      {item.value && (
                        <div className="text-sm font-mono mt-2">
                          Return: {item.value}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeLesson.id === "fetch" && (
                <div className="space-y-4">
                  {activeLesson.interactive.visualization.steps.map((step, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-3 rounded flex items-center gap-3",
                        isRunning && "animate-pulse",
                        isRunning && index === 1 ? "bg-primary/20" : "bg-muted"
                      )}
                    >
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <div>{step.message}</div>
                    </div>
                  ))}
                </div>
              )}

              <Button
                className="w-full mt-4"
                onClick={runVisualization}
                disabled={isRunning}
              >
                <PlayCircle className="h-4 w-4 mr-2" />
                Run Example
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 