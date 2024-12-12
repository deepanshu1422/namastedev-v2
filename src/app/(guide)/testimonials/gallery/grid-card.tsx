"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Play } from "lucide-react";

export default function GridCard({
  src,
  i,
  setOpen,
  setYtId,
}: {
  i: number;
  src: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setYtId: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col bg-card border-[2px] border-prime/40 hover:border-prime/60 transition-all overflow-hidden h-full w-full">
      <div
        onClick={() => {
          setOpen(true);
          setYtId(src);
        }}
        className="relative group cursor-pointer"
      >
        <img
          src={src}
          alt={`30DC Courses Review ${i}`}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
