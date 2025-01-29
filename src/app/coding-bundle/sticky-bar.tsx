"use client";

import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useEffect, useState } from "react";
import { addToCart } from "@/services/gaEvents";
import { sendEvent } from "@/services/fbpixel";
import { usePostHog } from "posthog-js/react";

export default function StickyBar({ 
  handleAddToCart,
  bundleTitle,
  bundleId,
  amount = 999,
  slug = ""
}: { 
  handleAddToCart: () => void;
  bundleTitle?: string;
  bundleId?: string;
  amount?: number;
  slug?: string;
}) {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 0 });
  const posthog = usePostHog();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const storedEndTime = localStorage.getItem("offerEndTime");
      if (!storedEndTime) {
        const endTime = new Date();
        endTime.setHours(endTime.getHours() + 2);
        endTime.setMinutes(endTime.getMinutes() + 30);
        localStorage.setItem("offerEndTime", endTime.toString());
      }

      const endTime = new Date(storedEndTime || "");
      const difference = endTime.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        localStorage.removeItem("offerEndTime");
        setTimeLeft({ hours: 2, minutes: 30, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = async () => {
    if (bundleId && bundleTitle) {
      posthog.capture("add_to_cart", {
        title: bundleTitle,
        itemId: bundleId,
        itemType: "bundle",
        value: amount
      });

      addToCart({
        title: bundleTitle,
        itemId: bundleId,
        itemType: "bundle",
        value: amount,
        slug
      });

      sendEvent("AddToCart", {
        content_ids: [bundleId],
        content_type: "bundle",
        value: amount,
        currency: "INR"
      });
    }

    handleAddToCart();
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-green-900/30">
      <div className="flex flex-col gap-2 p-3">
        <button
          onClick={handleClick}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-bold hover:shadow-lg hover:shadow-green-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <CreditCard className="h-5 w-5" />
          <span>Pay ₹{amount}</span>
          <span className="text-sm line-through opacity-75">₹9999</span>
        </button>
        
        <div className="flex justify-center items-center gap-2 text-xs text-green-400">
          {[
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map(({ value, label }, index) => (
            <div key={label} className="flex items-center">
              <span className="font-mono">
                {String(value).padStart(2, "0")}
              </span>
              <span className="ml-1 text-green-400/70">
                {label.charAt(0)}
              </span>
              {index < 2 && <span className="mx-1">:</span>}
            </div>
          ))}
          <span className="ml-2">left at this price!</span>
        </div>
      </div>
    </div>
  );
} 