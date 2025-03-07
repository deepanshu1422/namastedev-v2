'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import VideoGallery from '@/components/VideoGallery';
import Footer from "@/components/new-cohort/footer";
import UpsellBanner from '@/components/UpsellBanner';
import useUtmTracker from '@/hooks/use-utm-tracker';
import EnrollModal from '@/components/EnrollModal';
import BundleNavbar from '@/components/BundleNavbar';

const learningPath = [
  {
    step: 1,
    title: "HTML, CSS complete mastery course",
    description: "Master modern web development with HTML and CSS to create stunning websites and web applications",
    emoji: "💻",
    details: [
      "HTML5 Fundamentals - Structure, semantics, and modern elements",
      "CSS3 Advanced Features - Flexbox, Grid, Animations",
      "Responsive Design - Mobile-first approach, media queries",
      "CSS Frameworks - Bootstrap, Tailwind CSS basics",
      "Web Design Principles - Typography, color theory, layout",
      "Performance Optimization - Best practices for web performance",
      "Projects - Portfolio website, landing pages, responsive layouts"
    ]
  },
  {
    step: 2,
    title: "Complete JavaScript mastery course (lifetime + certificate)",
    description: "Master JavaScript from basics to advanced concepts with hands-on projects and lifetime access",
    emoji: "⚡",
    details: [
      "Core JavaScript - Variables, functions, objects, arrays",
      "ES6+ Features - Arrow functions, destructuring, modules",
      "DOM Manipulation - Events, selectors, dynamic content",
      "Asynchronous JS - Promises, async/await, fetch API",
      "Error Handling - Try/catch, custom errors, debugging",
      "Performance - Memory management, optimization techniques",
      "Projects - Todo app, quiz app, weather app"
    ]
  },
  {
    step: 3,
    title: "Complete Java course (lifetime)",
    description: "Comprehensive Java programming course from basics to advanced concepts with lifetime access",
    emoji: "☕",
    details: [
      "Java Basics - Syntax, data types, control structures",
      "OOP Concepts - Classes, inheritance, polymorphism",
      "Collections Framework - Lists, sets, maps",
      "Exception Handling - Try/catch, custom exceptions",
      "File I/O - Reading/writing files, serialization",
      "Multithreading - Thread creation, synchronization",
      "Projects - Banking system, inventory management"
    ]
  },
  {
    step: 4,
    title: "Complete Python course (lifetime)",
    description: "Learn Python programming from scratch and master core concepts through practical exercises",
    emoji: "🐍",
    details: [
      "Python Fundamentals - Syntax, data types, functions",
      "Data Structures - Lists, tuples, dictionaries, sets",
      "File Operations - Reading/writing files, CSV, JSON",
      "Object-Oriented Python - Classes, inheritance",
      "Libraries - NumPy, Pandas basics",
      "Error Handling - Try/except, debugging",
      "Projects - Data analysis, automation scripts"
    ]
  },
  {
    step: 5,
    title: "SQL and Databases mastery course",
    description: "Master database concepts, SQL queries, and data management with practical examples",
    emoji: "📊",
    details: [
      "SQL Fundamentals - SELECT, INSERT, UPDATE, DELETE",
      "Database Design - Tables, relationships, normalization",
      "Advanced Queries - Joins, subqueries, aggregations",
      "Indexing and Performance - Query optimization",
      "Transaction Management - ACID properties",
      "Database Security - User management, permissions",
      "Projects - E-commerce database, analytics dashboard"
    ]
  }
];

const courseBenefits = [
  {
    title: "All Beginner Level Courses",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "40+ Hours of Content",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "10+ Real-World Projects",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Course Completion Certificate",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  }
];

const supportFeatures = [
  {
    title: "Lifetime Access",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
 
  {
    title: "Project Feedback",
    icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  },
  {
    title: "Learning Resources",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  },
  {
    title: "High Quality Resources",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  }
];

const faqs = [
  {
    question: "What courses are included in the beginner package?",
    answer: "The beginner package includes five comprehensive courses: HTML & CSS Complete Mastery Course, Complete Java Course, Complete Python Course, Complete JavaScript Mastery Course, and SQL & Databases Mastery Course. Each course is designed to take you from basics to advanced concepts with lifetime access."
  },
  {
    question: "Do I need any prior programming experience?",
    answer: "No prior programming experience is needed! Our courses are designed for absolute beginners. Each course starts from the fundamentals and progressively builds up to advanced concepts. We ensure you build a strong foundation before moving to complex topics."
  },
  {
    question: "What will I learn in the HTML & CSS course?",
    answer: "In the HTML & CSS course, you'll learn everything from basics to advanced techniques including creating dynamic web pages, responsive design, Flexbox, Grid, and CSS animations. You'll master modern web design principles and learn to create stunning, responsive websites."
  },
  {
    question: "What does the Java course cover?",
    answer: "The Complete Java course covers everything from Java fundamentals to advanced concepts. You'll learn object-oriented programming, GUI development with JavaFX, multi-threading, collections, exception handling, and file management. By the end, you'll be able to build complex Java applications."
  },
  {
    question: "What will I learn in the Python course?",
    answer: "The Python course teaches you Python programming from scratch. You'll learn Python syntax, core concepts, built-in libraries and modules, and how to develop real-world applications. The course includes practical coding exercises and hands-on projects to reinforce your learning."
  },
  {
    question: "What's included in the JavaScript course?",
    answer: "The JavaScript course covers everything from fundamentals to advanced concepts. You'll learn to build interactive web applications, master advanced JavaScript techniques, optimize code performance, and implement modern JavaScript features. The course includes hands-on exercises and real-world examples."
  },
  {
    question: "What will I learn in the SQL and Databases course?",
    answer: "The SQL and Databases course teaches you database fundamentals, advanced concepts, and performance optimization. You'll learn to write complex SQL queries, manage database structures, and implement efficient data management techniques. The course covers everything needed for modern database development."
  },
  {
    question: "How long do I have access to these courses?",
    answer: "You get lifetime access to all five courses, including any future updates. You can learn at your own pace and revisit the materials whenever you need to refresh your knowledge. This ensures you have continuous support throughout your learning journey."
  },
  {
    question: "Will these courses help me in my career?",
    answer: "Absolutely! These courses are designed with job readiness in mind. You'll learn industry-standard technologies and practices, build practical projects, and gain hands-on experience. The skills you learn are highly sought after in the tech industry and will help you launch or advance your programming career."
  }
];

// Course details content
const courseDetails = {
  title: "Course Details for Beginner Plan (₹999)",
  description: "In this beginner-friendly course, you will learn everything from the basics to advanced concepts, ensuring you gain hands-on experience with real-world projects.",
  
  technologies: [
    "HTML & CSS – Learn the fundamentals of web development and responsive design.",
    "JavaScript (Complete) – Master JavaScript from basics to advanced concepts.",
    "React.js – Build dynamic web applications with 10+ real-world projects (easy to medium level).",
    "Git & GitHub – Learn version control, collaboration, and best practices.",
    "Deployment – Deploy your projects online with confidence.",
    "Node.js (Full – Beginner to Advanced) – Back-end development with APIs, authentication, and more.",
    "Databases – Learn database management and integration."
  ],
  
  projects: [
    "Chat Application – Build a fully functional chat app.",
    "Advanced Beginner Projects – Work on multiple hands-on projects to strengthen your skills."
  ],
  
  improvements: [
    "Structured Format – Clear sections for easy readability.",
    "Engaging Language – Using active words like 'Master,' 'Build,' and 'Learn' makes it more appealing.",
    "Better Flow – The content is now more logically ordered.",
    "Highlights & Emoji Enhancements – They make the information visually appealing and easier to skim.",
    "Clarity on Projects – Mentioning the chat app and various advanced beginner projects makes it clearer."
  ]
};

const BeginnerPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCourse, setOpenCourse] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add UTM tracker
  const { appendUtmToUrl } = useUtmTracker();

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24">
      <BundleNavbar />
      <UpsellBanner 
        currentPrice="₹999"
        originalPrice="₹9,999"
        discountPercentage="90%"
        currentPage="beginner"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Beginner Level Course Package
          </h1>
          <p className="text-[#E5E7EB] text-lg mb-8">
            Start your coding journey with a solid foundation
          </p>
          
          <div className="flex flex-col items-center mb-8">
            <div className="text-5xl md:text-7xl font-bold text-[#22C55E] mb-4">₹999</div>
            <p className="text-[#E5E7EB]">One-time payment • Lifetime access to select courses</p>
             {/* Enroll Now Button Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#22C55E]/20 flex items-center gap-2"
            onClick={handleEnrollClick}
          >
            <span>Enroll Now</span>
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
        </motion.div>
      </div>
          </div>
        </motion.div>
      </div>

     

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#22C55E]/20 flex items-center gap-2"
            onClick={handleEnrollClick}
          >
            <span>Enroll Now</span>
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
        </motion.div>
      </div>

      {/* Learning Journey Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#22C55E] mb-6">
            Beginner Course Package
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Start your coding journey with our comprehensive foundation courses designed for absolute beginners.
          </p>
        </motion.div>

        {/* Learning Journey Roadmap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="my-20 relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Your Learning Path
          </h2>

          {/* Vertical line connecting all steps */}
          <div className="absolute left-1/2 top-[100px] bottom-0 w-px bg-gradient-to-b from-[#22C55E] via-[#22C55E]/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {learningPath.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
        
        
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >


          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <VideoGallery />

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#22C55E] mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Get answers to common questions about the Beginner Course Package
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentPage="beginner"
      />
    </div>
  );
};

export default BeginnerPage; 