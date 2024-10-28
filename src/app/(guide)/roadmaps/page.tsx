// import { DataTableDemo, Payment } from "@/components/jobs-comp/data-table-ex";
import { Metadata } from "next";
import Roadmap from "./roadmap";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tech Roadmaps | 30dayscoding",
  description:
    "Discover a world of practical learning with our guide page! Explore a diverse range of guide designed by 30 days of coding team to enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our guide cater to all levels, ensuring an immersive learning experience.",
  openGraph: {
    images: "https://i.ibb.co/1vnK7sm/image-61job.webp",
    title: "30DC Roadmaps | 30dayscoding",
    description:
      "Discover a world of practical learning with our roadmaps page! Explore a diverse range of roadmaps designed 30 days of coding team enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our roadmaps cater to all levels, ensuring an immersive learning experience.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/1vnK7sm/image-61job.webp",
    title: "30DC Roadmaps | 30dayscoding",
    description:
      "Discover a world of practical learning with our roadmaps page! Explore a diverse range of roadmaps designed 30 days of coding team  enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our roadmaps cater to all levels, ensuring an immersive learning experience.",
    site: "https://30dayscoding.com",
  },
};

export default async function Home() {
  return <Roadmap />;
}
