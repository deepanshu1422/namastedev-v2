'use server'

export default async function getCourseLength(courseId: string) {
    if (!courseId) return { totalChapters: 0 };

    const query = `query {
        courseCollection(where: { publish: true, domain: "30dayscoding.com", courseId: "${courseId}" }, limit: 1) {
            items {
                modulesCollection {
                    total
                    items {
                        chaptersCollection {
                            total
                        }
                    }
                }
            }
        }
    }`;

    try {
        const data = await (
            await fetch(
                `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                    },
                    body: JSON.stringify({ query }),
                }
            )
        ).json();

        const course = data.data.courseCollection.items[0];
        if (!course) return { totalChapters: 0 };
        
        const totalChapters = course.modulesCollection.items.reduce(
            (acc: number, module: any) => acc + (module.chaptersCollection?.total || 0),
            0
        );

        return { totalChapters };
    } catch (error) {
        console.error("Error getting course length:", error);
        return { totalChapters: 0 };
    }
} 