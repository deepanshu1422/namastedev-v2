"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider, Poster, Track, useMediaStore } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import { Button } from "@/components/ui/button";
import { Check, Star, Loader2, StickyNote, Save, Clock, Settings } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { getProgress, updateChapterProgress } from "../../../../../actions/updateProgress";
import { starVideo, unstarVideo, isVideoStarred } from "../../../../../actions/starredVideos";
import { saveVideoNotes, getVideoNotes } from "../../../../../actions/videoNotes";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  const playerRef = useRef(null);
  const [selectedQuality, setSelectedQuality] = useState('1080p');
  const [isClient, setIsClient] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [isStarLoading, setIsStarLoading] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [hasNotes, setHasNotes] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isNotesLoading, setIsNotesLoading] = useState(false);

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
    const savedQuality = localStorage.getItem('preferredQuality');
    if (savedQuality) {
      setSelectedQuality(savedQuality);
    }
  }, []);

  // Update localStorage when quality changes (only on client)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('preferredQuality', selectedQuality);
    }
  }, [selectedQuality, isClient]);

  // Restore video time after page load
  useEffect(() => {
    if (isClient && playerRef.current) {
      const savedTime = localStorage.getItem('videoTime');
      if (savedTime) {
        playerRef.current.currentTime = parseFloat(savedTime);
        // Clear saved time after restoring
        localStorage.removeItem('videoTime');
      }
    }
  }, [isClient]);

  // Initialize video with saved quality
  useEffect(() => {
    if (playerRef.current && ytId && isClient) {
      const qualityParam = selectedQuality === '1080p' ? 'hd1080' : selectedQuality === '720p' ? 'hd720' : 'auto';
      playerRef.current.src = `youtube/${ytId}#quality=auto&vq=${qualityParam}&hd=1&controls=1&modestbranding=1&rel=0&showinfo=1&enablejsapi=1`;
      
      // Restore playback position if exists
      const savedTime = localStorage.getItem('videoTime');
      if (savedTime) {
        playerRef.current.currentTime = parseFloat(savedTime);
        localStorage.removeItem('videoTime');
      }
    }
  }, [ytId, selectedQuality, isClient]);

  const handleQualitySelect = (quality: string) => {
    setSelectedQuality(quality);
    if (isClient) {
      localStorage.setItem('preferredQuality', quality);
      // Store current time before reload
      const currentTime = playerRef.current?.currentTime || 0;
      localStorage.setItem('videoTime', currentTime.toString());
      // Reload the page
      window.location.reload();
    }
  };

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
    const loadNotes = async () => {
      if (!session?.user?.email || !courseId || !chapterId) return;
      try {
        const { success, notes, lastUpdated } = await getVideoNotes(session.user.email, courseId, chapterId);
        if (success) {
          setNotes(notes);
          setHasNotes(!!notes);
          setLastUpdated(lastUpdated ? new Date(lastUpdated) : null);
        }
      } catch (error) {
        console.error("Error loading notes:", error);
      }
    };
    loadProgress();
    loadStarredStatus();
    loadNotes();
  }, [courseId, chapterId, ytId, session?.user?.email]);

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

  const handleSaveNotes = async () => {
    if (!session?.user?.email || !courseId || !chapterId) {
      toast.error("Please sign in to save notes");
      return;
    }
    try {
      setIsNotesLoading(true);
      const { success, error } = await saveVideoNotes(session.user.email, courseId, chapterId, notes);
      if (success) {
        toast.success("Notes saved successfully");
        setIsNotesOpen(false);
      } else {
        toast.error(error || "Failed to save notes");
      }
    } catch (error) {
      console.error("Error saving notes:", error);
      toast.error("Something went wrong");
    } finally {
      setIsNotesLoading(false);
    }
  };

  return !!ytId && (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="relative aspect-video rounded-xl overflow-hidden w-full bg-footer/90">
          <MediaPlayer
            ref={playerRef}
            onEnded={onComplete}
            src={`youtube/${ytId}#quality=auto&vq=${selectedQuality === '1080p' ? 'hd1080' : selectedQuality === '720p' ? 'hd720' : 'auto'}&hd=1&controls=1&modestbranding=1&rel=0&showinfo=1&enablejsapi=1`}
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
            <DefaultVideoLayout 
              icons={defaultLayoutIcons}
              thumbnails="./"
            >
              <div slot="playback-rate" />
              <div slot="pip" />
            </DefaultVideoLayout>
          </MediaPlayer>
        </div>

        <div className="flex items-center gap-3 p-3 bg-card/80 border rounded-lg">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-white/70" />
            <span className="font-medium text-white/90">Quality</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              size="sm"
              variant={selectedQuality === 'auto' ? "default" : "outline"}
              className={`text-sm font-medium ${
                selectedQuality === 'auto'
                  ? "bg-primary hover:bg-primary/90"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => handleQualitySelect('auto')}
            >
              Auto
            </Button>
            <Button
              size="sm"
              variant={selectedQuality === '720p' ? "default" : "outline"}
              className={`text-sm font-medium ${
                selectedQuality === '720p'
                  ? "bg-primary hover:bg-primary/90"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => handleQualitySelect('720p')}
            >
              720p
            </Button>
            <Button
              size="sm"
              variant={selectedQuality === '1080p' ? "default" : "outline"}
              className={`text-sm font-medium ${
                selectedQuality === '1080p'
                  ? "bg-primary hover:bg-primary/90"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => handleQualitySelect('1080p')}
            >
              1080p
            </Button>
          </div>
        </div>
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
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setIsNotesOpen(true)}
                    variant="ghost"
                    size="icon"
                    className={`relative ${
                      hasNotes 
                        ? "text-blue-400 hover:text-blue-500 hover:bg-blue-500/10" 
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/10"
                    } transition-all duration-200 ease-in-out`}
                  >
                    <StickyNote 
                      className={`h-5 w-5 transform transition-transform ${
                        hasNotes ? "scale-110" : "scale-100"
                      }`}
                      fill={hasNotes ? "currentColor" : "none"}
                    />
                    {hasNotes && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{hasNotes ? "Edit Notes" : "Add Notes"}</p>
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

      <Dialog open={isNotesOpen} onOpenChange={setIsNotesOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Video Notes</DialogTitle>
            {lastUpdated && (
              <DialogDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Last updated: {lastUpdated.toLocaleString()}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <textarea
                placeholder="Write your notes here..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full min-h-[300px] p-4 rounded-lg border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
                {notes.length} characters
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsNotesOpen(false)}
                className="w-24"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSaveNotes}
                disabled={isNotesLoading}
                className="w-24"
              >
                {isNotesLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
