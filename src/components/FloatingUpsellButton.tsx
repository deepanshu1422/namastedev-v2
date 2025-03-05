import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UpsellModal from './UpsellModal';

interface FloatingUpsellButtonProps {
  currentPage: 'beginner' | 'intermediate' | 'advanced';
}

const courseData = {
  beginner: [
    {
      title: 'Intermediate Package',
      price: '₹1,999',
      originalPrice: '₹2,999',
      features: [
        '6 Advanced Courses',
        '60+ Hours of Content',
        'Real Industry Projects',
        'Professional Certificate'
      ],
      link: '/intermediate'
    },
    {
      title: 'Super Bundle',
      price: '₹4,999',
      originalPrice: '₹7,999',
      features: [
        'All Courses Access',
        'Premium Support',
        'Lifetime Updates',
        'Career Guidance'
      ],
      link: '/super-bundle'
    }
  ],
  intermediate: [
    {
      title: 'Advanced Package',
      price: '₹2,999',
      originalPrice: '₹3,999',
      features: [
        'Advanced Specializations',
        'Industry Projects',
        'Expert Mentorship',
        'Career Support'
      ],
      link: '/advanced'
    },
    {
      title: 'Super Bundle',
      price: '₹4,999',
      originalPrice: '₹7,999',
      features: [
        'All Courses Access',
        'Premium Support',
        'Lifetime Updates',
        'Career Guidance'
      ],
      link: '/super-bundle'
    }
  ],
  advanced: [
    {
      title: 'Super Bundle',
      price: '₹4,999',
      originalPrice: '₹7,999',
      features: [
        'All Courses Access',
        'Premium Support',
        'Lifetime Updates',
        'Career Guidance'
      ],
      link: '/super-bundle'
    }
  ]
};

const FloatingUpsellButton: React.FC<FloatingUpsellButtonProps> = ({ currentPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-[#22C55E] text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-[#22C55E]/20 flex items-center gap-2 hover:bg-[#16A34A] transition-colors duration-300"
      >
        <span>Upgrade Now</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </motion.button>

      <UpsellModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courses={courseData[currentPage]}
      />
    </>
  );
};

export default FloatingUpsellButton; 