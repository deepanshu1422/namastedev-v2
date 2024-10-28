import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const dynamic = "force-static";

const topics = [
//   { name: 'HTML', description: 'Structure of web pages', slug: 'html' },
//   { name: 'CSS', description: 'Styling and layout', slug: 'css' },
//   { name: 'Python', description: 'Programming for the web', slug: 'python' },
//   { name: 'Java', description: 'Programming for the web', slug: 'java' },
  { name: 'JavaScript', description: 'Programming for the web', slug: 'javascript' },
  { name: 'React', description: 'UI library for building interfaces', slug: 'react' },
//   { name: 'Node.js', description: 'JavaScript runtime for server-side development', slug: 'nodejs' },
//   { name: 'Next.js', description: 'React framework for building web applications', slug: 'nextjs' },
//   { name: 'SQL', description: 'Structured Query Language for managing databases', slug: 'sql' },
]

export default function InterviewDashboard() {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-6">Interview Question Dashboard</h1>
      <p className="text-muted-foreground">Select a topic to view interview questions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Link href={`/interview/${topic.slug}`} key={topic.slug}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{topic.name}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}