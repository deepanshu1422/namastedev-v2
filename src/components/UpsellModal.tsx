import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: {
    title: string;
    price: string;
    originalPrice: string;
    features: string[];
    link: string;
  }[];
}

const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, courses }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative z-10 bg-[#0A1F1C] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-[calc(100vw-2rem)] sm:max-w-4xl mx-auto max-h-[calc(100vh-2rem)] overflow-y-auto border border-[#22C55E]/20"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white p-2"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#22C55E] mb-2">
              Upgrade Your Learning Journey
            </h2>
            <p className="text-sm sm:text-base text-gray-400 px-4">
              Get access to more advanced content and accelerate your career growth
            </p>
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A0A0A] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[#1C1C1C] hover:border-[#22C55E]/50 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{course.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-[#22C55E]">{course.price}</span>
                  <span className="text-xs sm:text-sm text-gray-400 line-through">{course.originalPrice}</span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-gray-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#22C55E] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300"
                  onClick={() => window.location.href = course.link}
                >
                  Get Started with {course.title}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Most Popular Choice Banner */}
          <div className="mt-4 sm:mt-6 text-center">
            <span className="inline-block bg-[#22C55E] text-white text-xs sm:text-sm px-4 py-2 rounded-full font-medium">
              Most Popular Choice
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default UpsellModal; 