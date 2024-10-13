"use client";
import {
  CheckCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  PlaySquare,
  SignalMedium,
} from "lucide-react";

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

import React, { Dispatch, SetStateAction, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CourseList from "./courses";
import VideoPlayer from "./player";
import { useQuery } from "@tanstack/react-query";
import getChapterData from "../../../../../actions/getChapterData";

import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { MDXClient, SerializeResult } from "next-mdx-remote-client/csr";
import { serialize } from "next-mdx-remote-client/serialize";
import { Badge } from "@/components/ui/badge";
// import { courseProgress } from "@/lib/jotai";
import { useAtom } from "jotai";

const CodeSnippet = ({ children }: { children: string }) => (
  <div className="md:max-w-full horizontal-scroll w-full bg-slate-500 max-sm:w-[90dvw] font-semibold shrink">
    <SyntaxHighlighter style={gruvboxDark}>{children}</SyntaxHighlighter>
  </div>
);

export default function Details({
  title,
  courseId,
  modulesCollection,
  courseImage,
  module,
  chapter,
  vidIndex,
  setVidIndex,
}: {
  vidIndex: { modIndex: number; chapterIndex: number };
  setVidIndex: Dispatch<
    SetStateAction<{
      modIndex: number;
      chapterIndex: number;
    }>
  >;
  title: string;
  courseId: string;
  module: number;
  chapter: number;
  courseImage: {
    url: string;
    width: number;
    height: number;
    description: string;
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
}) {
  let disabledPrev = module == 0 && chapter == 0;
  let disabledNext =
    chapter ===
      modulesCollection.items[modulesCollection.total - 1].chaptersCollection
        .total -
        1 && module === modulesCollection.total - 1;

  function prevVideo() {
    if (vidIndex.chapterIndex === 0 && vidIndex.modIndex === 0) return 0;
    if (vidIndex.chapterIndex === 0 && vidIndex.modIndex !== 0) {
      setVidIndex({
        modIndex: vidIndex.modIndex - 1,
        chapterIndex:
          modulesCollection.items[vidIndex.modIndex - 1].chaptersCollection
            .items.length - 1,
      });
    }
    if (vidIndex.chapterIndex !== 0) {
      setVidIndex({ ...vidIndex, chapterIndex: (vidIndex.chapterIndex -= 1) });
    }
  }

  function nextVideo() {
    if (
      vidIndex.chapterIndex ===
        modulesCollection.items[modulesCollection.items.length - 1]
          .chaptersCollection.items.length -
          1 &&
      vidIndex.modIndex === modulesCollection.total - 1
    )
      return 0;

    if (
      vidIndex.chapterIndex ===
        modulesCollection.items[vidIndex.modIndex].chaptersCollection.total -
          1 &&
      vidIndex.modIndex !== modulesCollection.total - 1
    ) {
      setVidIndex({
        modIndex: vidIndex.modIndex + 1,
        chapterIndex: 0,
      });
    }
    if (
      vidIndex.chapterIndex !==
      modulesCollection.items[vidIndex.modIndex].chaptersCollection.total - 1
    ) {
      setVidIndex({ ...vidIndex, chapterIndex: (vidIndex.chapterIndex += 1) });
    }
  }

  const { data, isPending } = useQuery({
    queryKey: [
      modulesCollection.items[vidIndex.modIndex].chaptersCollection.items[
        vidIndex.chapterIndex
      ].sys.id,
    ],
    staleTime: 10000,
    queryFn: async ({ queryKey }) => {
      const mdx = await getChapterData({ id: queryKey[0] });

      // console.log(JSON.stringify(mdx.mdx));

      const mdxSource = await serialize({
        source: mdx.mdx,
      });

      // console.log(mdxSource);

      return { mdxSource: mdxSource, pdf: mdx.pdf };
    },
  });

  return (
    <div className="flex flex-col gap-4 tab:w-3/4 w-full break-all">
      <section className="flex flex-col gap-2">
        <VideoPlayer
          nextVideo={nextVideo}
          thumbnail={courseImage.url}
          title={
            modulesCollection.items[module]?.chaptersCollection.items[chapter]
              ?.title
          }
          ytId={
            modulesCollection.items[module]?.chaptersCollection.items[chapter]
              .youtubeId
          }
        />
        <div className="lg:hidden flex flex-col gap-1">
          <span className="flex gap-0.5 w-full">
            <Button
              onClick={() => prevVideo()}
              disabled={disabledPrev}
              variant={"outline"}
              // size={"sm"}
              className="rounded-xl w-full"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev Video
            </Button>
            <Button
              onClick={() => nextVideo()}
              disabled={disabledNext}
              variant={"outline"}
              // size={"sm"}
              className="rounded-xl w-full"
            >
              Next Video
              <ChevronRight className="h-4 w-4" />
            </Button>
          </span>
          <CourseDrawer
            vidIndex={vidIndex}
            setVidIndex={setVidIndex}
            module={module}
            chapter={chapter}
            modules={modulesCollection}
          />
        </div>
        <Publisher
          title={title}
          chapterId={
            modulesCollection.items[vidIndex.modIndex].chaptersCollection.items[
              vidIndex.chapterIndex
            ].sys.id
          }
          courseId={courseId}
          disabledNext={disabledNext}
          disabledPrev={disabledPrev}
          nextVideo={nextVideo}
          prevVideo={prevVideo}
          name={"30DaysCoding"}
          src="/logo.png"
        />
      </section>

      <section className="gap-1 font-bold sm:text-xl">
        <div className="inline bg-second rounded-md text-sm font-bold p-2 mr-1">
          {vidIndex.modIndex + 1}.{vidIndex.chapterIndex + 1}
        </div>
        {
          modulesCollection.items[vidIndex.modIndex].chaptersCollection.items[
            vidIndex.chapterIndex
          ].title
        }
      </section>
      <Description isPending={isPending} mdxSource={data?.mdxSource} />
      {/* {isPending ? <span>Loading</span> : data} */}
      {/* <div className="hidden md:block">
        <FAQ faqs={faqCollection.items} />
      </div> */}
      {data?.pdf && <PDFViewer url={data.pdf} />}
    </div>
  );
}

export function Publisher({
  title,
  courseId,
  chapterId,
  name,
  src,
  disabledPrev,
  disabledNext,
  nextVideo,
  prevVideo,
}: {
  title: string;
  chapterId: string;
  courseId: string;
  name: string;
  src: string;
  disabledPrev: boolean;
  disabledNext: boolean;
  nextVideo(): 0 | undefined;
  prevVideo(): 0 | undefined;
}) {
  // const [progress, setProgress] = useAtom(courseProgress);

  return (
    <section className="flex w-full gap-1 justify-between mt-1">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={src} alt={`${name} Instructor`} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((e) => e[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="flex flex-col gap-1">
          <span className="font-bold leading-4 text-sm">{name}</span>
          <span className="text-white/60 text-xs">Publisher</span>
        </span>
      </div>

      <div className="lg:flex hidden gap-0.5">
        <Button
          onClick={() => prevVideo()}
          disabled={disabledPrev}
          variant={"outline"}
          size={"sm"}
          className="rounded-md"
        >
          <ChevronLeft className="h-4 w-4 translate-y-0.5" />
          Prev Video
        </Button>
        <Button
          onClick={() => nextVideo()}
          disabled={disabledNext}
          variant={"outline"}
          size={"sm"}
          className="rounded-md"
        >
          Next Video
          <ChevronRight className="h-4 w-4 translate-y-0.5" />
        </Button>
      </div>

      {/* <Button
        onClick={() => {
          console.log(progress);
          setProgress(
            progress
              .find((e) => e.courseId === courseId)
              ?.chapterIds.includes(chapterId)
              ? progress.filter((e) => {
                  if (e.courseId === courseId)
                    return e.chapterIds.filter((e) => e !== chapterId);
                  return e;
                })
              : progress.map((e) => {
                  if (e.courseId === courseId)
                    return { ...e, chapterIds: [...e.chapterIds, chapterId] };
                  return e;
                })
          );
        }}
        variant={"outline"}
        className="gap-1 p-2 rounded-3xl"
      >
        <CheckCircle2 className="w-5 h-5" />
        <span className="line-clamp-1">Mark Complete</span>
      </Button> */}
    </section>
  );
}

function Description({
  isPending,
  mdxSource,
}: {
  isPending: boolean;
  mdxSource:
    | SerializeResult<Record<string, unknown>, Record<string, unknown>>
    | undefined;
}) {
  // let mdx = documentToMarkdown({ longDescription }).content;

  return (
    <section className="flex flex-col gap-2">
      <span className="font-bold text-lg">Description</span>
      {isPending ? (
        <>Loading Data...</>
      ) : (
        <div className="max-sm:text-sm text-white/80 leading-6 techStack">
          {!mdxSource ? (
            <ErrorComponent
              error={{
                message: "No MDX String was found",
                name: "Empty MDX",
              }}
            />
          ) : "error" in mdxSource ? (
            <ErrorComponent error={mdxSource.error} />
          ) : (
            <>
              <MDXClient
                {...mdxSource}
                components={{
                  CodeSnippet,
                  // pre: ({ children, defaultValue }) => {
                  //   const code = JSON.stringify(children?.toString());
                  //   return <CodeSnippet>{defaultValue}</CodeSnippet>;
                  // },
                }}
                onError={ErrorComponent}
              />
            </>
          )}
        </div>
      )}
    </section>
  );
}

function CourseInfo({ chapterCount }: { chapterCount: number }) {
  return (
    <section className="flex flex-col gap-4">
      <span className="font-bold text-lg">Course Info</span>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Lessons</span>
          <span className="text-sm flex gap-1">
            <PlaySquare className="h-5 w-5" />
            {chapterCount}
          </span>
        </div>

        {/* <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Duration</span>
          <span className="text-sm flex gap-1">
            <Clock2 className="h-5 w-5" />
            20h 32m
          </span>
        </div> */}

        <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Skill Level</span>
          <span className="text-sm flex gap-1">
            <SignalMedium className="h-5 w-5" />
            Beginner
          </span>
        </div>

        {/* <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Views</span>
          <span className="text-sm flex gap-1">
            <Eye className="h-5 w-5" />
            80,930
          </span>
        </div> */}
      </div>
    </section>
  );
}

function CourseDrawer({
  module,
  chapter,
  modules,
  vidIndex,
  setVidIndex,
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
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={"outline"} className="flex-1 rounded-xl">
          Course Content
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Course List</DrawerTitle>
          <DrawerDescription>
            This is a list of current course.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-6 py-1">
          <CourseList
            setOpen={setOpen}
            setVidIndex={setVidIndex}
            chapter={vidIndex.chapterIndex}
            module={vidIndex.modIndex}
            courseId=""
            modules={modules}
          />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button className="w-full" variant="outline">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function FAQ({
  faqs,
}: {
  faqs: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <section className="flex flex-col gap-4">
      <span className="font-bold text-lg">Frequently Asked Questions</span>
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

function PDFViewer({ url }: { url: string }) {
  return <iframe src={url} />;
}

function ErrorComponent({ error }: { error: Error }) {
  return (
    <div className="min-h-10 w-full flex">
      <Badge variant={"destructive"} className="m-auto rounded-md text-white">
        No Description
      </Badge>
    </div>
  );
}
