"use client";

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, FileCode, Terminal } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const jsQuestions = {
  beginner: [
    {
      id: 1,
      title: "Variables and Data Types",
      description: "Learn about different variable declarations and data types",
      initialCode: `// Let's explore variables and data types
let name = "John";
const age = 25;
var isStudent = true;

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof isStudent); // boolean

// Try changing the values and types`,
      hint: "Use let for changeable values, const for constants"
    },
    {
      id: 2,
      title: "Arrays and Methods",
      description: "Work with arrays and common array methods",
      initialCode: `const fruits = ['apple', 'banana', 'orange'];

// Adding elements
fruits.push('mango');
console.log(fruits);

// Mapping
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// Filtering
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);`,
      hint: "Try other array methods like reduce, find, some"
    },
    {
      id: 3,
      title: "Objects and Properties",
      description: "Create and manipulate JavaScript objects",
      initialCode: `const person = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'music'],
  greet: function() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
};

person.greet();
console.log(person.hobbies);

// Add a new property
person.location = 'New York';
console.log(person);`,
      hint: "Try accessing properties with dot and bracket notation"
    }
  ],
  intermediate: [
    {
      id: 4,
      title: "Functions and Scope",
      description: "Understand function declarations and scope",
      initialCode: `// Function Declaration
function multiply(a, b) {
  return a * b;
}

// Arrow Function
const add = (a, b) => a + b;

// Closure Example
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.getCount());`,
      hint: "Explore closures and function scope"
    },
    {
      id: 5,
      title: "Promises and Async",
      description: "Work with asynchronous JavaScript",
      initialCode: `// Creating a Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchData() {
  console.log('Starting...');
  
  try {
    await delay(1000);
    console.log('Data fetched!');
    
    await delay(500);
    console.log('Processing complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();`,
      hint: "Try adding multiple async operations"
    }
  ],
  advanced: [
    {
      id: 6,
      title: "Classes and Inheritance",
      description: "Object-oriented programming in JavaScript",
      initialCode: `class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound.\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    console.log(\`\${this.name} barks!\`);
  }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak();`,
      hint: "Try adding more methods and properties"
    },
    {
      id: 7,
      title: "Generators and Iterators",
      description: "Advanced iteration patterns",
      initialCode: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Infinite Fibonacci sequence
function* fibonacci() {
  let prev = 0, curr = 1;
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
for (let i = 0; i < 5; i++) {
  console.log(fib.next().value);
}`,
      hint: "Try creating custom iterators"
    }
  ]
};

export default function Main() {
  const [currentCode, setCurrentCode] = useState(jsQuestions.beginner[0].initialCode);
  const [selectedQuestion, setSelectedQuestion] = useState(jsQuestions.beginner[0]);
  const [output, setOutput] = useState<string[]>([]);

  const handleQuestionSelect = (question: any) => {
    setSelectedQuestion(question);
    setCurrentCode(question.initialCode);
    setOutput([]);
  };

  const runCode = () => {
    setOutput([]);
    const logs: string[] = [];
    const originalConsoleLog = console.log;
    
    try {
      // Override console.log
      (console as any).log = (...args: any[]) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
      };

      // Run the code
      eval(currentCode);
      
      // Set output
      setOutput(logs);
    } catch (error: any) {
      setOutput([`Error: ${error.message}`]);
    } finally {
      // Restore console.log
      console.log = originalConsoleLog;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">JavaScript Playground</h1>
        <p className="text-muted-foreground">
          Practice JavaScript with interactive examples and live console output
        </p>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-6">
        {/* Sidebar */}
        <div className="space-y-4">
          <Accordion type="single" collapsible defaultValue="beginner">
            {Object.entries(jsQuestions).map(([difficulty, questions]) => (
              <AccordionItem key={difficulty} value={difficulty}>
                <AccordionTrigger className="text-lg font-semibold capitalize">
                  {difficulty}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    {questions.map((question) => (
                      <button
                        key={question.id}
                        onClick={() => handleQuestionSelect(question)}
                        className={cn(
                          "w-full text-left p-3 rounded-lg transition-colors",
                          selectedQuestion.id === question.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        <div className="font-medium">{question.title}</div>
                        <div className="text-sm">
                          {question.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <Card className="p-4">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">{selectedQuestion.title}</h2>
              <p className="text-muted-foreground">{selectedQuestion.description}</p>
            </div>

            <div className="mb-4">
              <CodeMirror
                value={currentCode}
                height="200px"
                theme={githubLight}
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setCurrentCode(value)}
                className="border rounded-lg overflow-hidden"
              />
            </div>

            <div className="flex justify-between items-center">
              <Button 
                onClick={runCode}
                className="flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Run Code
              </Button>

              <Button
                variant="outline"
                onClick={() => setCurrentCode(selectedQuestion.initialCode)}
              >
                Reset Code
              </Button>
            </div>
          </Card>

          {/* Console Output */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Console Output</h3>
            </div>
            <div className="bg-zinc-950 text-zinc-50 rounded-lg p-4 font-mono text-sm">
              {output.length > 0 ? (
                output.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap">{line}</div>
                ))
              ) : (
                <div className="text-zinc-400">Run code to see output...</div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 