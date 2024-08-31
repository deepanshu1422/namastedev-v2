"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function VideoPlayer({
  title,
  ytId,
  nextVideo,
  thumbnail,
}: {
  ytId: string;
  title: string;
  thumbnail: string;
  nextVideo(): 0 | undefined;
}) {
  return !ytId && (
    <div className="relative aspect-video rounded-xl overflow-hidden w-full bg-footer/90">
      <MediaPlayer
        onEnded={() => {
          nextVideo();
        }}
        src={`youtube/${ytId}`}
        viewType="video"
        logLevel="silent"
        crossOrigin
        autoPlay
        playsInline
        title={title}
        poster={thumbnail}
      >
        <MediaProvider>
          <Poster className="vds-poster" />
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}

{
  /* <div className="h-full w-full flex">
        <div className="flex flex-col gap-1 m-auto">
        <Badge className="" variant={"outline"} >No Video Preview</Badge>
        <Button size={"sm"} variant={"link"}>Next Video <ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div> */
}
