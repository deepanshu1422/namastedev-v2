"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Video, Award } from "lucide-react";
import Checkout from "./checkout";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Reviews from "./reviews";
import Guides from "./guides";
import Courses from "./courses";
import Mentors from "@/app/(users)/mentors";
import VideoSlider from "@/app/(guide)/testimonials/video-slider";
import { Badge } from "@/components/ui/badge";
// import Reviews from "./reviews"

export default function Details({
  bundleId,
  slug,
  image,
  coursesCollection,
  price,
  courseOffer,
  learn,
  setOpen,
  setYtOpen,
  addToCart,
  faqs,
}: {
  addToCart?: () => void;
  bundleId: string;
  slug: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setYtOpen: Dispatch<SetStateAction<boolean>>;
  courseOffer: string[];
  image: string;
  price: {
    amount: number;
    percentage: number;
    bigAmount: number;
  };
  learn: string[];
  coursesCollection: {
    items: {
      title: string;
      slug: string;
      rating: number;
      courseImage: {
        url: string;
      };
    }[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}) {
  return (
   <div>
     <div className="relative tab:px-20 tab:py-6 max-tab:pt-4 max-tab:pb-10 m-auto max-tab:max-w-2xl max-w-[80rem] flex w-full">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-prime/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-prime/5 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col w-full gap-12 px-6 overflow-hidden">
        <Courses coursesCollection={coursesCollection} />

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-second/40 to-transparent -z-10" />
          <Guides />
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-prime/5 to-transparent -z-10" />
          <Mentors />
        </div>

        <section className="flex flex-col gap-6">
          <div className="grid tab:grid-cols-2 gap-8 p-8 shadow-xl rounded-2xl border-prime/20 border bg-second/30 backdrop-blur-sm">
            <div className="m-auto flex flex-col gap-4 max-tab:text-center">
              <Badge variant="outline" className="w-fit bg-prime/10 text-prime border-prime/20 px-3 py-1">
                <Award className="w-4 h-4 mr-1" />
                Professional Certificate
              </Badge>
              <h3 className="font-bold text-2xl md:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Boost Your Resume with Industry Recognition 🎖️
              </h3>
              <p className="text-base text-foreground/70">
                Stand out in the job market with our professionally accredited certification. Join thousands of successful graduates who have transformed their careers.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-prime/50 to-prime/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <Image
                src={"/certificate.jpg"}
                alt={"30DC Project Preview"}
                height={600}
                width={900}
                className="relative rounded-xl aspect-video w-full shadow-2xl object-cover group-hover:scale-[1.01] transition duration-300"
              />
            </div>
          </div>
        </section>

        

        <Reviews />
        
        

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-prime/5 to-transparent -z-10" />
          <FAQ faqs={faqs} />
        </div>
      </div>

    </div>
    <div className="relative w-full ">
          <div className="absolute inset-0 bg-gradient-radial from-prime/5 to-transparent -z-10" />
          <div className="max-w-7xl mx-auto">
            <VideoSlider />
          </div>
        </div>
   </div>
  );
}

export function Chapters({
  modulesCollection,
}: {
  modulesCollection: {
    total: number;
    items: {
      title: string;
      duration: string;
      chaptersCollection: {
        total: number;
        items: [
          {
            public: boolean;
            title: string;
            duration: string;
            youtubeId: string;
          }
        ];
      };
    }[];
  };
}) {
  const [state, setState] = useState(modulesCollection.items.slice(0, 7));

  return (
    <div className="flex flex-col gap-2">
      <Accordion
        type="single"
        collapsible
        className="w-full border border-prime/30"
      >
        {state.map(({ title, chaptersCollection }, i) => (
          <AccordionItem
            key={i}
            className="border-t border-prime/40"
            value={`item-${i + 1}`}
          >
            <AccordionTrigger className="bg-second/40 px-5 text-start flex text-sm">
              <div className="flex flex-col gap-1">
                <span>{title}</span>
                <span className="text-xs text-muted-foreground">
                  ({chaptersCollection.total} Lessons)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col pb-0">
              {chaptersCollection.items.map(({ title }, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 border-b border-prime/20"
                >
                  <span className="flex gap-2 items-center">
                    <Video className="h-5 w-5 shrink-0" />
                    {title}
                  </span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {!!(modulesCollection.total - 7) &&
        !(modulesCollection.total === state.length) && (
          <button
            onClick={() => setState(modulesCollection.items)}
            className="border border-white p-2 shadow-md font-semibold text-sm"
          >
            Load More {modulesCollection.total - 7} Modules
          </button>
        )}
    </div>
  );
}

function FAQ({
  faqs,
}: {
  faqs: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-xl tab:text-2xl">
          Frequently Asked Questions 🙋‍♂️
        </h2>
        <p className="text-sm text-pretty text-muted-foreground">
          Recently asked question from our diffrenet social media channels.
        </p>
      </div>
      <div className="grid gap-2">
        <Accordion className="flex flex-col gap-3" type="single" collapsible>
          {faqs.map(({ answer, question }, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-base bg-second/80 rounded-xl p-4 font-semibold text-start text-white/90">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-sm bg-second/30 rounded-b-xl p-4 items-start text-foreground/70">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
