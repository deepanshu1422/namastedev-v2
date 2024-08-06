"use client";

import {
  ChevronLeft,
  ChevronRight,
  Clock2,
  Eye,
  Play,
  PlaySquare,
  Share2,
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

import Image from "next/image";
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
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default function Details({
  title,
  courseId,
  modulesCollection,
  faqCollection,
  courseImage,
  module,
  chapter,
  longDescription,
  open,
  setOpen,
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
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  slug?: string;
  courseId: string;
  module: number;
  chapter: number;
  longDescription: React.JSX.Element;
  courseImage: {
    url: string;
    width: number;
    height: number;
    description: string;
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

  let chapterCount = modulesCollection.items.reduce(
    (acc, cur) => (acc += cur.chaptersCollection.total),
    0
  );

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

  return (
    <div className="flex flex-col gap-6 tab:w-3/4 w-full">
      <section className="flex flex-col gap-2">
        <VideoPlayer
          setOpen={setOpen}
          courseId={courseId}
          free={
            modulesCollection.items[module]?.chaptersCollection.items[chapter]
              ?.public
          }
          thumbnail={courseImage.url}
          title={
            modulesCollection.items[module]?.chaptersCollection.items[chapter]
              ?.title
          }
          ytId={
            modulesCollection.items[module]?.chaptersCollection.items[chapter]
              ?.youtubeId
          }
        />
        <div className="lg:hidden flex gap-0.5">
          <Button
            onClick={() => prevVideo()}
            disabled={disabledPrev}
            variant={"outline"}
            size={"icon"}
            className="rounded-xl"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <CourseDrawer
            setVidIndex={setVidIndex}
            module={module}
            chapter={chapter}
            modules={modulesCollection}
          />
          <Button
            onClick={() => nextVideo()}
            disabled={disabledNext}
            variant={"outline"}
            size={"icon"}
            className="rounded-xl"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Publisher
          disabledNext={disabledNext}
          disabledPrev={disabledPrev}
          nextVideo={nextVideo}
          prevVideo={prevVideo}
          name={"Aryan Singh"}
          src="/instructor.jpg"
        />
      </section>

      <Description
        title={title}
        chapterTitle={
          modulesCollection.items[module]?.chaptersCollection.items[chapter]
            ?.title
        }
        module={module}
        chapter={chapter}
        longDescription={longDescription}
      />
      <CourseInfo chapterCount={chapterCount} />
      <div className="hidden md:block">
        <FAQ faqs={faqCollection.items} />
      </div>
    </div>
  );
}

export function Publisher({
  name,
  src,
  disabledPrev,
  disabledNext,
  nextVideo,
  prevVideo,
}: {
  name: string;
  src: string;
  disabledPrev: boolean;
  disabledNext: boolean;
  nextVideo(): 0 | undefined;
  prevVideo(): 0 | undefined;
}) {
  return (
    <section className="flex justify-between">
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
          Prev
        </Button>
        <Button
          onClick={() => nextVideo()}
          disabled={disabledNext}
          variant={"outline"}
          size={"sm"}
          className="rounded-md"
        >
          Next
          <ChevronRight className="h-4 w-4 translate-y-0.5" />
        </Button>
      </div>

      <Button variant={"ghost"} size={"sm"} className="rounded-full gap-1">
        <Share2 className="w-4 h-4" />
        Share
      </Button>
    </section>
  );
}

function Description({
  title,
  module,
  chapter,
  chapterTitle,
  longDescription,
}: {
  title: string;
  module: number;
  chapter: number;
  chapterTitle: string;
  longDescription: React.JSX.Element;
}) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <span className="flex text-muted-foreground gap-1 font-semibold text-sm">
          <Badge className="rounded-md bg-prime/40 hover:bg-prime/40 text-white">
            {module + 1}.{chapter + 1}
          </Badge>
          <h2>{chapterTitle}</h2>
        </span>
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
      <span className="font-bold text-lg">Description</span>
      <div className="text-sm text-white/80 leading-6 techStack">
        {longDescription}
      </div>
      {/* <p className="text-sm text-white/80 leading-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus non
        veritatis magni minima accusamus quibusdam excepturi tenetur velit iusto
        vel modi fugit dolorum ea dolor dolore ad, ipsa aut? At. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Aliquid corrupti odio quod
        pariatur nam necessitatibus obcaecati deleniti illum praesentium ut
        rerum voluptate, aperiam nihil accusantium hic architecto autem
        quibusdam id.
      </p> */}
    </section>
  );
}

function CourseInfo({ chapterCount }: { chapterCount: number }) {
  return (
    <section className="flex flex-col gap-4">
      <span className="font-bold text-lg">Course Info</span>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Lessons</span>
          <span className="text-sm flex gap-1">
            <PlaySquare className="h-5 w-5" />
            {chapterCount}
          </span>
        </div>

        <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Duration</span>
          <span className="text-sm flex gap-1">
            <Clock2 className="h-5 w-5" />
            20h 32m
          </span>
        </div>

        <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Skill Level</span>
          <span className="text-sm flex gap-1">
            <SignalMedium className="h-5 w-5" />
            Beginner
          </span>
        </div>

        <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Views</span>
          <span className="text-sm flex gap-1">
            <Eye className="h-5 w-5" />
            80,930
          </span>
        </div>
      </div>
    </section>
  );
}

function CourseDrawer({
  module,
  chapter,
  modules,
  setVidIndex,
}: {
  module: number;
  chapter: number;
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
          Chapters
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
            chapter={Number(chapter)}
            module={Number(modules)}
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
