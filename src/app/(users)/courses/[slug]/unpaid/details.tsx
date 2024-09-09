"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  Dot,
  Video,
} from "lucide-react";
import Checkout from "./checkout";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Reviews from "./reviews";
import Guides from "./guides";
import Mentors from "@/app/(users)/mentors";
// import Reviews from "./reviews"

export default function Details({
  image,
  courseId,
  longDescription,
  modulesCollection,
  projectsCollection,
  price,
  courseOffer,
  learn,
  setOpen,
  setYtOpen,
  faqs,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setYtOpen: Dispatch<SetStateAction<boolean>>;
  courseOffer: string[];
  courseId: string;
  image: string;
  longDescription: React.JSX.Element;
  price: {
    amount: number;
    percentage: number;
    bigAmount: number;
  };
  learn: string[];
  projectsCollection: {
    items: {
      title: string;
      content: string[];
      coverImage: {
        url: string;
      };
    }[];
  };
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
  faqs: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <div className="tab:px-20 tab:py-6 max-tab:pt-4 max-tab:pb-10 m-auto max-w-[80rem] flex w-full">
      <div className="flex flex-col w-full gap-6 px-6 overflow-hidden">
        <section className="flex flex-col gap-1">
          <div className="flex flex-col gap-3 border-prime/80 border bg-second/30 pt-5 p-4">
            <span className="text-2xl font-bold">What you&apos;ll learn</span>
            <div className="grid phone:grid-cols-2 gap-5 py-3">
              {learn.map((e, i) => (
                <span key={i} className="flex gap-3 items-start text-sm">
                  <Check className="h-5 w-5 translate-y-1 text-prime shrink-0" />
                  <p className="">
                    {e.split(":").map((e, i) =>
                      i === 0 ? (
                        <span key={i} className="bg-lime-500/40">
                          {e}:
                        </span>
                      ) : (
                        e
                      )
                    )}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex max-sm:flex-col gap-2 sm:items-end">
            <h2 className="text-xl tab:text-2xl font-bold text-white">
              Course Content
            </h2>
            <span className="flex text-sm text-white/60 items-center">
              ({modulesCollection.total} Lessons)
            </span>
          </div>
          <Chapters modulesCollection={modulesCollection} />
        </section>

        {!!projectsCollection.items.length && (
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-xl tab:text-2xl">
                What you&apos;ll make
              </h2>
              <p className="text-sm text-pretty text-muted-foreground">
                Add more creative value to your portfolio💡
              </p>
            </div>
            {projectsCollection.items.map(
              ({ content, coverImage, title }, i) => (
                <div
                  key={i}
                  className="grid tab:grid-cols-2 gap-3 bg-second/30 rounded-lg py-6 pl-6"
                >
                  <div className="max-tab:order-last flex flex-col gap-3">
                    <h3 className="font-bold text-xl tab:text-2xl">{title}</h3>
                    <div className="flex flex-col gap-1 pr-5">
                      {content.map((e, i) => (
                        <span
                          key={i}
                          className="flex gap-2 items-center text-sm"
                        >
                          <CheckCheck className="h-5 w-5 text-prime shrink-0" />
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Image
                    src={coverImage.url}
                    alt={"30DC Project Preview"}
                    height={600}
                    width={900}
                    className="rounded-s-lg w-full tab:h-4/5 my-auto shadow-xl shadow-black/50 object-cover"
                  />
                </div>
              )
            )}
          </section>
        )}
        {/* <div>
          <section
            className={`flex flex-col ${
              !expand && "max-h-96"
            } gap-3 overflow-hidden`}
          >
            <h2 className="text-xl tab:text-2xl font-bold text-white">
              Overview
            </h2>
          </section>
          <div className="flex w-full h-16 bg-gradient-to-b from-10% to-90% -translate-y-12 from-transparent to-bg">
            <Button
              onClick={() => setExpand(!expand)}
              variant={"outline"}
              className="mx-auto translate-y-16"
            >
              <ChevronDown className={`h-4 w-4 ${expand && "rotate-180"}`} />
              View More
            </Button>
          </div>
        </div> */}

        <section className="flex flex-col gap-4">
          <div className="grid tab:grid-cols-2 gap-5 p-3 tab:p-6 shadow-xl border-prime/80 border bg-second/30">
            <div className="m-auto flex flex-col gap-2 max-tab:text-center">
              <h3 className="font-bold text-xl text-pretty tab:text-3xl">
                Course Completion Certificate🎖️
              </h3>
              <p className="text-sm text-pretty">
                Make your resume outstand among other&apos;s.
              </p>
            </div>
            <Image
              src={"/certificate.jpg"}
              alt={"30DC Project Preview"}
              height={600}
              width={900}
              className="rounded-sm aspect-video max-w-xl w-full m-auto shadow-xl shadow-black/50 object-cover"
            />
          </div>
        </section>

        <Reviews />
        <Guides />
        <Mentors />
        <FAQ faqs={faqs} />
      </div>

      <Checkout
        setOpen={setOpen}
        setYtOpen={setYtOpen}
        courseOffer={courseOffer}
        price={price}
        image={image}
        courseId={courseId}
        checkout="909"
      />
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
              <AccordionTrigger className="text-sm bg-second/80 rounded-xl p-4 font-semibold text-start text-white/90">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-xs bg-second/30 rounded-b-xl p-4 items-start text-foreground/70">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
