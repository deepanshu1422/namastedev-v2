"use client";

import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";


export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden  bg-[#0A1A1A]">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-5xl md:text-7xl font-bold tracking-tight"
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
          className=" text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Join India's most comprehensive coding program. Learn from experts, build real
          projects, and land your dream job.
        </motion.p>

        {/* Video Section - Added here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border-2 border-green-500/20 shadow-2xl shadow-green-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-500/10 mix-blend-overlay" />
              <div className="relative pb-[56.25%] h-0">
                <Suspense fallback={
                  <div className="absolute inset-0 flex items-center justify-center bg-green-500/10">
                    <div className="text-green-400">Loading...</div>
                  </div>
                }>
                  <iframe
                    src={`https://www.youtube.com/embed/8UJohSghocU?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1`}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    onLoad={() => setIsVideoLoaded(true)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="m-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
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