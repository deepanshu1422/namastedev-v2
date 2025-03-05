'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "../../components/ui/button";
import Footer from "../../components/new-cohort/footer";
import VideoGallery from '../../components/VideoGallery';

const courseCategories = [
  {
    level: "Beginner Level",
    price: "₹999",
    subtitle: "Foundational Courses",
    description: "Best for absolute beginners or those new to coding",
    courses: [
      {
        title: "Introduction to Coding - Why, When, How",
        subtitle: "Basic coding overview",
        points: [
          "Demystify programming fundamentals",
          "Understand core programming concepts",
          "Explore career opportunities in tech"
        ]
      },
      {
        title: "Complete Python, Java & JavaScript Course",
        subtitle: "Fundamental programming skills",
        points: [
          "Comprehensive multi-language programming foundation",
          "Hands-on coding practice",
          "Build versatile programming skills"
        ]
      },
      {
        title: "HTML, CSS, and SQL Fundamentals",
        subtitle: "Web development basics",
        points: [
          "Create first web pages and interfaces",
          "Learn database interaction basics",
          "Develop essential web technologies skills"
        ]
      },
      {
        title: "Chat GPT & AI Prompt Engineering Course",
        subtitle: "Basic AI Knowledge for beginners",
        points: [
          "Understand AI technology principles",
          "Master effective AI interaction techniques",
          "Explore practical AI applications"
        ]
      }
    ]
  },
  {
    level: "Intermediate Level",
    price: "₹1999",
    subtitle: "Skill-Building Courses",
    description: "For professionals with foundational knowledge, aiming to elevate their expertise",
    courses: [
      {
        title: "JavaScript & React JS Mastery Course",
        subtitle: "Frontend Specialization",
        points: [
          "Comprehensive frontend development training",
          "Lifetime access and professional certification"
        ]
      },
      {
        title: "Backend Development with Node.js & Express.js",
        subtitle: "Essential for Full-Stack Development",
        points: [
          "In-depth backend programming skills",
          "Practical server-side development techniques"
        ]
      },
      {
        title: "Data Analytics & SQL Mastery Course",
        subtitle: "Advanced SQL + Analytics for Data Careers",
        points: [
          "Advanced data manipulation and analysis",
          "Comprehensive SQL skills for modern data roles"
        ]
      },
      {
        title: "Full Stack Interview Questions & Project-Based Learning",
        subtitle: "Practical Learning & Interview Preparation",
        points: [
          "Real-world project implementations",
          "Targeted interview readiness training"
        ]
      },
      {
        title: "DSA Revision & Mastery Course",
        subtitle: "Core Data Structures & Algorithms",
        points: [
          "Comprehensive algorithmic problem-solving",
          "Deep dive into essential computer science concepts"
        ]
      },
      {
        title: "FAANG & Startup Tech Job Roadmap",
        subtitle: "For Tech Job Seekers in FAANG/Startups",
        points: [
          "Strategic career development for tech professionals",
          "Insider insights into top tech company recruitment"
        ]
      }
    ]
  },
  {
    level: "Advanced Level",
    price: "₹2999",
    subtitle: "Mastery & Industry-Ready Courses",
    description: "For professionals & advanced learners targeting cutting-edge expertise and career transformation",
    courses: [
      {
        title: "AI & Machine Learning Mastery",
        subtitle: "Advanced AI Applications",
        points: [
          "Comprehensive AI technology exploration",
          "Hands-on projects with cutting-edge AI tools",
          "Advanced workflow implementation"
        ]
      },
      {
        title: "Blockchain, Solidity, and DeFi Complete Course",
        subtitle: "For blockchain & Web3 enthusiasts",
        points: [
          "Deep dive into blockchain technologies",
          "Smart contract development with Solidity",
          "Comprehensive decentralized finance (DeFi) strategies"
        ]
      },
      {
        title: "Advanced Full Stack Projects & System Design",
        subtitle: "Hands-on real-world projects + system architecture",
        points: [
          "Complex architectural pattern implementation",
          "Enterprise-level system design techniques",
          "Scalable solution development"
        ]
      },
      {
        title: "MERN & Next.js Full Stack Web Development",
        subtitle: "Advanced full-stack web development expertise",
        points: [
          "Advanced JavaScript ecosystem mastery",
          "Modern web application architecture",
          "High-performance web development techniques"
        ]
      }
    ]
  }
];

const bundleFeatures = [
  {
    title: "14 Premium Courses",
    description: "Complete access to all courses across all levels"
  },
  {
    title: "Lifetime Access",
    description: "Unlimited access to all course content"
  },
  {
    title: "Priority Support",
    description: "Get personalized help from expert mentors"
  },
  {
    title: "Job Guarantee",
    description: "Career support and placement assistance"
  }
];

const SuperBundlePage = () => {
  return (
    <div className="min-h-screen bg-[#0A1F1C]">
      {/* Hero Section */}
      <div className="relative bg-[#0A2818] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#22C55E]/20 to-[#0A1F1C]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#22C55E] rounded-full opacity-[0.15] blur-[100px]" />

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm font-semibold mb-6">
            Best Value
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Complete Learning Bundle
          </h1>
          <p className="text-[#E5E7EB] text-lg mb-8">
            Get access to all our courses and become a full-stack developer
          </p>
          
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#94A3B8] text-2xl line-through">₹16,663
              </div>
              <div className="text-5xl md:text-7xl font-bold text-[#22C55E]">₹4,999</div>
            </div>
            <p className="text-[#E5E7EB] mb-8">One-time payment • Lifetime access • Premium support</p>
            
            <Button 
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-12 py-6 text-xl rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#22C55E]/30 flex items-center gap-2"
              onClick={() => window.location.href = 'https://courses.30dayscoding.com/courses/super-bundle-67c897eff9a753477d66ba37'}
            >
              <span>Get Lifetime Access</span>
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </div>

          {/* Bundle Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {bundleFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 text-left bg-[#0A0A0A]/50 p-6 rounded-xl border border-[#22C55E]/20"
              >
                <svg className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <div>
                  <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Course Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {courseCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#22C55E] mb-4">
                {category.level}
              </h2>
              <p className="text-xl text-white mb-2">{category.subtitle}</p>
              <p className="text-gray-400">{category.description}</p>
              <div className="mt-4 text-[#22C55E] font-bold">{category.price}</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.courses.map((course, courseIndex) => (
                <motion.div
                  key={courseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                  className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1C1C1C] hover:border-[#22C55E]/50 transition-all duration-300"
                >
                  <h3 className="text-[#22C55E] text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.subtitle}</p>
                  <ul className="space-y-2">
                    {course.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center gap-2 text-gray-400">
                        <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm font-semibold mb-6">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hear from Our Students
          </h2>
          <p className="text-[#E5E7EB] text-lg max-w-2xl mx-auto">
            Discover how our comprehensive bundle has transformed careers and helped students achieve their tech goals
          </p>
        </motion.div>

        {/* Video Gallery */}
        <VideoGallery />

       
        

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SuperBundlePage; 