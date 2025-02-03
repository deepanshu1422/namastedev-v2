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
import { Check, Star, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getProgress, updateChapterProgress } from "../../../../../actions/updateProgress";
import { starVideo, unstarVideo, isVideoStarred } from "../../../../../actions/starredVideos";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

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
  const [isStarred, setIsStarred] = useState(false);
  const [isStarLoading, setIsStarLoading] = useState(false);

  useEffect(() => {
    const loadProgress = async () => {
      if (!courseId || !chapterId) return;
      const { completedChapters } = await getProgress(courseId);
      setIsCompleted(completedChapters.includes(chapterId));
    };
    const loadStarredStatus = async () => {
      if (!ytId || !courseId) return;
      const starred = await isVideoStarred(ytId, courseId);
      setIsStarred(starred);
    };
    loadProgress();
    loadStarredStatus();
  }, [courseId, chapterId, ytId]);

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

  const toggleStar = async () => {
    if (!ytId || !courseId || isStarLoading) return;
    try {
      setIsStarLoading(true);
      const { success, message } = isStarred 
        ? await unstarVideo(ytId, courseId)
        : await starVideo(ytId, courseId);
      if (success) {
        setIsStarred(!isStarred);
        toast.success(isStarred ? "Video removed from favorites" : "Video added to favorites");
      } else {
        toast.error(message || "Failed to update favorite status");
      }
    } catch (error) {
      console.error("Error toggling star:", error);
      toast.error("Something went wrong");
    } finally {
      setIsStarLoading(false);
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
        <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-card/80 transition-colors">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={toggleStar}
                    disabled={isStarLoading}
                    variant="ghost"
                    size="icon"
                    className={`relative ${
                      isStarred 
                        ? "text-yellow-400 hover:text-yellow-500 hover:bg-yellow-500/10" 
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/10"
                    } transition-all duration-200 ease-in-out`}
                  >
                    {isStarLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Star 
                        className={`h-5 w-5 transform transition-transform ${
                          isStarred ? "scale-110" : "scale-100"
                        }`} 
                        fill={isStarred ? "currentColor" : "none"} 
                      />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{isStarred ? "Remove from favorites" : "Add to favorites"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Button
            onClick={onComplete}
            disabled={isCompleted || isLoading}
            variant="default"
            className={`
              transition-all duration-200 
              ${isCompleted 
                ? "bg-green-600 hover:bg-green-700 transform hover:scale-[1.02]" 
                : "hover:scale-[1.02]"
              }
            `}
          >
            {isCompleted ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Completed
              </>
            ) : isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Marking...
              </>
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
