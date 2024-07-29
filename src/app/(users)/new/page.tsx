import React from "react";
import Details from "./details";
import Checkout from "./checkout";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import CourseList from "./courses";
import AnimatedButton from "@/components/animated-button";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <section className="relative grid lg:grid-cols-[260px_1fr]">
        <div className="hidden lg:flex flex-col gap-6 p-7 sticky top-0 h-fit">
          <Link
            href={"/courses"}
            className="flex text-white/70 items-center gap-1 w-fit hover:text-white transition-all hover:underline -translate-x-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="tracking-wide text-xs">Other Courses</span>
          </Link>

          <div className="flex flex-col gapp-1">
            <span className="text-[12px] text-white/70">Course</span>
            <span className="text-sm font-semibold">
              Blender 3D Fundamentals
            </span>
          </div>

          <CourseList />
        </div>

        <div className="bg-bg lg:rounded-s-3xl min-h-dvh py-6 max-tab:pt-[1rem] max-tab:pb-[2.5rem] px-4 md:px-6 m-auto w-full flex">
          <section className="flex max-md:flex-col gap-6 p-1 max-w-6xl w-full mx-auto">
            <Details />
            <Checkout />
          </section>
        </div>
      </section>
      <Floating />
    </>
  );
}

function Floating() {
  let course = {
    price: 1000,
    ogPrice: 4000,
    discount: 75,
  };

  return (
    <div className="md:hidden fixed bottom-0 z-20 bg-background/40 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="flex justify-between items-center gap-2 p-4 lg:max-w-[80rem] mx-auto">
        <section className="flex flex-col gap-1">
          <span className={`font-jakarta text-lg`}>
            ₹<span className="text-lg">{course.price} for lifetime</span>
          </span>

          <div className="flex gap-2 text-sm font-semibold">
            <span className="text-muted-foreground ml-1 line-through italic">
              ₹{course.ogPrice}
            </span>
            <span
              className={`font-jakarta text-secondary-foreground rounded py-0`}
            >
              {course.discount}% off
            </span>
          </div>
        </section>
        <Link href={"#"}>
          <div className="group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
            <Button
              variant={"outline"}
              className={`font-semibold text-foreground/80 hover:text-foreground relative w-full p-3 text-sm`}
            >
              Buy Now
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
