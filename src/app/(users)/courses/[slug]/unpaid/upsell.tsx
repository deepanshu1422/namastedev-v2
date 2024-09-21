"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Check, Plug, Plus } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function UpsellModal({
  title = "Job Ready Bundle - Full Stack, DSA, Interview Prep",
  slug = "job-ready-bundle-full-stack-dsa-interview-prep",
  amount = "999",
  bigAmount = "9999",
  percentage = "90",
  open,
  setOpen,
  setPaymentOpen,
  setBundelPaymentOpen,
}: {
  title?: string;
  slug?: string;
  amount?: string;
  bigAmount?: string;
  percentage?: string;
  open: boolean;
  setPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBundelPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const info = {
    title: "Exclusive Bundle Offer",
    desc: "Get All Courses at 90% off. Lifetime access and certificate for each course.",
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-2 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{info.title}</DialogTitle>
            <DialogDescription>{info.desc}</DialogDescription>
          </DialogHeader>
          <Offer
            title={title}
            slug={slug}
            amount={amount}
            bigAmount={bigAmount}
            percentage={percentage}
            setOpen={setOpen}
            setPaymentOpen={setPaymentOpen}
            setOpenBundle={setBundelPaymentOpen}
            className=""
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{info.title}</DrawerTitle>
          <DrawerDescription className="line-clamp-2">
            {info.desc}
          </DrawerDescription>
        </DrawerHeader>
        <Offer
          title={title}
          slug={slug}
          amount={amount}
          bigAmount={bigAmount}
          percentage={percentage}
          setOpen={setOpen}
          setPaymentOpen={setPaymentOpen}
          setOpenBundle={setBundelPaymentOpen}
          className="mx-4"
        />
      </DrawerContent>
    </Drawer>
  );
}

function Offer({
  title = "Job Ready Bundle - Full Stack, DSA, Interview Prep",
  slug = "job-ready-bundle-full-stack-dsa-interview-prep",
  amount = "999",
  bigAmount = "9999",
  percentage = "90",
  className,
  setOpen,
  setPaymentOpen,
  setOpenBundle,
}: {
  title?: string;
  slug?: string;
  amount?: string;
  bigAmount?: string;
  percentage?: string;
  className: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenBundle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const courses = [
    "Full Stack Mastery Course",
    "DSA Mastery Course",
    "Blockchain Mastery Course",
    "Data Analytics Course",
    "AI Mastery Course",
  ];
  return (
    <div className={`${className} cursor-pointer flex flex-col pb-2 gap-2`}>
      <div className="bg-gradient-to-t to-head/80 from-second/80 p-3 rounded-md">
        <div className="flex justify-between mb-2">
          <h3 className="text-lg line-clamp-2 font-semibold">
            17 Course bundle
          </h3>
          <span className="uppercase font-bold bg-yellow-500 text-black text-xs px-3 py-1 rounded-full h-fit break-all line-clamp-1">
            Best Value
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1.5 text-xs pb-3">
            {courses.map((e, i) => (
              <span key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 stroke-primary" />
                {e}
              </span>
            ))}
            <span className="flex items-center gap-2">
              <Plus className="w-4 h-4 stroke-primary" />
              12 More Courses
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center pb-3">
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold">₹2499</span>
            <span className="text-xl font-medium text-muted-foreground line-through italic">
              ₹25000
            </span>
          </div>

          <Badge className="py-1 px-2 rounded h-fit bg-red-500 hover:bg-red-700 text-white">
            90% off
          </Badge>
        </div>
      </div>

      {/* <div className="bg-gradient-to-t to-stone-800/80 from-stone-900/80 p-3 rounded-md">
        <div className="flex flex-col gap-1.5 text-sm pb-3">
          <h3 className="text-lg line-clamp-2 font-semibold">{title}</h3>
        </div>

        <div className="flex justify-between items-center pb-3">
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold">₹{amount}</span>
            <span className="text-xl font-medium text-muted-foreground line-through italic">
              ₹{bigAmount}
            </span>
          </div>

          <Badge className="py-1 px-2 rounded h-fit bg-red-500 hover:bg-red-700 text-white">
            {percentage}% off
          </Badge>
        </div>
        <Link
          href={`/bundle/${slug}?sheet=true`}
          className="relative overflow-hidden group"
        >
          <Button className="relative w-full bg-prime/80 hover:bg-prime text-white">
            Claim this bundle offer
          </Button>
        </Link>
      </div> */}

      <Link
        href={"/bundle/complete-package-all-course-bundle?sheet=true"}
        className="relative overflow-hidden group"
      >
        {/* <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div> */}
        <Button className="bg-prime/80 hover:bg-prime text-white relative w-full">
          Claim all course bundle offer
        </Button>
      </Link>

      <div className="flex flex-col gap-3">
        <Button
          onClick={() => {
            setOpen(false);
            setPaymentOpen(true);
          }}
          className="w-full text-wrap"
          variant={"secondary"}
        >
          No thanks, continue with single course
        </Button>
      </div>
    </div>
  );
}
