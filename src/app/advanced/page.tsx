'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import VideoGallery from '@/components/VideoGallery';
import Footer from "@/components/new-cohort/footer";
import UpsellBanner from '@/components/UpsellBanner';
import useUtmTracker from '@/hooks/use-utm-tracker';
import useFacebookPixel from '@/hooks/use-facebook-pixel';
import EnrollModal from '@/components/EnrollModal';
import BundleNavbar from '@/components/BundleNavbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import Mentors from '@/app/(users)/mentors';
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import Image from "next/image";

const learningPath = [
  {
    step: 1,
    title: "MERN full-stack web development course",
    description: "Advanced MERN stack development with enterprise-level applications",
    emoji: "⚡",
    details: [
      "Enterprise Architecture - Microservices, scalable systems",
      "Advanced MongoDB - Sharding, replication, optimization",
      "Complex State Management - Redux toolkit, context patterns",
      "Advanced React Patterns - HOCs, render props, hooks",
      "Performance Optimization - Caching, lazy loading",
      "DevOps Integration - CI/CD, Docker, Kubernetes",
      "Projects - Enterprise SaaS platform, marketplace"
    ]
  },
  {
    step: 2,
    title: "AI mastery course - Workflows, Tools, Chat GPT, Full stack projects",
    description: "Comprehensive AI development course with practical applications",
    emoji: "🤖",
    details: [
      "AI Integration - OpenAI API, custom models",
      "Machine Learning Basics - TensorFlow, PyTorch",
      "NLP Applications - Text analysis, sentiment analysis",
      "AI Tools Development - Custom AI assistants",
      "Prompt Engineering - Advanced techniques",
      "AI Project Architecture - Scalable AI systems",
      "Projects - AI-powered applications, chatbots"
    ]
  },
  {
    step: 3,
    title: "Next JS full stack web development course",
    description: "Enterprise-level Next.js development and deployment",
    emoji: "📱",
    details: [
      "Advanced Next.js - Custom server, middleware",
      "State Management - Advanced patterns, Zustand",
      "Performance - Edge functions, caching strategies",
      "Internationalization - Multi-language support",
      "Testing - E2E testing, component testing",
      "Deployment - AWS, Google Cloud Platform",
      "Projects - Enterprise CMS, e-commerce platform"
    ]
  },
  {
    step: 4,
    title: "DSA revision and mastery course",
    description: "Master Data Structures and Algorithms with interview preparation",
    emoji: "🎯",
    details: [
      "Advanced Algorithms - Dynamic programming, graphs",
      "Complex Data Structures - Trees, heaps, tries",
      "Algorithm Design - Problem-solving strategies",
      "Space-Time Complexity - Optimization techniques",
      "System Design - Scalable architecture patterns",
      "Interview Preparation - FAANG-style questions",
      "Projects - Algorithm visualizer, problem solver"
    ]
  },
  {
    step: 5,
    title: "JavaScript and React JS mastery course",
    description: "Advanced JavaScript and React.js patterns and architectures",
    emoji: "⚛️",
    details: [
      "Advanced JS - Functional programming, design patterns",
      "React Architecture - Micro-frontends, modular design",
      "Performance - Bundle optimization, code splitting",
      "Testing - Advanced testing patterns, CI/CD",
      "State Management - Advanced Redux, MobX patterns",
      "Custom Hooks - Complex hook patterns",
      "Projects - Enterprise React applications"
    ]
  },
  {
    step: 6,
    title: "Backend development with Node-Express JS",
    description: "Advanced backend development and system design",
    emoji: "🖥️",
    details: [
      "Microservices Architecture - Design, implementation",
      "Advanced Express - Custom middleware, scaling",
      "Database Optimization - Indexing, query tuning",
      "Security - OAuth2.0, JWT advanced patterns",
      "API Design - GraphQL, REST best practices",
      "Message Queues - RabbitMQ, Redis",
      "Projects - Scalable backend systems"
    ]
  },
  {
    step: 7,
    title: "FAANG and Startup Tech job roadmap",
    description: "Complete preparation guide for top tech company interviews",
    emoji: "📈",
    details: [
      "Interview Strategies - FAANG-specific preparation",
      "System Design - Scalable architectures",
      "Behavioral Questions - Leadership principles",
      "Mock Interviews - Real interview simulation",
      "Resume Building - Portfolio optimization",
      "Negotiation Skills - Offer negotiation",
      "Career Growth - Professional development"
    ]
  },
  {
    step: 8,
    title: "Coding Project Ideas",
    description: "Advanced project ideas and implementation guides",
    emoji: "💡",
    details: [
      "Full-Stack Projects - Complex application ideas",
      "AI/ML Projects - Innovative AI applications",
      "Blockchain Projects - DeFi, NFT platforms",
      "Mobile Apps - Cross-platform development",
      "Cloud Projects - AWS, Azure implementations",
      "IoT Projects - Smart device applications",
      "Open Source - Contributing to projects"
    ]
  },
  {
    step: 9,
    title: "Full stack projects and ideas",
    description: "Enterprise-level full stack project implementations",
    emoji: "🚀",
    details: [
      "E-commerce Platform - Complete marketplace",
      "Social Network - Real-time features",
      "Project Management Tool - Team collaboration",
      "Learning Management System - Online courses",
      "Booking System - Real-time scheduling",
      "Analytics Dashboard - Data visualization",
      "Payment Gateway - Financial transactions"
    ]
  },
  {
    step: 10,
    title: "Chat GPT AI prompt engineering course",
    description: "Advanced AI integration and prompt engineering",
    emoji: "🤖",
    details: [
      "Advanced Prompting - Complex query handling",
      "AI Integration - Multiple model integration",
      "Custom Solutions - Industry-specific AI",
      "Optimization - Response quality improvement",
      "Error Handling - Edge case management",
      "Security - AI system security",
      "Projects - Advanced AI applications"
    ]
  },
  {
    step: 11,
    title: "SQL and Databases mastery course",
    description: "Enterprise database design and optimization",
    emoji: "📊",
    details: [
      "Advanced Database Design - Complex schemas",
      "Query Optimization - Performance tuning",
      "Data Warehousing - Big data handling",
      "Database Security - Advanced protection",
      "Replication - Multi-master setup",
      "Migration - Large-scale data migration",
      "Projects - Enterprise database systems"
    ]
  },
  {
    step: 12,
    title: "Blockchain, Solidity, Defi complete course",
    description: "Master blockchain development, smart contracts, and DeFi",
    emoji: "🔗",
    details: [
      "Smart Contracts - Advanced Solidity patterns",
      "DeFi Protocols - Lending, trading platforms",
      "NFT Development - Marketplace creation",
      "Security - Smart contract auditing",
      "Web3 Integration - dApp development",
      "Testing - Blockchain testing frameworks",
      "Projects - DeFi platform, NFT marketplace"
    ]
  },
  {
    step: 13,
    title: "Data analytics course",
    description: "Comprehensive data analytics and visualization",
    emoji: "📊",
    details: [
      "Data Analysis - Advanced statistical methods",
      "Visualization - Complex data presentation",
      "Machine Learning - Predictive analytics",
      "Big Data - Hadoop, Spark integration",
      "ETL Processes - Data pipeline design",
      "Business Intelligence - Reporting tools",
      "Projects - Analytics dashboard, BI tools"
    ]
  },
  {
    step: 14,
    title: "HTML, CSS complete mastery course",
    description: "Advanced web development and responsive design",
    emoji: "💻",
    details: [
      "Advanced CSS - Complex animations, layouts",
      "CSS Architecture - Large-scale systems",
      "Performance - Critical rendering path",
      "Accessibility - WCAG compliance",
      "CSS Frameworks - Custom framework design",
      "Responsive Design - Complex patterns",
      "Projects - Advanced UI components"
    ]
  },
  {
    step: 15,
    title: "React JS course",
    description: "Enterprise React.js development and best practices",
    emoji: "⚛️",
    details: [
      "Advanced Patterns - Architecture patterns",
      "Performance - Advanced optimization",
      "State Management - Complex state patterns",
      "Testing - Comprehensive test coverage",
      "Component Design - Reusable systems",
      "Animation - Complex UI animations",
      "Projects - Enterprise React applications"
    ]
  },
  {
    step: 16,
    title: "Full stack Interview Questions and projects",
    description: "Comprehensive interview preparation with projects",
    emoji: "📚",
    details: [
      "Technical Questions - In-depth concepts",
      "System Design - Architecture patterns",
      "Project Discussion - Portfolio review",
      "Code Review - Best practices",
      "Problem Solving - Algorithm strategies",
      "Behavioral Questions - Soft skills",
      "Mock Interviews - Practice sessions"
    ]
  },
  {
    step: 17,
    title: "Complete Java course",
    description: "Advanced Java development and enterprise patterns",
    emoji: "☕",
    details: [
      "Enterprise Java - Advanced concepts",
      "Spring Cloud - Microservices patterns",
      "Performance - JVM optimization",
      "Security - Enterprise security",
      "Integration - System integration",
      "Testing - Advanced testing patterns",
      "Projects - Enterprise applications"
    ]
  },
  {
    step: 18,
    title: "Complete JavaScript mastery course",
    description: "Expert-level JavaScript and modern development",
    emoji: "⚡",
    details: [
      "Advanced Concepts - Deep JavaScript",
      "Performance - Runtime optimization",
      "Architecture - Application patterns",
      "Testing - Comprehensive testing",
      "Build Systems - Advanced configuration",
      "Modern Features - Latest standards",
      "Projects - Complex JS applications"
    ]
  },
  {
    step: 19,
    title: "Complete Python course",
    description: "Advanced Python development and applications",
    emoji: "🐍",
    details: [
      "Advanced Python - Language internals",
      "Web Development - Advanced frameworks",
      "Data Science - Complex analysis",
      "Machine Learning - ML applications",
      "Automation - System automation",
      "Testing - Test automation",
      "Projects - Enterprise Python systems"
    ]
  }
];

const courseBenefits = [
  {
    title: "20+ Premium Courses",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "200+ Hours of Content",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "50+ Industry Projects",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Job & Interview Prep",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }
];

const supportFeatures = [
  {
    title: "Structured Learning",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Lifetime Access ",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Industry Ready Projects",
    icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  },
  {
    title: "High Quality Resources",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  }
];

const faqs = [
  {
    question: "What's included in this complete package?",
    answer: "This is our most comprehensive package that includes: 1) All Beginner Courses (HTML, CSS, Java, Python, JavaScript, SQL) 2) All Intermediate Courses (MERN Stack, Next.js, Node.js, React, ChatGPT) 3) All Advanced Courses (AI/ML, Blockchain, DSA, FAANG Prep, Data Analytics) 4) 50+ Industry Projects 5) Interview Preparation . Total value of ₹5,997 (₹999 + ₹1,999 + ₹2,999) available at a special price!"
  },
  {
    question: "Is this suitable for complete beginners?",
    answer: "Absolutely! This package is designed for everyone - from complete beginners to advanced developers. You get access to our complete beginner courses (worth ₹999) that start from basics, intermediate courses (worth ₹1,999) for skill advancement, and advanced courses (worth ₹2,999) for mastery. The learning path is structured to ensure smooth progression from basics to advanced topics."
  },
  {
    question: "What kind of projects will I build?",
    answer: "You'll work on 50+ diverse projects including: 1) E-commerce platforms and YouTube clones 2) AI/ChatGPT applications and tools 3) Blockchain DApps and Smart Contracts 4) Data Analytics dashboards 5) Full-stack SaaS applications 6) Real-time chat applications 7) Social media platforms 8) Payment integration projects. All projects include step-by-step guidance and code reviews from mentors."
  },
  {
    question: "What career support is provided?",
    answer: "You get comprehensive career support including: 1) Complete DSA and FAANG interview preparation 2) Resume building and LinkedIn optimization 3) Networking strategies for tech jobs 4) Personalized roadmap for job preparation 5) Interview preparation for both service and product companies."
  },
  
  {
    question: "What makes this package worth the investment?",
    answer: "This package offers exceptional value: 1) Access to 20+ premium courses covering full-stack, AI, blockchain, and more 2) 50+ real-world projects for portfolio building 3) Complete FAANG interview preparation 4) Career guidance and job support 6) Lifetime access to all future updates 7) Certificate of completion. The skills you learn will help you land high-paying tech jobs or build successful tech products."
  },
 
];

const AdvancedPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCourse, setOpenCourse] = useState<number | null>(null);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add UTM tracker
  const { appendUtmToUrl } = useUtmTracker();
  
  // Add Facebook Pixel tracking with content ID - Track both PageView and ViewContent
  useFacebookPixel({
    contentIds: ["652a1994e4b05a145bae5cd0"],
    trackViewContent: true,
    trackPageView: true
  });

  const handleEnrollClick = () => {
    // For advanced page, directly go to checkout without showing modal
    const advancedCheckoutUrl = 'https://30dc.graphy.com/single-checkout/652a1994e4b05a145bae5cd0?pid=p1';
    window.location.href = appendUtmToUrl(advancedCheckoutUrl);
  };

  const visibleLearningPath = showAllSteps 
    ? learningPath 
    : learningPath.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24">
      <BundleNavbar />
      <UpsellBanner 
        currentPrice="₹2,999"
        originalPrice="₹43,999"
        discountPercentage="25%"
        currentPage="advanced"
      />
      {/* Pricing Hero Section */}
      <div className="relative bg-[#0A2818] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#22C55E]/20 to-[#0A1F1C]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Glowing orb effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#22C55E] rounded-full opacity-[0.15] blur-[100px]" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Level (Mastery & Industry-Ready Courses)
          </h1>
          <p className="text-[#E5E7EB] text-lg mb-1">
            For professionals & advanced learners targeting cutting-edge expertise and career transformation
          </p>
          <p className="text-[#22C55E] text-xl font-semibold mb-8">
            BONUS: Get Complete Access to All Intermediate Courses Worth ₹1,999!
          </p>
          
          <div className="flex flex-col items-center mb-4">
            <div className="text-[#94A3B8] text-lg line-through mb-2">₹3,999</div>
            <div className="text-5xl md:text-7xl font-bold text-[#22C55E] mb-4">₹2,999</div>
            <p className="text-[#E5E7EB]">One-time payment • 12 months access • Premium support • All Intermediate & Beginner Courses Included</p>
          </div>
        </motion.div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-24 mb-16 max-w-4xl mx-auto">
          {/* Course Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#22C55E] mb-12">Course Benefits</h2>
            <div className="space-y-8">
              {courseBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-5 text-white"
                >
                  <svg className="w-7 h-7 text-[#22C55E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                  <span className="text-xl font-medium">{benefit.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        
          {/* Support Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#22C55E] mb-12">Support Features</h2>
            <div className="space-y-8">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-5 text-white"
                >
                  <svg className="w-7 h-7 text-[#22C55E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                  <span className="text-xl font-medium">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Learning Journey Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#22C55E] mb-6">
            Your Advanced Journey
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Master cutting-edge technologies and transform your career with industry-leading expertise
          </p>
        </div>

        {/* Learning Journey Roadmap */}
        <div className="my-20 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Your Learning Path
          </h2>

          {/* Vertical line connecting all steps */}
          <div className="absolute left-1/2 top-[100px] bottom-0 w-px bg-gradient-to-b from-[#22C55E] via-[#22C55E]/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {visibleLearningPath.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 relative`}
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#22C55E] text-white font-bold flex items-center justify-center text-xl z-10">
                  {step.step}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2.5rem)] bg-[#0A0A0A] rounded-2xl p-6 border border-[#1C1C1C] hover:border-[#22C55E]/50 transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.emoji}</span>
                    <h3 className="text-[#22C55E] text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  
                  {/* Collapsible Details */}
                  <div className="mt-4 space-y-2">
                    <button
                      onClick={() => setOpenCourse(openCourse === index ? null : index)}
                      className="flex items-center justify-between w-full text-[#22C55E] hover:text-[#16A34A] transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">View Course Details</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${
                          openCourse === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div
                      className={`transition-all duration-200 ease-in-out overflow-hidden ${
                        openCourse === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <ul className="mt-2 space-y-2 text-sm text-gray-400">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#22C55E] mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* See More Button */}
          {!showAllSteps && (
            <div className="flex justify-center mt-16">
              <Button 
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#22C55E]/20 flex items-center gap-2"
                onClick={() => setShowAllSteps(true)}
              >
                <span>See More</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </Button>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#22C55E] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get answers to common questions about the Intermediate Course Package
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0A0A0A] rounded-xl border border-[#1C1C1C] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[#22C55E] transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`px-6 transition-all duration-200 ease-in-out overflow-hidden ${
                    openFaq === index ? 'py-4 border-t border-[#1C1C1C]' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery Section */}
        <div className="mt-20">
          <div className="text-center mb-12">


          </div>
          <VideoGallery />
        </div>

        {/* What Makes Us Different Section */}
        <WhyChooseUs />

        {/* Certificate Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid tab:grid-cols-2 gap-8 p-8 shadow-xl rounded-2xl border-prime/20 border bg-second/30 backdrop-blur-sm">
            <div className="m-auto flex flex-col gap-4 max-tab:text-center">
              <Badge variant="outline" className="w-fit bg-prime/10 text-prime border-prime/20 px-3 py-1">
                <Award className="w-4 h-4 mr-1" />
                Professional Certificate
              </Badge>
              <h3 className="font-bold text-2xl md:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Boost Your Resume with Industry Recognition 🎖️
              </h3>
              <p className="text-base text-foreground/70">
                Stand out in the job market with our professionally accredited certification. Join thousands of successful graduates who have transformed their careers.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-prime/50 to-prime/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <Image
                src={"/certificate.jpg"}
                alt={"30DC Project Preview"}
                height={600}
                width={900}
                className="relative rounded-xl aspect-video w-full shadow-2xl object-cover group-hover:scale-[1.01] transition duration-200"
              />
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <Mentors />
      </div>

      {/* Footer Section */}
      <Footer />

      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentPage="advanced"
      />
    </div>
  );
};

export default AdvancedPage;
