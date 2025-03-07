'use client';

import React, { useState } from 'react';
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
    originalPrice: "₹1,999",
    discount: "50% OFF",
    title: "Beginner",
    subtitle: "Master 5 Complete Programming Languages",
    description: "Perfect for absolute beginners! Master five different programming languages and technologies with our comprehensive beginner-friendly courses. Transform from beginner to confident developer with structured learning paths.",
    features: [
      {
        title: "🌐 HTML & CSS Complete Course",
        items: [
          "Master HTML basics and advanced techniques",
          "Create stylish and responsive websites with CSS",
          "Explore Flexbox, Grid, and CSS animations",
          "Create dynamic web pages and responsive designs",
          "Advanced styling techniques with modern CSS"
        ]
      },
      {
        title: "☕ Complete Java Course",
        items: [
          "Learn Java programming from scratch",
          "Master object-oriented programming principles",
          "Build GUI applications with JavaFX",
          "Implement multi-threading and collections",
          "Advanced exception handling and file management"
        ]
      },
      {
        title: "🐍 Complete Python Course",
        items: [
          "Build strong foundation in Python concepts",
          "Gain hands-on experience with practical coding",
          "Master Python's built-in libraries and modules",
          "Develop real-world applications",
          "Learn Python's syntax and features"
        ]
      },
      {
        title: "🚀 Complete JavaScript Course",
        items: [
          "Learn JavaScript from fundamentals to advanced",
          "Build interactive web applications",
          "Master advanced JavaScript techniques",
          "Optimize code performance",
          "Implement modern JavaScript features"
        ]
      },
      {
        title: "🗄️ SQL and Databases Course",
        items: [
          "Master SQL fundamentals and queries",
          "Learn advanced database concepts",
          "Optimize database performance",
          "Handle complex database structures",
          "Implement efficient data management"
        ]
      }
    ],
    highlights: [
      "5 Complete Programming Courses",
      "Lifetime Access to All Courses",
      "24/7 Discord Community Support",
      "Hands-on Projects in Each Course",
      "Course Completion Certificates"
    ],
    buttonText: "Start Your Developer Journey"
  },
  intermediate: {
    price: "₹1,999",
    originalPrice: "₹2,999",
    discount: "33% OFF",
    title: "Intermediate + Beginner",
    subtitle: "Master Modern Full-Stack Development",
    description: "Comprehensive package including MERN Stack, Next.js, Node.js, React, and ChatGPT AI integration. Plus get complete access to all beginner courses worth ₹999! Perfect for developers ready to advance their skills to professional level.",
    features: [
      {
        title: "🚀 Complete MERN Stack Development",
        items: [
          "Front-End: HTML, CSS, JavaScript, React with modern practices",
          "Back-End: Node.js, Express.js, MongoDB, GraphQL",
          "15+ JavaScript and React projects",
          "5+ major full-stack projects including E-commerce & YouTube clone",
          "Industry-relevant skill development and interview preparation"
        ]
      },
      {
        title: "⚡ Next.js Full-Stack Mastery",
        items: [
          "Server-side rendering (SSR), Static site generation (SSG)",
          "TypeScript integration and API development",
          "Performance optimization and state management",
          "10+ complex projects including E-commerce and real-time chat",
          "Deployment strategies and serverless functions"
        ]
      },
      {
        title: "🔧 Complete Node.js Backend Development",
        items: [
          "Backend programming fundamentals and scalability",
          "Database management and optimization",
          "Server security best practices",
          "API development and integration",
          "Real-world backend architecture"
        ]
      },
      {
        title: "🤖 ChatGPT AI & Prompt Engineering",
        items: [
          "Chat GPT APIs, vision, and whisper integration",
          "Specialized prompts for different professions",
          "Image and video prompting resources",
          "Building apps and games with AI prompts",
          "Advanced prompting techniques"
        ]
      },
      {
        title: "⚛️ Advanced React.js Development",
        items: [
          "Modern React patterns and hooks",
          "Advanced state management (Redux, Context, Zustand)",
          "Performance optimization techniques",
          "Testing and TypeScript integration",
          "8 real-world projects including E-commerce platform"
        ]
      },
      {
        title: "🎁 BONUS: Complete Beginner Package",
        items: [
          "HTML & CSS Complete Mastery Course",
          "Complete Java Programming Course",
          "Complete Python Development Course",
          "JavaScript Fundamentals to Advanced",
          "SQL and Databases Mastery Course"
        ]
      }
    ],
    highlights: [
      "10+ Complete Programming Courses",
      "150+ Hours of Video Content",
      "40+ Industry Projects",
      "Lifetime Access to All Courses",
      "Career Guidance & Interview Prep"
    ],
    buttonText: "Level Up Your Career"
  },
  advanced: {
    price: "₹2,999",
    originalPrice: "₹3,999",
    discount: "25% OFF",
    title: "Advanced + Intermediate + Beginner",
    subtitle: "Master All Technologies - Complete Package",
    description: "Get complete access to ALL courses - Beginner, Intermediate, and Advanced! Become an elite developer with expertise in Full Stack, Blockchain, AI, Data Analytics, and more. Get hands-on experience with 50+ real-world projects and transform into a highly sought-after technology expert ready for premium opportunities.",
    features: [
      {
        title: "🤖 AI Mastery Course",
        items: [
          "Comprehensive coverage of AI workflows and tools",
          "Chat GPT implementation and integration",
          "Full-stack AI project development",
          "Advanced prompting techniques and strategies",
          "Hands-on experience with various AI tools"
        ]
      },
      {
        title: "📊 DSA & FAANG Job Preparation",
        items: [
          "Complete DSA revision and mastery",
          "FAANG and Startup Tech job roadmap",
          "Technical interview preparation",
          "Resume writing and networking strategies",
          "Personalized guidance from industry experts"
        ]
      },
      {
        title: "💡 Project Mastery Bundle",
        items: [
          "50+ Unique coding project ideas",
          "Full-stack projects and SaaS tools",
          "MVP product development",
          "Real-world implementation guides",
          "Constantly updated project content"
        ]
      },
      {
        title: "🔗 Blockchain & DeFi",
        items: [
          "Complete Blockchain fundamentals",
          "Solidity programming mastery",
          "DeFi protocols and applications",
          "Smart contract development",
          "Real-world blockchain projects"
        ]
      },
      {
        title: "📈 Data & Interview Prep",
        items: [
          "Complete data analytics course",
          "Statistical methods and visualization",
          "Full-stack interview preparation",
          "Comprehensive job-ready skills",
          "Expert guidance and support"
        ]
      },
      {
        title: "🎁 BONUS: Complete Access",
        items: [
          "All Beginner Courses (₹999 value)",
          "All Intermediate Courses (₹1,999 value)",
          "Lifetime updates and support",
          "Priority mentorship access",
          "Interview preparation resources"
        ]
      }
    ],
    highlights: [
      "Access to 20+ Premium Courses",
      "200+ Hours of Video Content",
      "50+ Industry Projects",
      "Lifetime Access to All Courses",
      "1-on-1 Priority Mentorship",
      "Job & Interview Preparation"
    ],
    buttonText: "Get Complete Access"
  }
};

const CourseSection = () => {
  const router = useRouter();
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({
    beginner: false,
    intermediate: false,
    advanced: false
  });
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleGetStarted = (level: string) => {
    router.push(`/${level.toLowerCase()}`);
  };

  const handleStickyButtonClick = () => {
    if (!selectedPlan && sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else if (selectedPlan) {
      handleGetStarted(selectedPlan);
    }
  };

  const toggleCard = (level: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [level]: !prev[level]
    }));
  };

  // Quick comparison data for mobile view
  const quickComparison = {
    beginner: ["5 Programming Languages", "Lifetime Access", "24/7 Support"],
    intermediate: ["Full Stack Development", "All Beginner Content", "Industry Projects"],
    advanced: ["AI & Blockchain", "All Previous Content", "Career Support"]
  };

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-[#0A1F1C] overflow-x-hidden">
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
        transition={{ duration: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section heading */}
        <div className="text-center mb-8 md:mb-24 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-3xl md:text-6xl font-bold text-[#22C55E] mb-4 md:mb-6 relative"
          >
            Choose Your Learning Path
          </motion.h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Select the perfect course package that matches your experience level and career goals
          </p>
        </div>

        {/* Mobile Quick Compare */}
        <div className="md:hidden mb-24">
          <div className="bg-[#0A0A0A]/50 rounded-xl p-4 border border-[#22C55E]/20">
            <h3 className="text-[#22C55E] font-semibold mb-4">Quick Comparison</h3>
            <div className="space-y-4">
              {Object.entries(quickComparison).map(([level, features], index) => (
                <motion.div 
                  key={level}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`p-4 rounded-lg transition-all duration-200 ${
                    selectedPlan === level 
                      ? 'bg-[#22C55E]/20 border-[#22C55E]' 
                      : 'bg-[#0A0A0A] border-[#1C1C1C]'
                  } border`}
                  onClick={() => setSelectedPlan(level)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-white">{courseData[level].title}</h4>
                    <span className="text-[#22C55E] font-bold">{courseData[level].price}</span>
                  </div>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 text-[#22C55E] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-4 bg-[#22C55E] hover:bg-[#1EA052] text-white"
                    onClick={() => handleGetStarted(level)}
                  >
                    Choose {courseData[level].title}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Course cards grid - visible on larger screens */}
        <div className="hidden md:grid lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(courseData).map(([level, data], index) => (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="relative bg-[#0A0A0A] rounded-2xl p-8 border border-[#1C1C1C] group-hover:border-[#22C55E]/50 transition-all duration-300 h-full">
                {/* Price tag */}
                <div className="absolute -top-4 right-4 bg-[#0A2818] px-4 py-2 rounded-full border border-[#22C55E]/20">
                  <div className="flex flex-col items-end">
                    <span className="text-[#22C55E] font-bold text-2xl">{data.price}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm line-through">{data.originalPrice}</span>
                      <span className="text-[#22C55E] text-sm font-medium">{data.discount}</span>
                    </div>
                  </div>
                </div>

                {/* Course header */}
                <div className="mb-8 pt-6">
                  <h3 className="text-3xl font-bold text-white mb-3">{data.title}</h3>
                  <p className="text-[#22C55E] font-medium mb-3">{data.subtitle}</p>
                  <p className="text-gray-400 text-lg leading-relaxed">{data.description}</p>
                </div>

                {/* Feature sections - Conditionally rendered based on expandedCards state */}
                <div className={`transition-all duration-150 overflow-hidden ${expandedCards[level] ? 'max-h-[2000px]' : 'max-h-[300px]'}`}>
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
                            transition={{ duration: 0.15, delay: idx * 0.02 }}
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
                </div>

                {/* See More / See Less Button */}
                <div className="mt-6 text-center">
                  <Button 
                    onClick={() => toggleCard(level)}
                    className="bg-transparent hover:bg-[#22C55E]/10 text-[#22C55E] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    {expandedCards[level] ? 'See Less' : 'See More'}
                  </Button>
                </div>

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

        {/* Sticky CTA for mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A1F1C]/95 backdrop-blur-lg border-t border-[#22C55E]/20 p-4 z-50">
          <Button
            className="w-full bg-[#22C55E] hover:bg-[#1EA052] text-white py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            onClick={handleStickyButtonClick}
          >
            {selectedPlan 
              ? `Get Started with ${courseData[selectedPlan].title}` 
              : 'Select a Plan to Continue'}
          </Button>
        </div>

        {/* Bottom padding for mobile to prevent content from being hidden behind sticky CTA */}
        <div className="md:hidden h-24" />
      </motion.div>
    </section>
  );
};

export default CourseSection; 