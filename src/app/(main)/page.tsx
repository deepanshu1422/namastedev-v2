import Hero from "@/components/home-components/new-hero";
import type { Metadata } from "next";
import Store from "@/components/home-components/store";
import Faqs from "@/components/mentorship-comp/faq";
import Script from "next/script";
import Success from "@/components/mentorship-comp/success";
import Mentors from "./mentorship/mentors";
import VideoSlider from "@/app/(guide)/testimonials/video-slider";
import MissionSection from "@/components/mission-section";
import {
  Code2,
  GraduationCap,
  Sparkles,
  FileCode,
  Bot,
  Users,
  ArrowRight
} from "lucide-react";
import Link from "next/link";


export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "30 Days Coding - Learn Live",
  description:
    "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "30 Days Coding - Learn Live",
    description:
      "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "30 Days Coding - Learn Live",
    description:
      "A well organised platform for multiple development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  let faq = [
    {
      question: "What is the validity of the course?",
      answer:
        "Once you enroll, you will have lifetime access to the course materials, including any future updates.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes, you will receive a verified certificate upon successful completion of the course, which you can share on LinkedIn and include in your resume.",
    },
    // {
    //   question: "What is the refund policy?",
    //   answer:
    //     "We offer a 30-day money-back guarantee. If you're not satisfied within this period, you can request a full refund, no questions asked.",
    // },
    {
      question: "Is this course beginner-friendly?",
      answer:
        "Absolutely! Our course is designed with beginners in mind, starting with the basics and gradually advancing to more complex topics.",
    },
    {
      question: "Will I work on projects to add to my resume?",
      answer:
        "Yes, our course includes hands-on projects that you can include in your portfolio to demonstrate your skills to potential employers.",
    },
    {
      question: "How will this course help with job placement?",
      answer:
        "Our course is designed to enhance your job readiness by teaching you industry-relevant skills. Additionally, we provide guidance on how to prioritize the projects and skills on your resume to attract recruiters.",
    },
    {
      question: "Why is this course priced affordably?",
      answer:
        "We believe in making quality education accessible to everyone. Our courses are affordably priced without compromising on content or value, thanks to our efficient online delivery and streamlined operations.",
    },
  ];

  const features = [
    {
      title: "Real-World Projects",
      description: "Build production-ready applications with modern tech stacks. From chat apps to e-commerce platforms.",
      icon: Code2,
      tags: ["MERN Stack", "Next.js", "AI Integration"],
      link: "/projects",
      linkText: "Explore Projects"
    },
    {
      title: "Interview Success",
      description: "Comprehensive interview preparation with real questions from top tech companies. DSA, System Design, and more.",
      icon: GraduationCap,
      tags: ["DSA", "JavaScript", "React"],
      link: "/interview",
      linkText: "Start Preparing"
    },
    {
      title: "Interactive Learning",
      description: "Learn by doing with interactive code examples, quizzes, and AI-powered assistance. Master concepts faster.",
      icon: Sparkles,
      tags: ["Live Code", "AI Help", "Quizzes"],
      link: "/interactive",
      linkText: "Try Now"
    },
    {
      title: "Code Examples",
      description: "Ready-to-use code snippets and patterns for common programming challenges. Copy, paste, and learn.",
      icon: FileCode,
      tags: ["Frontend", "Backend", "Testing"],
      link: "/examples",
      linkText: "View Examples"
    },
    {
      title: "DSA Mastery",
      description: "Master Data Structures & Algorithms with structured learning paths. Practice problems from basic to advanced levels.",
      icon: Bot,
      tags: ["Arrays", "Trees", "Graphs"],
      link: "/dsa",
      linkText: "Start Learning DSA"
    },
    {
      title: "Learning Roadmaps",
      description: "Follow curated learning paths for different tech stacks. Clear progression from beginner to advanced levels.",
      icon: Users,
      tags: ["Frontend", "Backend", "DevOps"],
      link: "/roadmaps",
      linkText: "View Roadmaps"
    }
  ];

  return (
    <main className={`font-jakarta bg-bg min-h-svh`}>
      <Script
        id="main-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [${faq.map(({ answer, question }) =>
            JSON.stringify({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: `<p>${answer}</p>`,
              },
            })
          )}]
        }`,
        }}
      />
      <Hero
        title="Premium, Affordable Courses for Job-Ready Skills"
        desc="Join 10,000+ successful students who have transformed their lives with us."
        heroImage="https://i.ibb.co/KXHGnmY/home.webp"
        subTitle="Pocket Friendly Courses with Certificates!"
        subDesc="Whether you're a beginner looking to dive into programming or an experienced developer seeking skill enhancement, our mentors' guidance and courses are well-designed for all levels of proficiency."
        ytId="enw3DVa1r5k"
      />
      
      <MissionSection variant="home" />

      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to
              <span className="text-primary"> Master Coding</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From hands-on projects to interview prep, we've got you covered with our comprehensive learning ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    {feature.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={feature.link}
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {feature.linkText} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Mentors />
      {/* <Store /> */}
      {/* <Success /> */}
      <VideoSlider />
      <Faqs faq={faq} />
    </main>
  );
}
