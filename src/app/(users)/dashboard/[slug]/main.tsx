"use client";

import Details from "./details";
import Checkout from "./checkout";
import Link from "next/link";
import { ChevronLeft, CheckCircle } from "lucide-react";
import CourseList from "./courses";
import { useEffect, useState } from "react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getProgress } from "../../../../../actions/updateProgress";
import { motion } from "framer-motion";
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
    return (
      <main className="bg-footer">
        <section className="relative grid lg:grid-cols-[260px_1fr]">
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

            <div className="px-7 max-h-[65dvh] overflow-hidden overflow-y-auto horizontal-scroll">
              <CourseList
                courseId={courseId}
                chapter={vidIndex.chapterIndex}
                module={vidIndex.modIndex}
                modules={modulesCollection}
                setVidIndex={setVidIndex}
              />
            </div>
          </div>
          <div className="bg-bg lg:rounded-s-3xl min-h-dvh py-6 max-tab:pt-[1rem] px-4 md:px-6 m-auto w-full flex">
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
        </section>
      </main>
    );
  }

  return <Paid />;
}
