"use client";

import Companies, {
  companyImg,
  NewImage,
} from "@/components/new-cohort/companies";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Star, TicketPercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <>
      <div className={`w-full grid bg-zinc-950/60 shadow`}>
        <div className="tab:p-[4.5rem_5.5rem_0.75rem] max-tab:pt-[1rem] max-tab:pb-[0.5rem] max-tab:px-8 max-phone:px-4 m-auto max-w-[90rem] flex flex-auto max-tab:flex-col w-full justify-between text-white gap-3 sm:gap-7 h-full">
          <section className="grid gap-2 h-fit tab:max-w-[60%]">
            <Link
              href={"/courses"}
              className="flex text-white/70 items-center gap-2 w-fit hover:text-white transition-all hover:underline"
            >
              <ArrowLeft className="h-3 w-3" />
              <span className="uppercase font-semibold tracking-wide text-sm">
                Back to courses
              </span>
            </Link>

            <div className="tab:hidden flex flex-col gap-4 relative max-tab:mx-auto">
              <Image
                alt="30DayCoding New Challenge"
                src={image}
                height={800}
                width={1200}
                className="bg-prime/20 aspect-video object-cover"
              />
            </div>

            <h1
              className={`text-white/80 tab:max-w-4xl font-jakarta text-[1.6rem] tab:text-[2.5rem] font-extrabold tab:leading-[3rem] text-pretty`}
            >
              {title}
            </h1>

            <div className="flex items-center gap-3">
              <section className="flex gap-1.5 items-center">
                <span className="font-bold text-lime-500/70">5.0</span>
                <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
                <Star className="fill-lime-500/60 stroke-lime-500/60 h-4 w-4" />
              </section>
              <span className="text-white/70 font-semibold text-sm">
                (48 reviews)
              </span>
              <span></span>
            </div>

            <div className="text-white/70">
              Author:{" "}
              <span className="text-white font-bold px-1 underline">
                Aryan Singh
              </span>
            </div>

            <div className="text-sm text-white/40">Updated 4 months ago</div>

            <div className="tab:hidden  flex flex-col gap-4">
              <span className="uppercase text-white text-3xl sm:text-4xl font-bold flex gap-2 items-center">
                ₹1,900
                <span className="text-muted-foreground/70 italic text-2xl sm:text-3xl line-through">
                  2,500
                </span>
              </span>
              <Button
                size={"lg"}
                className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg"
              >
                Buy Now
              </Button>
              <div className="flex flex-col gap-1">
                <p className="tab:max-w-2xl max-tab:leading-6 line-clamp-3 text-white/60 italic font-semibold">
                  This course offers:
                </p>
                <span className="flex gap-2 max-sm:text-sm items-center">
                  <Check className="sm:w-6 sm:h-6 h-5 w-5 stroke-lime-600" />
                  Lifetime Access to resources.
                </span>
                <span className="flex gap-2 max-sm:text-sm items-center">
                  <Check className="sm:w-6 sm:h-6 h-5 w-5 stroke-lime-600" />
                  100% Money Back Gurantee
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-footer/50 shadow py-2">
        <div className=" relative flex space-x-16 [animation:loop-scroll_8s_linear_infinite] tab:animate-loop-scroll">
          {companyImg.map((e, i) => (
            <NewImage key={i} src={e} />
          ))}
        </div>
      </div>
    </>
  );
}
