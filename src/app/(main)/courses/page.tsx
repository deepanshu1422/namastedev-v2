import React from "react";
import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "Online 30DC Courses | MERN, Blockchain, DSA, AI & More",
  description:
    "Advance your development skills with our comprehensive online courses. Learn MERN Stack, Blockchain, Data Structures & Algorithms, AI, and more from industry experts.",
  openGraph: {
    images: "https://i.ibb.co/q7LPz35/courses-1.webp",
    title: "Online 30DC Courses | MERN, Blockchain, DSA, AI & More",
    description:
      "Advance your development skills with our comprehensive online courses. Learn MERN Stack, Blockchain, Data Structures & Algorithms, AI, and more from industry experts.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/q7LPz35/courses-1.webp",
    title: "Online 30DC Courses | MERN, Blockchain, DSA, AI & More",
    description:
      "Advance your development skills with our comprehensive online courses. Learn MERN Stack, Blockchain, Data Structures & Algorithms, AI, and more from industry experts.",
    site: "https://30dayscoding.com",
  },
};

export type CoursesType = {
  courseCollection: {
    items: {
      title: string;
      shortDescription: string;
      slug: string;
      tags: string[];
      courseImage: {
        url: string;
        width: number;
        height: number;
      };
    }[];
  };
};

async function getCourses(): Promise<CoursesType> {
  const query = `query {
        courseCollection{
            items{
                title,
                shortDescription,
                slug,
                tags,
                courseImage{
                    url,
                    width,
                    height
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
      cache: "no-store",
    }
  );

  const data = await fetchedData.json();

  return data.data;
}

export default async function Home() {
  const courses = await getCourses();

  return <Main courses={courses} />;
}
