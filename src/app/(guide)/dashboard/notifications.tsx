"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certificate } from "@/lib/jotai";
import { useAtom } from "jotai";
import { Bell, MessageCircleQuestion } from "lucide-react";

export default function Notifications() {
  const [open, setOpen] = useAtom(certificate);

  return (
    <div className="sticky top-0 max-xl:hidden flex flex-col gap-2 px-4 py-5 max-w-72 h-full max-h-screen border-l-2">
      <span className="flex items-center gap-1">
        <Bell className="h-5 w-5" />
        Updates
      </span>
      <div className="flex h-full w-full">
        <div className="rounded-lg border-prime border bg-card max-h-fit h-fit w-full flex flex-col gap-2 p-1">
          <Badge className="rounded bg-prime/60 hover:bg-prime/80 text-white text-center w-full">
            🎉 Certificate Ready!
          </Badge>
          <p className="text-sm px-2">
            Your certificate is generated. Download it from here now!
          </p>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            size={"sm"}
            className="bg-prime/80 hover:bg-prime text-white"
          >
            Generate Certificate
          </Button>
        </div>
        {/* <Badge className="text-white gap-1 hover:bg-second/60 bg-second/40 rounded m-auto"><MessageCircleQuestion className="h-4 w-4" />No Updates Yet</Badge> */}
      </div>
    </div>
  );
}
