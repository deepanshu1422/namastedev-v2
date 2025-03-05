'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation';

interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  level: string;
}

const courseData = {
  beginner: {
    price: "₹999",
    originalPrice: "₹9,999",
    discount: "90% OFF",
    title: "Beginner",
    subtitle: "Start Your Journey to Becoming a Full-Stack Developer",
    description: "Perfect for absolute beginners! Master modern web development from ground up with hands-on projects and structured learning. Transform from beginner to confident developer with our comprehensive curriculum.",
    features: [
      {
        title: "🚀 Core Technologies",
        items: [
          "HTML & CSS Mastery - Build Responsive Websites",
          "Complete JavaScript - From Basics to Advanced",
          "React.js with 10+ Real Projects",
          "Node.js Backend Development",
          "Database Management & Integration"
        ]
      },
      {
        title: "🎯 Real-World Projects",
        items: [
          "Full-Stack Chat Application",
          "E-commerce Dashboard",
          "Social Media Clone",
          "Portfolio Website",
          "API Integration Projects"
        ]
      }
    ],
    highlights: [
      "40+ Hours of Video Content",
      "24/7 Discord Community Access",
      "Structured Learning Path",
      "Hands-on Coding Exercises",
      "Certificate of Completion"
    ],
    buttonText: "Start Your Developer Journey"
  },
  intermediate: {
    price: "₹1,999",
    originalPrice: "₹2,999",
    discount: "33% OFF",
    title: "Intermediate",
    subtitle: "Elevate Your Development Career",
    description: "Perfect for developers with basic knowledge! Master advanced web technologies, prepare for technical interviews, and build industry-ready projects. Transform into a confident full-stack developer ready for professional opportunities.",
    features: [
      {
        title: "🚀 Advanced Technologies",
        items: [
          "React.js Mastery - From Fundamentals to Advanced",
          "Next.js Full-Stack Development (SSR, SSG, API)",
          "Advanced JavaScript Concepts & Best Practices",
          "Modern State Management & Architecture",
          "API Design & Integration Patterns"
        ]
      },
      {
        title: "💼 Frontend Interview Mastery",
        items: [
          "JavaScript Deep Dive & Coding Rounds",
          "React.js Interview Questions & Projects",
          "Frontend Interview Questions",
        ]
      },
     
    ],
    highlights: [
      "80+ Hours of Video Content",
      "10+ Advanced Real-World Projects",
      "1-on-1 Mentorship Sessions",
      "Industry Expert Code Reviews",
      "Career Guidance & Support"
    ],
    buttonText: "Level Up Your Career"
  },
  advanced: {
    price: "₹2,999",
    originalPrice: "₹3,999",
    discount: "25% OFF",
    title: "Advanced",
    subtitle: "Master Cutting-Edge Technologies",
    description: "Become an elite developer with expertise in Blockchain, AI, and Python. Get hands-on experience with 30+ real-world projects and transform into a highly sought-after technology expert ready for premium opportunities.",
    features: [
      {
        title: "🔗 Blockchain Mastery",
        items: [
          "Solana Development & Smart Contracts",
          "NFTs & DeFi Applications",
          "Web3 Integration & dApp Development",
          "Blockchain Architecture & Security",
        ]
      },
      {
        title: "🤖 AI Tools & ChatGPT",
        items: [
          "ChatGPT API Integration & Development",
          "AI-Powered Application Building",
          "Custom ChatGPT Assistants Creation",
          "AI Tools Integration (Midjourney, DALL-E)",
          "Automated AI Workflows & Systems"
        ]
      },
      {
        title: "🐍 Python Excellence",
        items: [
          "Advanced Python Development",
          "Automation & Scripting",
          "API Development & Integration",
        ]
      },
     
    ],
    highlights: [
      "30+ Premium Real-World Projects",
      "100+ Hours of Video Content",
      "Exclusive Masterclass Sessions",
      "Industry Expert Network Access",
      "Lifetime Course Updates"
    ],
    buttonText: "Become an Elite Developer"
  }
};

const CourseSection = () => {
  const router = useRouter();

  const handleGetStarted = (level: string) => {
    router.push(`/${level.toLowerCase()}`);
  };

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-[#0A1F1C] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#22C55E]/10 to-transparent transform -rotate-45" />
          <div className="absolute top-0 left-2/4 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#22C55E]/10 to-transparent transform -rotate-45" />
          <div className="absolute top-0 right-1/4 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#22C55E]/10 to-transparent transform -rotate-45" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, #22C55E 1px, transparent 1px),
            linear-gradient(to bottom, #22C55E 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.05
        }} />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F1C] via-transparent to-[#0A1F1C]" />
        
        {/* Center glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#22C55E] rounded-full opacity-[0.03] blur-[100px]" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section heading */}
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 -top-20 bg-gradient-radial from-[#22C55E]/10 via-transparent to-transparent blur-2xl opacity-30" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-[#22C55E] mb-6 relative"
          >
            Choose Your Learning Path
          </motion.h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Select the perfect course package that matches your experience level and career goals
          </p>
          <div className="w-px h-24 bg-gradient-to-b from-[#22C55E] via-emerald-500/50 to-transparent mx-auto mt-8" />
        </div>

        {/* Course cards grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(courseData).map(([level, data], index) => (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-[#0A0A0A] rounded-2xl p-8 border border-[#1C1C1C] group-hover:border-[#22C55E]/50 transition-all duration-300 h-full">
                {/* Price tag */}
                <div className="absolute -top-4 right-4 bg-[#0A2818] px-4 py-2 rounded-full border border-[#22C55E]/20">
                  <div className="flex flex-col items-end">
                    <span className="text-[#22C55E] font-bold text-2xl">{data.price}</span>
                  </div>
                </div>

                
                {/* Course header */}
                <div className="mb-8 pt-6">
                  <h3 className="text-3xl font-bold text-white mb-3">{data.title}</h3>
                  <p className="text-[#22C55E] font-medium mb-3">{data.subtitle}</p>
                  <p className="text-gray-400 text-lg leading-relaxed">{data.description}</p>
                </div>

               

                {/* Feature sections */}
                {data.features.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-6">
                    <h4 className="text-[#22C55E] font-semibold mb-4">{section.title}</h4>
                    <div className="space-y-3">
                      {section.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                          <span className="text-gray-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* CTA Button */}
                <div className="mt-8">
                  <Button 
                    className="w-full bg-[#22C55E] hover:bg-[#1EA052] text-white py-6 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#22C55E]/20"
                    onClick={() => handleGetStarted(level)}
                  >
                    {data.buttonText}
                  </Button>
                </div>

                {/* Money-back guarantee */}
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Super Bundle Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-8 rounded-3xl bg-gradient-to-b from-[#0A2818] to-[#0A1F1C] border border-[#22C55E]/20 overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/10 via-transparent to-[#22C55E]/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22C55E] rounded-full opacity-[0.07] blur-[120px]" />
          </div>

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm font-semibold">
                  Popular
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Super Bundle
                </h3>
              </div>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <span>All 14 Premium Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <span>12 Months Extended Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <span>Priority Mentoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <span>Job Guarantee</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-white">₹4999</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
              <Button 
                className="w-full md:w-auto bg-[#22C55E] hover:bg-[#1EA052] text-white px-8 py-4 rounded-xl text-lg font-medium"
                onClick={() => router.push('/super-bundle')}
              >
                Get Super Bundle
              </Button>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default CourseSection; 