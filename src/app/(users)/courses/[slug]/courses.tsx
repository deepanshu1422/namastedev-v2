"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useCallback } from "react";

export default function CourseList({
  modules,
  module,
  chapter,
  setVidIndex,
  setOpen,
  courseId,
  progress,
}: {
  courseId: string;
  progress: Record<string, string[]>;
  module: number;
  chapter: number;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  setVidIndex: Dispatch<
    SetStateAction<{
      modIndex: number;
      chapterIndex: number;
    }>
  >;
  modules: {
    total: number;
    items: {
      title: string;
      duration: string;
      chaptersCollection: {
        total: number;
        items: [
          {
            sys: {
              id: string;
            };
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
  return (
    <Accordion
      defaultValue={`module-${module}`}
      type="single"
      collapsible
      className="flex flex-col w-full gap-2 max-md:max-h-[50dvh] pr-1 max-md:overflow-hidden max-md:overflow-y-auto horizontal-scroll"
    >
      {modules.items.map(({ chaptersCollection, title }, i) => (
        <AccordionItem key={i} value={`module-${i}`}>
          <AccordionTrigger
            className={`text-white/40 text-start hover:text-white/90 transition-all duration-300 py-2 text-xs ${
              module === i && "text-white"
            }`}
          >
            <span className="max-md:line-clamp-1">{title}</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 text-xs py-2">
            {chaptersCollection.items.map(
              ({ title, public: free, sys: {id} }, chapterIndex) => (
                <button
                  onClick={() => {
                    if (setOpen) setOpen(false);
                    setVidIndex({ modIndex: i, chapterIndex });
                  }}
                  key={chapterIndex}
                  className={`flex gap-2 items-center justify-between hover:text-white/70 text-white/40`}
                >
                  <div className="flex gap-2 items-center text-start">
                    {progress[courseId]?.includes(id) ? <CheckCircle2 className="shrink-0 h-6 w-6" /> : <div className="shrink-0 h-6 w-6 border-[1.5px] border-white/40 rounded-full grid place-items-center">
                      {chapterIndex + 1}
                    </div>}
                    <span
                      className={`line-clamp-1 ${
                        module == i && chapter == chapterIndex
                          ? "text-white"
                          : null
                      }`}
                    >
                      {title}
                    </span>
                  </div>
                  {/* {free && (
                    <Badge className="px-1 py-0 text-[10px] font-normal text-white w-fit bg-prime/30 hover:bg-prime/30 rounded">
                      Free
                    </Badge>
                  )} */}
                </button>
              )
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
