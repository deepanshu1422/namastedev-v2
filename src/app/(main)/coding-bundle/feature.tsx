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

  return (
    <div
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-8 m-4"
      id="feature"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 my-8 rounded-2xl border border-prime bg-black m-4">
        <h2 className="text-4xl sm:text-4xl font-bold text-center mb-8 text-white">
          GET AT <span className="text-prime">70%</span> DISCOUNT
        </h2>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 ">
          {[
            { value: timeLeft.hours, label: "HOURS" },
            { value: timeLeft.minutes, label: "MINS" },
            { value: timeLeft.seconds, label: "SECS" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#1a0505] rounded-lg p-2 sm:p-4 w-20 sm:w-24 text-center border border-prime"
            >
              <div className="text-2xl sm:text-4xl font-bold text-prime">
                {value}
              </div>
              <div className="text-white text-xs sm:text-sm">{label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 my-3 px-2 sm:px-4  text-white">
          {[
            {
              text: "Complete Coding Foundation to Mastery",
              subtext: " ($199 value)",
            },
            {
              text: "Modern React & Next.js Development",
              subtext: " ($299 value)",
            },
            {
              text: "Backend Development with Node.js",
              subtext: " ($249 value)",
            },
            {
              text: "Advanced Tech Stack (Python, SQL, Web3)",
              subtext: " ($299 value)",
            },
            {
              text: "Data Structures & Algorithms",
              subtext: " ($249 value)",
            },
            {
              text: "Real-world Project Portfolio",
              subtext: " ($249 value)",
            },
            {
              text: "Technical Interview Preparation",
              subtext: " ($199 value)",
            },
            { text: "Career Transition Guide", subtext: " ($149 value)" },
            { text: "And much more...", subtext: " ($499 value)" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-prime mt-1 flex-shrink-0" />
              <div>
                {typeof item === "string" ? (
                  <span>{item}</span>
                ) : (
                  <span>
                    {item.text}
                    <span className="text-prime line-through">
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
          className="w-full max-w-2xl mx-auto block text-center py-3 sm:py-4 px-4 sm:px-6 rounded-full bg-gradient-to-r from-head to-prime text-white text-lg sm:text-xl font-bold hover:opacity-90 transition-opacity"
        >
          Secure Your Seat Rs. 1499{" "}
          <span className="line-through">Rs. 8999</span>
        </button>

        {/* Fast Action Bonuses Section */}
        <div className="mt-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            🔥 CRAZY BONUSES 🔥
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
