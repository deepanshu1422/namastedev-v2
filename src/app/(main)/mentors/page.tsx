import { Metadata } from "next";
import Main from "./main";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Get 1:1 Guidance from Top Tech Experts | 30DC Mentors",
  description:
    "Unlock your tech career potential with 1:1 guidance from top industry experts. Join 30DC Mentors and get personalized coaching to land your dream job. Start today!",
  openGraph: {
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Get 1:1 Guidance from Top Tech Experts | 30DC Mentors",
    description:
      "Unlock your tech career potential with 1:1 guidance from top industry experts. Join 30DC Mentors and get personalized coaching to land your dream job. Start today!",
    url: "https://30dayscoding.com/styudyabroad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/PD9S6CZ/home.webp",
    title: "Get 1:1 Guidance from Top Tech Experts | 30DC Mentors",
    description:
      "Unlock your tech career potential with 1:1 guidance from top industry experts. Join 30DC Mentors and get personalized coaching to land your dream job. Start today!",
    site: "https://30dayscoding.com",
  },
};

export type Mentors = {
  mentorsCollection: {
    items: {
      slug: string;
      name: string;
      about: string;
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
      about,
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
