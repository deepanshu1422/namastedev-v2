'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What courses are included in the Beginner Level (₹999)?",
    answer: "The Beginner Level includes 4 foundational courses: Introduction to Coding (Basic coding overview), Complete Python, Java & JavaScript Course (Lifetime), HTML, CSS, and SQL Fundamentals (Web development basics), and Chat GPT & AI Prompt Engineering Course (Basic AI knowledge for beginners)."
  },
  {
    question: "What's included in the Intermediate Level (₹1999)?",
    answer: "The Intermediate Level includes 6 skill-building courses: JavaScript & React JS Mastery Course (Frontend specialization), Backend Development with Node.js & Express.js, Data Analytics & SQL Mastery Course, Full Stack Interview Questions & Project-Based Learning, DSA Revision & Mastery Course, and FAANG & Startup Tech Job Roadmap (Lifetime)."
  },
  {
    question: "What does the Advanced Level (₹2999) offer?",
    answer: "The Advanced Level includes 4 mastery courses: AI & Machine Learning Mastery (Advanced AI applications), Blockchain, Solidity, and DeFi Complete Course (Lifetime), Advanced Full Stack Projects & System Design, and MERN & Next.js Full Stack Web Development."
  },
  {
    question: "How long do I have access to the courses?",
    answer: "Most courses come with 6 months of access. However, some courses like the Complete Python, Java & JavaScript Course, FAANG & Startup Tech Job Roadmap, and Blockchain course come with lifetime access."
  },
  {
    question: "Are these courses suitable for complete beginners?",
    answer: "Yes! The Beginner Level (₹999) is specifically designed for absolute beginners or those new to coding. It provides foundational knowledge and basic programming skills to help you start your coding journey."
  },
  {
    question: "What kind of projects are included in the courses?",
    answer: "Each level includes different project types: Basic projects in the Beginner level, Real-world projects in the Intermediate level, and Industry-level projects in the Advanced level, including system architecture and full-stack applications."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={false}
      className="border border-emerald-500/20 rounded-xl overflow-hidden bg-[#112121] hover:border-emerald-500/40 transition-colors"
    >
      <button
        className="flex items-center justify-between w-full p-6 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-emerald-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-emerald-100/80">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#0A1F1C]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">FAQ</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </span>
          </h2>

          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Find answers to common questions about our courses, pricing, and learning journey
          </p>

          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 