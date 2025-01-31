"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../../../../../components/ui/avatar";
import { Button } from "../../../../../components/ui/button";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { updateChapterProgress, getProgress } from "../../../../../actions/updateProgress";
import React from "react";

interface PublisherProps {
  title: string;
  courseId: string;
  chapterId: string;
  disabledNext: boolean;
  disabledPrev: boolean;
  nextVideo: () => void;
  prevVideo: () => void;
  name: string;
  src: string;
}

export default function Publisher({
  title,
  courseId,
  chapterId,
  disabledNext,
  disabledPrev,
  nextVideo,
  prevVideo,
  name,
  src,
}: PublisherProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadProgress = async () => {
      const { completedChapters } = await getProgress(courseId);
      setIsCompleted(completedChapters.includes(chapterId));
    };
    loadProgress();
  }, [courseId, chapterId]);

  const onComplete = async () => {
    try {
      setIsLoading(true);
      const { success } = await updateChapterProgress(courseId, chapterId);
      if (success) {
        setIsCompleted(true);
        if (!disabledNext) {
          nextVideo();
        }
      }
    } catch (error) {
      console.error("Error marking as complete:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={src} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">{name}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
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
        <div className="flex gap-1">
          <Button
            onClick={prevVideo}
            disabled={disabledPrev}
            variant="outline"
            size="icon"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={nextVideo}
            disabled={disabledNext}
            variant="outline"
            size="icon"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 