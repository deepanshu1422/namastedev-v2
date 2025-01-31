"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { getProgress, updateChapterProgress } from "../../../../../actions/updateProgress";

export default function VideoPlayer({
  title,
  ytId,
  nextVideo,
  thumbnail,
  courseId,
  chapterId,
}: {
  ytId: string;
  title: string;
  thumbnail: string;
  courseId: string;
  chapterId: string;
  nextVideo(): 0 | void;
}) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadProgress = async () => {
      if (!courseId || !chapterId) return;
      const { completedChapters } = await getProgress(courseId);
      setIsCompleted(completedChapters.includes(chapterId));
    };
    loadProgress();
  }, [courseId, chapterId]);

  const onComplete = async () => {
    if (!courseId || !chapterId) return;
    try {
      setIsLoading(true);
      const { success } = await updateChapterProgress(courseId, chapterId);
      if (success) {
        setIsCompleted(true);
        if (nextVideo) {
          nextVideo();
        }
      }
    } catch (error) {
      console.error("Error marking as complete:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return !!ytId && (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video rounded-xl overflow-hidden w-full bg-footer/90">
        <MediaPlayer
          onEnded={onComplete}
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
      {courseId && chapterId && (
        <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <Button
            onClick={onComplete}
            disabled={isCompleted || isLoading}
            variant="default"
            className={`${isCompleted ? "bg-green-600 hover:bg-green-700" : ""}`}
          >
            {isCompleted ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Completed
              </>
            ) : isLoading ? (
              "Marking..."
            ) : (
              "Mark as Complete"
            )}
          </Button>
        </div>
      )}
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
