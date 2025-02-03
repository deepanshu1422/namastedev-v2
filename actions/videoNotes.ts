"use server"

import { auth } from "../src/auth"
import prisma from "../src/util/prismaClient";

export async function saveVideoNotes(
  userId: string,
  courseId: string,
  chapterId: string,
  notes: string
) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      console.log('No email found in session');
      throw new Error("Not authenticated")
    }

    const email = session.user.email;
    const now = new Date();

    // Find or create user's video notes document
    let userNotes = await prisma.videoNotes.findUnique({
      where: { email }
    });

    if (!userNotes) {
      userNotes = await prisma.videoNotes.create({
        data: {
          email,
          courses: []
        }
      });
    }

    // Find if course exists in user's notes
    const courseIndex = userNotes.courses.findIndex(c => c.courseId === courseId);
    const newNote = {
      chapterId,
      notes,
      updatedAt: now
    };

    if (courseIndex === -1) {
      // Course doesn't exist, add new course with the note
      await prisma.videoNotes.update({
        where: { email },
        data: {
          courses: {
            push: {
              courseId,
              notes: [newNote]
            }
          },
          updatedAt: now
        }
      });
    } else {
      // Course exists, find if chapter note exists
      const course = userNotes.courses[courseIndex];
      const chapterIndex = course.notes.findIndex(n => n.chapterId === chapterId);

      if (chapterIndex === -1) {
        // Chapter note doesn't exist, add new note
        course.notes.push(newNote);
      } else {
        // Update existing note
        course.notes[chapterIndex] = newNote;
      }

      // Update the entire courses array
      await prisma.videoNotes.update({
        where: { email },
        data: {
          courses: userNotes.courses,
          updatedAt: now
        }
      });
    }

    return { success: true };
  } catch (error) {
    console.error("[SAVE_VIDEO_NOTES]", error);
    return { success: false, error: "Failed to save notes" };
  }
}

export async function getVideoNotes(
  userId: string,
  courseId: string,
  chapterId: string
) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      console.log('No email found in session');
      throw new Error("Not authenticated")
    }

    const email = session.user.email;
    const userNotes = await prisma.videoNotes.findUnique({
      where: { email }
    });

    if (!userNotes) {
      return { success: true, notes: "", lastUpdated: null };
    }

    const course = userNotes.courses.find(c => c.courseId === courseId);
    if (!course) {
      return { success: true, notes: "", lastUpdated: null };
    }

    const note = course.notes.find(n => n.chapterId === chapterId);
    return { 
      success: true, 
      notes: note?.notes || "", 
      lastUpdated: note?.updatedAt || null 
    };
  } catch (error) {
    console.error("[GET_VIDEO_NOTES]", error);
    return { success: false, error: "Failed to fetch notes" };
  }
} 