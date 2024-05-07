// import { DataTableDemo, Payment } from "@/components/jobs-comp/data-table-ex";
import { Metadata } from "next";
import Guides from "./guides";

export const metadata: Metadata = {
  title: "30DC Guides | 30dayscoding",
  description:
    "Discover a world of practical learning with our guide page! Explore a diverse range of guide designed by 30 days of coding team to enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our guide cater to all levels, ensuring an immersive learning experience.",
  openGraph: {
    images: "https://i.ibb.co/f2v6nCj/job.webp",
    title: "30DC Guides | 30dayscoding",
    description:
      "Discover a world of practical learning with our guides page! Explore a diverse range of guides designed 30 days of coding team enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our guides cater to all levels, ensuring an immersive learning experience.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/f2v6nCj/job.webp",
    title: "30DC Guides | 30dayscoding",
    description:
      "Discover a world of practical learning with our guides page! Explore a diverse range of guides designed 30 days of coding team  enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our guides cater to all levels, ensuring an immersive learning experience.",
    site: "https://30dayscoding.com",
  },
};

export default async function Home() {
  return <Guides />;
}
