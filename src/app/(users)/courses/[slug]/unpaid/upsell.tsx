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
import { TicketPercent } from "lucide-react";
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
    title: "Bundle Offer",
    desc: "Instead of buying only one course you can get all courses at discounted price.",
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-2 sm:max-w-[425px]">
          <DialogHeader>
            {/* <DialogTitle>{info.title}</DialogTitle> */}
            {/* <DialogDescription>{info.desc}</DialogDescription> */}
          </DialogHeader>
          <ProfileForm setOpen={setOpen} setOpenBundle={setBundelPaymentOpen} className="" />
          <div className="w-full text-sm items-center flex gap-2">
            <hr className="w-full" />
            OR
            <hr className="w-full" />
          </div>
          <DialogFooter>
            {/* <DialogClose asChild> */}
            <Button
              onClick={() => {
                setOpen(false);
                setPaymentOpen(true);
              }}
              className="bg-prime/80 hover:bg-prime text-white w-full"
            >
              Continue Purchase...
            </Button>
            {/* </DialogClose> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          {/* <DrawerTitle>{info.title}</DrawerTitle> */}
          {/* <DrawerDescription>{info.desc}</DrawerDescription> */}
        </DrawerHeader>
        <ProfileForm setOpen={setOpen} setOpenBundle={setBundelPaymentOpen} className="mx-4" />
        <div className="w-full text-sm items-center flex gap-2">
          <hr className="w-full" />
          OR
          <hr className="w-full" />
        </div>
        <DrawerFooter className="pt-2">
          {/* <DrawerClose asChild> */}
          <Button
            onClick={() => {
              setOpen(false);
              setPaymentOpen(true);
            }}
            className="bg-prime/80 hover:bg-prime text-white "
          >
            Continue Purchase...
          </Button>
          {/* </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({
  className,
  setOpen,
  setOpenBundle,
}: {
  className: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenBundle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${className} cursor-pointer border-2 border-primary/60 rounded flex flex-col`}
    >
      <section
        onClick={() => {
          setOpen(false), setOpenBundle(true);
        }}
        className="relative rounded overflow-hidden"
      >
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
        <div className="flex justify-center items-center gap-1 text-sm bg-primary/60 py-1 relative">
          <TicketPercent className="h-4 w-4" />
          Limited Offer
        </div>

        <div className="relative w-full p-4 sm:px-6 bg-background font-semibold flex gap-3">
          <div className="flex flex-col">
            <p className="max-sm:text-sm">Get All Courses @ ₹1299/-</p>
            <p className="max-sm:text-xs text-sm text-muted-foreground">
              Intead of ₹499 Per Course
            </p>
          </div>
          <Badge
            variant={"secondary"}
            className="h-fit w-fit m-auto line-clamp-1"
          >
            Claim Now
          </Badge>
        </div>
      </section>
    </div>
  );
}
