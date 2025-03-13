'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { usePixelTracking } from '@/hooks/usePixelTracking';
import { preventEvent } from '@/lib/fbPixel';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { hashUserDetails } from '@/lib/hashUtils';
import { getUserTrackingInfo } from '@/lib/userInfo';

// Course pricing information
const coursePricing = {
  'beginner': { value: 999, name: 'Beginner Package' },
  'intermediate': { value: 1999, name: 'Intermediate Package' },
  'advanced': { value: 2999, name: 'Advanced Package' }
};

// Interface for user details
interface UserDetails {
  name: string;
  email: string;
  phone: string;
  state?: string;
}

const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const { trackProductPurchase, preventEvent } = usePixelTracking();
  const purchaseTracked = useRef(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get course type and payment ID from URL parameters
  const courseType = searchParams.get('course') as 'beginner' | 'intermediate' | 'advanced' | null;
  const paymentId = searchParams.get('payment_id');
  const orderId = searchParams.get('order_id');
  
  // Fetch user details from localStorage or API
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!orderId) {
        setIsLoading(false);
        return;
      }
      
      try {
        // First try to get from localStorage
        const savedDetails = localStorage.getItem('userDetails');
        if (savedDetails) {
          try {
            const parsedDetails = JSON.parse(savedDetails);
            setUserDetails(parsedDetails);
            setIsLoading(false);
            return;
          } catch (error) {
            console.error('Error parsing saved user details:', error);
          }
        }
        
        // If not in localStorage, fetch from API
        const response = await fetch(`/api/user-details?orderId=${orderId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.customerDetails) {
            setUserDetails(data.customerDetails);
          }
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserDetails();
  }, [orderId]);
  
  // Prevent InitiateCheckout event from being tracked on this page
  useEffect(() => {
    // Prevent InitiateCheckout event
    preventEvent('InitiateCheckout');
  }, [preventEvent]);
  
  // Track purchase event only once after user details are loaded
  useEffect(() => {
    // Only proceed if loading is complete
    if (isLoading) {
      return;
    }
    
    // Only track if we have valid course type and payment ID
    // and if the purchase hasn't been tracked yet
    if (courseType && paymentId && !purchaseTracked.current) {
      const course = coursePricing[courseType];
      
      if (course) {
        // Store in localStorage that this purchase has been tracked
        const purchaseKey = `purchase_tracked_${orderId}`;
        
        // Check if this purchase has already been tracked
        if (!localStorage.getItem(purchaseKey)) {
          console.log('Tracking purchase with user details:', userDetails);
          
          // Generate a unique event ID
          const eventId = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}`;
          
          // Hash user details for advanced matching if available
          const hashedUserData = userDetails ? hashUserDetails(userDetails) : {};
          
          // Get tracking info (IP, user agent, FBP, FBC)
          const trackPurchase = async () => {
            const trackingInfo = await getUserTrackingInfo();
            
            // Track the purchase with enhanced tracking
            trackProductPurchase({
              value: course.value,
              contentIds: [`${courseType}-package`],
              contents: [course.name],
              numItems: 1,
              event_id: eventId,
              event_time: Math.floor(Date.now() / 1000), // Add Unix timestamp in seconds
              userInfo: {
                ...hashedUserData,
                ip: trackingInfo.ip,
                userAgent: trackingInfo.userAgent,
                fbp: trackingInfo.fbp,
                fbc: trackingInfo.fbc,
                fb_login_id: trackingInfo.fb_login_id
              }
            });
          };
          
          // Execute the tracking
          trackPurchase();
          
          // Mark as tracked in localStorage
          localStorage.setItem(purchaseKey, 'true');
          
          // Also mark as tracked in memory for this session
          purchaseTracked.current = true;
        }
      }
    }
  }, [courseType, paymentId, orderId, trackProductPurchase, userDetails, isLoading]);
  
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
  
  // Parse name into first and last name
  const getFirstAndLastName = (fullName: string) => {
    if (!fullName) return { firstName: '', lastName: '' };
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    return { firstName, lastName };
  };
  
  const { firstName, lastName } = userDetails?.name ? getFirstAndLastName(userDetails.name) : { firstName: '', lastName: '' };
  
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
          {userDetails?.name && (
            <p className="text-[#22C55E] text-lg mt-2">Welcome aboard, {firstName}!</p>
          )}
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
        
        {isLoading ? (
          <div className="bg-black/20 rounded-xl p-6 mb-8 border border-[#1C1C1C] flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        ) : userDetails ? (
          <div className="bg-black/20 rounded-xl p-6 mb-8 border border-[#1C1C1C]">
            <h2 className="text-xl font-semibold text-white mb-4">Your Information</h2>
            <div className="space-y-3">
              {userDetails.name && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">First Name:</span>
                    <span className="text-white font-medium">{firstName}</span>
                  </div>
                  {lastName && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Name:</span>
                      <span className="text-white font-medium">{lastName}</span>
                    </div>
                  )}
                </>
              )}
              {userDetails.email && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white font-medium">{userDetails.email}</span>
                </div>
              )}
              {userDetails.phone && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <span className="text-white font-medium">{userDetails.phone}</span>
                </div>
              )}
            </div>
          </div>
        ) : null}
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href={`https://30dc.graphy.com/s/dashboard`}>
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