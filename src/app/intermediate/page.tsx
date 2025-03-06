'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import VideoGallery from '@/components/VideoGallery';
import Footer from "@/components/new-cohort/footer";
import UpsellBanner from '@/components/UpsellBanner';
import useUtmTracker from '@/hooks/use-utm-tracker';

const learningPath = [
  {
    step: 1,
    title: "HTML, CSS Complete Mastery Course",
    description: "Master modern web development with HTML and CSS to create stunning websites and web applications",
    points: [
      "Master HTML basics and advanced techniques",
      "Create stylish and responsive websites with CSS",
      "Explore Flexbox, Grid, and CSS animations for modern web design",
      "Create dynamic web pages and responsive designs",
      "Advanced styling techniques with modern CSS"
    ],
    details: {
      keyHighlights: [
        "Master HTML basics and advanced techniques",
        "Create stylish and responsive websites with CSS",
        "Explore Flexbox, Grid, and CSS animations for modern web design"
      ],
      outcomes: [
        "Create Dynamic Web Pages",
        "Responsive Web Design",
        "Advanced Styling Techniques"
      ]
    }
  },
  {
    step: 2,
    title: "Complete Java Course",
    description: "Comprehensive Java programming course from basics to advanced concepts with lifetime access",
    points: [
      "Learn Java programming from scratch",
      "Master object-oriented programming principles",
      "Build GUI applications with JavaFX",
      "Implement multi-threading and collections",
      "Advanced exception handling and file management"
    ],
    details: {
      keyHighlights: [
        "Understand Java fundamentals",
        "Master object-oriented programming",
        "Create GUI applications",
        "Implement multi-threading",
        "Handle exceptions and file management"
      ]
    }
  },
  {
    step: 3,
    title: "Complete Python Course",
    description: "Learn Python programming from scratch and master core concepts through practical exercises",
    points: [
      "Build strong foundation in Python concepts",
      "Gain hands-on experience with practical coding",
      "Master Python's built-in libraries and modules",
      "Develop real-world applications",
      "Learn Python's syntax and features"
    ],
    details: {
      keyHighlights: [
        "Learn Python from scratch",
        "Build strong foundation in concepts",
        "Gain hands-on experience",
        "Master built-in libraries"
      ],
      outcomes: [
        "Write Python code confidently",
        "Understand core programming concepts",
        "Develop real-world applications",
        "Master Python libraries and modules"
      ]
    }
  },
  {
    step: 4,
    title: "Complete JavaScript Mastery Course",
    description: "Master JavaScript and build interactive web applications with hands-on exercises",
    points: [
      "Learn JavaScript from fundamentals to advanced concepts",
      "Build interactive web applications",
      "Master advanced JavaScript techniques",
      "Optimize code performance",
      "Implement modern JavaScript features"
    ],
    details: {
      keyHighlights: [
        "Master JavaScript from scratch",
        "Build interactive applications",
        "Learn advanced concepts",
        "Hands-on exercises"
      ],
      outcomes: [
        "Create dynamic web applications",
        "Master JavaScript fundamentals",
        "Implement advanced techniques",
        "Optimize code performance"
      ]
    }
  },
  {
    step: 5,
    title: "SQL and Databases Mastery Course",
    description: "Comprehensive course covering SQL fundamentals to advanced database concepts",
    points: [
      "Master SQL fundamentals and queries",
      "Learn advanced database concepts",
      "Optimize database performance",
      "Handle complex database structures",
      "Implement efficient data management"
    ],
    details: {
      keyHighlights: [
        "Master SQL fundamentals",
        "Learn advanced concepts",
        "Optimize performance"
      ],
      outcomes: [
        "Write complex SQL queries",
        "Manage database structures",
        "Optimize database performance"
      ]
    }
  },
  {
    step: 6,
    title: "Complete MERN Stack Development",
    description: "Master Full-Stack Web Development",
    points: [
      "Front-End: HTML, CSS, JavaScript, React with modern practices",
      "Back-End: Node.js, Express.js, MongoDB, GraphQL",
      "15+ JavaScript and React projects",
      "5+ major full-stack projects including E-commerce & YouTube clone",
      "Industry-relevant skill development and interview preparation"
    ]
  },
  {
    step: 7,
    title: "Next.js Full-Stack Mastery",
    description: "Advanced Modern Web Development",
    points: [
      "Server-side rendering (SSR), Static site generation (SSG)",
      "TypeScript integration and API development",
      "Performance optimization and state management",
      "10+ complex projects including E-commerce and real-time chat",
      "Deployment strategies and serverless functions"
    ]
  },
  {
    step: 8,
    title: "Complete Node.js Backend Development",
    description: "Master Server-Side Programming",
    points: [
      "Backend programming fundamentals and scalability",
      "Database management and optimization",
      "Server security best practices",
      "API development and integration",
      "Real-world backend architecture"
    ]
  },
  {
    step: 9,
    title: "ChatGPT AI & Prompt Engineering",
    description: "Master AI Integration and Prompting",
    points: [
      "Chat GPT APIs, vision, and whisper integration",
      "Specialized prompts for different professions",
      "Image and video prompting resources",
      "Building apps and games with AI prompts",
      "Advanced prompting techniques"
    ]
  },
  {
    step: 10,
    title: "Advanced React.js Development",
    description: "Professional React Development",
    points: [
      "Modern React patterns and hooks",
      "Advanced state management (Redux, Context, Zustand)",
      "Performance optimization techniques",
      "Testing and TypeScript integration",
      "8 real-world projects including E-commerce platform"
    ]
  },
  {
    step: 11,
    title: "BONUS: Complete Beginner Package Access",
    description: "Access to All Beginner Level Courses",
    points: [
      "HTML & CSS Complete Mastery Course",
      "Complete Java Programming Course",
      "Complete Python Development Course",
      "JavaScript Fundamentals to Advanced",
      "SQL and Databases Mastery Course"
    ]
  }
];

const courseBenefits = [
  {
    title: "10+ Complete Courses",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
 
  {
    title: "40+ Industry Projects",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Interview Preparation",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  },
  {
    title: "AI Tools Integration",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Full-Stack Projects",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
  }
];

const supportFeatures = [
  {
    title: "Lifetime Access",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Structured Learning Path",
    icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  },
  {
    title: "Resume Building",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    title: "Career Guidance",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
 
  
];

const faqs = [
  {
    question: "What courses are included in the Intermediate Package?",
    answer: "The Intermediate Package includes five comprehensive courses: Complete MERN Stack Development, Next.js Full-Stack Mastery, Complete Node.js Backend Development, ChatGPT AI & Prompt Engineering, and Advanced React.js Development. Plus, you get access to all beginner material!"
  },
  {
    question: "What prerequisites are needed for these courses?",
    answer: "You should have basic programming knowledge and understanding of web development fundamentals (HTML, CSS, JavaScript). Our beginner course or equivalent experience is recommended. Each course builds upon these fundamentals to take you to an advanced level."
  },
  {
    question: "What kind of projects will I build?",
    answer: "You'll build numerous professional-grade projects including: E-commerce platforms, YouTube clone, real-time chat applications, social media dashboards, AI-integrated applications, and many more. The course includes 15+ JavaScript/React projects and 5+ major full-stack projects."
  },
  {
    question: "How is the MERN stack course structured?",
    answer: "The MERN stack course covers front-end development (HTML, CSS, JavaScript, React), back-end development (Node.js, Express.js), database management (MongoDB), and includes practical projects. You'll learn through hands-on coding and real-world applications."
  },
  {
    question: "What will I learn in the Next.js course?",
    answer: "The Next.js course covers server-side rendering, static site generation, TypeScript integration, API development, performance optimization, and state management. You'll build 10+ complex projects and learn deployment strategies."
  },
  {
    question: "What does the ChatGPT AI course include?",
    answer: "The ChatGPT AI course teaches you prompt engineering, API integration, specialized prompts for different professions, image and video prompting, and how to build AI-powered applications. You'll learn to leverage AI effectively in development."
  },
  {
    question: "How comprehensive is the React.js course?",
    answer: "The React.js course covers everything from fundamentals to advanced patterns, including hooks, state management, performance optimization, testing, and TypeScript integration. You'll build 8 real-world projects and learn professional best practices."
  },
 
  {
    question: "Will these courses help me get a job?",
    answer: "Absolutely! These courses are designed with industry requirements in mind. You'll build a strong portfolio of projects, learn in-demand technologies, and receive comprehensive interview preparation. The skills you learn are highly sought after in the tech industry."
  }
];

const IntermediatePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllSteps, setShowAllSteps] = useState(false);

  // Add UTM tracker
  const { appendUtmToUrl } = useUtmTracker();

  const handleBuyNowClick = () => {
    const baseUrl = 'https://30dc.graphy.com/single-checkout/67c8a9e153f717193c586641?pid=p1';
    window.location.href = appendUtmToUrl(baseUrl);
  };

  const visibleLearningPath = showAllSteps 
    ? learningPath 
    : learningPath.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24">
      <UpsellBanner 
        currentPrice="₹1,999"
        originalPrice="₹2,999"
        discountPercentage="33%"
        currentPage="intermediate"
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
            Intermediate Level (Skill-Building Courses)
          </h1>
          <p className="text-[#E5E7EB] text-lg mb-4">
            For professionals with foundational knowledge, aiming to elevate their expertise
          </p>
          <p className="text-[#22C55E] text-xl font-semibold mb-8">
            BONUS: Get Complete Access to All Beginner Courses Worth ₹999!
          </p>
          
          <div className="flex flex-col items-center mb-8">
            <div className="text-[#94A3B8] text-lg line-through mb-2">₹2,999</div>
            <div className="text-5xl md:text-7xl font-bold text-[#22C55E] mb-4">₹1,999</div>
            <p className="text-[#E5E7EB] mb-8">One-time payment • 6 months access • Premium support • All Beginner Courses Included</p>
            
            <Button 
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-12 py-6 text-xl rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#22C55E]/30 flex items-center gap-2"
              onClick={handleBuyNowClick}
            >
              <span>Buy Now</span>
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
            onClick={handleBuyNowClick}
          >
            Start Learning Now
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
            Your Advanced Journey
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Take your development skills to the next level with our comprehensive intermediate curriculum
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

          <div className="space-y-20">
            {visibleLearningPath.map((step, index) => (
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
          
          {/* See More Button */}
          {!showAllSteps && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-16"
            >
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
            </motion.div>
          )}
        </motion.div>

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
              Get answers to common questions about the Intermediate Course Package
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

        {/* Video Gallery Section */}
        <div className="mt-20">
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
              Hear from our intermediate students who have advanced their careers
            </p>
          </motion.div>
          <VideoGallery />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default IntermediatePage;
