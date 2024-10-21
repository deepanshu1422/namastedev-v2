"use client";

import Link from "next/link";
import { TabMenu } from "../tabs";
import { Key, MapIcon } from "lucide-react";
import AnimatedButton from "../animated-button";
import { Button } from "../ui/button";

export default function Course({
  course,
}: {
  course: {
    title: string;
    topics: string[];
  }[];
}) {
  return (
    <div className="grid place-items-center gap-4 max-w-[90rem] m-auto lg:pt-12 py-8">
      <span className="flex items-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Complete Syllabus
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>

      <div className="flex max-xl:flex-col gap-3 max-lg:items-center max-lg:gap-10 min-h-96 px-6 lg:px-10">
        <TabMenu course={course} />

        {/* <div className="max-lg:p-8"> */}
        <div className="xl:ml-[1.5rem] max-xl:m-auto flex flex-col items-start lg:p-[2rem_1.5rem_2.5rem] p-4 shadow-[0_2px_40px_0_rgba(0,0,0,.2)] gap-8 rounded-xl bg-second h-fit max-lg:scale-90 xl:max-w-[450px]">
          <section className="flex flex-col gap-2">
            <span className="bg-gradient-to-t from-bg to-second/80 rounded-lg p-4 w-fit">
              <MapIcon className="h-10 w-10 stroke-prime" />
            </span>
            <span className="text-lg font-semibold">
              Explore our detailed curriculum!
            </span>
            <p className="text-sm">
              Understand the in depth concepts and tools you will learn
              throughout the program.
            </p>
          </section>
          <span className="max-lg:mx-auto">

            <Link href={"https://rzp.io/l/psRXoa6"} target={"_blank"}>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
                <Button
                  variant={"outline"}
                  className={`font-semibold text-foreground/80 hover:text-foreground relative w-full text-base p-6`}
                >
                  <section className="flex gap-2 items-center break-all text-wrap">
                    <span className="tracking-wide line-clamp-1">
                      Get Access & Early Bird Discount
                    </span>
                    <Key className="h-5 w-5" />
                  </section>
                </Button>
              </div>
            </Link>
          </span>
        </div>
      </div>
      {/* </div> */}

      {/* <Link
        className="text-sm"
        href={"/courses"}
      >
        <button
          className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
        >
          Check More Courses
        </button>
      </Link> */}
    </div >
  );
}
