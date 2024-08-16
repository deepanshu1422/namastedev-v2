import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Main from "./main";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ children }: { children: string }) => (
  <div className="md:max-w-full horizontal-scroll w-full bg-slate-500 max-sm:w-[90dvw] font-semibold shrink mt-5">
    <SyntaxHighlighter style={gruvboxDark}>{children}</SyntaxHighlighter>
  </div>
);
export type Courses = {
  courseCollection: {
    items: {
      courseId: string;
      title: string;
      shortDescription: string;
      longDescription: string;
      techStack: string;
      features: string[];
      slug: string;
      courseImage: {
        description: string;
        url: string;
        width: number;
        height: number;
      };
      courseCreator: {
        name: string;
      };
      reviewsCollection: {
        total: number;
        items: {
          name: string;
          star: number;
          description: string;
          publishedDate: string;
        }[];
      };
      pricingsCollection: {
        items: {
          title: string;
          amount: number;
          countryCode: string;
          currencyCode: string;
        }[];
      };
      faqCollection: {
        items: {
          question: string;
          answer: string;
        }[];
      };
      modulesCollection: {
        total: number;
        items: {
          title: string;
          duration: string;
          chaptersCollection: {
            total: number;
            items: [
              {
                public: boolean;
                title: string;
                duration: string;
                youtubeId: string;
              }
            ];
          };
        }[];
      };
    }[];
  };
};

type PageProps = {
  params: {
    slug: string;
  };
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const query = `query {
        courseCollection{
        items{
            slug
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

  const data = await fetchedData.json();

  return data.data.courseCollection.items.map((e: Record<string, string>) => ({
    slug: e.slug,
  }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item = null;

  try {
    const query = `query {
            courseCollection{
            items{
                slug,
                title,
                shortDescription,
                courseImage{
                    url
                    }
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

    const data = await fetchedData.json();

    item = data.data.courseCollection.items.find(
      (e: Record<string, string>) => e.slug === params.slug
    );
  } catch (err) {
    item = {
      title: "Not Found",
    };
  }

  return {
    title: `${item?.title} | 30DC Courses`,
    description: item?.shortDescription,
    openGraph: {
      title: `${item?.title} | 30DC Courses`,
      description: item?.shortDescription,
      images: {
        url: item?.courseImage.url ?? "",
      },
    },
  };
}

async function getCourses({ slug }: { slug: string }): Promise<Courses> {
  const query = `query {
    courseCollection(where: {slug: "${slug}"},limit:1){
        items{
        courseId,
        title,
        shortDescription,
        longDescription,
        techStack,
        features,
        courseImage{   
            description,
            url,
            width,
            height,
        },
        slug,
        courseCreator{
            name,
        },
         reviewsCollection(limit: 5){
            total
            items{
              name
              star
              description
              publishedDate
            }
          },
        pricingsCollection{
            items{
            title,
            amount,
            countryCode,
            }
        },
        faqCollection{
          items{
          question,
          answer
          }
        },
        modulesCollection{
            total,
            items{
                title,
                duration,
                chaptersCollection{
                total,
                items{
                title,
                duration,
                youtubeId,
                videoLink,
                public
                    }
                }
                    }
                }
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
      cache: "no-cache",
    }
  );

  const data = await fetchedData.json();

  return data.data;
}

export default async function Home({ params: { slug } }: PageProps) {
  const data = await getCourses({ slug });

  if (!data.courseCollection.items.length) return notFound();

  const {
    courseCollection: { items },
  } = data;

  const { longDescription } = items[0];

  // console.log(longDescription);

  // let compile = await compileMDX({
  //   source: longDescription.toString(),
  //   components: { CodeSnippet: SyntaxHighlighter },
  // })

  // console.log(compile.content.type.toString());

  let mdx = await MDXRemote({
    source: longDescription.toString(),
    components: { CodeSnippet },
  });

  return <Main mdx={mdx} item={items[0]} />;
}
