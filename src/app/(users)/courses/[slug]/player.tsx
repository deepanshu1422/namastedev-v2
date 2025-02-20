"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

import { Button } from "../../../../components/ui/button"
import { useEffect, useState } from "react"
import { updateChapterProgress, getProgress } from "../../../../../actions/updateProgress"
import { Check } from "lucide-react"
import React from "react";

interface VideoPlayerProps {
  courseId?: string;
  chapterId?: string;
  title?: string;
  ytId?: string;
  thumbnail?: string;
  nextVideo?: () => void;
}

export default function VideoPlayer({ 
  courseId, 
  chapterId,
  title,
  ytId,
  thumbnail,
  nextVideo
}: VideoPlayerProps) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadProgress = async () => {
      if (!courseId || !chapterId) return;
      const { completedChapters } = await getProgress(courseId)
      setIsCompleted(completedChapters.includes(chapterId))
    }
    loadProgress()
  }, [courseId, chapterId])

  const onComplete = async () => {
    if (!courseId || !chapterId) return;
    try {
      setIsLoading(true)
      const { success } = await updateChapterProgress(courseId, chapterId)
      if (success) {
        setIsCompleted(true)
        if (nextVideo) {
          nextVideo();
        }
      }
    } catch (error) {
      console.error("Error marking as complete:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
        <MediaPlayer
          src={`youtube/${ytId}#quality=2160p,1080p&vq=hd2160&hd=1&modestbranding=1&rel=0`}
          viewType="video"
          streamType="on-demand"
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
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>
          <Button
            onClick={onComplete}
            disabled={isCompleted || isLoading}
            variant="default"
            className={`${isCompleted ? "bg-green-600 hover:bg-green-700" : ""} min-w-[140px]`}
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
  )
}