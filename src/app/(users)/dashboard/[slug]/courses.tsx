"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { getProgress } from "../../../../../actions/updateProgress";
import { CheckCircle2, Star } from "lucide-react";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProfileData } from "../../../../../actions/getProfileData";
import React from "react";

const CompletedCheckmark = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="shrink-0 h-6 w-6 text-green-500"
  >
    <CheckCircle2 className="h-full w-full" />
  </motion.div>
);

const ChapterNumber = ({ number }: { number: number }) => (
  <div className="shrink-0 h-6 w-6 border-[1.5px] border-white/40 rounded-full grid place-items-center">
    {number}
  </div>
);

export default function CourseList({
  modules,
  module,
  chapter,
  setVidIndex,
  setOpen,
  courseId,
}: {
  courseId: string;
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
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [starredVideos, setStarredVideos] = useState<string[]>([]);

  const fetchData = useCallback(async () => {
    const { completedChapters } = await getProgress(courseId);
    setCompletedChapters(completedChapters);

    try {
      const profileData = await getProfileData();
      const starredVideoIds = profileData.starredVideos.map(video => video?.youtubeId);
      setStarredVideos(starredVideoIds);
    } catch (error) {
      console.error("Error fetching starred videos:", error);
    }
  }, [courseId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Add event listener for custom events
  useEffect(() => {
    const handleStarUpdate = () => {
      fetchData();
    };

    const handleProgressUpdate = () => {
      fetchData();
    };

    window.addEventListener('videoStarUpdated', handleStarUpdate);
    window.addEventListener('progressUpdated', handleProgressUpdate);
    
    return () => {
      window.removeEventListener('videoStarUpdated', handleStarUpdate);
      window.removeEventListener('progressUpdated', handleProgressUpdate);
    };
  }, [fetchData]);

  return (
    <Accordion
      defaultValue={`module-${module}`}
      type="single"
      collapsible
      className="flex flex-col w-full gap-2 max-md:max-h-[50dvh] pr-1 max-md:overflow-hidden max-md:overflow-y-auto horizontal-scroll pb-8"
    >
      {modules.items.map(({ chaptersCollection, title }, i) => (
        <AccordionItem key={i} value={`module-${i}`}>
          <AccordionTrigger
            className={`text-white/40 text-start hover:text-white/90 transition-all duration-300 py-2 text-xs ${
              module === i && "text-white"
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="max-md:line-clamp-1">{title}</span>
              {chaptersCollection.items.every(chapter => 
                completedChapters.includes(chapter.sys.id)
              ) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-green-500"
                >
                  <CheckCircle2 className="h-4 w-4" />
                </motion.div>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 text-xs py-2">
            {chaptersCollection.items.map(
              ({ title, public: free, sys: {id}, youtubeId }, chapterIndex) => (
                <button
                  onClick={() => {
                    if (setOpen) setOpen(false);
                    setVidIndex({ modIndex: i, chapterIndex });
                  }}
                  key={chapterIndex}
                  className={`flex gap-2 items-center justify-between hover:text-white/70 text-white/40 group transition-all duration-300`}
                >
                  <div className="flex gap-2 items-center text-start">
                    {starredVideos.includes(youtubeId) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-yellow-500"
                      >
                        <Star className="h-4 w-4 fill-yellow-500" />
                      </motion.div>
                    )}
                    {completedChapters.includes(id) ? (
                      <CompletedCheckmark />
                    ) : (
                      <ChapterNumber number={chapterIndex + 1} />
                    )}
                    <span
                      className={`line-clamp-1 ${
                        module == i && chapter == chapterIndex
                          ? "text-white"
                          : completedChapters.includes(id)
                          ? "text-green-500"
                          : null
                      }`}
                    >
                      {title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {completedChapters.includes(id) && (
                      <Badge className="px-1 py-0 text-[10px] font-normal text-green-500 w-fit bg-green-500/10 hover:bg-green-500/20 rounded">
                        Completed
                      </Badge>
                    )}
                  </div>
                </button>
              )
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
