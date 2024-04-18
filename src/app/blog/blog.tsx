"use client";

import Reveal from "@/components/framer/reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="m-auto flex flex-col items-start justify-between tab:px-[5.5rem] max-tab:px-11 max-phone:px-6 py-5 gap-10 max-w-[75rem]">
      <Reveal width="100%">
        <div className="w-full flex max-md:flex-col-reverse gap-3 bg-second/40 rounded-md">
          <div className="lg:min-h-96 lg:w-6/12 h-full w-full flex flex-col gap-3 max-md:px-6 p-12 max-md:pt-0">
            <Reveal>
              <span className="text-2xl lg:text-3xl font-semibold max-w-2xl">
                Mastering the JavaScript Interview: Tips and Strategies for
                Success
              </span>
            </Reveal>
            <Reveal>
              <p className="text-xs md:max-w-[70%] leading-6 line-clamp-3">
                Ace your next JavaScript interview with these essential tips and
                strategies. Learn how to prepare, showcase your skills, and
                impress potential employers as a fresher in the field.
              </p>
            </Reveal>
            <Reveal>
              <section className="flex gap-3 flex-wrap">
                <button className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 duration-200 border-prime bg-second box-border text-[0.65rem]">
                  Live Project
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 duration-200 border-prime bg-second box-border text-[0.65rem]">
                  UI/UX
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 duration-200 border-prime bg-second box-border text-[0.65rem]">
                  12 Min Read
                </button>
              </section>
            </Reveal>
            <Reveal>
              <Link
                href={
                  "/blog/mastering-the-javascript-interview-tips-and-strategies-for-success"
                }
                className="flex items-center gap-2 text-sm py-2 text-prime w-fit"
              >
                Read blog <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Link
            href={
              "/blog/mastering-the-javascript-interview-tips-and-strategies-for-success"
            }
            className="lg:min-h-[450px] min-h-20 min-w-60 lg:w-5/12 flex max-md:flex-col lg:flex-col gap-2 lg:gap-3 px-6 p-12 max-md:pb-5 rounded-md overflow-hidden"
          >
            <Image
              src={
                "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg"
              }
              alt="laptop with typing hands"
              width={1088}
              height={832}
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
