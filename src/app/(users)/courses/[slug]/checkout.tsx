"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Circle,
  Folder,
  NotebookText,
  Play,
  PlayCircle,
  Phone,
  Smartphone,
  Star,
  BadgeCheck,
  UsersRound,
  PlaySquare,
} from "lucide-react";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { FAQ } from "./details";
import { useSession } from "next-auth/react";

export default function Checkout({
  amount,
  courseId,
  open,
  setOpen,
  faqCollection,
}: {
  amount: number;
  courseId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  faqCollection: {
    items: {
      question: string;
      answer: string;
    }[];
  };
}) {
  const { data: session } = useSession();
  return (
    <section className="flex flex-col gap-6 md:gap-3 min-w-[25%] shrink-0">
      {/* @ts-ignore */}
      {!session?.user?.courseId.includes(courseId) && (
        <div className="bg-gradient-to-b from-head/30 to-second/20 flex flex-col gap-1 rounded-md min-h-60 shadow-lg backdrop-blur-sm shadow-black/40 p-3">
          <span className="text-xs text-white/80">Complete Course</span>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">₹{amount}</span>
              <span className="text-sm line-through text-muted-foreground">
                ₹{amount * 4}
              </span>
            </div>
            <Badge className="bg-prime/50 hover:bg-prime/60 text-white">
              75% off
            </Badge>
          </div>

          <span className="text-white/80 text-sm font-semibold py-2">
            Course Includes:
          </span>
          <div className="flex flex-col gap-2 text-white/60 font-semibold">
            <p className="flex items-center gap-1 text-xs">
              <span className="bg-prime/40 h-6 w-6 grid place-items-center rounded-full text-white/80 font-bold">
                56
              </span>
              hours on demand videos
            </p>
            <p className="flex items-center gap-1 text-xs">
              <span className="bg-prime/40 h-6 w-6 grid place-items-center rounded-full text-white/80 font-bold">
                6
              </span>
              Downloadable Resourses
            </p>
            <p className="flex items-center gap-1 text-xs">
              <span className="bg-prime/40 h-6 w-6 grid place-items-center rounded-full text-white/80 font-bold">
                10
              </span>
              Articles
            </p>
            <p className="flex items-center gap-1 text-xs">
              <span className="bg-prime/40 h-6 w-6 grid place-items-center rounded-full text-white/80 font-bold">
                <Smartphone className="w-3 h-3" />
              </span>
              Mobile Friendly
            </p>
          </div>
          <Button
            onClick={() => setOpen(true)}
            size={"lg"}
            className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg mt-3"
          >
            Buy Now
          </Button>
        </div>
      )}

      <div className="bg-gradient-to-b from-head/30 to-second/20 flex justify-between rounded-md shadow-lg backdrop-blur-sm shadow-black/40 p-4 px-2">
        <div className="flex items-center gap-1 w-full">
          <span className="text-5xl">🌟</span>
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex w-full justify-between">
              <span className="text-sm font-bold">Rating</span>
              <div className="flex gap-0.5">
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
                <Star className="fill-prime/80 stroke-prime/80 h-4 w-4" />
              </div>
            </div>
            <div className="flex text-xs w-full justify-between">
              <span className="text-white/80">120 Reviews</span>
              <span className="text-prime font-bold">4.78</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-head/30 to-second/20 flex flex-col gap-4 rounded-md shadow-lg backdrop-blur-sm shadow-black/40 p-4 px-3">
        <span className="font-bold">Publisher</span>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={"/instructor.jpg"} alt="Instructor" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <span className="flex flex-col gap-1">
            <span className="font-bold leading-4 text-sm">Aryan Singh</span>
            <span className="font-semibold text-white/60 text-xs">
              SDE@Goolge
            </span>
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5 items-center text-xs font-medium">
            <Star className="w-5 h-5 text-prime/80" />
            4.5 Mentor Rating
          </div>
          <div className="flex gap-1.5 items-center text-xs font-medium">
            <BadgeCheck className="w-5 h-5 text-prime/80" />
            408 Reviews
          </div>
          <div className="flex gap-1.5 items-center text-xs font-medium">
            <UsersRound className="w-5 h-5 text-prime/80" />
            1,200 Students
          </div>
          <div className="flex gap-1.5 items-center text-xs font-medium">
            <PlaySquare className="w-5 h-5 text-prime/80" />8 Courses
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-head/30 to-second/20 flex flex-col gap-4 rounded-md shadow-lg backdrop-blur-sm shadow-black/40 p-4 px-3">
        <span className="font-bold">Recommanded Courses</span>

        <div className="grid gap-2">
          <div className="grid grid-cols-3 gap-2 md:gap-5 md:max-w-60 w-full">
            <Image
              className="rounded-md max-sm:w-full md:max-w-20 max-h-40 object-cover"
              src={"/mern.jpg"}
              alt={"mern course"}
              width={280}
              height={180}
            />
            <div className="col-span-2 flex flex-col gap-1">
              <p className="text-xs font-bold line-clamp-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing
              </p>
              <span className="text-xs text-muted-foreground">
                By Aryan Singh
              </span>
              <span className="flex gap-1 text-sm text-prime font-extrabold items-center">
                <Star className="w-5 h-4 fill-prime stroke-prime" />
                4.7
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-5 md:max-w-60 w-full">
            <Image
              className="rounded-md max-sm:w-full md:max-w-20 max-h-40 object-cover"
              src={"/mern.jpg"}
              alt={"mern course"}
              width={280}
              height={180}
            />
            <div className="col-span-2 flex flex-col gap-1">
              <p className="text-xs font-bold line-clamp-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing
              </p>
              <span className="text-xs text-muted-foreground">
                By Aryan Singh
              </span>
              <span className="flex gap-1 text-sm text-prime font-extrabold items-center">
                <Star className="w-5 h-4 fill-prime stroke-prime" />
                4.7
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-5 md:max-w-60 w-full">
            <Image
              className="rounded-md max-sm:w-full md:max-w-20 max-h-40 object-cover"
              src={"/mern.jpg"}
              alt={"mern course"}
              width={280}
              height={180}
            />
            <div className="col-span-2 flex flex-col gap-1">
              <p className="text-xs font-bold line-clamp-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing
              </p>
              <span className="text-xs text-muted-foreground">
                By Aryan Singh
              </span>
              <span className="flex gap-1 text-sm text-prime font-extrabold items-center">
                <Star className="w-5 h-4 fill-prime stroke-prime" />
                4.7
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        <FAQ faqs={faqCollection.items} />
      </div>
    </section>
  );
}
