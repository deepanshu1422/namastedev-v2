"use server";

import { documentToMarkdown } from "contentful-rich-text-to-markdown";

export async function getStarredVideoDetails(starredVideos: { videoId: string; courseId: string; starredAt: Date }[]) {
  if (!starredVideos.length) return { videos: [] };

  const coursesQuery = `query {
    courseCollection(where: { publish: true, domain: "30dayscoding.com" }) {
      items {
        courseId
        slug
      }
    }
  }`;

  try {
    const coursesData = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: coursesQuery }),
        next: {
          revalidate: 3600 * 24,
        },
      }
    ).then(res => res.json());

    const courseIdToSlug = new Map(
      coursesData.data.courseCollection.items.map((course: any) => [course.courseId, course.slug])
    );

    const queries = starredVideos.map((video, index) => `
      course${index}: courseCollection(where: { publish: true, domain: "30dayscoding.com", courseId: "${video.courseId}" }, limit: 1) {
        items {
          courseId
          title
          courseImage {
            url
          }
          modulesCollection {
            items {
              title
              chaptersCollection(where: { youtubeId: "${video.videoId}" }, limit: 1) {
                items {
                  sys {
                    id
                  }
                  title
                  youtubeId
                  description {
                    json
                  }
                  public
                  pdf {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `);

    const query = `query {
      ${queries.join('\n')}
    }`;

    const fetchedData = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
        next: {
          revalidate: 3600 * 24,
        },
      }
    );

    const data = await fetchedData.json();

    if (!data.data) {
      console.error("No data in response:", data);
      return { videos: [] };
    }


    const videos = starredVideos.map((starredVideo, index) => {
      const courseData = data.data[`course${index}`].items[0];
      if (!courseData) return null;

      const courseSlug = courseIdToSlug.get(courseData.courseId);
      if (!courseSlug) return null;

    
      const chapter = courseData.modulesCollection.items
        .flatMap(module => module.chaptersCollection.items)
        .find(chapter => chapter?.youtubeId === starredVideo.videoId);

      if (!chapter) return null;

      return {
        id: chapter.sys.id,
        title: chapter.title,
        description: chapter.description?.json 
          ? documentToMarkdown(chapter.description.json).content 
          : "",
        youtubeId: chapter.youtubeId,
        thumbnail: { url: courseData.courseImage.url },
        starredAt: starredVideo.starredAt,
        chapterDescription: chapter.description?.json 
          ? documentToMarkdown(chapter.description.json).content 
          : null,
        chapter: {
          id: chapter.sys.id,
          title: chapter.title,
          pdf: chapter.pdf,
          course: {
            id: courseData.courseId,
            title: courseData.title,
            slug: courseSlug
          }
        },
        href: `/dashboard/${courseSlug}`
      };
    }).filter(Boolean);

    return { videos };
  } catch (error) {
    console.error("Error fetching video details:", error);
    return { videos: [] };
  }
} 