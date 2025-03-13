'use client';

import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { usePixelTracking } from '@/hooks/usePixelTracking';
import { preventEvent } from '@/lib/fbPixel';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

// Course pricing information
const coursePricing = {
  'beginner': { value: 999, name: 'Beginner Package' },
  'intermediate': { value: 1999, name: 'Intermediate Package' },
  'advanced': { value: 2999, name: 'Advanced Package' }
};

const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const { trackProductPurchase, preventEvent } = usePixelTracking();
  const purchaseTracked = useRef(false);
  
  // Get course type and payment ID from URL parameters
  const courseType = searchParams.get('course') as 'beginner' | 'intermediate' | 'advanced' | null;
  const paymentId = searchParams.get('payment_id');
  const orderId = searchParams.get('order_id');
  
  // Prevent InitiateCheckout event from being tracked on this page
  useEffect(() => {
    // Prevent InitiateCheckout event
    preventEvent('InitiateCheckout');
  }, [preventEvent]);
  
  // Track purchase event only once
  useEffect(() => {
    // Only track if we have valid course type and payment ID
    // and if the purchase hasn't been tracked yet
    if (courseType && paymentId && !purchaseTracked.current) {
      const course = coursePricing[courseType];
      
      if (course) {
        // Store in localStorage that this purchase has been tracked
        const purchaseKey = `purchase_tracked_${orderId}`;
        
        // Check if this purchase has already been tracked
        if (!localStorage.getItem(purchaseKey)) {
          // Track the purchase
          trackProductPurchase({
            value: course.value,
            contentIds: [`${courseType}-package`],
            contents: [course.name],
            numItems: 1
          });
          
          // Mark as tracked in localStorage
          localStorage.setItem(purchaseKey, 'true');
          
          // Also mark as tracked in memory for this session
          purchaseTracked.current = true;
        }
      }
    }
  }, [courseType, paymentId, orderId, trackProductPurchase]);
  
  // If no course type or payment ID, show generic thank you
  if (!courseType || !paymentId) {
    return (
      <div className="min-h-screen bg-[#0A1F1C] flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-[#0A2818] rounded-2xl p-8 border border-[#22C55E]/20 text-center">
          <CheckCircle className="w-16 h-16 text-[#22C55E] mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-gray-400 mb-8">Your purchase has been completed successfully.</p>
          <Link href="/dashboard">
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-lg text-base font-semibold">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Get course details
  const course = coursePricing[courseType];
  
  return (
    <div className="min-h-screen bg-[#0A1F1C] flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full bg-[#0A2818] rounded-2xl p-6 md:p-10 border border-[#22C55E]/20"
      >
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 bg-[#22C55E]/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-[#22C55E]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Payment Successful!</h1>
          <p className="text-gray-400 text-lg">Thank you for purchasing the {course.name}</p>
        </div>
        
        <div className="bg-black/20 rounded-xl p-6 mb-8 border border-[#1C1C1C]">
          <h2 className="text-xl font-semibold text-white mb-4">Order Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Package:</span>
              <span className="text-white font-medium">{course.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Amount:</span>
              <span className="text-[#22C55E] font-medium">₹{course.value.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Payment ID:</span>
              <span className="text-white font-medium">{paymentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Order ID:</span>
              <span className="text-white font-medium">{orderId}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href={`/dashboard/${courseType}`}>
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-lg text-base font-semibold w-full">
              Go to Course Dashboard
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-[#22C55E]/30 text-[#22C55E] hover:bg-[#22C55E]/10 px-6 py-3 rounded-lg text-base font-medium w-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage; 