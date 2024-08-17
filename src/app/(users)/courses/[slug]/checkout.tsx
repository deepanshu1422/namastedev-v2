"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { Children, Dispatch, SetStateAction } from "react";
import { FAQ } from "./details";
import { useSession } from "next-auth/react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardContent } from "@/components/ui/card";

export default function Checkout({
  amount,
  courseId,
  open,
  setOpen,
  faqCollection,
  features,
}: {
  amount: number;
  courseId: string;
  open: boolean;
  features: string[];
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
    <section className="flex flex-col md:max-w-[25%] shrink-0">
      <div className="sticky top-20 flex flex-col gap-6 md:gap-3">
        {/* @ts-ignore */}
        {!session?.user?.courseId?.includes(courseId) && (
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
              {features.map((e, i) => (
                <p key={i} className="flex items-center gap-1 text-xs">
                  <span className="shrink-0 bg-prime/40 h-6 w-6 grid place-items-center rounded-md text-white/80 font-bold">
                    <Check className="w-4 h-4" />
                  </span>
                  {e}
                </p>
              ))}
            </div>
            <div className="group relative mt-3">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
              <Button
                onClick={() => setOpen(true)}
                variant={"outline"}
                size={"lg"}
                className={`font-semibold text-foreground/80 hover:text-foreground relative w-full text-base p-6`}
              >
                Buy Now
              </Button>
            </div>
            {/* <Button
              className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg mt-3"
            >
              Buy Now
            </Button> */}
          </div>
        )}

        <div className="bg-gradient-to-b from-head/30 to-second/20 flex justify-between rounded-md shadow-lg backdrop-blur-sm shadow-black/40 overflow-hidden">
          <Reviews>
            <div className="flex items-center gap-1 w-full">
              <span className="p-4 shadow-lg shadow-black">
                <Star className="h-8 w-8 text-prime" />
              </span>
              <Button className="mx-auto" size={"sm"} variant={"link"}>
                See Review
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Reviews>
        </div>

        {/* <div className="bg-gradient-to-b from-head/30 to-second/20 flex flex-col gap-4 rounded-md shadow-lg backdrop-blur-sm shadow-black/40 p-4 px-3">
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
        </div> */}

        <div className="bg-gradient-to-b from-head/30 to-second/20 flex flex-col gap-4 rounded-md shadow-lg backdrop-blur-sm shadow-black/40 p-4 px-3">
          <span className="font-bold">Completion Certificate</span>
          <Image
            src={"/certificate.png"}
            width={500}
            height={500}
            alt="30DC Completion Certificate"
            className="aspect-[16/10] object-cover rounded-lg w-full"
          />
        </div>

        <div className="bg-gradient-to-b from-head/30 to-second/20 flex flex-col gap-4 rounded-md shadow-lg backdrop-blur-sm shadow-black/40 p-4 px-3">
          <span className="font-bold">Special Deals</span>

          <div className="grid gap-2">
            <Link
              href={"/mentorship"}
              className="grid grid-cols-3 gap-2 md:gap-6 md:max-w-60 w-full"
            >
              <Image
                className="rounded-md max-sm:w-full md:max-w-20 max-h-40 object-cover"
                src={"/mentorship.jpeg"}
                alt={"mern course"}
                width={300}
                height={200}
              />
              <div className="col-span-2 flex justify-between items-center gap-1">
                <div className="flex flex-col justify-center gap-1">
                  <p className="text-sm font-bold line-clamp-1">
                    Join Mentorship
                  </p>
                  <span className="font-semibold text-xs text-muted-foreground">
                    Lifetime Access
                  </span>
                </div>
                <ChevronRight className="w-6 h-6  stroke-prime" />
              </div>
            </Link>

            {/* <div className="grid grid-cols-3 gap-2 md:gap-5 md:max-w-60 w-full">
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
            </div> */}
          </div>
        </div>

        <div className="md:hidden block">
          <FAQ faqs={faqCollection.items} />
        </div>
      </div>
    </section>
  );
}

export function Reviews({ children }: { children: React.ReactNode }) {
  const testimonials = [
    { src: "https://i.ibb.co/8KN7nys/16.webp", alt: "30dayscoding dsa course" },
    {
      src: "https://i.ibb.co/0J72X2f/17.webp",
      alt: "30dayscoding mern course",
    },
    {
      src: "https://i.ibb.co/6mWDV5q/18.webp",
      alt: "30dayscoding next js course",
    },
    {
      src: "https://i.ibb.co/kgspnvT/13.webp",
      alt: "30dayscoding courses review",
    },
    { src: "https://i.ibb.co/F0CFTNv/14.webp", alt: "30dc courses" },
    { src: "https://i.ibb.co/dJpwnzL/15.webp", alt: "30dc mern stack course" },
    {
      src: "https://i.ibb.co/N6Gc2zR/11.webp",
      alt: "30dayscoding dsa course review",
    },
    {
      src: "https://i.ibb.co/QfnJGXv/19.webp",
      alt: "30dayscoding mern course review",
    },
    {
      src: "https://i.ibb.co/HVRtBmJ/8.webp",
      alt: "30dayscoding next js course review",
    },
    { src: "https://i.ibb.co/LCKcpXg/9.webp", alt: "30dc courses" },
    { src: "https://i.ibb.co/jk62VCP/10.webp", alt: "30dc mern stack course" },
    { src: "https://i.ibb.co/pfxzkc8/6.webp", alt: "30dc next js course" },
    { src: "https://i.ibb.co/k9zHVb5/7.webp", alt: "30dc dsa course" },
    { src: "https://i.ibb.co/3djxbxX/3.webp", alt: "30dayscoding dsa course" },
    { src: "https://i.ibb.co/5L0vGfJ/4.webp", alt: "30dayscoding mern course" },
    {
      src: "https://i.ibb.co/5cKvNJC/5.webp",
      alt: "30dayscoding next js course",
    },
    {
      src: "https://i.ibb.co/0XXfv9s/1.webp",
      alt: "30dayscoding courses review",
    },
    { src: "https://i.ibb.co/fQYRMVJ/2.webp", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/Mg2k5Jt/reviw-12.jpg",
      alt: "30dc mern stack course",
    },
    {
      src: "https://i.ibb.co/jJPQqZw/reviw-13.jpg",
      alt: "30dayscoding dsa course review",
    },
    {
      src: "https://i.ibb.co/tJFqs8j/reviw-11.jpg",
      alt: "30dayscoding mern course review",
    },
    {
      src: "https://i.ibb.co/WGxCKgD/reviw-10.jpg",
      alt: "30dayscoding next js course review",
    },
    { src: "https://i.ibb.co/88QpJnP/reviw-9.jpg", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/TmJbQ31/reviw-8.jpg",
      alt: "30dc mern stack course",
    },
    { src: "https://i.ibb.co/WPznNKw/reviw-7.jpg", alt: "30dc next js course" },
    { src: "https://i.ibb.co/t4ZqRkd/reviw-6.jpg", alt: "30dc dsa course" },
    {
      src: "https://i.ibb.co/mbHc9wN/reviw-5.jpg",
      alt: "30dayscoding dsa course",
    },
    {
      src: "https://i.ibb.co/K9XR6n8/reviw-4.jpg",
      alt: "30dayscoding mern course",
    },
    {
      src: "https://i.ibb.co/1nMFSqh/reviw-3.jpg",
      alt: "30dayscoding next js course",
    },
    {
      src: "https://i.ibb.co/V35SvJM/reviw-2.jpg",
      alt: "30dayscoding courses review",
    },
    { src: "https://i.ibb.co/4FBYK6x/reviw-1.jpg", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/7JJ7qgH/IMG-0012.jpg",
      alt: "30dc mern stack course",
    },
    {
      src: "https://i.ibb.co/X3txcLJ/IMG-0013.jpg",
      alt: "30dayscoding dsa course review",
    },
    {
      src: "https://i.ibb.co/rsds6g5/IMG-0014.jpg",
      alt: "30dayscoding mern course review",
    },
    {
      src: "https://i.ibb.co/3W4tMWy/IMG-0015.jpg",
      alt: "30dayscoding next js course review",
    },
    { src: "https://i.ibb.co/vPnLQ5z/IMG-0559.jpg", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/RBQGz97/IMG-0560.jpg",
      alt: "30dc mern stack course",
    },
    {
      src: "https://i.ibb.co/68RZ8zR/IMG-0570.jpg",
      alt: "30dc next js course",
    },
    { src: "https://i.ibb.co/8rLwbcp/IMG-4948.jpg", alt: "30dc dsa course" },
    {
      src: "https://i.ibb.co/njrL67D/IMG-5333.jpg",
      alt: "30dayscoding dsa course",
    },
    {
      src: "https://i.ibb.co/mTXxFjj/IMG-6393.jpg",
      alt: "30dayscoding mern course",
    },
    {
      src: "https://i.ibb.co/zhfhZ0G/IMG-6394.jpg",
      alt: "30dayscoding next js course",
    },
    {
      src: "https://i.ibb.co/Zc419mR/IMG-6570.jpg",
      alt: "30dayscoding courses review",
    },
    { src: "https://i.ibb.co/8bGdxZM/IMG-0022.jpg", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/8MXtjL5/IMG-0064.jpg",
      alt: "30dc mern stack course",
    },
    {
      src: "https://i.ibb.co/QmV84Hg/IMG-0134.jpg",
      alt: "30dayscoding dsa course review",
    },
    {
      src: "https://i.ibb.co/8PwTW9S/IMG-7686.jpg",
      alt: "30dayscoding mern course review",
    },
    {
      src: "https://i.ibb.co/wrfhr1m/IMG-7687.png",
      alt: "30dayscoding next js course review",
    },
    {
      src: "https://i.ibb.co/0rNJjfr/IMG-7689.png",
      alt: "30dayscoding mern course",
    },
    {
      src: "https://i.ibb.co/fXZqDvj/IMG-7690.png",
      alt: "30dayscoding next js course",
    },
    {
      src: "https://i.ibb.co/jHNQVQL/IMG-7691.png",
      alt: "30dayscoding courses review",
    },
    { src: "https://i.ibb.co/3dYxTMz/IMG-7692.png", alt: "30dc courses" },
    {
      src: "https://i.ibb.co/3dYxTMz/IMG-7692.png",
      alt: "30dc mern stack course",
    },
    {
      src: "https://i.ibb.co/zSt7QXp/IMG-7841.jpg",
      alt: "30dayscoding dsa course review",
    },
    {
      src: "https://i.ibb.co/RvK9Hy4/IMG-7982.jpg",
      alt: "30dayscoding mern course review",
    },
    {
      src: "https://i.ibb.co/0yxW2MG/IMG-8087.jpg",
      alt: "30dayscoding next js course review",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-6xl">
        <DialogHeader>
          <DialogTitle>Course Review</DialogTitle>
          <DialogDescription>
            These are the screenshoots of the original reviews sent by the
            students.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4 flex-wrap max-h-96 overflow-auto justify-center">
          {testimonials.map(({ alt, src }, i) => (
            <Card key={i}>
              <CardContent className="flex relative aspect-square items-center justify-center h-60 sm:h-40">
                <Image src={src} alt={alt} fill className="object-cover" />
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
