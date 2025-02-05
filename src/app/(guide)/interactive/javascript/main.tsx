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
  Database,
  Sparkles,
  Layers,
  Repeat,
  Timer,
  ListTree,
  ArrowUpDown,
  Network,
  Cpu,
  Braces,
  Lock,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from 'react';

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
  },
  {
    id: "arrays",
    title: "Array Methods",
    icon: ListTree,
    description: "Master array manipulation methods",
    interactive: {
      code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((a, b) => a + b, 0);
const evens = numbers.filter(n => n % 2 === 0);`,
      visualization: {
        steps: [
          { array: [1, 2, 3, 4, 5], operation: "initial" },
          { array: [2, 4, 6, 8, 10], operation: "map" },
          { array: [2, 4], operation: "filter" },
          { value: 15, operation: "reduce" }
        ]
      }
    }
  },
  {
    id: "promises",
    title: "Promises & Async",
    icon: Timer,
    description: "Understanding asynchronous operations",
    interactive: {
      code: `const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 2000);
});

async function handlePromise() {
  const result = await promise;
  return result;
}`,
      visualization: {
        timeline: [
          { time: 0, state: "pending", message: "Promise created" },
          { time: 1000, state: "waiting", message: "Processing..." },
          { time: 2000, state: "fulfilled", message: "Done!" }
        ]
      }
    }
  },
  {
    id: "sorting",
    title: "Sorting Algorithms",
    icon: ArrowUpDown,
    description: "Visualize different sorting methods",
    interactive: {
      code: `function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
      visualization: {
        array: [5, 3, 8, 1, 4],
        steps: []  // Will be populated during animation
      }
    }
  },
  {
    id: "eventLoop",
    title: "Event Loop",
    icon: Repeat,
    description: "How JavaScript handles async operations",
    interactive: {
      code: `console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');`,
      visualization: {
        queue: [
          { type: "main", tasks: ["console.log('Start')", "console.log('End')"] },
          { type: "micro", tasks: ["Promise callback"] },
          { type: "macro", tasks: ["setTimeout callback"] }
        ]
      }
    }
  },
  {
    id: "prototype",
    title: "Prototypes & Inheritance",
    icon: Workflow,
    description: "Object inheritance in JavaScript",
    interactive: {
      code: `class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    return \`\${this.name} says woof!\`;
  }
}`,
      visualization: {
        chain: [
          { level: "Dog", methods: ["bark()"] },
          { level: "Animal", methods: ["constructor"] },
          { level: "Object", methods: ["toString()", "valueOf()"] }
        ]
      }
    }
  },
  {
    id: "generators",
    title: "Generators",
    icon: Cpu,
    description: "Understanding generator functions",
    interactive: {
      code: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();`,
      visualization: {
        states: [
          { value: 1, done: false },
          { value: 2, done: false },
          { value: 3, done: false },
          { value: undefined, done: true }
        ]
      }
    }
  },
  {
    id: "destructuring",
    title: "Destructuring",
    icon: Braces,
    description: "Array and object destructuring patterns",
    interactive: {
      code: `const person = {
  name: 'John',
  age: 30,
  address: { city: 'NY' }
};

const { name, age, address: { city } } = person;`,
      visualization: {
        object: {
          original: { name: "John", age: 30, address: { city: "NY" } },
          extracted: { name: "name", age: "age", city: "address.city" }
        }
      }
    }
  },
  {
    id: "sets",
    title: "Sets & Maps",
    icon: Database,
    description: "Working with Sets and Maps",
    interactive: {
      code: `const set = new Set([1, 2, 2, 3, 3]);
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);`,
      visualization: {
        set: { values: [1, 2, 3], duplicates: [2, 3] },
        map: [
          { key: "key1", value: "value1" },
          { key: "key2", value: "value2" }
        ]
      }
    }
  },
  {
    id: "regex",
    title: "Regular Expressions",
    icon: Code2,
    description: "Pattern matching with RegExp",
    interactive: {
      code: `const pattern = /\\b\\w+@\\w+\\.\\w+\\b/;
const text = "Contact: user@example.com";
const match = text.match(pattern);`,
      visualization: {
        text: "Contact: user@example.com",
        pattern: {
          parts: [
            { part: "\\b", meaning: "Word boundary" },
            { part: "\\w+", meaning: "One or more word chars" },
            { part: "@", meaning: "Literal @" },
            { part: "\\w+", meaning: "One or more word chars" },
            { part: "\\.", meaning: "Literal dot" },
            { part: "\\w+", meaning: "One or more word chars" },
            { part: "\\b", meaning: "Word boundary" }
          ]
        }
      }
    }
  }
];

export default function Main() {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [animationState, setAnimationState] = useState<{
    currentState?: string;
    currentArray?: number[];
    currentQueue?: string;
    currentTasks?: string[];
    currentStep?: number;
    currentValue?: any;
  }>({});

  const runVisualization = () => {
    setIsRunning(true);
    setAnimationState({ currentStep: 0 });
    
    switch (activeLesson.id) {
      case "sorting":
        runSortingAnimation();
        break;
      case "promises":
        runPromiseAnimation();
        break;
      case "eventLoop":
        runEventLoopAnimation();
        break;
      case "generators":
        runGeneratorAnimation();
        break;
      case "prototype":
        runPrototypeAnimation();
        break;
      case "sets":
        runSetsAnimation();
        break;
      case "destructuring":
        runDestructuringAnimation();
        break;
      case "regex":
        runRegexAnimation();
        break;
      default:
        setTimeout(() => {
          setIsRunning(false);
          setAnimationState({});
        }, 2000);
    }
  };

  const runSortingAnimation = () => {
    const arr = [...activeLesson.interactive.visualization.array];
    const steps = [];
    
    // Simulate bubble sort steps
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          steps.push([...arr]);
        }
      }
    }
    
    let step = 0;
    const interval = setInterval(() => {
      if (step < steps.length) {
        setAnimationState({ currentArray: steps[step] });
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 500);
  };

  const runPromiseAnimation = () => {
    const timeline = activeLesson.interactive.visualization.timeline;
    let step = 0;
    
    const interval = setInterval(() => {
      if (step < timeline.length) {
        setAnimationState({ 
          currentState: timeline[step].state
        });
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1000);
  };

  const runEventLoopAnimation = () => {
    const queue = activeLesson.interactive.visualization.queue;
    let step = 0;
    
    const interval = setInterval(() => {
      if (step < queue.length) {
        setAnimationState({ 
          currentQueue: queue[step].type,
          currentTasks: queue[step].tasks 
        });
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1000);
  };

  const runGeneratorAnimation = () => {
    const states = activeLesson.interactive.visualization.states;
    let step = 0;
    
    const interval = setInterval(() => {
      if (step < states.length) {
        setAnimationState({ 
          currentStep: step,
          currentValue: states[step]
        });
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1000);
  };

  const runPrototypeAnimation = () => {
    const chain = activeLesson.interactive.visualization.chain;
    let step = 0;
    
    const interval = setInterval(() => {
      if (step < chain.length) {
        setAnimationState({ currentStep: step });
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1000);
  };

  const runSetsAnimation = () => {
    const { values, duplicates } = activeLesson.interactive.visualization.set;
    let step = 0;
    const totalSteps = values.length + duplicates.length;
    
    const interval = setInterval(() => {
      if (step < totalSteps) {
        setAnimationState({ currentStep: step });
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 800);
  };

  const runDestructuringAnimation = () => {
    const { original, extracted } = activeLesson.interactive.visualization.object;
    let step = 0;
    const steps = Object.keys(extracted);
    
    const interval = setInterval(() => {
      if (step < steps.length) {
        setAnimationState({ 
          currentStep: step,
          currentValue: steps[step]
        });
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 800);
  };

  const runRegexAnimation = () => {
    const { parts } = activeLesson.interactive.visualization.pattern;
    let step = 0;
    
    const interval = setInterval(() => {
      if (step < parts.length) {
        setAnimationState({ currentStep: step });
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* New notification banner */}
      <div className="bg-muted/50 border rounded-lg p-3 mb-6 text-sm text-muted-foreground flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" />
        <p>We're constantly adding new lessons and updating existing ones to keep you up to date with the latest practices.</p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Link href="/interactive">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
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

              {activeLesson.id === "arrays" && (
                <div className="space-y-4">
                  {activeLesson.interactive.visualization.steps.map((step, index) => (
                    <div key={index} className={cn(
                      "p-3 rounded-lg transition-all duration-300 text-black",
                      isRunning && "transform translate-y-1"
                    )}>
                      <div className="flex gap-2 items-center">
                        <div className="font-mono text-foreground font-medium">{step.operation}:</div>
                        <div className="flex gap-2">
                          {step.array ? step.array.map((num, i) => (
                            <div key={i} className={cn(
                              "w-8 h-8 flex items-center justify-center rounded font-medium text-black",
                              isRunning && "animate-bounce",
                              step.operation === "map" ? "bg-blue-100 dark:bg-blue-900" :
                              step.operation === "filter" ? "bg-green-100 dark:bg-green-900" :
                              "bg-gray-100 dark:bg-gray-800"
                            )}>
                              {num}
                            </div>
                          )) : (
                            <div className="font-mono text-foreground font-medium">Result: {step.value}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeLesson.id === "promises" && (
                <div className="space-y-4">
                  {activeLesson.interactive.visualization.timeline.map((event, index) => (
                    <div key={index} className={cn(
                      "p-3 rounded-lg",
                      isRunning && animationState.currentState === event.state
                        ? "bg-primary/20 transform scale-105"
                        : "bg-muted"
                    )}>
                      <div className="flex items-center gap-3">
                        <div className="w-20 text-sm">{event.time}ms</div>
                        <div className={cn(
                          "h-2 w-2 rounded-full",
                          event.state === "pending" ? "bg-yellow-400" :
                          event.state === "fulfilled" ? "bg-green-400" :
                          "bg-blue-400"
                        )} />
                        <div>{event.message}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeLesson.id === "sorting" && (
                <div className="flex justify-center items-center h-40">
                  <div className="flex gap-2 items-end">
                    {(animationState.currentArray || activeLesson.interactive.visualization.array).map((num, index) => (
                      <div
                        key={index}
                        style={{ height: `${num * 20}px` }}
                        className={cn(
                          "w-8 bg-primary/60 rounded-t transition-all duration-300",
                          isRunning && "animate-pulse"
                        )}
                      >
                        <div className="text-center mt-2">{num}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeLesson.id === "closure" && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-4">
                    <div className="font-mono mb-2">Lexical Scope:</div>
                    <div className="pl-4 space-y-2">
                      {Object.entries(activeLesson.interactive.visualization.memory).map(([scope, details]: [string, any]) => (
                        <div key={scope} className={cn(
                          "p-2 rounded",
                          scope === "inner" ? "bg-yellow-100" : "bg-blue-100"
                        )}>
                          <div className="font-medium text-black">{scope}</div>
                          {Array.isArray(details) ? (
                            <div className="flex gap-2 mt-1 text-black">
                              {details.map(method => (
                                <div key={method} className="text-sm bg-white/50 text-black  px-2 py-1 rounded">
                                  {method}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-sm mt-1 text-black">
                              {Object.entries(details).map(([key, value]) => (
                                <div key={key}>{key}: {String(value)}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeLesson.id === "eventLoop" && (
                <div className="space-y-4">
                  {activeLesson.interactive.visualization.queue.map((task, index) => (
                    <div key={index} className={cn(
                      "p-3 rounded-lg",
                      isRunning && animationState.currentQueue === task.type
                        ? "bg-primary/20 transform scale-105"
                        : "bg-muted"
                    )}>
                      <div className="flex items-center gap-3">
                        <div className="w-20 text-sm">{task.type.toUpperCase()}</div>
                        <div>{task.tasks.join(", ")}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeLesson.id === "generators" && (
                <div className="space-y-4">
                  {activeLesson.interactive.visualization.states.map((state, index) => (
                    <div key={index} className={cn(
                      "p-4 rounded-lg border-2 transition-all duration-300",
                      isRunning && animationState.currentStep === index
                        ? "border-primary bg-primary/5 transform scale-105"
                        : "border-transparent bg-muted"
                    )}>
                      <div className="flex items-center justify-between">
                        <div className="font-mono text-foreground">yield {index + 1}</div>
                        <div className="flex gap-4">
                          <span className="text-sm">value: <span className="font-mono">{state.value}</span></span>
                          <span className="text-sm">done: <span className="font-mono">{String(state.done)}</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeLesson.id === "prototype" && (
                <div className="space-y-2">
                  {activeLesson.interactive.visualization.chain.map((level, index) => (
                    <div key={index} className={cn(
                      "p-4 rounded-lg border-2 transition-all duration-300",
                      isRunning && animationState.currentStep === index
                        ? "border-primary bg-primary/5 transform scale-105"
                        : "border-transparent bg-muted",
                      index > 0 && "ml-4"
                    )}>
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-foreground">{level.level}</div>
                        <div className="flex gap-2 flex-wrap">
                          {level.methods.map((method, i) => (
                            <div key={i} className="text-sm px-2 py-1 rounded bg-background">
                              {method}
                            </div>
                          ))}
                        </div>
                      </div>
                      {index < activeLesson.interactive.visualization.chain.length - 1 && (
                        <div className="h-6 w-px bg-muted-foreground mx-auto my-1" />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeLesson.id === "destructuring" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="font-medium text-foreground mb-2">Original Object:</div>
                    {Object.entries(activeLesson.interactive.visualization.object.original).map(([key, value], index) => (
                      <div key={key} className={cn(
                        "p-2 rounded bg-muted transition-all duration-300",
                        isRunning && animationState.currentValue === key && "bg-primary/20 transform scale-105"
                      )}>
                        <span className="font-mono">{key}: </span>
                        <span className="font-mono">{JSON.stringify(value)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-foreground mb-2">Destructured:</div>
                    {Object.entries(activeLesson.interactive.visualization.object.extracted).map(([key, path], index) => (
                      <div key={key} className={cn(
                        "p-2 rounded bg-muted transition-all duration-300",
                        isRunning && animationState.currentValue === key && "bg-primary/20 transform scale-105"
                      )}>
                        <span className="font-mono">{key}</span>
                        <span className="text-muted-foreground"> ← </span>
                        <span className="font-mono text-primary">{path}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeLesson.id === "sets" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="font-medium text-foreground mb-2">Set Values:</div>
                    <div className="flex gap-2 flex-wrap">
                      {activeLesson.interactive.visualization.set.values.map((value, index) => (
                        <div key={index} className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                          isRunning && animationState.currentStep === index
                            ? "bg-primary text-primary-foreground transform scale-110"
                            : "bg-muted"
                        )}>
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-foreground mb-2">Map Entries:</div>
                    <div className="grid gap-2">
                      {activeLesson.interactive.visualization.map.map((entry, index) => (
                        <div key={index} className={cn(
                          "p-3 rounded-lg bg-muted flex items-center gap-4 transition-all duration-300",
                          isRunning && animationState.currentStep === index + activeLesson.interactive.visualization.set.values.length
                            && "bg-primary/20 transform scale-105"
                        )}>
                          <div className="font-mono">{entry.key}</div>
                          <div className="text-primary">→</div>
                          <div className="font-mono">{entry.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeLesson.id === "regex" && (
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-muted">
                    <div className="font-mono text-foreground">
                      {activeLesson.interactive.visualization.text.split('').map((char, index) => (
                        <span key={index} className={cn(
                          char === '@' && "text-primary font-bold",
                          /[a-zA-Z0-9]/.test(char) && "text-foreground",
                          /[^a-zA-Z0-9@]/.test(char) && "text-muted-foreground"
                        )}>
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {activeLesson.interactive.visualization.pattern.parts.map((part, index) => (
                      <div key={index} className={cn(
                        "p-3 rounded-lg transition-all duration-300",
                        isRunning && animationState.currentStep === index
                          ? "bg-primary/20 transform scale-105"
                          : "bg-muted"
                      )}>
                        <div className="flex items-center justify-between">
                          <code className="text-sm font-mono">{part.part}</code>
                          <span className="text-sm text-muted-foreground">{part.meaning}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button
                className="w-full mt-4"
                onClick={runVisualization}
                disabled={isRunning}
              >
                <PlayCircle className="h-4 w-4 mr-2" />
                {isRunning ? "Running..." : "Run Example"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 