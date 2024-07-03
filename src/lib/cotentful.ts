export const contentfulHeaders = {
  "Accept-Encoding": "gzip, deflate, br",
  "Content-Type": "application/json",
  DNT: "1",
  Origin: "https://033bad1b-c8e2-4ee5-b8f8-f4c19c33ca37.ctfcloud.net",
  Authorization: "Bearer uvrKfQ5zxShXyUNee8Ihfpt6LBxlxxVMPiQ4k7kUmMg",
}

export async function getContentfulData(query: string) {
  const fetchedData = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })

  const data = await fetchedData.json()

  return data
}