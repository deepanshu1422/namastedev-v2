"use client";

import { Button } from "@/components/ui/button";
import { sendEvent } from "@/services/fbpixel";
import { sha256 } from "js-sha256";
import { Check, Play } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

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
