"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

import React from "react";
import { Play } from "lucide-react";

export default function NewPlayer({
  title,
  ytId,
}: {
  title: string;
  ytId: string;
}) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden w-full bg-prime/20">
      <MediaPlayer
        src={`youtube/${ytId}`}
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        autoPlay
        crossOrigin
        playsInline
        title={title}
        poster="https://files.vidstack.io/sprite-fight/poster.webp"
      >
        <MediaProvider>
          <Poster className="vds-poster" />
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
      {/* <button className="z-20 h-14 tab:h-24 aspect-square bg-white/30 backdrop-blur-lg rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
        <Play className="tab:h-12 h-8 tab:w-12 w-8 fill-white m-auto translate-x-1" />
      </button> */}
    </div>
  );
}
