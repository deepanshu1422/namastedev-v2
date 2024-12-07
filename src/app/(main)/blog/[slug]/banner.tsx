"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Check, Plus } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Banner({slug}:{slug: string}) {
  const [state, setState] = useState(false);
  let flag = true;

  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollHeight = 2000;
      if (window.scrollY > scrollHeight && flag) {
        setState(true);
        flag = false;
      }
    });

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

  const courses = [
    "Full Stack Mastery Course",
    "DSA Mastery Course",
    "Blockchain Mastery Course",
    "Data Analytics Course",
    "AI Mastery Course",
  ];

  return (
    <Dialog open={state} onOpenChange={setState}>
      <DialogContent className="gap-1 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Exclusive Bundle Offer</DialogTitle>
          <DialogDescription>
            Get All Courses at 95% off. Lifetime access and certificate for each
            course.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-1 py-4">
          <Link
            target="_blank"
            href={`https://30dayscoding.com/bundle/complete-package-all-course-bundle?utm_source=${"https://30dayscoding.com/blog/" + slug}&utm_medium=blog&utm_campaign=popup`}
            className="bg-gradient-to-t to-head/80 from-second/80 p-3 rounded-md"
          >
            <div className="flex justify-between mb-2">
              <h3 className="text-lg line-clamp-2 font-semibold">
                17 Course bundle
              </h3>
              <span className="uppercase font-bold bg-yellow-500 text-black text-xs px-3 py-1 rounded-full h-fit break-all line-clamp-1">
                Best Value
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1.5 text-xs pb-3">
                {courses.map((e, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 stroke-primary" />
                    {e}
                  </span>
                ))}
                <span className="flex items-center gap-2">
                  <Plus className="w-4 h-4 stroke-primary" />
                  12 More Courses
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-3">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">₹999</span>
                <span className="text-xl font-medium text-muted-foreground line-through italic">
                  ₹25000
                </span>
              </div>

              <Badge className="py-1 px-2 rounded h-fit bg-red-500 hover:bg-red-700 text-white">
                95% off
              </Badge>
            </div>
          </Link>

          <Link
            href={`https://30dayscoding.com/bundle/complete-package-all-course-bundle?utm_source=${
              "https://30dayscoding.com/blog/" + slug
            }&utm_medium=blog&utm_campaign=popup`}
            className="relative overflow-hidden group"
          >
            <Button className="bg-second/80 hover:bg-second text-white relative w-full rounded-md">
              Discount Ends in <span className="mx-1"></span>{" "}
              {[
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map(({ value, label }, index) => (
                <div key={label} className="flex items-center">
                  <span>{String(value).padStart(2, "0")}</span>
                  <span className="text-sm text-white/70">
                    {label.charAt(0)}
                  </span>
                  {index < 2 && <span className="mx-1">:</span>}
                </div>
              ))}
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
