'use client';

import React from 'react';
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function FloatingButton() {
  const scrollToCurriculum = () => {
    const curriculumSection = document.querySelector('.course-curriculum-section');
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:fixed md:bottom-8 md:right-8 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={scrollToCurriculum}
          className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 text-black font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
        >
          View Course Curriculum
          <ChevronUp className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
} 