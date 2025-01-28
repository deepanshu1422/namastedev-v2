"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Check, Plug, Plus } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function UpsellModal({
  open,
  setOpen,
  setPaymentOpen,
  addToCart,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart?: () => void;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const info = {
    title: "Exclusive Bundle Offer",
    desc: "Get All Courses at 90% off. Lifetime access and certificate for each course.",
  };

  function Offer({
    className,
    addToCart,
  }: {
    className: string;
    addToCart: () => void;
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
        <Link
          href={"/bundle/complete-package-all-course-bundle?sheet=true"}
          className="bg-gradient-to-t to-head/80 from-second/80 p-3 rounded-md"
        >
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
              <span className="text-2xl font-bold">₹999</span>
              <span className="text-xl font-medium text-muted-foreground line-through italic">
                ₹9999
              </span>
            </div>

            <Badge className="py-1 px-2 rounded h-fit bg-red-500 hover:bg-red-700 text-white">
              95% off
            </Badge>
          </div>
        </Link>

        <Link
          href={"/bundle/complete-package-all-course-bundle?sheet=true"}
          className="relative overflow-hidden group"
        >
          <Button className="bg-prime/80 hover:bg-prime text-white relative w-full">
            Claim all course bundle offer
          </Button>
        </Link>

        <div className="flex flex-col gap-3">
          <Button
            onClick={() => {
              // addToCart();
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

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-2 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{info.title}</DialogTitle>
            <DialogDescription>{info.desc}</DialogDescription>
          </DialogHeader>
          <Offer addToCart={addToCart} className="" />
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
        <Offer addToCart={addToCart} className="mx-4" />
      </DrawerContent>
    </Drawer>
  );
}
