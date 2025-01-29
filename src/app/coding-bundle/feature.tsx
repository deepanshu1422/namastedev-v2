import VideoSlider from "@/app/(guide)/testimonials/video-slider";
import Faqs from "@/components/mentorship-comp/faq";
import { Check } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Feature({
  handleAddToCart,
  faqCollection
}: {
  handleAddToCart: () => void;
  faqCollection:{
    items:{
      question: string;
      answer: string;
    }[]
  }
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const successStories = [
    { name: "Aditya", linkedIn: "https://www.linkedin.com/in/aditya-maheshwari-05/", jobOffer: "PayPal", salary: "35+ LPA" },
    { name: "Nikhil", linkedIn: "https://www.linkedin.com/in/nikhil-seth9", jobOffer: "Air Canada", salary: "35+ LPA" },
    { name: "Rojal", linkedIn: "https://www.linkedin.com/in/rojal-sapkota-787130237/", jobOffer: "Google", salary: "30+ LPA" },
    { name: "Rishabh", linkedIn: "https://www.linkedin.com/in/rishabh5301", jobOffer: "Cashify", salary: "15+ LPA" },
    { name: "Roktim", linkedIn: "https://x.com/roktim___", jobOffer: "Luppa AI", salary: "15+ LPA" },
  ];
  
  return (
    <div
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-8 m-4 relative"
      id="feature"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 my-8 rounded-3xl border-2 border-prime bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-prime/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-head/10 rounded-full blur-3xl"></div>
        </div>

        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-12 text-white relative">
          GET AT <span className="text-prime animate-pulse">90%</span> DISCOUNT
          <div className="absolute -top-6 right-0 text-prime text-xl font-normal rotate-12">Limited Time!</div>
        </h2>

        <div className="flex justify-center gap-4 sm:gap-6 mb-12">
          {[
            { value: timeLeft.hours, label: "HOURS" },
            { value: timeLeft.minutes, label: "MINS" },
            { value: timeLeft.seconds, label: "SECS" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-gradient-to-br from-[#1a0505] to-black rounded-2xl p-4 sm:p-6 w-24 sm:w-32 text-center border-2 border-prime/50 hover:border-prime transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-prime to-head bg-clip-text text-transparent">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6 my-8 px-4 sm:px-6 text-white">
          {[
            {
              text: "Complete Coding Foundation to Mastery",
              subtext: " (₹16,499 value)",
            },
            {
              text: "Modern React & Next.js Development",
              subtext: " (₹24,799 value)",
            },
            {
              text: "Backend Development with Node.js",
              subtext: " (₹20,699 value)",
            },
            {
              text: "Advanced Tech Stack (Python, SQL, Web3)",
              subtext: " (₹24,799 value)",
            },
            {
              text: "Data Structures & Algorithms",
              subtext: " (₹20,699 value)",
            },
            {
              text: "Real-world Project Portfolio",
              subtext: " (₹20,699 value)",
            },
            {
              text: "Technical Interview Preparation",
              subtext: " (₹16,499 value)",
            },
            { text: "Career Transition Guide", subtext: " (₹12,399 value)" },
            { text: "And much more...", subtext: " (₹41,499 value)" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="rounded-full p-1 border border-prime/30 group-hover:border-prime transition-colors">
                <Check className="h-5 w-5 text-prime group-hover:scale-110 transition-transform" />
              </div>
              <div className="group-hover:translate-x-1 transition-transform">
                {typeof item === "string" ? (
                  <span>{item}</span>
                ) : (
                  <span className="text-lg">
                    {item.text}
                    <span className="text-prime/80 line-through ml-2 text-sm">
                      {item.subtext}
                    </span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full max-w-2xl mx-auto block text-center py-4 sm:py-5 px-6 sm:px-8 rounded-full bg-gradient-to-r from-head via-prime to-head bg-size-200 animate-gradient text-white text-xl sm:text-2xl font-bold hover:shadow-lg hover:shadow-prime/20 transform hover:-translate-y-1 transition-all duration-300"
        >
          Secure Your Seat Rs. 999{" "}
          <span className="line-through opacity-75 text-base">Rs. 9999</span>
        </button>

        <div className="mt-12 text-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-1 bg-prime/10 rounded-full border border-prime/30">
            <span className="text-prime text-sm">Limited Time Offer</span>
          </div>
          <h3 className="text-4xl font-bold text-white pt-10 my-6 animate-pulse">
            🔥 BONUSES WORTH ₹15,000 INCLUDED 🔥
          </h3>
          <p className="text-prime mb-4">Next 50 Students Get:</p>

          <div className="space-y-3 max-w-xl mx-auto text-white">
            {[
              "Premium notes access",
              "Interview Prep Guides",
              "Resume Templates",
              "Job Application Scripts",
              "LinkedIn Optimization Guide",
            ].map((bonus, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-prime flex-shrink-0" />
                <span>{bonus}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-prime pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              But Here&apos;s The Best Part:
            </h3>
            <p className="text-xl text-prime font-bold mb-4">
              Everything is LIFETIME ACCESS
            </p>
            <div className="space-y-2 text-white">
              <p>No monthly fees</p>
              <p>No renewals</p>
              <p>No hidden charges</p>
            </div>
            <p className="text-lg text-white mt-4">
              Just pure value that gets you hired.
            </p>
          </div>
        </div>
      </div>



      <VideoSlider />
      <Faqs faq={faqCollection.items} />
    </div>
  );
}
