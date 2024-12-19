import { Metadata } from "next";
import Projects from "./projects";

export const dynamic = "force-static";

export type Project = {
  title: string;
  techStack: string[];
  category: string;
  slug: string;
  coverImage: {
    url: string;
  };
};

export const metadata: Metadata = {
  title: "30DC Projects | 30dayscoding",
  description:
    "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed by 30 days of coding team to enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
  openGraph: {
    images: "https://i.ibb.co/JF6FCv8/image-60job.webp",
    title: "30DC Projects | 30dayscoding",
    description:
      "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed 30 days of coding team enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/JF6FCv8/image-60job.webp",
    title: "30DC Projects | 30dayscoding",
    description:
      "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed 30 days of coding team  enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
    site: "https://30dayscoding.com",
  },
};

async function getAllProjects(): Promise<Project[]> {
  const query = `query{
  projectsCollection{
    items{
      title,
      techStack,
      category,
      slug,
      coverImage{
        url
      }
    }
  }
}`;

  const data = await (
    await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    )
  ).json();

  const {
    data: {
      projectsCollection: { items },
    },
  } = data;

  return items;
}
export default async function Home() {
  const projects = await getAllProjects();

  return <Projects projects={projects} />;
}
