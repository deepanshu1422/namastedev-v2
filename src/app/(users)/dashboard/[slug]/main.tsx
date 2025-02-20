"use client";

import Details from "./details";
import Checkout from "./checkout";
import Link from "next/link";
import { ChevronLeft, CheckCircle, ChevronRight, PlaySquare } from "lucide-react";
import CourseList from "./courses";
import { useEffect, useState, useRef, useCallback } from "react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getProgress } from "../../../../../actions/updateProgress";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

type CourseItem = {
  session: Session | null;
  item: {
    courseId: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    techStack: string;
    offers: string[];
    learn: string[];
    rating: number;
    slug: string;
    upsellBundle: {
      bundleTitle: string;
      slug: string;
      pricingsCollection: {
        items: {
          amount: string;
          bigAmount: string;
          percentage: string;
        };
      }[];
    };
    courseImage: {
      description: string;
      url: string;
      width: number;
      height: number;
    };
    courseCreator: {
      name: string;
    };
    pricingsCollection: {
      items: {
        title: string;
        amount: number;
        percentage: number;
        bigAmount: number;
        countryCode: string;
        currencyCode: string;
      }[];
    };
    faqCollection: {
      items: {
        question: string;
        answer: string;
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
  };
};

const CompletionIndicator = ({ courseId, modules }: { courseId: string, modules: CourseItem["item"]["modulesCollection"] }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const checkCompletion = async () => {
      const { completedChapters } = await getProgress(courseId);
      const allChapterIds = modules.items.flatMap(module => 
        module.chaptersCollection.items.map(chapter => chapter.sys.id)
      );
      setIsCompleted(
        allChapterIds.every(id => completedChapters.includes(id))
      );
    };
    checkCompletion();
  }, [courseId, modules]);

  return isCompleted ? (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute right-3 top-3"
    >
      <CheckCircle className="w-5 h-5 text-green-500" />
    </motion.div>
  ) : null;
};

function CourseDrawer({
  module,
  chapter,
  modules,
  vidIndex,
  setVidIndex,
  courseId
}: {
  module: number;
  chapter: number;
  vidIndex: { modIndex: number; chapterIndex: number };
  setVidIndex: Dispatch<
    SetStateAction<{
      modIndex: number;
      chapterIndex: number;
    }>
  >;
  courseId: string;
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
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(1000);
  const isResizing = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);
  
  const totalChapters = modules.items.reduce(
    (acc, module) => acc + module.chaptersCollection.total,
    0
  );

  // Initialize state after component mounts
  useEffect(() => {
    setIsClient(true);
    const screenWidth = window.innerWidth;
    const defaultWidth = Math.min(Math.max(screenWidth * 0.8, 800), 1400);
    const savedWidth = parseInt(localStorage.getItem('courseDrawerWidth') || defaultWidth.toString());
    setDrawerWidth(Math.min(Math.max(savedWidth, 800), screenWidth - 48));
  }, []);

  const startResizing = useCallback((e: React.MouseEvent) => {
    isResizing.current = true;
    startX.current = e.pageX;
    startWidth.current = drawerWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [drawerWidth]);

  const stopResizing = useCallback(() => {
    isResizing.current = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (!isResizing.current) return;

    const newWidth = startWidth.current + (startX.current - e.pageX) * 2;
    const screenWidth = window.innerWidth;
    const minWidth = Math.min(800, screenWidth * 0.5);
    const maxWidth = Math.min(1600, screenWidth - 48);

    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setDrawerWidth(newWidth);
      localStorage.setItem('courseDrawerWidth', newWidth.toString());
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResizing);

      // When drawer opens, ensure active module is in view with a slight delay
      setTimeout(() => {
        const drawerContent = document.getElementById('course-drawer-content');
        const activeModule = document.querySelector(`[data-module="${module}"]`);
        if (drawerContent && activeModule) {
          const drawerRect = drawerContent.getBoundingClientRect();
          const moduleRect = activeModule.getBoundingClientRect();
          const padding = 100;

          // Calculate the scroll position to center the active module
          const scrollTop = moduleRect.top - drawerRect.top + drawerContent.scrollTop - (drawerRect.height - moduleRect.height) / 2 + padding;
          
          // Smooth scroll to the position
          drawerContent.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure content is rendered
    }
    return () => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResizing);
    };
  }, [open, resize, stopResizing, module]);

  // Add window resize handler for drawer
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const drawerMaxWidth = Math.min(1600, screenWidth - 16);
      const drawerMinWidth = Math.min(screenWidth - 16, 800);
      
      if (drawerWidth > drawerMaxWidth) {
        setDrawerWidth(drawerMaxWidth);
        localStorage.setItem('courseDrawerWidth', drawerMaxWidth.toString());
      } else if (drawerWidth < drawerMinWidth) {
        setDrawerWidth(drawerMinWidth);
        localStorage.setItem('courseDrawerWidth', drawerMinWidth.toString());
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawerWidth]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant={"default"} 
          className="flex-1 rounded-xl bg-prime hover:bg-prime/90 text-white font-medium py-4 sm:py-6 text-sm sm:text-base gap-2 shadow-lg shadow-prime/20 border border-prime/50 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <PlaySquare className="h-4 w-4 sm:h-5 sm:w-5" />
          Course Content
        </Button>
      </DrawerTrigger>
      <DrawerContent 
        className="mx-auto rounded-t-2xl h-[85vh] flex flex-col overflow-hidden relative max-h-[85vh]" 
        style={{ 
          width: isClient ? `${drawerWidth}px` : '100%',
          maxWidth: 'min(calc(100vw - 1rem), 1600px)',
          minWidth: 'min(calc(100vw - 1rem), 800px)',
          resize: 'both'
        }}
      >
        <DrawerHeader className="border-b border-white/10 pb-4 px-4 sm:px-6 flex-shrink-0">
          <div className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize bg-transparent hover:bg-white/10 transition-colors"
               onMouseDown={startResizing}
          />
          <DrawerTitle className="text-xl sm:text-2xl font-bold flex items-center gap-3">
            <PlaySquare className="h-6 w-6 sm:h-7 sm:w-7 text-prime" />
            Course Content
          </DrawerTitle>
          <DrawerDescription className="text-sm sm:text-base text-white/60 flex items-center gap-2 mt-2">
            {modules.total} Modules • {totalChapters} Chapters
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 min-h-0">
          <div className="px-7 max-h-[65dvh] overflow-hidden overflow-y-auto horizontal-scroll" id="course-drawer-content">
            <CourseList
              setOpen={setOpen}
              setVidIndex={setVidIndex}
              chapter={vidIndex.chapterIndex}
              module={vidIndex.modIndex}
              courseId={courseId}
              modules={modules}
            />
          </div>
        </div>
        <DrawerFooter className="border-t border-white/10 px-4 sm:px-6 flex-shrink-0">
          <DrawerClose>
            <Button 
              className="w-full rounded-xl py-4 sm:py-6 text-base font-medium" 
              variant="secondary"
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default function Main({
  session,
  item: { title, courseId, courseImage, modulesCollection },
}: CourseItem) {
  const [vidIndex, setVidIndex] = useState<{
    modIndex: number;
    chapterIndex: number;
  }>({
    modIndex: 0,
    chapterIndex: 0,
  });

  function loadLastChapter(
    data: {
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
    },
    chapterId
  ) {
    for (let modIndex = 0; modIndex < data.items.length; modIndex++) {
      let chapters = data.items[modIndex].chaptersCollection.items;
      for (
        let chapterIndex = 0;
        chapterIndex < chapters.length;
        chapterIndex++
      ) {
        if (chapters[chapterIndex].sys.id === chapterId) {
          if (
            chapterIndex ===
              modulesCollection.items[modulesCollection.items.length - 1]
                .chaptersCollection.items.length -
                1 &&
            modIndex === modulesCollection.total - 1
          )
            return;

          if (
            chapterIndex ===
              modulesCollection.items[modIndex].chaptersCollection
                .total -
                1 &&
            modIndex !== modulesCollection.total - 1
          ) {
            setVidIndex({
              modIndex: modIndex + 1,
              chapterIndex: 0,
            });
            return;
          }
          if (
            chapterIndex !==
            modulesCollection.items[modIndex].chaptersCollection.total - 1
          ) {
            setVidIndex({
              modIndex,
              chapterIndex: (chapterIndex += 1),
            });
            return;
          }
        }
      }
    }
  }

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const { completedChapters } = await getProgress(courseId);
        loadLastChapter(
          modulesCollection,
          completedChapters[completedChapters.length - 1]
        );
        console.log(vidIndex);
        // setVidIndex(result);
      } catch (error) {
        console.error("Error loading progress:", error);
        console.error("Error details:", {
          courseId,
          error: error instanceof Error ? error.message : error,
        });
      }
    };
    loadProgress();
  }, [session]);

  // @ts-ignore
  if (!session?.user?.courseId?.includes(courseId))
    return redirect(`/dashboard`);

  function Paid() {
    const [disabledPrev, setDisabledPrev] = useState(false);
    const [disabledNext, setDisabledNext] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(320);
    const isResizing = useRef(false);
    const startX = useRef(0);
    const startWidth = useRef(0);

    // Initialize state after component mounts
    useEffect(() => {
      setIsClient(true);
      const screenWidth = window.innerWidth;
      const defaultWidth = Math.min(Math.max(screenWidth * 0.2, 320), 500);
      const savedWidth = parseInt(localStorage.getItem('courseSidebarWidth') || defaultWidth.toString());
      setSidebarWidth(Math.min(Math.max(savedWidth, 280), screenWidth * 0.4));
    }, []);

    const startResizing = useCallback((e: React.MouseEvent) => {
      isResizing.current = true;
      startX.current = e.pageX;
      startWidth.current = sidebarWidth;
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }, [sidebarWidth]);

    const stopResizing = useCallback(() => {
      isResizing.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }, []);

    const resize = useCallback((e: MouseEvent) => {
      if (!isResizing.current) return;

      const newWidth = startWidth.current + (e.pageX - startX.current);
      const screenWidth = window.innerWidth;
      const minWidth = Math.min(280, screenWidth * 0.15);
      const maxWidth = Math.min(900, screenWidth * 0.4);

      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setSidebarWidth(newWidth);
        localStorage.setItem('courseSidebarWidth', newWidth.toString());
      }
    }, []);

    useEffect(() => {
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResizing);
      return () => {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResizing);
      };
    }, [resize, stopResizing]);

    useEffect(() => {
      // Check if we're at the first video
      setDisabledPrev(vidIndex.modIndex === 0 && vidIndex.chapterIndex === 0);

      // Check if we're at the last video
      const lastModule = modulesCollection.items[modulesCollection.items.length - 1];
      const isLastModule = vidIndex.modIndex === modulesCollection.items.length - 1;
      const isLastChapter = vidIndex.chapterIndex === lastModule.chaptersCollection.items.length - 1;
      setDisabledNext(isLastModule && isLastChapter);
    }, [vidIndex, modulesCollection]);

    function prevVideo() {
      if (vidIndex.modIndex === 0 && vidIndex.chapterIndex === 0) return;

      if (vidIndex.chapterIndex === 0 && vidIndex.modIndex > 0) {
        const prevModule = modulesCollection.items[vidIndex.modIndex - 1];
        setVidIndex({
          modIndex: vidIndex.modIndex - 1,
          chapterIndex: prevModule.chaptersCollection.items.length - 1,
        });
      } else {
        setVidIndex({
          ...vidIndex,
          chapterIndex: vidIndex.chapterIndex - 1,
        });
      }
    }

    function nextVideo() {
      const currentModule = modulesCollection.items[vidIndex.modIndex];
      const isLastChapterInModule = vidIndex.chapterIndex === currentModule.chaptersCollection.items.length - 1;
      const isLastModule = vidIndex.modIndex === modulesCollection.items.length - 1;

      if (isLastChapterInModule && !isLastModule) {
        setVidIndex({
          modIndex: vidIndex.modIndex + 1,
          chapterIndex: 0,
        });
      } else if (!isLastChapterInModule) {
        setVidIndex({
          ...vidIndex,
          chapterIndex: vidIndex.chapterIndex + 1,
        });
      }
    }

    return (
      <main className="bg-footer">
        <section className="relative grid" style={{ 
          gridTemplateColumns: isClient ? 
            `${window.innerWidth >= 1024 ? `minmax(280px, ${sidebarWidth}px) 1fr` : '1fr'}` : 
            '1fr',
          maxWidth: '100vw',
          overflow: 'hidden'
        }}>
          <div className="hidden lg:flex flex-col sticky top-8 h-fit">
            <div className="flex flex-col gap-4 p-7 h-full relative">
              <Link
                href={"/dashboard"}
                className="flex items-center gap-2 text-xs text-white/70 hover:text-white/90"
              >
                <ChevronLeft className="h-3 w-3" />
                Dashboard
              </Link>

              <div className="flex flex-col relative">
                <span className="text-[11px] text-white/70">Course</span>
                <span className="text-sm font-semibold">{title}</span>
                <CompletionIndicator 
                  courseId={courseId}
                  modules={modulesCollection}
                />
              </div>
            </div>

            <div className="px-7 max-h-[65dvh] overflow-hidden overflow-y-auto horizontal-scroll" id="course-drawer-content">
              <CourseList
                courseId={courseId}
                chapter={vidIndex.chapterIndex}
                module={vidIndex.modIndex}
                modules={modulesCollection}
                setVidIndex={setVidIndex}
              />
            </div>
            <div
              className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize bg-transparent hover:bg-white/10 transition-colors"
              onMouseDown={startResizing}
            />
          </div>
          <div className="bg-bg lg:rounded-s-3xl min-h-dvh py-4 sm:py-6 px-3 sm:px-6 m-auto w-full flex">
            <section className="relative flex max-md:flex-col gap-4 p-1 max-w-6xl w-full mx-auto">
              <Details
                vidIndex={vidIndex}
                modulesCollection={modulesCollection}
                title={title}
                courseId={courseId}
                courseImage={courseImage}
                chapter={vidIndex.chapterIndex}
                module={vidIndex.modIndex}
                setVidIndex={setVidIndex}
              />
              <Checkout />
            </section>
          </div>

          <div className="lg:hidden flex flex-col gap-2 sticky bottom-4 px-3 z-50">
            <span className="flex gap-2 w-full">
              <Button
                onClick={prevVideo}
                disabled={disabledPrev}
                variant={"outline"}
                className="rounded-xl w-full py-5 text-sm"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button
                onClick={nextVideo}
                disabled={disabledNext}
                variant={"outline"}
                className="rounded-xl w-full py-5 text-sm"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </span>
            <CourseDrawer
              vidIndex={vidIndex}
              setVidIndex={setVidIndex}
              module={vidIndex.modIndex}
              chapter={vidIndex.chapterIndex}
              modules={modulesCollection}
              courseId={courseId}
            />
          </div>
        </section>
      </main>
    );
  }

  return <Paid />;
}
