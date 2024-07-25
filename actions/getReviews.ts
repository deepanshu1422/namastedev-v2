'use server'


type Res = {
    data: {
        courseCollection: {
            items: {
                reviewsCollection: {
                    total: number,
                    items: [{
                        name: string,
                        star: number,
                        description: string
                        publishedDate: string
                    }]
                }
            }[]
        }
    }
}

export default async function getReviews({ courseId, skip }: { courseId: string, skip: number }) {

    const query = `query {
    courseCollection(where: {courseId: "${courseId}"},limit:1){
        items{
          reviewsCollection(limit: 5, skip: ${skip}){
            total
            items{
              name
              star
              description
              publishedDate
            }
          }
            }
        }
    }`

    const fetchedData = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    })

    const data: Res = await fetchedData.json()

    return data.data.courseCollection.items[0].reviewsCollection.items

}