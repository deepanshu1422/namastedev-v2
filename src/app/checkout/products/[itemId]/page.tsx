import { notFound } from "next/navigation";
import Main from "./main"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Page"
}

export type Product = {
  productCollection: {
    items: {
      title: string;
      productId: string;
      domain: string;
      shortDescription: string;
      pricingCollection: {
        items: {
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

// type Props = {
//   params: { itemId: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

async function getProduct({ itemId }: { itemId: string }): Promise<Product> {
  const query = `query {
  productCollection(where: {productId: "${itemId}", publish: true},limit:1){
    items{
      productId,
      title,
      shortDescription,
      domain,
      pricingCollection{
        items{
          countryCode
          amount
          percentage
          bigAmount
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
      // next: {
      //   revalidate: 3600 * 24,
      // },
    }
  );

  const data = await fetchedData.json();

  return data.data;
}

export default async function PaymentPage({ params: { itemId } }: PageProps) {
  const item = await getProduct({ itemId });

  // console.log(JSON.stringify(item.courseCollection.items[0]));

  if (!(item.productCollection.items[0]?.title)) return notFound()

  return <Main productCollection={item.productCollection} />
}
