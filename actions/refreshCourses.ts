'use server'

export default async function refreshCourses(courses: [string]) {

    if (courses?.length <= 0) return []

    const json = JSON.stringify(
        courses.map((e: string) => ({ courseId: e }))
    ).replace(/"([^"]+)":/g, "$1:");

    const query = `query { courseCollection(where: { publish: true, domain: "${process.env.DOMAIN}", OR: ${json}}){ items{ slug, courseId, title, longDescription, courseImage{ description, url, width, height, }, } } }`;

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

    const {
        data: {
            courseCollection: { items },
        },
    } = data;

    return items
}