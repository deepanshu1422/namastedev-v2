import { notFound } from "next/navigation";
import Main from "./main"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Page"
}

export type Courses = {
  courseCollection: {
    items: {
      title: string;
      courseId: string;
      domain: string;
      shortDescription: string;
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
      pricingsCollection: {
        items: {
          title: string;
          amount: number;
          percentage: number;
          bigAmount: number;
          countryCode: string;
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

async function getCourses({ itemId }: { itemId: string }): Promise<Courses> {
  const query = `query {
    courseCollection(where: {courseId: "${itemId}", publish: true},limit:1){
        items{
        title,
        courseId,
        domain,
        shortDescription,
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
        pricingsCollection{
            items{
            title,
            amount,
            percentage,
            bigAmount,
            countryCode,
            }
        },
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
      // next: {
      //   revalidate: 3600 * 24,
      // },
    }
  );

  const data = await fetchedData.json();

  return data.data;
}

export default async function PaymentPage({ params: { itemId } }: PageProps) {
  const item = await getCourses({ itemId });

  // console.log(JSON.stringify(item.courseCollection.items[0]));

  if (!(item.courseCollection.items[0]?.title)) return notFound()

  return <Main courseCollection={item.courseCollection} />
}
