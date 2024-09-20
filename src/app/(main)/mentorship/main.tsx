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
      <Mentors />
      <Success />
      

      <div className="w-full">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Step by step Path to Career Success</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Embark on a transformative journey that combines comprehensive learning, personalized guidance, and community support to accelerate your career growth.
          </p>
          <div className="relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="mb-16 flex items-start relative"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white flex items-center justify-center text-2xl font-bold z-10 shadow-lg">
                  {index + 1}
                </div>
                <div className="ml-8 flex-grow border border-green-800 rounded-xl p-6 bg-second shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold mb-3 flex items-center text-white">
                      <step.icon className="w-8 h-8 mr-3 text-red-500" />
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-300 mb-3">{step.description}</p>
                    <p className="text-sm mb-5 text-gray-400">{step.details}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-5">
                      {step.learningPoints.map((point, idx) => (
                        <span key={idx} className="text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm border border-white">
                          {point}
                        </span>
                      ))}
                    </div>
                    
                    {/* <div className="text-sm text-gray-300 flex items-center">
                      <i className="fas fa-clock mr-2 text-red-500"></i>
                      Estimated time: <span className="font-semibold ml-1">{step.estimatedTime}</span>
                    </div> */}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-14 w-0.5 bg-gradient-to-b from-red-500 to-red-700 h-full transform -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      
      
      {/* <Video
        title={"Trusted by 1000s of Students"}
        desc={
          "We will help you till you find the best job opportunity across the globe. hear it from our students and decide for yourselves."
        }
        youtubeId={"2cZ_7LuxEQI"}
      /> */}
      {/* <MentorshipGallary setOpenPay={setOpen} /> */}
      <Features />
      <Faqs faq={faq} />
      {/* <Interakt /> */}
      <Floating setOpen={setOpen} />
      <PaymentSheet
        amount={8000}
        courseId="mentor"
        cover="./mentorship.jpg"
        curreny="USD"
        open={open}
        setOpen={setOpen}
        setOpenPay={setOpenModal}
        title="1:1 Mentorship Lifetime Access"
      />
      <PaymentModal payModal={openModal} setOpenPay={setOpenModal} />
      {/* <Highlights /> */}
      {/* <Testimonials /> */}
      {/* <Video
        title={"Best Practices for Developers by Our Mentors"}
        desc={
          "Explore the latest technologies wit the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"KMufzzSF6SE"}
      /> */}
      {/* <Video
        title={"1:1 Live Session with our Mentors"}
        desc={
          "Explore the latest technologies with the help of our experts with live interactions and doubt clearing sessions."
        }
        youtubeId={"gIx8D2pyXVI"}
      /> */}
      {/* Success Stories Carousel */}
      
    </div>
  );
}

