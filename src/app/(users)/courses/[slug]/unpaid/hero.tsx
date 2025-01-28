"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Check,
  Star,
  Slash,
  ChevronLeft,
  Play,
  StarHalf,
} from "lucide-react";
import Image from "next/image";

import { useState, useEffect } from "react";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Reviews } from "../checkout";
import { sendEvent } from "@/services/fbpixel";
import { sha256 } from "js-sha256";
import { useSession } from "next-auth/react";
import { BASE_URL } from "@/util/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { getPaymentUrl } from "@/lib/payment";

export default function Hero({
  title,
  courseId,
  image,
  slug,
  price,
  rating,
  shortDescription,
  courseOffer,
  domain,
}: {
  slug: string;
  title: string;
  courseId: string;
  image: string;
  price: {
    amount: number;
    percentage: number;
    bigAmount: number;
  };
  rating: number;
  shortDescription: string;
  courseOffer: string[];
  domain: string;
}) {
  const { data } = useSession();
  const router = useRouter();
  const utmParams = useSearchParams();
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

  const handleEnrollClick = () => {
    const paymentUrl = getPaymentUrl({
      title,
      amount: price.amount,
      itemId: courseId,
      itemType: "course",
      domain,
      utm_source: utmParams.get("utm_source"),
      utm_medium: utmParams.get("utm_medium"),
      utm_campaign: utmParams.get("utm_campaign"),
      utm_content: utmParams.get("utm_content"),
      utm_term: utmParams.get("utm_term"),
    });
    router.push(paymentUrl);
  };

  return (
    <>
      <div className={`w-full grid bg-zinc-950/60 shadow`}>
        <div className="tab:px-20 tab:pt-14 tab:pb-3 max-tab:pt-[1rem] max-tab:pb-5 m-auto max-w-xl tab:max-w-[80rem] flex flex-auto max-tab:flex-col w-full justify-between text-white gap-3 sm:gap-7 h-full">
          <section className="grid gap-5 h-fit tab:max-w-[60%]">
            <Link
              className="px-6 flex gap-1 items-center text-sm text-muted-foreground hover:text-foreground w-fit"
              href={"/courses"}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Courses</span>
            </Link>

            <div
              onClick={() => setYtOpen(true)}
              className="tab:hidden flex flex-col gap-4 relative max-tab:mx-auto"
            >
              <Image
                alt="30DayCoding New Challenge"
                src={image}
                height={800}
                width={1200}
                className="bg-prime/20 aspect-[6/4]"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-hover:-translate-y-2/3 transition-transform">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
                  <Play className="w-8 h-8 stroke-[3] fill-white" />
                </div>
              </div>
            </div>

            <div className="flex flex-col px-6 gap-3">
              <h1
                className={`text-white tab:max-w-4xl font-jakarta text-2xl tab:text-3xl font-bold tab:leading-10 text-pretty tab:line-clamp-4`}
              >
                {title}
                {/* Certified{" "}
                <span className="bg-prime/60">
                  Full Stack Web Development
                </span>{" "}
                Job ready Course with 50+ projects */}
              </h1>

              <p className="max-tab:text-sm text-muted-foreground line-clamp-3">
                {shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3 max-tab:text-xs">
                <section className="flex gap-1 items-center">
                  <span className="text-lime-500/70">{rating}</span>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="fill-lime-500/60 stroke-lime-500/60 h-3 tab:h-4 w-3 tab:w-4"
                    />
                  ))}
                </section>
                {/* <span className="text-white/70 font-semibold text-sm">
                (48 reviews)
              </span> */}
                <Reviews>
                  <button className="text-prime/90 underline hover:text-prime">
                    (12,875 review)
                  </button>
                </Reviews>
                21,380+ Students
                <div className="text-white/70 space-x-1 max-tab:text-xs">
                  <span className="underline">Language:</span>
                  <span className="font-semibold no-underline bg-prime/20 border-prime/60 border-2 border-dashed p-1 px-2 rounded-md w-fit text-sm">
                    Hindi
                  </span>
                </div>
              </div>

              {/* <div className="text-sm text-white/40">Updated 4 months ago</div> */}
              <div className="tab:hidden flex flex-col gap-4">
                <div className="text-white text-center font-bold bg-gradient-to-r from-prime/30 to-second/30 rounded-lg p-3 shadow-inner">
                  <p className="text-sm uppercase tracking-wider mb-2">
                    Offer ends in:
                  </p>
                  <div className="flex justify-center items-center">
                    {[
                      { value: timeLeft.hours, label: "Hours" },
                      { value: timeLeft.minutes, label: "Minutes" },
                      { value: timeLeft.seconds, label: "Seconds" },
                    ].map(({ value, label }, index) => (
                      <div key={label} className="flex items-center">
                        <span className="text-3xl font-mono bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">
                          {String(value).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-white/70 ml-1">
                          {label.charAt(0)}
                        </span>
                        {index < 2 && <span className="text-2xl mx-2">:</span>}
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-white text-2xl font-bold flex gap-2 items-end pt-1">
                  ₹{price.amount}
                  <span className="text-muted-foreground/70 italic line-through">
                    ₹{price.bigAmount}
                  </span>
                  <span>{price.percentage}% off</span>
                </span>

                <div className="flex flex-col gap-2 py-1">
                  <Button
                    onClick={handleEnrollClick}
                    size={"lg"}
                    className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg"
                  >
                    Buy Now
                  </Button>

                  {/* <Link
                    href={"/bundle/complete-package-all-course-bundle"}
                    className="relative"
                  >
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
                    <Button
                      variant={"outline"}
                      className={`relative font-semibold text-foreground/80 hover:text-foreground w-full p-6 gap-1`}
                    >
                      Buy all courses @ ₹1200/-
                    </Button>
                  </Link> */}
                </div>

                <div className="flex flex-col gap-1">
                  <p className="tab:max-w-2xl max-tab:leading-6 line-clamp-3 text-white/60 italic font-semibold">
                    This course offers:
                  </p>
                  {courseOffer.map((e, i) => (
                    <span
                      key={i}
                      className="flex gap-2 max-sm:text-sm items-center"
                    >
                      <Check className="sm:w-6 sm:h-6 h-5 w-5 stroke-lime-600" />
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="bg-footer/50 shadow py-2">
        <div className=" relative flex space-x-16 [animation:loop-scroll_8s_linear_infinite] tab:animate-loop-scroll">
          {companyImg.map((e, i) => (
            <NewImage key={i} src={e} />
          ))}
        </div>
      </div> */}
    </>
  );
}
