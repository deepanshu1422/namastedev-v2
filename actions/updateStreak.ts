"use server"

import { auth } from "../src/auth"
import prisma from "../src/util/prismaClient";

export async function updateStreak() {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      console.log('No email found in session');
      throw new Error("Not authenticated")
    }

    const email = session.user.email;
   
    const currentStreak = await prisma.streak.findUnique({
      where: { email }
    });


    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!currentStreak) {
       await prisma.streak.create({
        data: {
          email,
          lastActivityDate: today,
          currentStreak: 1,
          longestStreak: 1
        }
      });
      return { currentStreak: 1, longestStreak: 1, lastActivityDate: today };
    }

    // If already updated today, don't update again
    const lastActivity = new Date(currentStreak.lastActivityDate);
    lastActivity.setHours(0, 0, 0, 0);
    
    
    if (lastActivity.getTime() === today.getTime()) {
      return {
        currentStreak: currentStreak.currentStreak,
        longestStreak: currentStreak.longestStreak,
        lastActivityDate: currentStreak.lastActivityDate
      };
    }

    // Check if the streak is broken (more than 1 day gap)
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    console.log("Yesterday:", yesterday);
    
    let newCurrentStreak = currentStreak.currentStreak;
    
    if (lastActivity.getTime() < yesterday.getTime()) {
      // Streak broken
      console.log('Streak broken - resetting to 1');
      console.log('Last activity:', lastActivity.toISOString());
      console.log('Yesterday:', yesterday.toISOString());
      newCurrentStreak = 1;
    } else if (lastActivity.getTime() === yesterday.getTime()) {
      // Streak continues
      console.log('Streak continues - incrementing');
      console.log('Last activity:', lastActivity.toISOString());
      console.log('Yesterday:', yesterday.toISOString());
      newCurrentStreak += 1;
    }

    console.log("Updating streak with new values:", {
      lastActivityDate: today,
      currentStreak: newCurrentStreak,
      longestStreak: Math.max(newCurrentStreak, currentStreak.longestStreak)
    });

    // Update the streak in database
    const updatedStreak = await prisma.streak.update({
      where: { email },
      data: {
        lastActivityDate: today,
        currentStreak: newCurrentStreak,
        longestStreak: Math.max(newCurrentStreak, currentStreak.longestStreak)
      }
    });

    console.log('Updated streak:', JSON.stringify(updatedStreak, null, 2));

    return {
      currentStreak: updatedStreak.currentStreak,
      longestStreak: updatedStreak.longestStreak,
      lastActivityDate: updatedStreak.lastActivityDate
    };

  } catch (error) {
    console.error("Error updating streak:", error);
    console.error("Error details:", error instanceof Error ? error.message : error);
    console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
    console.error("Full error object:", JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    throw error;
  }
}

export async function getStreak(email: string) {
  try {
    if (!email) {
      throw new Error("Email is required");
    }

    const streak = await prisma.streak.findUnique({
      where: { email }
    });

    if (!streak) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

       await prisma.streak.create({
        data: {
          email,
          currentStreak: 1,
          longestStreak: 1,
          lastActivityDate: today
        }
      });
      return {
        currentStreak: 1,
        longestStreak: 1,
        lastActivityDate: today
      };
    }

    const result = {
      currentStreak: streak.currentStreak,
      longestStreak: streak.longestStreak,
      lastActivityDate: streak.lastActivityDate
    };
    return result;
  } catch (error) {
    console.error("Error getting streak:", error);
    return { currentStreak: 0, longestStreak: 0, lastActivityDate: null };
  }
} 
