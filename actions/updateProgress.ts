'use server'
import prisma from "../src/util/prismaClient";
import { auth } from "../src/auth"
import { updateStreak } from "./updateStreak";

export async function updateChapterProgress(courseId: string, chapterId: string) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      throw new Error("Not authenticated")
    }
    
    const existingProgress = await prisma.progress.findUnique({
      where: {
        email: session.user.email,
      }
    })

    if (!existingProgress) {
      const progress = await prisma.progress.create({
        data: {
          email: session.user.email,
          course: [{
            courseId: courseId,
            chapterIds: [chapterId]
          }]
        }
      })
  
      await updateStreak();
      return { success: true, progress }
    }

    
    const courseExists = existingProgress.course.find(c => c.courseId === courseId)
    
    if (courseExists) {
      if (!courseExists.chapterIds.includes(chapterId)) {
        const progress = await prisma.progress.update({
          where: {
            email: session.user.email,
          },
          data: {
            course: existingProgress.course.map(c => 
              c.courseId === courseId 
                ? { ...c, chapterIds: [...c.chapterIds, chapterId] }
                : c
            )
          }
        })
      
        await updateStreak();
        return { success: true, progress }
      }
      return { success: true, progress: existingProgress }
    } else {
      const progress = await prisma.progress.update({
        where: {
          email: session.user.email,
        },
        data: {
          course: [
            ...existingProgress.course,
            {
              courseId: courseId,
              chapterIds: [chapterId]
            }
          ]
        }
      })
     
      await updateStreak();
      return { success: true, progress }
    }
  } catch (error) {
    console.error("Error updating progress:", error)
    return { success: false, error }
  }
}

export async function getProgress(courseId: string) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return { completedChapters: [] }
    }

    const progress = await prisma.progress.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        course: true
      }
    })

  
    const courseProgress = progress?.course?.find(c => c.courseId === courseId);

    return {
      completedChapters: courseProgress?.chapterIds || []
    }
  } catch (error) {
    console.error("Error getting progress:", error)
    return { completedChapters: [] }
  }
}

