"use client";

import Image from "next/image";
import Reveal from "../framer/reveal";
import Link from "next/link";

export default function Latest() {
  return (
    <div className="m-auto flex flex-col items-start justify-between tab:px-[5.5rem] max-tab:px-11 max-phone:px-6 py-14 gap-10 max-w-[75rem]">
      <div className="w-full flex justify-between gap-5 shrink">
        <Reveal>
          <span className="max-md:text-2xl max-lg:text-3xl text-4xl max-md:font-semibold font-bold border-l-[6px] max-md:border-l-4 pl-1 border-prime">
            Latest Feed
          </span>
        </Reveal>
        <Reveal>
          <span className="max-sm:hidden text-prime font-semibold text-sm px-2 py-1 rounded-md bg-second/40 uppercase">
            See More
          </span>
        </Reveal>
      </div>
      <Reveal width="100%">
        <div className="w-full flex max-lg:flex-col gap-3">
          <div className="lg:min-h-96 lg:w-7/12 rounded-md bg-[url('https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg')] bg-cover bg-center overflow-hidden">
            <div className="h-full w-full bg-gradient-to-t from-second/60 from-30% to-transparent flex flex-col gap-3 justify-end px-8 py-6">
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
                <p className="text-xs max-w-[70%]">
                  Ace your next JavaScript technical interview with these 7
                  essential questions covering core concepts like hoisting,
                  closures, &apos;this&apos; keyword, and more. Perfect prep for
                  freshers and early-career developers.
                </p>
              </Reveal>
              <Reveal>
                <Link
                  href={
                    "/blog/7-essential-javascript-interview-questions-for-freshers"
                  }
                  className="font-jakarta flex items-center font-semibold gap-1 w-fit hover:bg-prime/60 bg-prime/40 transition-all px-4 text-sm py-2 rounded"
                >
                  Read More
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="lg:min-h-96 lg:w-5/12 flex max-md:flex-col lg:flex-col gap-2 lg:gap-3">
            <div className="lg:h-1/2 min-h-32 w-full rounded-md bg-background/20 flex overflow-hidden">
              <Image
                src={
                  "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg"
                }
                alt=""
                width={20}
                height={20}
                className="w-2/5 object-cover max-phone:hidden shrink-0"
              />
              <div className="px-3 py-2 flex flex-col gap-1">
                <Reveal>
                  <span className="text-white/80 font-semibold line-clamp-2">
                    Cracking the Python Interview: Essential Tips for Freshers
                  </span>
                </Reveal>
                <Reveal>
                  <span className="uppercase text-muted-foreground text-xs font-semibold">
                    9 November 2023
                  </span>
                </Reveal>
                <Reveal>
                  <p className="line-clamp-2 lg:line-clamp-3 text-sm my-2">
                    Preparing for a Python interview as a fresher can be
                    daunting. This comprehensive guide provides essential tips,
                    common questions, and valuable resources to help you ace
                    your Python interview and land your dream job.
                  </p>
                </Reveal>

                <Reveal>
                  <Link
                    href={
                      "/blog/python-interview-preparation-tips-for-freshers"
                    }
                    className="text-prime text-sm w-fit mt-auto mb-0 pb-2"
                  >
                    Read More
                  </Link>
                </Reveal>
              </div>
            </div>
            <div className="lg:h-1/2 min-h-32 w-full rounded-md bg-background/20 flex overflow-hidden">
              <Image
                src={
                  "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg"
                }
                alt=""
                width={20}
                height={20}
                className="w-2/5 object-cover max-phone:hidden shrink-0"
              />
              <div className="px-3 py-2 flex flex-col gap-1">
                <Reveal>
                  <span className="text-white/80 font-semibold line-clamp-2">
                    Acing Your Technical Interview as a Fresher: Tips and
                    Strategies
                  </span>
                </Reveal>
                <Reveal>
                  <span className="uppercase text-muted-foreground text-xs font-semibold">
                    9 November 2023
                  </span>
                </Reveal>
                <Reveal>
                  <p className="line-clamp-2 lg:line-clamp-3 text-sm my-2">
                    Preparing for a technical interview as a fresher can be
                    daunting. This blog post provides actionable tips and
                    strategies to help you succeed, including what to study,
                    practice problems, mock interviews, and more. Boost your
                    confidence and land your dream job!
                  </p>
                </Reveal>

                <Reveal>
                  <Link
                    href={"/blog/acing-technical-interviews-for-freshers"}
                    className="text-prime text-sm w-fit mt-auto mb-0 pb-2"
                  >
                    Read More
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
