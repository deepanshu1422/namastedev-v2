"use server";

import { BLOCKS, documentToMarkdown } from "contentful-rich-text-to-markdown";

type Res = {
  data: {
    chapters: {
      description: {
        json: {
          nodeType: BLOCKS.DOCUMENT;
          data: Record<string, string>;
          content: [];
        };
      };
    };
  };
};

export default async function getChapterData({ id }: { id: string }) {
  const query = `query {
            chapters(id: "${id}") {
                description {
                    json
                    }
                }
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
    }
  );

  const data: Res = await fetchedData.json();

  return documentToMarkdown(data.data.chapters.description?.json).content ;
}
