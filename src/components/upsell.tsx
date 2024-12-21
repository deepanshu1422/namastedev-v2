"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function UpsellLinkedIn() {
  return (
    <Link
      href="https://immigrantjobhelp.com/linkedin?utm_source=https://30dayscoding.com&utm_campaign=sidebar"
      target="_blank"
      className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 hover:from-blue-800/50 hover:to-purple-800/40 transition-all duration-300 flex flex-col gap-3 rounded-xl shadow-xl backdrop-blur-sm shadow-black/40 p-4 border border-white/10 group"
    >
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-white/90">
          Turn Your LinkedIn Into a Job Magnet in 30 Days
        </span>
        <ArrowUpRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </div>
      <Image
        loader={() => "https://www.immigrantjobhelp.com/thumbs/link.png"}
        src="https://www.immigrantjobhelp.com/thumbs/link.png"
        width={500}
        height={500}
        alt="Immigrant Job Help"
        className="aspect-[16/10] object-cover rounded-lg w-full hover:scale-[1.02] transition-transform duration-300 shadow-lg"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm text-white/70">
          From getting ghosted to landing interviews - even with zero responses
          right now
        </p>
        <Button
          variant={"default"}
          size={"sm"}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold w-full transition-colors duration-300"
        >
          Visit Now
        </Button>
      </div>
    </Link>
  );
}

export function UpsellStudyAbroad() {
  return (
    <Link
      href="https://immigrantjobhelp.com/studyabroad?utm_source=https://30dayscoding.com&utm_campaign=sidebar"
      target="_blank"
      className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 hover:from-green-800/50 hover:to-emerald-800/40 transition-all duration-300 flex flex-col gap-3 rounded-xl shadow-xl backdrop-blur-sm shadow-black/40 p-4 border border-white/10 group"
    >
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-white/90">
          Get Job Support for USA/Canada
        </span>
        <ArrowUpRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </div>
      <Image
        loader={() => "https://www.immigrantjobhelp.com/thumbs/sbroad.png"}
        src="https://www.immigrantjobhelp.com/thumbs/sbroad.png"
        width={500}
        height={500}
        alt="Immigrant Job Help"
        className="aspect-[16/10] object-cover rounded-lg w-full hover:scale-[1.02] transition-transform duration-300 shadow-lg"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm text-white/70">
          Get expert guidance and support for your job search journey in North
          America
        </p>
        <Button
          variant={"default"}
          size={"sm"}
          className="bg-green-600 hover:bg-green-500 text-white font-semibold w-full transition-colors duration-300"
        >
          Visit Now
        </Button>
      </div>
    </Link>
  );
}

export function UpsellMasterAI() {
  return (
    <Link
      href="https://www.skillsetmaster.com/ai?utm_source=https://30dayscoding.com&utm_campaign=sidebar"
      target="_blank"
      className="bg-gradient-to-br from-yellow-900/40 to-amber-900/30 hover:from-yellow-800/50 hover:to-amber-800/40 transition-all duration-300 flex flex-col gap-3 rounded-xl shadow-xl backdrop-blur-sm shadow-black/40 p-4 border border-white/10 group"
    >
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-white/90">
          AI ISN&apos;T THE FUTURE: It&apos;s Happening Now
        </span>
        <ArrowUpRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </div>
      <Image
        loader={() => "https://www.skillsetmaster.com/thumbs/aiph.png"}
        src="https://www.skillsetmaster.com/thumbs/aiph.png"
        width={500}
        height={500}
        alt="Immigrant Job Help"
        className="aspect-[16/10] object-cover rounded-lg w-full hover:scale-[1.02] transition-transform duration-300 shadow-lg"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm line-clamp-2 text-white/70">
        Master AI for business, tech, coding, content creation, writing, and more. Learn tools, workflows, automations, pipelines, and everything else.
        </p>
        <Button
          variant={"default"}
          size={"sm"}
          className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold w-full transition-colors duration-300"
        >
          Visit Now
        </Button>
      </div>
    </Link>
  );
}
