// import { DataTableDemo, Payment } from "@/components/jobs-comp/data-table-ex";
import Hero from "@/components/jobs-comp/hero";
import prisma from "@/util/prismaClient";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";

export const metadata: Metadata = {
  title: "30DC Projects | 30dayscoding",
  description:
    "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed by 30 days of coding team to enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
  openGraph: {
    images: "https://i.ibb.co/f2v6nCj/job.webp",
    title: "30DC Projects | 30dayscoding",
    description:
      "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed 30 days of coding team enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/f2v6nCj/job.webp",
    title: "30DC Projects | 30dayscoding",
    description:
      "Discover a world of practical learning with our projects page! Explore a diverse range of projects designed 30 days of coding team  enhance your skills and enrich your portfolio. From beginner-friendly to advanced, our projects cater to all levels, ensuring an immersive learning experience.",
    site: "https://30dayscoding.com",
  },
};

export default async function Home() {
  return (
    <main className="mx-auto max-w-[90rem] px-5 md:px-10 lg:px-20 flex flex-col min-h-svh">
      <Hero />
      {/* <DataTableDemo data={newData} /> */}
    </main>
  );
}
