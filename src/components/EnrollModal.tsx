import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import useUtmTracker from '@/hooks/use-utm-tracker';

interface CourseOption {
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  features: string[];
  recommended?: boolean;
}

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: 'beginner' | 'intermediate' | 'advanced';
}

const courseOptions: Record<string, CourseOption[]> = {
  beginner: [
    {
      name: "Intermediate Package",
      price: "₹1,999",
      originalPrice: "₹2,999",
      discount: "33%",
      features: [
        "All Beginner Content",
        "Full Stack Development",
        "Advanced JavaScript & React",
        "Backend with Node.js",
        "Premium Support"
      ]
    },
    {
      name: "Advanced Package",
      price: "₹2,999",
      originalPrice: "₹3,999",
      discount: "25%",
      features: [
        "All Intermediate + Beginner Content",
        "AI & Machine Learning",
        "Python",
        "Interview Preparation",
        "All courses Access"
      ],
      recommended: true
    }
  ],
  intermediate: [
    {
      name: "Advanced Package",
      price: "₹2,999",
      originalPrice: "₹3,999",
      discount: "25%",
      features: [
        "All Intermediate + Beginner Content",
        "AI & Machine Learning",
        "System Design",
        "Advanced Architecture",
        "Expert Mentorship"
      ]
    }
  ],
  advanced: []
};

const EnrollModal: React.FC<EnrollModalProps> = ({
  isOpen,
  onClose,
  currentPage
}) => {
  // Add UTM tracker
  const { appendUtmToUrl } = useUtmTracker();

  if (!isOpen) return null;

  const options = courseOptions[currentPage];
  const currentCoursePrice = {
    beginner: "₹999",
    intermediate: "₹1,999",
    advanced: "₹2,999"
  }[currentPage];

  const getCheckoutUrl = (page: string) => {
    const urls = {
      'beginner': 'https://30dc.graphy.com/single-checkout/67c8a985a2fc8675d8e821ba?pid=p1',
      'intermediate': 'https://30dc.graphy.com/single-checkout/67c8a9e153f717193c586641?pid=p1',
      'advanced': 'https://30dc.graphy.com/single-checkout/652a1994e4b05a145bae5cd0?pid=p1'
    };
    return appendUtmToUrl(urls[page]);
  };

  const handleNavigation = (targetPage: string) => {
    if (['beginner', 'intermediate', 'advanced'].includes(targetPage)) {
      // For internal page navigation, preserve UTM in URL
      const currentUtm = new URLSearchParams(window.location.search).get('utmpara');
      const baseUrl = `/${targetPage}`;
      window.location.href = currentUtm ? `${baseUrl}?utmpara=${currentUtm}` : baseUrl;
    } else {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[calc(100vw-1rem)] sm:max-w-4xl overflow-y-auto max-h-[calc(100vh-1rem)] rounded-lg sm:rounded-2xl bg-[#0A2818] p-3 sm:p-6 shadow-xl border border-[#22C55E]/20"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-1.5 top-1.5 sm:right-4 sm:top-4 text-gray-400 hover:text-white p-1.5 sm:p-2"
            >
              <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Sticky "Happy with your current course" section at the top - DESKTOP ONLY */}
            <div className="hidden sm:block sticky top-0 z-10 bg-[#0A2818] border-b border-[#22C55E]/20 py-3 sm:py-4 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-2">
                <div className="text-center sm:text-left">
                  <h4 className="text-base sm:text-lg font-semibold text-white">Happy with your current course?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Continue with {currentPage} package at {currentCoursePrice}</p>
                </div>
                <Button 
                  onClick={() => {
                    if (['beginner', 'intermediate', 'advanced'].includes(currentPage)) {
                      window.location.href = getCheckoutUrl(currentPage);
                    } else {
                      onClose();
                    }
                  }}
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base w-full sm:w-auto"
                >
                  <span>Continue with Current Course</span>
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="text-center mb-4 sm:mb-8">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-1.5 sm:mb-2 px-4 sm:px-8">
                {options.length > 0 ? 'Upgrade Your Learning Journey' : 'Unlock the Ultimate Learning Experience'}
              </h3>
              <p className="text-xs sm:text-base text-gray-400 px-2 sm:px-4">
                {options.length > 0 
                  ? 'Get access to more advanced content and accelerate your career growth'
                  : 'Get access to our most comprehensive package with exclusive benefits and mentorship'
                }
              </p>
            </div>

            {/* Course Options */}
            {options.length > 0 ? (
              <div className={`${currentPage === 'advanced' ? 'max-w-2xl mx-auto' : 'grid md:grid-cols-2 gap-3 sm:gap-6'} mb-4 sm:mb-8`}>
                {options.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-3 sm:p-8 rounded-lg sm:rounded-xl border ${
                      option.recommended
                        ? 'border-[#22C55E] bg-[#22C55E]/10'
                        : 'border-gray-700 bg-black/20'
                    } ${currentPage === 'advanced' ? 'transform hover:scale-105 transition-transform duration-300' : ''}`}
                  >
                    {option.recommended && (
                      <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                        Most Popular Choice
                      </div>
                    )}

                    <div className="text-center mb-3 sm:mb-6">
                      <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">{option.name}</h4>
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-2xl sm:text-4xl font-bold text-[#22C55E]">{option.price}</span>
                        <div className="flex flex-col items-start">
                          <span className="text-[10px] sm:text-sm text-gray-400 line-through">{option.originalPrice}</span>
                          <span className="bg-[#22C55E]/10 text-[#22C55E] px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium">
                            {option.discount} OFF
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-8">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 sm:gap-3 text-white">
                          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs sm:text-base leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${
                        option.recommended
                          ? 'bg-[#22C55E] hover:bg-[#16A34A]'
                          : 'bg-white hover:bg-gray-100 text-black'
                      } px-3 sm:px-6 py-2.5 sm:py-4 rounded-md sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-lg`}
                      onClick={() => {
                        if (option.name === "Advanced Package") {
                          handleNavigation('advanced');
                        } else if (option.name === "Intermediate Package") {
                          handleNavigation('intermediate');
                        }
                      }}
                    >
                      <span>Get Started</span>
                      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 mb-4">
                <div className="mx-auto w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">You're Already at the Advanced Level!</h4>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                  You've selected our most comprehensive package with all the premium features and content.
                </p>
              </div>
            )}

            {/* Sticky footer for mobile */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#0A2818] border-t border-[#22C55E]/20 p-3 z-20">
              <Button 
                onClick={() => {
                  if (['beginner', 'intermediate', 'advanced'].includes(currentPage)) {
                    window.location.href = getCheckoutUrl(currentPage);
                  } else {
                    onClose();
                  }
                }}
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white py-3 rounded-xl font-semibold w-full flex items-center justify-center gap-2"
              >
                <span>Continue with Current Course ({currentCoursePrice})</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>

            {/* Security note */}
            <div className="mt-3 sm:mt-6 flex items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-gray-400 mb-12 sm:mb-0">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure checkout with 100% satisfaction guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default EnrollModal; 