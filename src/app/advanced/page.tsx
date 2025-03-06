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
  },
  {
    step: 12,
    title: "🤖 AI Mastery Course",
    description: "Master AI Integration & Development",
    points: [
      "Comprehensive coverage of AI workflows and tools",
      "Chat GPT implementation and integration",
      "Full-stack AI project development",
      "Advanced prompting techniques and strategies",
      "Hands-on experience with various AI tools"
    ]
  },
  {
    step: 13,
    title: "📊 DSA & FAANG Job Preparation",
    description: "Complete Interview Preparation",
    points: [
      "Complete DSA revision and mastery",
      "FAANG and Startup Tech job roadmap",
      "Technical interview preparation",
      "Resume writing and networking strategies",
      "Personalized guidance from industry experts"
    ]
  },
  {
    step: 14,
    title: "💡 Project Mastery Bundle",
    description: "Build Real-World Projects",
    points: [
      "50+ Unique coding project ideas",
      "Full-stack projects and SaaS tools",
      "MVP product development",
      "Real-world implementation guides",
      "Constantly updated project content"
    ]
  },
  {
    step: 15,
    title: "🔗 Blockchain & DeFi",
    description: "Complete Web3 Development",
    points: [
      "Complete Blockchain fundamentals",
      "Solidity programming mastery",
      "DeFi protocols and applications",
      "Smart contract development",
      "Real-world blockchain projects"
    ]
  },
  {
    step: 16,
    title: "📈 Data & Interview Prep",
    description: "Data Analytics & Job Preparation",
    points: [
      "Complete data analytics course",
      "Statistical methods and visualization",
      "Full-stack interview preparation",
      "Comprehensive job-ready skills",
      "Expert guidance and support"
    ]
  },
  {
    step: 17,
    title: "🎁 BONUS: Complete Access",
    description: "Access to All Course Levels",
    points: [
      "All Beginner Courses (₹999 value)",
      "All Intermediate Courses (₹1,999 value)",
      "Lifetime updates and support",
      "Priority mentorship access",
      "Interview preparation resources"
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
  const [showAllSteps, setShowAllSteps] = useState(false);

  const visibleLearningPath = showAllSteps 
    ? learningPath 
    : learningPath.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          
          <div className="flex flex-col items-center mb-8">
            <div className="text-[#94A3B8] text-lg line-through mb-2">₹3,999</div>
            <div className="text-5xl md:text-7xl font-bold text-[#22C55E] mb-4">₹2,999</div>
            <p className="text-[#E5E7EB] mb-8">One-time payment • Lifetime access • Premium support</p>
            
            <Button 
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-12 py-6 text-xl rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#22C55E]/30 flex items-center gap-2"
              onClick={() => window.location.href = 'https://30dc.graphy.com/single-checkout/652a1994e4b05a145bae5cd0?pid=p1'}
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
            onClick={() => window.location.href = 'https://30dc.graphy.com/single-checkout/652a1994e4b05a145bae5cd0?pid=p1'}
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
            Master cutting-edge technologies and transform your career with industry-leading expertise
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

export default AdvancedPage;
