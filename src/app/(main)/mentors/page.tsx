import { Metadata } from "next";
import Main from "./main";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Study Abroad Mentors Book Live Sessions Now",
  description:
    "Kickstart your study abroad journey with a live session starting from just INR 499! Get expert insights, personalized guidance, and actionable steps to achieve your dreams.",
  openGraph: {
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Study Abroad Mentors Book Live Sessions Now",
    description:
      "Kickstart your study abroad journey with a live session starting from just INR 499! Get expert insights, personalized guidance, and actionable steps to achieve your dreams.",
    url: "https://30dayscoding.com/styudyabroad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Study Abroad Mentors Book Live Sessions Now",
    description:
      "Kickstart your study abroad journey with a live session starting from just INR 499! Get expert insights, personalized guidance, and actionable steps to achieve your dreams.",
    site: "https://30dayscoding.com",
  },
};

export type Mentors = {
  mentorsCollection: {
    items: {
      slug: string;
      name: string;
      degrees: string[];
      colleges: string[];
      major: string;
      countries: string[];
      image: {
        url: string;
      };
      available: boolean
    }[];
  };
};

async function getMentors(): Promise<Mentors> {
  const query = `query {
  mentorsCollection(where: {publish: true }){
    items{
      slug,
      name,
      image{
        url
      },
      degrees,
      colleges,
      major,
      countries,
      available
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

export default async function Home() {

  const mentors = await getMentors()
  return <Main mentorsCollection={mentors.mentorsCollection} />;
}
