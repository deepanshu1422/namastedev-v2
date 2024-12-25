import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Metadata } from 'next';
import Main from './main';

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Coding Interview Question | 30dayscoding",
  description:
    "Prepare for your dream job with our comprehensive collection of coding interview questions. Master algorithms, data structures, and problem-solving techniques with expert insights and detailed solutions.",
  openGraph: {
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Coding Interview Question | 30dayscoding",
    description:
      "Prepare for your dream job with our comprehensive collection of coding interview questions. Master algorithms, data structures, and problem-solving techniques with expert insights and detailed solutions.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Coding Interview Question | 30dayscoding",
    description:
      "Prepare for your dream job with our comprehensive collection of coding interview questions. Master algorithms, data structures, and problem-solving techniques with expert insights and detailed solutions.",
    site: "https://30dayscoding.com",
  },
};

export default function InterviewDashboard() {
  return (
    <Main />
    // <div className="container mx-auto p-4 flex flex-col gap-4">
    //   <h1 className="text-3xl font-bold mb-6">Interview Question Dashboard</h1>
    //   <p className="text-muted-foreground">Select a topic to view interview questions</p>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //     {topics.map((topic) => (
    //       <Link href={`/interview/${topic.slug}`} key={topic.slug}>
    //         <Card className="hover:shadow-lg transition-shadow">
    //           <CardHeader>
    //             <CardTitle>{topic.name}</CardTitle>
    //             <CardDescription>{topic.description}</CardDescription>
    //           </CardHeader>
    //         </Card>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  )
}