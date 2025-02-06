"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UpsellLinkedIn, UpsellMasterAI, UpsellStudyAbroad } from "@/components/upsell";
import { certificate } from "@/lib/jotai";
import { useAtom } from "jotai";
import { Bell, Link, MessageCircleQuestion } from "lucide-react";

export default function Notifications() {
  const [open, setOpen] = useAtom(certificate);

  return (
    <div className="sticky top-0 max-xl:hidden flex flex-col gap-2 px-2 py-5 max-w-72 h-full max-h-screen border-l-2">
      <span className="flex items-center gap-1">
        <Bell className="h-5 w-5" />
        Updates
      </span>
      <div className="flex flex-col gap-2 overflow-auto horizontal-scroll">
        {/* <div className="">
        <div className="rounded-lg border-prime border bg-card max-h-fit h-fit w-full flex flex-col gap-2 p-1">
          <Badge className="rounded bg-prime/60 hover:bg-prime/80 text-white text-center w-full">
            🚀 All course bundle
          </Badge>
          <p className="text-sm px-2">
            Master all 17 courses with this bundle for just ₹999!
          </p>
          <a href={"https://30dayscoding.com/bundle/complete-package-all-course-bundle"} target="_blank" 
            className="p-2 bg-prime/80 hover:bg-prime text-white rounded text-center">
            Access the bundle
          </a>
        </div>
      </div> */}
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

        {/* <UpsellLinkedIn />
        <UpsellStudyAbroad />
        <UpsellMasterAI /> */}
      </div>
    </div>
  );
}
