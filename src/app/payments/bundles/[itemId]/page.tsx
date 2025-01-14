import { notFound } from "next/navigation";
import Main from "./main"
import { Metadata, ResolvingMetadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Payment Page"
}

export type Courses = {
  bundleCollection: {
    items: {
      bundleId: string;
      bundleTitle: string;
      shortDescription: string;
      domain: string;
      learn: string[];
      offers: string[];
      rating: number;
      slug: string;
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
      coursesCollection: {
        items: {
          title: string;
          slug: string;
          rating: number;
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
    }[];
  };
};

type PageProps = {
  params: {
    itemId: string;
  };
};

type Props = {
  params: { itemId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getBundle({ itemId }: { itemId: string }): Promise<Courses> {
  const query = `query {
    bundleCollection(where: {bundleId: "${itemId}", publish: true},limit:1){
        items{
        bundleId,
        bundleTitle,
        shortDescription,
        domain,
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
      // cache: "force-cache",
      // next: {
      //   revalidate: 3600 * 24,
      // },
    }
  );

  const data = await fetchedData.json();

  return data.data;
}

export default async function PaymentPage({ params: { itemId } }: PageProps) {
  const item = await getBundle({ itemId });

  // console.log(JSON.stringify(item.courseCollection.items[0]));

  if (!(item.bundleCollection.items[0]?.bundleTitle)) return notFound()

  return <Main bundleCollection={item.bundleCollection} />
}
