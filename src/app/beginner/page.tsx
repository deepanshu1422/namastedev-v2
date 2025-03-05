'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import VideoGallery from '@/components/VideoGallery';
import Footer from "@/components/new-cohort/footer";
import UpsellBanner from '@/components/UpsellBanner';

const learningPath = [
  {
    step: 1,
    title: "Introduction to Programming",
    description: "Start with the basics of coding and understand core programming concepts",
    points: [
      "Understanding how code works",
      "Basic programming logic",
      "Problem-solving approach"
    ]
  },
  {
    step: 2,
    title: "Core Programming Languages",
    description: "Master fundamental programming with Python, Java & JavaScript",
    points: [
      "Python for beginners",
      "Java fundamentals",
      "JavaScript essentials"
    ]
  },
  {
    step: 3,
    title: "Web Development Basics",
    description: "Learn the building blocks of web development",
    points: [
      "HTML structure",
      "CSS styling",
      "Basic SQL queries"
    ]
  },
  {
    step: 4,
    title: "AI & Modern Tools",
    description: "Get started with AI tools and modern development practices",
    points: [
      "ChatGPT basics",
      "AI prompt writing",
      "Developer tools"
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
    title: "4 Real-World Projects",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Course Completion Certificate",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  }
];

const supportFeatures = [
  {
    title: "6 Months Access",
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
    question: "What is included in the Beginner Level Course Package?",
    answer: "The package includes Introduction to Coding (Basic coding overview), Complete Python, Java & JavaScript Course (Lifetime access), HTML, CSS, and SQL Fundamentals (Web development basics), and Chat GPT & AI Prompt Engineering Course (Basic AI knowledge for beginners)."
  },
  {
    question: "Is this course suitable for absolute beginners?",
    answer: "Yes, this course is specifically designed for absolute beginners or those new to coding. We start from the very basics and gradually build up your programming knowledge with a solid foundation."
  },
  {
    question: "Do I get lifetime access to the courses?",
    answer: "Yes, you get lifetime access to all the courses included in the package. Once enrolled, you can learn at your own pace and revisit the content whenever you need to."
  }
];

const BeginnerPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24">
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
            className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#22C55E]/20"
          >
            Start Learning Now
          </Button>
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
            <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>

          </div>
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
            Your Learning Journey
          </h2>

          {/* Vertical line connecting all steps */}
          <div className="absolute left-1/2 top-[100px] bottom-0 w-px bg-gradient-to-b from-[#22C55E] via-[#22C55E]/50 to-transparent hidden md:block" />

          <div className="space-y-20">
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
                  <h3 className="text-[#22C55E] text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#22C55E] mb-4">
              Student Success Stories
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hear from our students who have transformed their careers through our courses
            </p>
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
    </div>
  );
};

export default BeginnerPage; 