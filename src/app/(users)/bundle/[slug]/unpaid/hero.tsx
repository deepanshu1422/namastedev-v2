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

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Reviews } from "../checkout";
import { useSession } from "next-auth/react";

export default function Hero({
  bundleId,
  title,
  image,
  rating,
  amount,
  shortDescription,
  courseOffer,
  setYtOpen,
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setYtOpen: Dispatch<SetStateAction<boolean>>;
  bundleId: string;
  rating: number;
  title: string;
  image: string;
  amount: number;
  shortDescription: string;
  courseOffer: string[];
}) {
  const { data } = useSession();
  return (
    <>
      <div className={`w-full grid bg-zinc-950/60 shadow`}>
        <div className="tab:px-20 tab:pt-14 tab:pb-3 max-tab:pt-[1rem] max-tab:pb-5 m-auto max-w-[80rem] flex flex-auto max-tab:flex-col w-full justify-between text-white gap-3 sm:gap-7 h-full">
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
                className="bg-prime/20 max-tab:max-h-60 object-cover"
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

              <div className="flex items-center gap-3 max-tab:text-xs">
                <section className="flex gap-1 items-center">
                  <span className="text-lime-500/70">{rating}</span>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="fill-lime-500/60 stroke-lime-500/60 h-3 tab:h-4 w-3 tab:w-4"
                    />
                  ))}
                </section>
                <Reviews>
                  <button className="text-prime/90 underline hover:text-prime">
                    (12,875 review)
                  </button>
                </Reviews>
                21,380+ Students
              </div>

              {/* <div className="text-white/70 max-tab:text-sm">
                Author:{" "}
                <span className="text-white font-semibold px-1 underline">
                  Aryan Singh
                </span>
              </div> */}

              {/* <div className="text-sm text-white/40">Updated 4 months ago</div> */}

              <div className="tab:hidden flex flex-col gap-4">
                {/* @ts-ignore */}
                {data?.user?.bundleId?.includes(bundleId) ? (
                  <Link
                    href={"/dashboard"}
                    className="flex flex-col gap-2 relative"
                  >
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
                    <Button
                      size={"lg"}
                      variant={"outline"}
                      className="relative flex items-center font-semibold gap-1 transition-all px-4 py-3 rounded-md text-white text-lg"
                    >
                      Watch Now
                    </Button>
                  </Link>
                ) : (
                  <>
                    <span className="text-white text-2xl font-bold flex gap-2 items-end pt-1">
                      ₹{amount}
                      <span className="text-muted-foreground/70 italic line-through">
                        ₹{((amount * 100) / 15).toFixed(0)}
                      </span>
                      <span>85% off</span>
                    </span>

                    <div className="flex flex-col gap-2 py-1">
                      <Button
                        onClick={() => setOpen(true)}
                        size={"lg"}
                        className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </>
                )}

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
