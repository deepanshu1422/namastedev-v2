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
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CourseList from "./courses";

export default function Details() {
  return (
    <div className="flex flex-col gap-6 tab:w-3/4 w-full">
      <section className="flex flex-col gap-2">
        <div className="relative aspect-video rounded-xl overflow-hidden w-full">
          <Image
            loader={() =>
              "https://cdn.motiondesign.school/uploads/2023/10/blender-and-after-effects.jpg"
            }
            src={
              "https://cdn.motiondesign.school/uploads/2023/10/blender-and-after-effects.jpg"
            }
            alt="blender course"
            fill
            className="object-cover"
          />
          <button className="h-14 tab:h-24 aspect-square bg-white/30 backdrop-blur-lg rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            <Play className="tab:h-12 h-8 tab:w-12 w-8 fill-white m-auto translate-x-1" />
          </button>
        </div>
        <div className="md:hidden flex gap-0.5">
          <Button variant={"outline"} size={"icon"} className="rounded-xl">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <CourseDrawer />
          <Button variant={"outline"} size={"icon"} className="rounded-xl">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        {/* <span className="lg:hidden">P</span> */}
        <Publisher name={"Aryan Singh"} src="/instructor.jpg" />
      </section>

      <Description />
      <CourseInfo />
      <div className="hidden md:block">
        <FAQ />
      </div>
    </div>
  );
}

export function Publisher({ name, src }: { name: string; src: string }) {
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
      <Button variant={"ghost"} size={"sm"} className="rounded-full gap-1">
        <Share2 className="w-4 h-4" />
        Share
      </Button>
    </section>
  );
}

function Description() {
  return (
    <section className="flex flex-col gap-2">
      <span className="font-bold text-lg">Description</span>
      <p className="text-sm text-white/80 leading-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus non
        veritatis magni minima accusamus quibusdam excepturi tenetur velit iusto
        vel modi fugit dolorum ea dolor dolore ad, ipsa aut? At. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Aliquid corrupti odio quod
        pariatur nam necessitatibus obcaecati deleniti illum praesentium ut
        rerum voluptate, aperiam nihil accusantium hic architecto autem
        quibusdam id.
      </p>
    </section>
  );
}

function CourseInfo() {
  return (
    <section className="flex flex-col gap-4">
      <span className="font-bold text-lg">Course Info</span>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="flex flex-col gap-1 p-5 rounded-xl bg-second/80 font-semibold">
          <span className="text-xs text-white/70">Lessons</span>
          <span className="text-sm flex gap-1">
            <PlaySquare className="h-5 w-5" />
            128
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

function CourseDrawer() {
  return (
    <Drawer>
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
          <CourseList />
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

export function FAQ() {
  const qna = [
    {
      title: "How the course will help me in future ?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse dolor, dolores enim, architecto saepe impedit vitae quam earum doloribus, voluptate sit delectus reprehenderit mollitia non placeat. Ullam, quisquam facere!",
    },
    {
      title: "Why the course will help me in future 2 ?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse dolor, dolores enim, architecto saepe impedit vitae quam earum doloribus, voluptate sit delectus reprehenderit mollitia non placeat. Ullam, quisquam facere!",
    },
    {
      title: "What the course about can you mail me the info ?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse dolor, dolores enim, architecto saepe impedit vitae quam earum doloribus, voluptate sit delectus reprehenderit mollitia non placeat. Ullam, quisquam facere!",
    },
    {
      title: "Why thing are bad in my life ?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse dolor, dolores enim, architecto saepe impedit vitae quam earum doloribus, voluptate sit delectus reprehenderit mollitia non placeat. Ullam, quisquam facere!",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <span className="font-bold text-lg">Frequently Asked Questions</span>
      <div className="grid gap-2">
        <Accordion className="flex flex-col gap-3" type="single" collapsible>
          {qna.map(({ answer, title }, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-sm bg-second/80 rounded-xl p-4 font-semibold text-start text-white/90">
                {title}
              </AccordionTrigger>
              <AccordionContent className="max-sm:text-xs bg-second/30 rounded-b-xl p-4 items-start text-foreground/70">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
