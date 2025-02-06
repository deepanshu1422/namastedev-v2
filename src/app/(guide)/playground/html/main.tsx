"use client";

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, FileCode, Eye } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const htmlQuestions = {
  beginner: [
    {
      id: 1,
      title: "Basic Page Structure",
      description: "Create a basic HTML page structure with head and body",
      initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <!-- Add your content here -->
</body>
</html>`,
      hint: "Start with DOCTYPE declaration"
    },
    {
      id: 2,
      title: "Headings and Paragraphs",
      description: "Use different heading levels and paragraphs",
      initialCode: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>`,
      hint: "Use h1-h6 for headings"
    },
    {
      id: 3,
      title: "Text Formatting",
      description: "Format text using basic HTML tags",
      initialCode: `<p>This is <strong>bold</strong> and this is <em>italic</em> text.</p>
<p>This is <mark>highlighted</mark> and this is <u>underlined</u> text.</p>`,
      hint: "Use semantic tags for formatting"
    },
    {
      id: 4,
      title: "Lists",
      description: "Create ordered and unordered lists",
      initialCode: `<h3>Shopping List</h3>
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>

<h3>Recipe Steps</h3>
<ol>
  <li>Mix ingredients</li>
  <li>Bake for 20 minutes</li>
  <li>Let it cool</li>
</ol>`,
      hint: "Use ul for bullet points, ol for numbered lists"
    },
    {
      id: 5,
      title: "Links",
      description: "Create different types of links",
      initialCode: `<a href="https://www.example.com">External Link</a>
<a href="/about">Internal Link</a>
<a href="#section">Jump to Section</a>
<a href="mailto:example@email.com">Email Link</a>`,
      hint: "Use href attribute for destinations"
    }
  ],
  intermediate: [
    {
      id: 6,
      title: "Tables",
      description: "Create a table with headers and data",
      initialCode: `<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>30</td>
      <td>London</td>
    </tr>
  </tbody>
</table>`,
      hint: "Use thead and tbody for structure"
    },
    {
      id: 7,
      title: "Forms",
      description: "Create a contact form with various inputs",
      initialCode: `<form action="/submit" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
  </div>
  
  <button type="submit">Send</button>
</form>`,
      hint: "Use appropriate input types"
    },
    {
      id: 8,
      title: "Images and Figures",
      description: "Add images with captions using figure element",
      initialCode: `<figure>
  <img src="https://picsum.photos/300/200" alt="Random image">
  <figcaption>A beautiful landscape photo</figcaption>
</figure>`,
      hint: "Always include alt text for accessibility"
    }
  ],
  advanced: [
    {
      id: 9,
      title: "Semantic Layout",
      description: "Create a semantic page layout",
      initialCode: `<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Main Article</h1>
    <section>
      <h2>Section Title</h2>
      <p>Section content goes here.</p>
    </section>
  </article>
  
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#link1">Link 1</a></li>
      <li><a href="#link2">Link 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 My Website</p>
</footer>`,
      hint: "Use semantic elements for better structure"
    },
    {
      id: 10,
      title: "Embedded Content",
      description: "Embed various types of content",
      initialCode: `<!-- Video -->
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<!-- iFrame -->
<iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  width="560" 
  height="315" 
  frameborder="0"
  allowfullscreen>
</iframe>`,
      hint: "Include fallback content for older browsers"
    }
  ]
};

export default function Main() {
  const [currentCode, setCurrentCode] = useState(htmlQuestions.beginner[0].initialCode);
  const [selectedQuestion, setSelectedQuestion] = useState(htmlQuestions.beginner[0]);

  const handleQuestionSelect = (question: any) => {
    setSelectedQuestion(question);
    setCurrentCode(question.initialCode);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">HTML Playground</h1>
        <p className="text-muted-foreground">
          Practice HTML with interactive examples and live preview
        </p>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-6">
        {/* Sidebar */}
        <div className="space-y-4">
          <Accordion type="single" collapsible defaultValue="beginner">
            {Object.entries(htmlQuestions).map(([difficulty, questions]) => (
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
                extensions={[html()]}
                onChange={(value) => setCurrentCode(value)}
                className="border rounded-lg overflow-hidden"
              />
            </div>

            <div className="flex justify-between items-center">
              <Button 
                onClick={() => {
                  const previewWindow = window.open('', '_blank');
                  if (previewWindow) {
                    previewWindow.document.write(currentCode);
                    previewWindow.document.close();
                  }
                }}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                Preview
              </Button>

              <Button
                variant="outline"
                onClick={() => setCurrentCode(selectedQuestion.initialCode)}
              >
                Reset Code
              </Button>
            </div>
          </Card>

          {/* Live Preview */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
            <div className="border rounded-lg p-4 bg-white min-h-[200px]">
              <iframe
                srcDoc={currentCode}
                className="w-full h-full min-h-[200px]"
                title="preview"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 