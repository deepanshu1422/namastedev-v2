'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

// List of Indian states
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

// Course information
const courseInfo = {
  beginner: {
    name: "Beginner Package",
    price: "₹999",
    amount: 99900,
    features: [
      "JavaScript Fundamentals",
      "HTML & CSS Basics",
      "Introduction to React",
      "Basic Web Development",
      "Community Support"
    ]
  },
  intermediate: {
    name: "Intermediate Package",
    price: "₹1,999",
    amount: 199900,
    features: [
      "All Beginner Content",
      "Full Stack Development",
      "Advanced JavaScript & React",
      "Backend with Node.js",
      "Premium Support"
    ]
  },
  advanced: {
    name: "Advanced Package",
    price: "₹2,999",
    amount: 299900,
    features: [
      "All Intermediate + Beginner Content",
      "AI & Machine Learning",
      "System Design",
      "Advanced Architecture",
      "Expert Mentorship"
    ]
  }
};

// Button component
const Button = ({ 
  children, 
  className, 
  disabled, 
  type = 'button',
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string; 
  disabled?: boolean; 
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Toast component
const Toast = ({ title, description, variant }: { title: string; description: string; variant: 'default' | 'destructive' }) => {
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${variant === 'destructive' ? 'bg-red-600' : 'bg-green-600'} text-white`}>
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Toast hook
const useToast = () => {
  const [toasts, setToasts] = useState<Array<{ id: string; title: string; description: string; variant: 'default' | 'destructive' }>>([]);

  const toast = ({ title, description, variant = 'default' }: { title: string; description: string; variant?: 'default' | 'destructive' }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, variant }]);
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return { toast, toasts };
};

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast, toasts } = useToast();
  
  const courseType = searchParams.get('course') || 'beginner';
  const course = courseInfo[courseType as keyof typeof courseInfo];
  
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    state: ''
  });

  // Load user details from localStorage if available
  useEffect(() => {
    const savedDetails = localStorage.getItem('userDetails');
    if (savedDetails) {
      try {
        const parsedDetails = JSON.parse(savedDetails);
        setUserDetails(parsedDetails);
      } catch (error) {
        console.error('Error parsing saved user details:', error);
      }
    }
  }, []);

  // Load Razorpay script
  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  // Initialize Razorpay payment
  const initializeRazorpay = async () => {
    try {
      // Create order on server
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseType,
          email: userDetails.email,
          name: userDetails.name,
          phone: userDetails.phone,
          state: userDetails.state
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order');
      }

      return data;
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      throw error;
    }
  };

  // Handle payment verification
  const verifyPayment = async (paymentData: any) => {
    try {
      const response = await fetch('/api/razorpay', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify payment');
      }

      return data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  };
  
  // Handle checkout with Razorpay
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent multiple clicks
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      
      // Validate user details
      if (!userDetails.email) {
        toast({
          title: "Email Required",
          description: "Please enter your email to continue",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }
      
      // Initialize Razorpay order
      const orderData = await initializeRazorpay();
      
      // @ts-ignore - Razorpay is loaded via script
      const razorpay = new window.Razorpay({
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.id,
        name: "Namaste Dev",
        description: `${course.name} - 30 Days of Code`,
        image: "https://namastedev.com/logo.png",
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        notes: {
          state: userDetails.state
        },
        theme: {
          color: "#22C55E",
        },
        handler: async function (response: any) {
          try {
            // Verify payment
            await verifyPayment({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });
            
            // Show success message
            toast({
              title: "Payment Successful",
              description: "Thank you for enrolling in the course!",
              variant: "default"
            });
            
            // Redirect to course page
            setTimeout(() => {
              router.push(`/dashboard/${courseType}`);
            }, 2000);
          } catch (error) {
            console.error('Payment verification failed:', error);
            toast({
              title: "Payment Verification Failed",
              description: "Please contact support if payment was deducted",
              variant: "destructive"
            });
          } finally {
            setIsLoading(false);
          }
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false);
            toast({
              title: "Payment Cancelled",
              description: "You can try again when you're ready",
              variant: "default"
            });
          },
        },
      });
      
      razorpay.open();
    } catch (error) {
      console.error('Error during checkout:', error);
      toast({
        title: "Checkout Failed",
        description: "Please try again later or contact support",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#051209] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <a href="/" className="inline-block">
            <Image 
              src="/logo.png" 
              alt="Namaste Dev Logo" 
              width={180} 
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-[#0A2818] p-6 rounded-xl border border-[#22C55E]/20">
            <h1 className="text-2xl font-bold mb-6">Complete Your Purchase</h1>
            
            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-black/30 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#22C55E]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                  Email <span className="text-[#22C55E]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-black/30 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#22C55E]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={userDetails.phone}
                  onChange={(e) => setUserDetails(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-black/30 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#22C55E]"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm text-gray-400 mb-1">State</label>
                <select
                  id="state"
                  value={userDetails.state}
                  onChange={(e) => setUserDetails(prev => ({ ...prev, state: e.target.value }))}
                  className="w-full bg-black/30 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#22C55E] appearance-none"
                >
                  <option value="">Select your state</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Payment - {course.price}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure checkout with 100% satisfaction guarantee</span>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="bg-[#0A2818] p-6 rounded-xl border border-[#22C55E]/20">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="bg-black/20 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{course.name}</h3>
                <span className="text-[#22C55E] font-bold text-xl">{course.price}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">30 Days of Code</p>
              
              <div className="space-y-2">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-white">
                    <svg className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Subtotal</span>
                <span>{course.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Tax</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span className="text-[#22C55E]">{course.price}</span>
              </div>
            </div>
            
            <div className="mt-6 bg-[#22C55E]/10 p-4 rounded-lg border border-[#22C55E]/20">
              <h4 className="font-semibold mb-2 text-[#22C55E]">What you'll get:</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lifetime access to course content</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to community support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular updates and new content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast messages */}
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
          />
        ))}
      </div>
    </div>
  );
} 