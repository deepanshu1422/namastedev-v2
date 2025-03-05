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
      <div className="fixed inset-0 z-50 flex items-center justify-center">
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
          className="relative z-10 bg-[#0A1F1C] rounded-2xl p-6 max-w-4xl w-full mx-4 border border-[#22C55E]/20"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#22C55E] mb-2">
              Upgrade Your Learning Journey
            </h2>
            <p className="text-gray-400">
              Take your skills to the next level with our advanced courses
            </p>
          </div>

          {/* Course cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A0A0A] rounded-xl p-6 border border-[#1C1C1C] hover:border-[#22C55E]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-[#22C55E]">{course.price}</span>
                  <span className="text-gray-400 line-through text-sm">{course.originalPrice}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-xl font-semibold transition-all duration-300"
                  onClick={() => window.location.href = course.link}
                >
                  Upgrade Now
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default UpsellModal; 