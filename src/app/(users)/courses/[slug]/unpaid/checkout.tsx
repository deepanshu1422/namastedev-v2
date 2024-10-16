"use client";

import { Button } from "@/components/ui/button";
import { sendEvent } from "@/services/fbpixel";
import { sha256 } from "js-sha256";
import { Check, Play } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

export default function Checkout({
  courseId,
  image,
  price,
  courseOffer,
  setOpen,
  setYtOpen,
  addToCart,
}: {
  addToCart: () => void;
  courseId: string;
  checkout: string;
  image: string;
  price: {
    amount: number;
    percentage: number;
    bigAmount: number;
  };
  courseOffer: string[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  setYtOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { data } = useSession();
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getEndTime = () => {
      let endTime = localStorage.getItem('offerEndTime');
      if (!endTime) {
        // Generate a random duration between 0 and 2.5 hours (in milliseconds)
        const randomDuration = Math.floor(Math.random() * 2.5 * 60 * 60 * 1000);
        endTime = (Date.now() + randomDuration).toString();
        localStorage.setItem('offerEndTime', endTime);
      }
      return parseInt(endTime);
    };

    const calculateTimeLeft = () => {
      const difference = getEndTime() - Date.now();
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return { hours, minutes, seconds };
      }
      return { hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-tab:hidden w-[500px] h-fit sticky -translate-y-[330px] top-[28rem]">
      <div className="max-w-sm bg-gradient-to-b from-head to-second/20 flex flex-col gap-4 relative max-tab:mx-auto ml-auto shadow-lg backdrop-blur-sm shadow-black/40 overflow-hidden p-0.5">
        <div
          onClick={() => setYtOpen(true)}
          className="group relative cursor-pointer hover:opacity-90 transition-opacity duration-300"
        >
          <Image
            alt="30DayCoding New Challenge"
            src={image}
            height={800}
            width={1200}
            className="bg-prime/20 shadow-lg shadow-black/30"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-active:-translate-y-[58%] group-hover:-translate-y-2/3 transition-transform">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
              <Play className="w-8 h-8 stroke-[3] fill-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 py-5">
          <span className="relative w-fit text-white sm:text-2xl font-bold flex gap-2 items-start">
            ₹{price.amount}
            <span className="text-muted-foreground/70 italic line-through">
              ₹{price.bigAmount}
            </span>
            {/* <Image className="absolute -top-14 -right-16" src={"/75off.png"} alt="30DC 70% off" height={100} width={100} /> */}
            <span>({price.percentage}% off)</span>
          </span>


          <div className="flex flex-col gap-2">
            <Button
              onClick={() => {
                setOpen(true);
                sendEvent("Initiate Checkout", {
                  amount: price.amount,
                  content_ids: [courseId],
                  content_type: "course",
                  em: sha256(data?.user?.email ?? ""),
                  // @ts-ignore
                  ph: sha256(data?.user?.phone ?? ""),
                  fn: sha256(data?.user?.name?.split(" ")[0] ?? ""),
                });
                addToCart();
              }}
              size={"lg"}
              className="flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg"
            >
              Buy Now
            </Button>
            
          <div className="text-white text-center font-bold bg-gradient-to-r from-prime/30 to-second/30 rounded-lg p-3 shadow-inner">
            <p className="text-sm uppercase tracking-wider mb-2">Offer ends in:</p>
            <div className="flex justify-center items-center">
              {[
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map(({ value, label }, index) => (
                <div key={label} className="flex items-center">
                  <span className="text-3xl font-mono bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-white/70 ml-1">{label.charAt(0)}</span>
                  {index < 2 && <span className="text-2xl mx-2">:</span>}
                </div>
              ))}
            </div>
          </div>

            {/* <Link href={"/bundle/complete-package-all-course-bundle"} className="relative">
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
                className="flex gap-2 text-white text-sm items-center"
              >
                <Check className="sm:w-6 sm:h-6 h-5 w-5 stroke-lime-600" />
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
