// import { DataTableDemo, Payment } from "@/components/jobs-comp/data-table-ex";
import { Metadata } from "next";
import Hero from "./hero";
import Achieve from "./achieve";
import Learning from "./learning";
import Instructor from "./instructor";
import Challenge from "./challenges";
import Interview from "./interview";
import Banner from "./banner";

;

export const metadata: Metadata = {
  title: "Explore | 30dayscoding",
  description:
    "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed by 30 days of coding team to enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
  openGraph: {
    images: "https://i.ibb.co/n1bC4Kj/image-63job.webp",
    title: "Explore | 30dayscoding",
    description:
      "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed 30 days of coding team enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/n1bC4Kj/image-63job.webp",
    title: "Explore | 30dayscoding",
    description:
      "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed 30 days of coding team  enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
    site: "https://30dayscoding.com",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-svh">
      <Hero />
      <Achieve />
      <Learning />
      <Instructor />
      <Challenge />
      <Interview />
      <Banner />
    </main>
  );
}
