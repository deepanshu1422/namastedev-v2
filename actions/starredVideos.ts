'use server'
import prisma from "../src/util/prismaClient";
import { auth } from "../src/auth"

export async function starVideo(videoId: string, courseId: string) {
    const session = await auth();
    if (!session?.user?.email) {
        return { success: false, message: "Not authenticated" };
    }

    try {
        await prisma.starredVideos.upsert({
            where: {
                email: session.user.email
            },
            create: {
                email: session.user.email,
                courses: [{
                    courseId: courseId,
                    videoIds: [videoId]
                }]
            },
            update: {
                courses: {
                    set: await updateCourseVideos(session.user.email, courseId, videoId, true)
                }
            }
        });
        return { success: true };
    } catch (error) {
        console.error("Error starring video:", error);
        return { success: false, message: "Failed to star video" };
    }
}

export async function unstarVideo(videoId: string, courseId: string) {
    const session = await auth();
    if (!session?.user?.email) {
        return { success: false, message: "Not authenticated" };
    }

    try {
        await prisma.starredVideos.update({
            where: {
                email: session.user.email
            },
            data: {
                courses: {
                    set: await updateCourseVideos(session.user.email, courseId, videoId, false)
                }
            }
        });
        return { success: true };
    } catch (error) {
        console.error("Error unstarring video:", error);
        return { success: false, message: "Failed to unstar video" };
    }
}

export async function isVideoStarred(videoId: string, courseId: string) {
    const session = await auth();
    if (!session?.user?.email) {
        return false;
    }

    try {
        const starredVideos = await prisma.starredVideos.findUnique({
            where: {
                email: session.user.email
            }
        });

        if (!starredVideos) return false;

        const course = starredVideos.courses.find(c => c.courseId === courseId);
        return course ? course.videoIds.includes(videoId) : false;
    } catch (error) {
        console.error("Error checking starred status:", error);
        return false;
    }
}

export async function getStarredVideos() {
    const session = await auth();
    if (!session?.user?.email) {
        return { success: false, message: "Not authenticated", videos: [] };
    }

    try {
        const starredVideos = await prisma.starredVideos.findUnique({
            where: {
                email: session.user.email
            }
        });
        return { 
            success: true, 
            videos: starredVideos?.courses || [] 
        };
    } catch (error) {
        console.error("Error fetching starred videos:", error);
        return { success: false, message: "Failed to fetch starred videos", videos: [] };
    }
}


async function updateCourseVideos(email: string, courseId: string, videoId: string, isStarring: boolean) {
    const starredVideos = await prisma.starredVideos.findUnique({
        where: { email }
    });

    if (!starredVideos) {
        return [{
            courseId,
            videoIds: [videoId]
        }];
    }

    const courses = [...starredVideos.courses];
    const courseIndex = courses.findIndex(c => c.courseId === courseId);

    if (courseIndex === -1 && isStarring) {
       
        courses.push({
            courseId,
            videoIds: [videoId]
        });
    } else if (courseIndex !== -1) {
        if (isStarring) {

            if (!courses[courseIndex].videoIds.includes(videoId)) {
                courses[courseIndex].videoIds.push(videoId);
            }
        } else {
            courses[courseIndex].videoIds = courses[courseIndex].videoIds.filter(id => id !== videoId);
            if (courses[courseIndex].videoIds.length === 0) {
                courses.splice(courseIndex, 1);
            }
        }
    }

    return courses;
}