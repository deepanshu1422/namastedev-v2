import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Main from "./main";
import { MoreMentors } from "./slider";
// import Main from "./main";

export const dynamic = "force-static";

export type Mentors = {
  mentorsCollection: {
    items: {
      mentorId: string;
      slug: string;
      name: string;
      about: string;
      degrees: string[];
      colleges: string[];
      workExperience: string[];
      major: string;
      expertiseTopics: string[];
      states: string[];
      countries: string[];
      languages: string[];
      available: string;
      insights: string[];
      image: {
        url: string;
      };
      pricingCollection: {
        items: {
          countryCode: string;
          amount: number;
          percentage: number;
          bigAmount: number;
          currency: string;
        }[];
      };
    }[];
  };
  moreMentors: MoreMentors
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
        mentorsCollection(where: { publish: true }){
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

  return data.data.mentorsCollection.items.map((e: Record<string, string>) => ({
    slug: e.slug,
  }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item: any = null;

  try {
    const query = `query {
            mentorsCollection(where: { publish: true }){
            items{
                slug,
                name,
                about,
                image{
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

    item = data.data.mentorsCollection.items.find(
      (e: Record<string, string>) => e.slug === params.slug
    );
  } catch (err) {
    item = {
      title: "Not Found",
    };
  }

  return {
    title: `${item?.name} | 30DC Mentor`,
    description: item?.about,
    openGraph: {
      title: `${item?.name} | 30DC Mentor`,
      description: item?.about,
      images: {
        url: item?.image?.url ?? "",
      },
      url: `https://30dayscoding.com/mentors/${item?.slug}`,
      type: "website",
    },
  };
}

async function getMentors({ slug }: { slug: string }): Promise<MoreMentors> {
  const query = `query {
  mentorsCollection(where: {slug_not: "${slug}"}){
    items{
      name
      slug
      image{
        url
      }
      workExperience
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

  return data.data;
}

async function getCourses({ slug }: { slug: string }): Promise<Mentors> {
  const query = `query {
  mentorsCollection(where: {publish: true, slug: "${slug}"}, limit: 1){
    items{
      mentorId,
      slug,
      name,
      image{
        url
      },
      pricingCollection(where: {countryCode: "IN"}, limit: 1){
        items{
          amount,
          percentage,
          bigAmount,
          currency,
        }
      },
      about,
      degrees,
      colleges,
      workExperience,
      major,
      expertiseTopics,
      states,
      countries,
      languages,
      available,
      insights
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

  return data.data;
}

export default async function Home({ params: { slug } }: PageProps) {
  const data = await getCourses({ slug });
  const mentors = await getMentors({ slug });

  if (!data.mentorsCollection.items.length) return notFound();

  const {
    mentorsCollection,
  } = data;

  return <Main mentorsCollection={mentorsCollection} moreMentors={mentors} />;
}
