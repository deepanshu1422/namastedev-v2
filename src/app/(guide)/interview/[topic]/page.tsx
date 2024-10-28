'use client'

import { useState } from 'react'
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { interviewQuestions } from '@/util/globals'
// import { interviewQuestions } from '@/util/globals'
export const dynamic = "force-static";

interface Question {
  question: string;
  answer: string;
}

interface TopicContent {
  interviewQuestions: Question[];
  takeHomeProjects: Question[];
  bigCompanyQuestions: Question[];
  simpleProjects: Question[];
}

interface Topics {
  [key: string]: TopicContent;
}


export default function TopicQuestions({ params }: { params: { topic?: string } }) {
  const [openSections, setOpenSections] = useState<string[]>([])
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: number[] }>({})

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    )
  }

  const toggleQuestion = (section: string, index: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [section]: prev[section]?.includes(index)
        ? prev[section].filter(i => i !== index)
        : [...(prev[section] || []), index]
    }))
  }

  const topic = params.topic || 'javascript'
  const topicContent = interviewQuestions[topic.toLowerCase()] || {} as TopicContent

  if (Object.keys(topicContent).length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Topic Not Found</h1>
        <p>Sorry, we couldn&apos;t find any questions for the topic: {topic}</p>
        <Link href="/interview" className="text-blue-500 hover:underline">
          Return to Interview Dashboard
        </Link>
      </div>
    )
  }

  const renderContent = (content: Question[], section: string) => (
    <div className="space-y-6">
      {content.map((item, index) => (
        <div key={index} className="bg-prime rounded-lg overflow-hidden shadow-md">
          <div 
            className="p-4 cursor-pointer transition-colors hover:bg-opacity-80"
            onClick={() => toggleQuestion(section, index)}
          >
            <h3 className="text-base sm:text-lg font-medium leading-tight mb-2 whitespace-pre-wrap">{item.question}</h3>
            <p className="text-sm sm:text-base text-white whitespace-pre-wrap">{item.answer}</p>
            {/* <ChevronDown 
              className={`h-6 w-6 transition-transform mt-2 ${openQuestions[section]?.includes(index) ? 'transform rotate-180' : ''}`}
            /> */}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto p-6 text-gray-100 flex flex-col">
      <header className="mb-8">
        <div className="">
          <Link href="/interview" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
            <ArrowLeft /> Back to Interview Dashboard
          </Link>
          <h1 className="text-4xl font-bold capitalize">{topic} Interview questions</h1>
        </div>
      </header>
      <div className="space-y-6">
        {[
          { title: "Interview Questions", content: topicContent.interviewQuestions },
          { title: "Take Home Projects", content: topicContent.takeHomeProjects },
          { title: "Questions for Big Companies", content: topicContent.bigCompanyQuestions },
          { title: "Simple Projects", content: topicContent.simpleProjects },
        ].map(({ title, content }) => (
          <Card key={title} className="bg-second border-gray-700">
            <CardHeader 
              className="cursor-pointer transition-colors hover:bg-second" 
              onClick={() => toggleSection(title)}
            >
              <CardTitle className="flex justify-between items-center text-xl">
                <span>{title}</span>
                <ChevronDown 
                  className={`h-6 w-6 transition-transform ${openSections.includes(title) ? 'transform rotate-180' : ''}`}
                />
              </CardTitle>
            </CardHeader>
            {openSections.includes(title) && (
              <CardContent className="bg-second">
                {renderContent(content as Question[], title)}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
