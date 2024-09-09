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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Check, TicketPercent } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function UpsellModal({
  open,
  setOpen,
  setPaymentOpen,
  setBundelPaymentOpen,
}: {
  open: boolean;
  setPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBundelPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const info = {
    title: "Exclusive Bundle Offer",
    desc: "Unlock your full potential now. Get All 5 courses package bundle at discounted price.",
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
  className,
  setOpen,
  setPaymentOpen,
  setOpenBundle,
}: {
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
    <div className={`${className} cursor-pointer flex flex-col py-2`}>
      <div className="flex flex-col gap-1.5 text-sm pb-3">
        {courses.map((e, i) => (
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 stroke-primary" />
            {e}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pb-3">
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold">₹999</span>
          <span className="text-xl font-medium text-muted-foreground line-through italic">₹999</span>
        </div>

        <Badge className="py-1 px-2 rounded h-fit bg-prime/50 hover:bg-prime/80 text-white">90% off</Badge>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href={"/bundle/complete-package-all-course-bundle?sheet=true"}
          className="relative overflow-hidden"
        >
          <Button
            onClick={() => {
              setOpen(false);
              setPaymentOpen(true);
            }}
            className="w-full bg-prime/80 hover:bg-prime text-white"
          >
            Claim Your Bundle Now
          </Button>
        </Link>
        <Button
          onClick={() => {
            setOpen(false);
            setPaymentOpen(true);
          }}
          className="w-full text-wrap"
          variant={"secondary"}
        >
          No thanks, Continue
        </Button>
      </div>
    </div>
  );
}
