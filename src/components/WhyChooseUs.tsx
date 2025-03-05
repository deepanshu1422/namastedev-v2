'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Users, Clock, GraduationCap, Code2, Rocket, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="w-8 h-8 text-emerald-400" />,
    title: "Structured Learning Path",
    description: "Progressive courses from beginner to advanced level, ensuring a clear roadmap for your tech career."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-emerald-400" />,
    title: "Lifetime Access",
    description: "Many courses come with lifetime access, including Python, Java, JavaScript, and Blockchain courses."
  },
  {
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    title: "Hands-on Projects",
    description: "Real-world projects ranging from basic to industry-level applications across all course levels."
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    title: "Industry Expert Mentors",
    description: "Learn from experienced professionals with expertise in FAANG companies and startups."
  },
  {
    icon: <Clock className="w-8 h-8 text-emerald-400" />,
    title: "Flexible Learning",
    description: "6-month access to most courses with self-paced learning to fit your schedule."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-emerald-400" />,
    title: "Comprehensive Curriculum",
    description: "From coding basics to advanced AI, blockchain, and full-stack development."
  },
  {
    icon: <Rocket className="w-8 h-8 text-emerald-400" />,
    title: "Career Growth",
    description: "Specialized courses for FAANG/startup job preparation and interview readiness."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-emerald-400" />,
    title: "Practical Skills",
    description: "Focus on in-demand technologies like MERN stack, Next.js, AI, and system design."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#0A1F1C]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <Trophy className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Why Choose Us</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                What Makes Us Different?
              </span>
            </span>
          </h2>

          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Discover why our courses are the perfect choice for your coding journey
          </p>

          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex flex-col items-center gap-4 p-6 bg-[#112121] rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center">
                  {feature.title}
                </h3>
                <p className="text-emerald-100/80 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 