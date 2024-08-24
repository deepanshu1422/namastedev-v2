import { Metadata } from "next";
import React, { Suspense } from "react";
import Courses from "./courses";
import { Skeleton } from "@/components/ui/skeleton";
import Purchased from "./purchased";
import Notifications from "./notifications";
import { UserDialog } from "./new-user";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard | 30dayscoding",
  description:
    "Access your purchased courses with ease on our user dashboard. Enjoy seamless navigation, instant course activation, and personalized progress tracking.",
  openGraph: {
    images: "https://i.ibb.co/n1bC4Kj/image-63job.webp",
    title: "Dashboard | 30dayscoding",
    description:
      "Access your purchased courses with ease on our user dashboard. Enjoy seamless navigation, instant course activation, and personalized progress tracking.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/n1bC4Kj/image-63job.webp",
    title: "Dashboard | 30dayscoding",
    description:
      "Access your purchased courses with ease on our user dashboard. Enjoy seamless navigation, instant course activation, and personalized progress tracking.",
    site: "https://30dayscoding.com",
  },
};

export default async function Dashboard() {

  const session = await auth()
  
  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col gap-2 px-6 py-5 lg:px-8 w-full">
        <Suspense fallback={<CoursesFallback />}>
          <Courses />
        </Suspense>
        <div className="flex justify-between py-3">
          <span className="text-xl text-white/70 font-bold">
            Purchased Courses
          </span>
        </div>
        <Purchased />
      </div>
      <Notifications />
      <UserDialog />
    </div>
  );
}

function CoursesFallback() {
  return (
    <section className="flex rounded-lg gap-2 overflow-hidden w-full py-2 bg-bg">
      {Array.from({ length: 3 }).map((e: any, i: number) => (
        <Skeleton
          key={i}
          className="max-sm:basis-4/5 sm:basis-1/2 md:basis-1/3 bg-second/30 aspect-video"
        />
      ))}
    </section>
  );
}
