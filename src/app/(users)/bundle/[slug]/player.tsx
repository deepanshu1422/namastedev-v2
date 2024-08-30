"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

import React, { Dispatch, SetStateAction } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { authModalState } from "@/lib/jotai";

export default function VideoPlayer({
  title,
  ytId,
  thumbnail,
  free,
  courseId,
  setOpen,
}: {
  title: string;
  ytId: string;
  thumbnail: string;
  free: boolean;
  courseId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { data: session, status } = useSession();
  const [openAuth, setOpenAuth] = useAtom(authModalState);
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden w-full bg-background/90">
      {/* @ts-ignore */}
      {session?.user?.courseId?.includes(courseId) || free ? (
        <MediaPlayer
          src={`youtube/${ytId}`}
          viewType="video"
          streamType="on-demand"
          logLevel="warn"
          autoPlay
          crossOrigin
          playsInline
          title={title}
          poster={thumbnail}
        >
          <MediaProvider>
            <Poster className="vds-poster" />
          </MediaProvider>
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      ) : (
        <>
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover blur-md"
          />
          <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10 min-h-32 w-60 bg-zinc-900/90 rounded-xl drop-shadow-2xl flex flex-col justify-between p-3 gap-4 ">
            {status === "authenticated" ? (
              <>
                <p className="text-center">
                  You haven&apos;t purchased the course, but you can.
                </p>
                <Button
                  onClick={() => setOpen(true)}
                  className="bg-prime/80 hover:bg-prime text-white drop-shadow-lg shadow-lg"
                >
                  Buy Now
                </Button>
              </>
            ) : (
              <>
                <p className="text-center">
                  It&apos;s looks like your not authenticated.
                </p>
                <Button
                  onClick={() => setOpenAuth(true)}
                  className="bg-prime/80 hover:bg-prime text-white drop-shadow-lg shadow-lg"
                >
                  Login Now
                </Button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
