import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Hero from "./hero";
import Details from "./details";
import { getContentfulData } from "@/lib/cotentful";

export const dynamicParams = true;
export const dynamic = "force-dynamic";

export type Courses = {
  courseCollection: {
    items: {
      courseId: string;
      title: string;
      shortDescription: string;
      longDescription: string;
      techStack: string;
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
      modulesCollection: {
        total: number;
        items: {
          title: string;
          duration: string;
          chaptersCollection: {
            total: number;
            items: [
              {
                title: string;
                duration: string;
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
  const data = await getContentfulData(`query {
        courseCollection{
        items{
            slug
            }
        }
    }`);

  return data.data.courseCollection.items.map((e: Record<string, string>) => {
    if (!e.slug) return;
    slug: e.slug.toString();
  });
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item = null;

  try {
    const data = await getContentfulData(`query {
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
        }`);

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
    description: item?.description,
    openGraph: {
      title: `${item?.title} | 30DC Courses`,
      description: item?.description,
      images: {
        url: item?.imgSrc ?? "",
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
        longDescription,
        techStack,
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
                videoLink
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
      cache: "force-cache",
      next: {
        revalidate: 3600 * 24 * 2,
      },
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

  const {
    courseCreator,
    courseImage,
    longDescription,
    modulesCollection,
    pricingsCollection,
    title,
    courseId,
    reviewsCollection,
    techStack,
  } = items[0];

  return (
    <main className="min-h-svh overflow-clip">
      <Hero
        courseId={courseId}
        title={title}
        image={courseImage.url}
        width={courseImage.width}
        height={courseImage.height}
        author={courseCreator.name}
        amount={
          pricingsCollection.items.find((e) => e.countryCode == "IN")?.amount ||
          500
        }
        currency={"INR"}
      />
      <Details
        title={title}
        description={longDescription}
        techStack={techStack}
        image={items[0].courseImage.url}
        amount={
          pricingsCollection.items.find((e) => e.countryCode == "IN")?.amount ||
          500
        }
        currency={"INR"}
        module={modulesCollection}
        courseId={courseId}
        reviews={{ ...reviewsCollection, courseId }}
      />
    </main>
  );
}
