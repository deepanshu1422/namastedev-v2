"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import {
  isYouTubeProvider,
  MediaPlayer,
  MediaProvider,
  MediaProviderAdapter,
  Poster,
} from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import { useEffect } from "react";

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

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden w-full bg-background/90">
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
