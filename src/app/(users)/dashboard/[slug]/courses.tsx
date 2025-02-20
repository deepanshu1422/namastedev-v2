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
import { updateChapterProgress } from "../../../../../actions/updateProgress";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

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
  const [loadingChapter, setLoadingChapter] = useState<string | null>(null);

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

  // Save scroll position when navigating
  useEffect(() => {
    const drawerContent = document.getElementById('course-drawer-content');
    if (!drawerContent) return;

    const handleScroll = () => {
      const scrollKey = `course-${courseId}-scroll`;
      localStorage.setItem(scrollKey, drawerContent.scrollTop.toString());
    };

    drawerContent.addEventListener('scroll', handleScroll);
    return () => drawerContent.removeEventListener('scroll', handleScroll);
  }, [courseId]);

  // Restore scroll position on initial load
  useEffect(() => {
    const drawerContent = document.getElementById('course-drawer-content');
    if (!drawerContent) return;

    const scrollKey = `course-${courseId}-scroll`;
    const savedScroll = localStorage.getItem(scrollKey);
    
    if (savedScroll) {
      // Use a small delay to ensure content is rendered
      setTimeout(() => {
        drawerContent.scrollTop = parseInt(savedScroll);
      }, 100);
    }
  }, [courseId]);

  // Restore scroll position and ensure active module is in view
  useEffect(() => {
    const drawerContent = document.getElementById('course-drawer-content');
    if (!drawerContent) return;

    // Find the active module element
    const activeModule = document.querySelector(`[data-module="${module}"]`);
    if (activeModule) {
      // Scroll the active module into view with some padding
      const padding = 100; // Adjust this value as needed
      const moduleTop = activeModule.getBoundingClientRect().top + drawerContent.scrollTop - padding;
      drawerContent.scrollTop = moduleTop;
    }
  }, [module, setOpen]);

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

  const handleComplete = async (chapterId: string, modIndex: number, chapterIndex: number) => {
    try {
      setLoadingChapter(chapterId);
      const { success } = await updateChapterProgress(courseId, chapterId);
      if (success) {
        await fetchData();
        if (setOpen) setOpen(false);
        setVidIndex({ modIndex, chapterIndex });
      }
    } catch (error) {
      console.error("Error marking as complete:", error);
    } finally {
      setLoadingChapter(null);
    }
  };

  return (
    <Accordion
      defaultValue={`module-${module}`}
      type="single"
      collapsible
      className="flex flex-col w-full gap-4"
    >
      {modules.items.map(({ chaptersCollection, title, duration }, i) => {
        const isModuleCompleted = chaptersCollection.items.every(chapter => 
          completedChapters.includes(chapter.sys.id)
        );
        const completedInModule = chaptersCollection.items.filter(chapter => 
          completedChapters.includes(chapter.sys.id)
        ).length;

        return (
          <AccordionItem 
            key={i} 
            value={`module-${i}`}
            data-module={i}
            className="border-none bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200 rounded-2xl overflow-hidden backdrop-blur-sm"
          >
            <AccordionTrigger
              className={`text-white/90 text-start hover:text-white transition-all duration-300 py-5 px-6 ${
                module === i ? "text-white bg-white/[0.06]" : ""
              } ${isModuleCompleted ? "text-green-400" : ""}`}
            >
              <div className="flex items-center justify-between w-full gap-4">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10 font-medium">
                      Module {i + 1}
                    </span>
                    <span className="text-base font-medium line-clamp-1">{title}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm opacity-70">
                    <span>{chaptersCollection.total} chapters</span>
                    {duration && <span>•</span>}
                    {duration && <span>{duration}</span>}
                    {completedInModule > 0 && (
                      <>
                        <span>•</span>
                        <span className="text-green-400">
                          {completedInModule}/{chaptersCollection.total} completed
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {isModuleCompleted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-400 shrink-0"
                  >
                    <CheckCircle2 className="h-6 w-6" />
                  </motion.div>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t border-white/[0.06]">
              {chaptersCollection.items.map(
                ({ title, public: free, sys: {id}, youtubeId, duration }, chapterIndex) => {
                  const isActive = module === i && chapter === chapterIndex;
                  const isCompleted = completedChapters.includes(id);
                  const isLoading = loadingChapter === id;
                  
                  return (
                    <div
                      key={chapterIndex}
                      className={`flex gap-4 items-center justify-between w-full p-5 transition-all duration-200
                        ${isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"}
                        ${isCompleted ? "text-green-400" : "text-white/80"}
                        ${chapterIndex !== chaptersCollection.items.length - 1 ? "border-b border-white/[0.06]" : ""}
                      `}
                    >
                      <button
                        onClick={() => {
                          if (setOpen) setOpen(false);
                          setVidIndex({ modIndex: i, chapterIndex });
                        }}
                        className="flex gap-4 items-center text-start flex-1 min-w-0"
                      >
                        {starredVideos.includes(youtubeId) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-yellow-400 shrink-0"
                          >
                            <Star className="h-5 w-5 fill-yellow-400" />
                          </motion.div>
                        )}
                        {isCompleted ? (
                          <CompletedCheckmark />
                        ) : (
                          <ChapterNumber number={chapterIndex + 1} />
                        )}
                        <div className="flex flex-col items-start gap-1.5 min-w-0">
                          <span className="line-clamp-1 font-medium text-sm w-full">{title}</span>
                          <div className="flex items-center gap-2 text-xs opacity-60">
                            {duration && <span>{duration}</span>}
                            {isActive && <span className="text-prime">• Currently watching</span>}
                          </div>
                        </div>
                      </button>
                      <div className="flex items-center gap-3 shrink-0">
                        {isCompleted ? (
                          <Badge className="px-3 py-1 text-xs font-normal text-green-400 bg-green-400/10 hover:bg-green-400/20 rounded-full">
                            Completed
                          </Badge>
                        ) : (
                          <Button
                            onClick={() => handleComplete(id, i, chapterIndex)}
                            disabled={isLoading}
                            variant="ghost"
                            size="sm"
                            className="text-xs hover:text-green-400 hover:bg-green-400/10"
                          >
                            {isLoading ? (
                              "Marking..."
                            ) : (
                              <>
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Complete
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
