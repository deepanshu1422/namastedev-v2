'use client'
import Video from "@/components/new-cohort/video";
import Faqs from "@/components/mentorship-comp/faq";
import JoinUs from "./joinus";
import Features from "./features";
import MentorshipGallary from "./mentorship-gallery";
import Lifetime from "./lifetime";
import Success from "@/components/mentorship-comp/success";
import Floating from "./floating";
import Mentor from "@/components/new-cohort/mentor";
import Interakt from "@/util/interakt";
import Mentors from "./mentors";
import { PaymentModal, PaymentSheet } from "./payment";
import { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion"; // Ensure you have framer-motion installed
import Events from "./events";
import Carousel from "./carousel";
import { CreditCard } from "lucide-react";
import CourseGrid from "./courses";
// import Card from "@/components/Card"; // Adjust the import based on your project structure
// import CardContent from "@/components/CardContent"; // Adjust the import based on your project structure

const steps = [
  {
    title: "Comprehensive Learning",
    description: "Access to USA & Canada Jobs Courses, 15+ Technical Interview Courses, and AI tools workflows.",
    details: "Dive deep into job market skills with our extensive course library.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-book ${className}`} />,
    learningPoints: ["Learn USA & Canada Jobs Courses", "Understand AI tools workflows"],
    estimatedTime: "4-6 weeks",
  },
  {
    title: "Interactive Group Sessions",
    description: "2 Group Q&A calls/week with expert mentors.",
    details: "Engage in live sessions to clarify doubts and gain insights.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-users ${className}`} />,
    learningPoints: ["Participate in 2 Group Q&A calls/week", "Engage in live sessions"],
    estimatedTime: "2-3 weeks",
  },
  {
    title: "Personalized Career Materials",
    description: "Resume review sessions, guides for resumes and cold emails.",
    details: "Craft compelling career documents with personalized feedback.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-file-alt ${className}`} />,
    learningPoints: ["Get personalized resume review", "Guides for resumes and cold emails"],
    estimatedTime: "2-3 weeks",
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews and salary negotiation training.",
    details: "Sharpen your interview skills and learn effective strategies.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-comments ${className}`} />,
    learningPoints: ["Practice mock interviews", "Learn salary negotiation strategies"],
    estimatedTime: "4-6 weeks",
  },
  {
    title: "Mindset and Resilience Training",
    description: "Develop a growth mindset and build resilience.",
    details: "Cultivate the mental fortitude to overcome challenges.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-brain ${className}`} />,
    learningPoints: ["Develop a growth mindset", "Build resilience"],
    estimatedTime: "2-3 weeks",
  },
  {
    title: "Community and Networking",
    description: "Access to a thriving community with mobile and web apps.",
    details: "Connect with peers, find opportunities, and access resources.",
    icon: ({ className }: { className: string }) => <i className={`fas fa-network-wired ${className}`} />,
    learningPoints: ["Join a thriving community", "Connect with peers and find opportunities"],
    estimatedTime: "2-3 weeks",
  },
];

export default function Main({
  faq,
}: {
  faq: {
    question: string;
    answer: string;
  }[];
}) {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* <NewHero /> */}
      {/* <Hero
        title="Lifetime 1:1 Mentorship + 10 Course Access"
        desc="Learn from Aryan, Deepanshu, and the 30DC team to get placed this season."
        heroImage="/main/hero_section_mentor.png"
        /> */}
        {/* <Script
        id="mentorship-faq"
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
      /> */}
      <Lifetime setOpen={setOpen} />
      <Carousel />
      <Mentors />
      
      
    </div>
  );
}

