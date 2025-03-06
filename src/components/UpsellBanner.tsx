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

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A2818] border-t border-[#22C55E]/20 shadow-lg shadow-[#22C55E]/10"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-baseline gap-2">
                <span className="text-[#22C55E] text-xl sm:text-2xl font-bold">{currentPrice}</span>
              </div>
              <div className="bg-[#22C55E]/10 text-[#22C55E] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {discountPercentage} OFF
              </div>
              <div className="flex sm:hidden items-center gap-1 text-[#22C55E]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium">Limited Time</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#22C55E]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>
            </div>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Enroll Now
            </Button>
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