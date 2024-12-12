"use client";
import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const dynamic = "force-static";

export default function Motivation() {
  const motivationalSteps = [
    {
      title: "Stop Wasting Your Time 🕰️",
      description: "Learn how to make the most of your precious time.",
      icon: "⏳",
      details: [
        "Identify time-wasting activities",
        "Implement effective time management strategies",
        "Focus on productive tasks that align with your goals",
      ],
      videoUrl: "https://www.youtube.com/embed/nvY7OK1YSrs",
    },
    {
      title: "12 Ghante mehnat karni padegi 💪",
      description: "Dedicate yourself to 12 hours of concentrated effort.",
      icon: "🎯",
      details: [
        "Eliminate distractions and create a productive environment",
        "Break down your work into manageable chunks",
        "Stay motivated through small wins and progress tracking",
      ],
      videoUrl: "https://www.youtube.com/embed/FfiRIMG0Z64",
    },
    {
      title: "Minimize Phone Distractions 📵",
      description: "Reduce phone usage to boost your success.",
      icon: "🚫",
      details: [
        "Set boundaries for phone usage",
        "Use productivity apps to limit distractions",
        "Find alternative activities to replace mindless scrolling",
      ],
      videoUrl: "https://www.youtube.com/embed/c6SsnbQ1rjA",
    },
    {
      title: "Overcome Self-Doubt 🌟",
      description: "Believe in yourself and your potential for greatness.",
      icon: "🙏",
      details: [
        "Recognize and challenge negative self-talk",
        "Celebrate your achievements, no matter how small",
        "Surround yourself with supportive people",
      ],
      videoUrl: "https://www.youtube.com/embed/3yl2qCJmK3g",
    },
    {
      title: "Quit Social Media for Success 🚀",
      description:
        "Discover how leaving social media can propel your success in 2024.",
      icon: "🔒",
      details: [
        "Reclaim your time and focus",
        "Reduce comparison and FOMO",
        "Invest in real-life relationships and personal growth",
      ],
      videoUrl: "https://www.youtube.com/embed/rELb_gwyXls",
    },
  ];

  return (
    <>
      <div className="w-full pt-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Feeling low? Watch the{" "}
            <span className="decoration-red-500 underline decoration-4">
              5 video series
            </span>{" "}
            to get motivated
          </h2>
          {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Embark on a transformative journey that combines comprehensive
            learning, personalized guidance, and community support to accelerate
            your career growth.
          </p> */}
          <div className="relative">
            {motivationalSteps.map((step, index) => (
              <div key={index} className="mb-12 flex items-start relative">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-head to-second/70 text-white flex items-center justify-center text-2xl font-bold z-10 shadow-md shadow-black">
                  {index + 1}
                </div>
                <div className="ml-4 sm:ml-8 flex-grow sm:border sm:border-green-800 rounded-xl sm:p-6 sm:bg-second/70 sm:shadow-md sm:hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold mb-3 flex items-center break-words text-white">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-300 mb-3">
                      {step.description}
                    </p>
                    <p className="text-sm mb-5 text-gray-400">{step.details}</p>

                    <div className="mt-12 mb-12 w-full aspect-video">
                      <iframe
                        className="w-full h-full rounded-xl shadow-lg"
                        src={step.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <ul className="space-y-2">
                      {step.details.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-white text-sm"
                        >
                          <span className="mr-2">
                            <Check className="text-prime" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < motivationalSteps.length - 1 && (
                  <div className="absolute left-7 top-14 w-0.5 bg-gradient-to-b from-head to-second/70 h-full transform -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
        <Floating />
        <a
          href="https://30dayscoding.com/bundle/complete-package-all-course-bundle"
          target="_blank"
          rel="noopener noreferrer"
          className="max-md:hidden bg-head my-5 rounded-full px-4 text-center py-2 max-w-3xl mx-auto w-full text-2xl sm:text-3xl font-extrabold flex items-center gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase"
        >
          <CreditCard className="h-10 w-10" />
          Master top coding skills (90% off)
        </a>
      </div>
    </>
  );
}

function Floating({}) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const getEndTime = () => {
      let endTime = localStorage.getItem("offerEndTime");
      if (!endTime) {
        // Set a fixed duration of 2.5 hours (in milliseconds)
        const fixedDuration = 2.5 * 60 * 60 * 1000;
        endTime = (Date.now() + fixedDuration).toString();
        localStorage.setItem("offerEndTime", endTime);
      }
      return parseInt(endTime);
    };

    const calculateTimeLeft = () => {
      const difference = getEndTime() - Date.now();
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return { hours, minutes, seconds };
      }
      return null; // Return null if time has expired
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        // If time has expired, reset the offer
        localStorage.removeItem("offerEndTime");
        setTimeLeft({ hours: 2, minutes: 30, seconds: 0 });
      }
    }, 1000);

    setTimeLeft(calculateTimeLeft() || { hours: 2, minutes: 30, seconds: 0 });

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:hidden fixed bottom-0 z-20 bg-background/40 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="flex flex-col gap-2 p-2">
        <div className="flex-1 group relative">
          <Link href={"/bundle/complete-package-all-course-bundle"}>
            <Button
              variant={"outline"}
              className={`flex bg-head font-semibold text-foreground/80 hover:text-foreground relative w-full p-3 py-6 text-sm gap-1`}
            >
              <div className="absolute -top-2 right-1 flex justify-center items-center rounded-lg bg-gradient-to-r from-lime-600/80 to-second px-2 shadow-inner">
                {/* <span className="mr-2">Offer Ends In</span> */}
                {[
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" },
                ].map(({ value, label }, index) => (
                  <div key={label} className="flex items-center">
                    <span className="font-mono bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">
                      {String(value).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/70">
                      {label.charAt(0)}
                    </span>
                    {index < 2 && <span className="mx-2">:</span>}
                  </div>
                ))}
              </div>
              <CreditCard className="h-5 w-5" />
              Master top coding skills (90% off)
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
