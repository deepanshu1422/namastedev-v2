import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Main from "./main";

export const dynamic = "force-static";

export type Courses = {
  courseCollection: {
    items: {
      courseId: string;
      title: string;
      shortDescription: string;
      longDescription: string;
      techStack: string;
      offers: string[];
      learn: string[];
      rating: number;
      slug: string;
      upsellBundle: {
        bundleTitle: string;
        slug: string;
        pricingsCollection: {
          items: {
            amount: string;
            bigAmount: string;
            percentage: string;
          };
        }[];
      };
      guidesCollection: {
        items: {
          guideId: string;
          title: string;
          description: string;
          pricing: {
            amount: number;
            bigAmount: number;
          };
        }[];
      };
      projectsCollection: {
        items: {
          title: string;
          content: string[];
          coverImage: {
            url: string;
          };
        }[];
      };
      courseImage: {
        description: string;
        url: string;
        width: number;
        height: number;
      };
      courseCreator: {
        name: string;
      };
      pricingsCollection: {
        items: {
          title: string;
          amount: number;
          percentage: number;
          bigAmount: number;
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
                sys: {
                  id: string;
                };
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
        courseCollection(where: { publish: true, domain: "30dayscoding.com"}){
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
            courseCollection(where: { publish: true, domain: "30dayscoding.com"}){
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
        url: item?.courseImage?.url ?? "",
      },
    },
  };
}

async function getCourses({ slug }: { slug: string }): Promise<Courses> {
  const query = `query {
    courseCollection(where: { publish: true, domain: "30dayscoding.com", slug: "${slug}"},limit:1){
        items{
        courseId,
        title,
        shortDescription,
        longDescription,
        offers,
        learn,
        rating,
        upsellBundle{
          bundleTitle,
          slug,
          pricingsCollection(where: {countryCode: "IN"}, limit: 1){
            items{
              amount,
              bigAmount,
              percentage
            }
          }
        }
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
        guidesCollection{
            items{
              guideId,
              title,
              description,
              pricing{
                amount,
                bigAmount
              }
            }
          },
         projectsCollection{
            items{
              title,
              content,
              coverImage{
                url
              }
            }
          },
        pricingsCollection{
            items{
            title,
            amount,
            percentage,
            bigAmount,
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
                sys{
                    id
                  }
                title,
                youtubeId,
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
      cache: "force-cache",
      next: {
        revalidate: 3600 * 24,
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

  return <Main item={items[0]} />;
}
