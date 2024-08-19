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
  bundleCollection: {
    items: {
      bundleId: string;
      bundleTitle: string;
      shortDescription: string;
      learn: string[];
      offers: string[];
      rating: number;
      slug: string;
      coursesCollection: {
        items: {
          title: string;
          slug: string;
          rating: number,
          courseImage: {
            url: string;
          };
        }[];
      };
      coverImage: {
        description: string;
        url: string;
        width: number;
        height: number;
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
        bundleCollection{
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

  return data.data.bundleCollection.items.map((e: Record<string, string>) => ({
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
            bundleCollection{
            items{
                slug,
                bundleTitle,
                shortDescription,
                coverImage{
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

    item = data.data.bundleCollection.items.find(
      (e: Record<string, string>) => e.slug === params.slug
    );
  } catch (err) {
    item = {
      title: "Not Found",
    };
  }

  return {
    title: `${item?.bundleTitle} | 30DC Courses`,
    description: item?.shortDescription,
    openGraph: {
      title: `${item?.bundleTitle} | 30DC Courses`,
      description: item?.shortDescription,
      images: {
        url: item?.coverImage?.url ?? "",
      },
    },
  };
}

async function getCourses({ slug }: { slug: string }): Promise<Courses> {
  const query = `query {
    bundleCollection(where: {slug: "${slug}"},limit:1){
        items{
        bundleId,
        bundleTitle,
        shortDescription,
        learn,
        rating,
        offers,
        coverImage{   
            description,
            url,
            width,
            height,
        },
        slug,
        coursesCollection{
            items{
                title,
                slug,
                rating,
                courseImage{
                    url,
                    width,
                    height
                    },
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

  if (!data.bundleCollection.items.length) return notFound();

  const {
    bundleCollection: { items },
  } = data;

  return <Main item={items[0]} />;
}
