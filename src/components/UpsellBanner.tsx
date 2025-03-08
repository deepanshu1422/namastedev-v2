import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import EnrollModal from './EnrollModal';

interface UpsellBannerProps {
  currentPrice: string;
  originalPrice: string;
  discountPercentage: string;
  currentPage: 'beginner' | 'intermediate' | 'advanced';
}

const UpsellBanner: React.FC<UpsellBannerProps> = ({ 
  currentPrice, 
  originalPrice,
  discountPercentage,
  currentPage
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courseNames = {
    'beginner': 'Beginner',
    'intermediate': 'Intermediate',
    'advanced': 'Advanced'
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A2818] border-t border-[#22C55E]/20 shadow-lg shadow-[#22C55E]/10"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 bg-[#22C55E]/10 px-3 py-1 rounded-full">
                <span className="text-white font-medium">{courseNames[currentPage]} Package:</span>
                <span className="text-[#22C55E] text-xl sm:text-2xl font-bold">{currentPrice}</span>
                <span className="text-[#22C55E] text-xs font-medium px-2 py-0.5 bg-[#22C55E]/20 rounded-full">
                  {discountPercentage} OFF
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-white">
                <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Limited time offer</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Enroll Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
              
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                className="border-[#22C55E]/30 text-[#22C55E] hover:bg-[#22C55E]/10 px-4 py-2.5 rounded-lg text-sm font-medium hidden sm:flex items-center gap-2"
              >
                <span>View Options</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentPage={currentPage}
      />
    </>
  );
};

export default UpsellBanner; 