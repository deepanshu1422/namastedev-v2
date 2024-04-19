"use client";

import Image from "next/image";
import Reveal from "../framer/reveal";
import Link from "next/link";

export default function Latest() {
  return (
    <div className="m-auto flex flex-col items-start justify-between tab:px-[5.5rem] max-tab:px-11 max-phone:px-6 pt-14 pb-5 gap-10 max-w-[75rem]">
      <div className="w-full flex justify-between gap-5 shrink">
        <Reveal>
          <span className="max-md:text-2xl max-lg:text-3xl text-4xl max-md:font-semibold font-bold border-l-[6px] max-md:border-l-4 pl-1 border-prime">
            Latest Feed
          </span>
        </Reveal>
        <Reveal>
          <button className="max-sm:hidden text-prime/70 font-semibold text-sm px-2 py-1 rounded-md bg-second/20 uppercase hover:scale-105 transition-all">
            See More
          </button>
        </Reveal>
      </div>
      <Reveal width="100%">
        <div className="w-full flex max-lg:flex-col gap-3">
          <Link
            href={
              "/blog/7-essential-javascript-interview-questions-for-freshers"
            }
            className="relative group lg:min-h-96 lg:w-7/12 rounded-md overflow-hidden"
          >
            <Image
              alt="a laptop"
              fill
              src={
                "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg"
              }
              className="object-cover object-center group-hover:scale-110 transition-all duration-200"
            />
            <div className="relative h-full w-full bg-gradient-to-t from-second/60 from-30% to-transparent flex flex-col gap-3 justify-end px-8 py-6">
              <section className="grid">
                <Reveal>
                  <span className="text-2xl font-semibold max-w-sm">
                    7 Essential Technical Interview Questions on JavaScript for
                    Freshers
                  </span>
                </Reveal>
                <Reveal>
                  <span className="text-sm font-semibold uppercase text-muted-foreground">
                    28 December 2023
                  </span>
                </Reveal>
              </section>
              <Reveal>
                <p className="text-xs max-w-[70%] line-clamp-3">
                  Ace your next JavaScript technical interview with these 7
                  essential questions covering core concepts like hoisting,
                  closures, &apos;this&apos; keyword, and more. Perfect prep for
                  freshers and early-career developers.
                </p>
              </Reveal>
              <Reveal>
                <button className="font-jakarta flex items-center font-semibold gap-1 w-fit hover:bg-prime/60 bg-prime/40 transition-all px-4 text-sm py-2 rounded">
                  Read More
                </button>
              </Reveal>
            </div>
          </Link>

          <div className="lg:min-h-96 lg:w-5/12 flex max-md:flex-col lg:flex-col gap-2 lg:gap-3">
            <Link
              href={"/blog/javascript-private-variables"}
              className="group lg:h-1/2 min-h-32 w-full rounded-md bg-background/20 flex overflow-hidden"
            >
              <div className="relative overflow-hidden w-2/5 object-cover max-phone:hidden shrink-0 bg-slate-200">
                <Image
                  src={
                    "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg"
                  }
                  alt=""
                  fill
                  className="group-hover:scale-110 transition-all duration-200 object-cover object-center"
                />
              </div>
              <div className="px-3 py-2 flex flex-col gap-1">
                <Reveal>
                  <span className="text-white/80 font-semibold line-clamp-2">
                    JavaScript Private Variables: Protecting Your Data
                  </span>
                </Reveal>
                <Reveal>
                  <span className="uppercase text-muted-foreground text-xs font-semibold">
                    9 November 2023
                  </span>
                </Reveal>
                <Reveal>
                  <p className="line-clamp-2 lg:line-clamp-3 text-sm my-2">
                    In JavaScript, variables are traditionally public and
                    accessible from anywhere in the code, leading to potential
                    conflicts and unintended modifications.
                  </p>
                </Reveal>

                <Reveal>
                  <button className="text-prime text-sm w-fit mt-auto mb-0 pb-2">
                    Read More
                  </button>
                </Reveal>
              </div>
            </Link>

            <Link
              href={"/blog/javascript-closures-in-loops"}
              className="group lg:h-1/2 min-h-32 w-full rounded-md bg-background/20 flex overflow-hidden"
            >
              <div className="relative overflow-hidden w-2/5 object-cover max-phone:hidden shrink-0 bg-slate-200">
                <Image
                  src={
                    "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg"
                  }
                  alt=""
                  fill
                  className="group-hover:scale-110 transition-all duration-200 object-cover object-center"
                />
              </div>
              <div className="px-3 py-2 flex flex-col gap-1">
                <Reveal>
                  <span className="text-white/80 font-semibold line-clamp-2">
                    JavaScript Closures in Loops: Avoiding Common Pitfalls
                  </span>
                </Reveal>
                <Reveal>
                  <span className="uppercase text-muted-foreground text-xs font-semibold">
                    9 November 2023
                  </span>
                </Reveal>
                <Reveal>
                  <p className="line-clamp-2 lg:line-clamp-3 text-sm my-2">
                    Using closures within loops in JavaScript can be tricky and
                    lead to unexpected behavior if not handled correctly. This
                    blog post explores the common pitfalls developers face when
                    working with closures in loops and provides practical
                    solutions to avoid these issues.
                  </p>
                </Reveal>

                <Reveal>
                  <button className="text-prime text-sm w-fit mt-auto mb-0 pb-2">
                    Read More
                  </button>
                </Reveal>
              </div>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
