"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { getProfileData } from "../../../actions/getProfileData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, Trophy, Star, GraduationCap, ChevronRight, BookMarked, MessageCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

interface ProfileData {
  user: {
    name: string | null;
    email: string;
    image: string | null;
    createdAt: Date;
    contact: string | null;
  };
  streak: {
    currentStreak: number;
    longestStreak: number;
    lastActivityDate: Date;
  };
  stats: {
    starredVideos: number;
    purchasedCourses: number;
  };
  starredVideos: {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
    thumbnail: { url: string };
    starredAt: Date;
    chapterDescription: string | null;
    chapter: {
      id: string;
      title: string;
      pdf: { url: string | null };
      course: {
        id: string;
        title: string;
        slug: string;
      };
    };
    href: string;
  }[];
}

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!session?.user?.email) {
          console.error("No session or email found");
          setError("Please sign in to view your profile");
          setIsLoading(false);
          return;
        }
        console.log("Fetching profile data for:", session.user);

        const data = await getProfileData();
        setProfileData(data as ProfileData); 
      } catch (error) {
        console.error("Error in profile page:", error);
        setError(error instanceof Error ? error.message : "An error occurred while loading your profile");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [session?.user?.email]);

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!profileData || !session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-2xl font-bold">Not Authenticated</h1>
        <p>Please sign in to view your profile</p>
      </div>
    );
  }

  const { user, streak, stats } = profileData;

  return (
    <div className="px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-prime/10 via-prime/5 to-transparent rounded-xl" />
          <div className="relative flex flex-col md:flex-row items-center gap-6 p-8 rounded-xl backdrop-blur-sm border border-prime/10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-prime/30 to-prime/10 rounded-full blur-md" />
              <Avatar className="relative h-32 w-32 ring-4 ring-background">
                <AvatarImage src={user?.image || ""} />
                <AvatarFallback className="text-4xl bg-prime/20">{user?.name?.[0] || '?'}</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center md:text-left space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {user?.name || 'Anonymous User'}
              </h1>
              <p className="text-muted-foreground text-lg">{user?.email}</p>
              {profileData?.user?.contact && (
                <p className="text-muted-foreground text-lg flex items-center gap-2">
                  <span>📱</span>
                  {profileData.user.contact}
                </p>
              )}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="secondary" className="text-sm">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  Joined {user?.createdAt ? formatDistanceToNow(new Date(user.createdAt), { addSuffix: true }) : 'recently'}
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <Trophy className="w-3 h-3 mr-1" />
                  {streak?.longestStreak || 0} Days Best Streak
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="group hover:shadow-lg hover:shadow-prime/5 transition-all border-prime/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <CalendarDays className="h-4 w-4 text-prime group-hover:text-prime/80 transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground/90">{streak?.currentStreak || 0} days</div>
              <p className="text-xs text-muted-foreground">
                Last active {streak?.lastActivityDate ? formatDistanceToNow(new Date(streak.lastActivityDate), { addSuffix: true }) : 'never'}
              </p>
            </CardContent>
          </Card>

        
          <Card className="group hover:shadow-lg hover:shadow-prime/5 transition-all border-prime/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Streak</CardTitle>
              <Trophy className="h-4 w-4 text-prime group-hover:text-prime/80 transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground/90">{streak?.longestStreak || 0} days</div>
              <p className="text-xs text-muted-foreground">Your longest activity streak</p>
            </CardContent>
          </Card>

         
          <Card className="group hover:shadow-lg hover:shadow-prime/5 transition-all border-prime/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Starred Videos</CardTitle>
              <Star className="h-4 w-4 text-prime group-hover:text-prime/80 transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground/90">{stats?.starredVideos || 0}</div>
              <p className="text-xs text-muted-foreground">Videos marked for later</p>
            </CardContent>
          </Card>

         
          <Card className="group hover:shadow-lg hover:shadow-prime/5 transition-all border-prime/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Purchased Courses</CardTitle>
              <GraduationCap className="h-4 w-4 text-prime group-hover:text-prime/80 transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground/90">{stats?.purchasedCourses || 0}</div>
              <p className="text-xs text-muted-foreground">Courses you own</p>
            </CardContent>
          </Card>
        </div>

       
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Starred Videos
            </h2>
           
              <Badge variant="secondary" className="text-sm hover:bg-prime/10 cursor-pointer transition-colors">
                <Star className="w-3 h-3 mr-1" />
                {stats?.starredVideos || 0} videos
              </Badge>
          
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profileData?.starredVideos?.length > 0 ? (
              profileData.starredVideos.slice(0, 3).map((video) => (
                <Link 
                  key={video.id} 
                  href={`${video.href}`}
                >
                  <Card className="group hover:shadow-lg hover:shadow-prime/5 transition-all border-prime/10 hover:bg-prime/5">
                    <CardHeader>
                      <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                        {video.thumbnail?.url ? (
                          <Image
                            src={video.thumbnail.url}
                            alt={video.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <Image
                            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                            alt={video.title}
                            fill
                            className="object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                          {formatDistanceToNow(new Date(video.starredAt), { addSuffix: true })}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="line-clamp-1 group-hover:text-prime transition-colors">
                            {video.title}
                          </CardTitle>
                          <Star className="h-4 w-4 text-yellow-500" />
                        </div>
                        {video.description && (
                          <CardDescription className="line-clamp-2">
                            {video.description}
                          </CardDescription>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {video.chapter.course.title}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <Star className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold">No Starred Videos</h3>
                <p className="text-muted-foreground">
                  You haven't starred any videos yet. Star videos to save them for later.
                </p>
              </div>
            )}
            {profileData?.starredVideos?.length > 3 && (
              <div className="col-span-full flex justify-center mt-4">
                <Link href="/starred-videos">
                  <Badge variant="outline" className="text-sm hover:bg-prime/10 cursor-pointer transition-colors">
                    View all {stats?.starredVideos} starred videos
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </Badge>
                </Link>
              </div>
            )}
          </div>
        </div>

       
        <div className="space-y-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Quick Actions
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/dashboard">
              <Card className="group hover:shadow-lg hover:shadow-prime/5 transition-all border-prime/10 hover:bg-prime/5">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookMarked className="h-5 w-5 text-prime" />
                      <CardTitle className="group-hover:text-prime transition-colors">My Courses</CardTitle>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-prime transition-colors" />
                  </div>
                  <CardDescription>
                    Access your purchased courses and track your progress
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/support">
              <Card className="group hover:shadow-lg hover:shadow-prime/5 transition-all border-prime/10 hover:bg-prime/5">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-prime" />
                      <CardTitle className="group-hover:text-prime transition-colors">Support</CardTitle>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-prime transition-colors" />
                  </div>
                  <CardDescription>
                    Get help or contact our support team
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSkeleton() {
  return (
    <div className="px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="relative p-8 rounded-xl border border-prime/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Skeleton className="h-32 w-32 rounded-full" />
            <div className="space-y-2 text-center md:text-left">
              <Skeleton className="h-10 w-48" />
              <Skeleton className="h-6 w-32" />
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array(4).fill(0).map((_, i) => (
            <Card key={i} className="border-prime/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-1" />
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-6">
          <Skeleton className="h-8 w-48" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array(3).fill(0).map((_, i) => (
              <Card key={i} className="border-prime/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5" />
                      <Skeleton className="h-6 w-24" />
                    </div>
                    <Skeleton className="h-5 w-5" />
                  </div>
                  <Skeleton className="h-4 w-48 mt-2" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 