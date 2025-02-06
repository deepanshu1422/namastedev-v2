"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Check, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { Children, Dispatch, SetStateAction } from "react";
import { FAQ } from "./details";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { UpsellLinkedIn, UpsellStudyAbroad, UpsellMasterAI} from "@/components/upsell";

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

export default function Checkout() {
  const { data: session } = useSession();
  return (
    <section className="flex flex-col md:max-w-[25%] shrink-0">
      <div className="sticky top-20 flex flex-col gap-6 md:gap-3 max-md:hidden">
        {/* <UpsellLinkedIn />
        <UpsellStudyAbroad />
        <UpsellMasterAI />

        <Link
          href={"/bundle/complete-package-all-course-bundle"}
          className="bg-gradient-to-b from-head/30 to-second/20 flex flex-col gap-2 rounded-md shadow-lg backdrop-blur-sm shadow-black/40 p-2"
        >
          <span className="font-bold">Get All 30DC Courses</span>
          <Image
            src={
              "https://images.ctfassets.net/3pv3o0yr6pgj/70h8KSfhjqdiIecfwf6fJY/c67a069d098b3c87e0774b1db9f6f920/17_courses.jpg"
            }
            width={500}
            height={500}
            alt="30DC Completion Certificate"
            className="aspect-[16/10] object-cover rounded-lg w-full"
          />
          <Button
            variant={"outline"}
            size={"sm"}
            className={`font-semibold text-foreground/80 hover:text-foreground relative w-full`}
          >
            Buy @ ₹999/-
          </Button>
        </Link> */}
        <div className="">
          <div className="rounded-lg border-prime border bg-card max-h-fit h-fit w-full flex flex-col gap-2 p-1">
            <Badge className="rounded bg-prime/60 hover:bg-prime/80 text-white text-center w-full">
              🎉 Certificate Ready!
            </Badge>
            <p className="text-sm px-2">
              Your certificate is generated. Download it from here now!
            </p>
            <a
              href="https://senja.io/p/30-days-coding/r/AgSF4E"
              target="_blank"
              className="p-2 bg-prime/80 hover:bg-prime text-white rounded text-center"
            >
              Download Certificate
            </a>
          </div>
        </div>
        
        <div className="">
          <div className="rounded-lg border-prime border bg-card max-h-fit h-fit w-full flex flex-col gap-2 p-1">
            <Badge className="rounded bg-prime/60 hover:bg-prime/80 text-white text-center w-full">
              📚 Course Updates
            </Badge>
            <ul className="text-sm px-2 list-disc list-inside">
              <li>50+ New videos added</li>
              <li>10+ projects uploaded</li>
              <li>Course materials updated</li>
            </ul>
            <a
              href="https://docs.google.com/document/d/1Z1uKHBU5Shb3UeFYWkuAu2rHACU-uOx-1sYsyrX7meM/edit"
              target="_blank"
              className="p-2 bg-prime/80 hover:bg-prime text-white rounded text-center"
            >
              All guides for you
            </a>
          </div>
        </div>
        
        <div className="mt-5">
          <div className="rounded-lg border-prime border bg-card max-h-fit h-fit w-full flex flex-col gap-2 p-1">
            <Badge className="rounded bg-prime/60 hover:bg-prime/80 text-white text-center w-full">
              🔗 Quick Resources
            </Badge>
            <ul className="text-sm px-2 list-disc list-inside">
              <li><a href="/playground" className="hover:text-prime">Code Playground</a></li>
              <li><a href="/projects" className="hover:text-prime">Practice Projects</a></li>
              <li><a href="/interview" className="hover:text-prime">Interview Prep</a></li>
              <li><a href="/roadmaps" className="hover:text-prime">Learning Roadmaps</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews({ children }: { children: React.ReactNode }) {
  const testimonials = [
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
    { src: "https://i.ibb.co/8KN7nys/16.webp", alt: "30dayscoding dsa course" },
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-h-96 w-full overflow-auto justify-center horizontal-scroll">
          {testimonials.map(({ alt, src }, i) => (
            <Card
              className="w-full bg-slate-400 overflow-hidden h-60 sm:h-40"
              key={i}
            >
              <CardContent className="flex relative items-center justify-center bg-slate-800 h-full">
                <Image src={src} alt={alt} fill className="object-contain" />
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
