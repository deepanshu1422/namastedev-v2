"use client";

import { Button } from "@/components/ui/button";
import { Check, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function Checkout({
  checkout,
  image,
  amount,
  courseOffer,
  setOpen,
  setYtOpen,
}: {
  checkout: string;
  image: string;
  amount: number;
  courseOffer: string[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  setYtOpen: Dispatch<SetStateAction<boolean>>;
}) {
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
        <div className="flex flex-col gap-3 px-4 pb-5">
          <span className="uppercase text-white text-3xl sm:text-4xl font-bold flex gap-2 items-start">
            ₹{amount}
            <span className="text-muted-foreground/70 italic text-2xl line-through">
              ₹{amount * 4}
            </span>
            <span className="text-sm">(75% off)</span>
          </span>

          <div className="flex flex-col gap-2">
            <Button
              onClick={() => setOpen(true)}
              size={"lg"}
              className="flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg"
            >
              Buy Now
            </Button>

            <Link href={"/mentorship"}>
              <Button
                variant={"outline"}
                className={`font-semibold text-foreground/80 hover:text-foreground w-full p-6 gap-1`}
              >
                Join Mentorship
              </Button>
            </Link>
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
