"use server"

import { auth } from "../src/auth"
import prisma from "../src/util/prismaClient";
import { getStarredVideoDetails } from "./getStarredVideoDetails";

export async function getProfileData() {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      throw new Error("Not authenticated")
    }

    const email = session.user.email;

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        name: true,
        email: true,
        image: true,
        contact: true,
        createdAt: true,
      }
    });

    const streak = await prisma.streak.findUnique({
      where: { email }
    });

   const starredVideos = await prisma.starredVideos.findUnique({
    where: { email }
  });

  const transformedVideos = starredVideos?.courses.flatMap(course => 
    course.videoIds.map(videoId => ({
      videoId: videoId,
      courseId: course.courseId,
      starredAt: starredVideos.createdAt 
    }))
  ) || [];

  const starredVideoDetails = await getStarredVideoDetails(transformedVideos);
    const purchasedCoursesCount = await prisma.user.findUnique({
      where: { 
        email,
      },
      select: {
        courseId: true
      }
    });

    const response = {
      user,
      streak: {
        currentStreak: streak?.currentStreak || 0,
        longestStreak: streak?.longestStreak || 0,
        lastActivityDate: streak?.lastActivityDate
      },
      stats: {
        starredVideos: starredVideos?.courses.flatMap(course => course.videoIds.length).reduce((sum, count) => sum + count, 0) || 0,
        purchasedCourses: purchasedCoursesCount?.courseId?.length || 0
      },
      starredVideos: starredVideoDetails.videos
    };

    return response;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw error;
  }
} 