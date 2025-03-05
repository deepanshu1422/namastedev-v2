"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <div className="px-4 py-1 rounded-full bg-[#0A2818] border border-green-500/20">
            <span className="text-[#22C55E] text-sm font-medium">
              Trusted by 21,000+ Developers
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="text-[#22C55E]">
            Master Coding.
          </span>
          <br />
          <span className="text-[#22C55E]">Transform Your Career.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Join India's most comprehensive coding program. Learn from experts, build real
          projects, and land your dream job.
        </motion.p>

        {/* CTA Button with Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          {/* Buy Button */}
          <Button
            size="lg"
            className="bg-[#22C55E] hover:bg-[#1EA052] text-white px-12 py-6 text-xl rounded-xl transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            Choose Your Path Now 🔥
          </Button>

        
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1C1C1C]">
            <div className="flex justify-center mb-2">
              {"⭐️⭐️⭐️⭐️⭐️"}
            </div>
            <p className="text-white font-medium">4.9/5 from 1000+ reviews</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1C1C1C]">
            <div className="flex justify-center mb-2">
              {"👩‍💻"}
            </div>
            <p className="text-white font-medium">21,000+ Students</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1C1C1C]">
            <div className="flex justify-center mb-2">
              {"🎯"}
            </div>
            <p className="text-white font-medium">Structured Learning</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 