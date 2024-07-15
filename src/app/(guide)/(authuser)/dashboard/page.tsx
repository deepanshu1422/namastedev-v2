import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import React, { Suspense } from 'react'
import Session from './session';
import Courses from './courses';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import Purchased from './purchased';

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

export default function Dashboard() {

  return (
    <div className='flex flex-col gap-2 px-4 py-5 lg:px-8'>
      <span>Dashboard</span>
      {/* <h2 className='text-4xl font-bold'>Welcome, {session?.user?.name ?? "No Name"}</h2> */}
      <Suspense fallback={<CoursesFallback />}>
        <Courses />
      </Suspense>
      <span className='text-xl text-white/70 font-bold'>Purchased Courses</span>
      <Suspense fallback={<PurchasedFallback />}>
        <Purchased />
      </Suspense>
    </div>
  )
}

function CoursesFallback() {
  return <section className='flex max-md:flex-col rounded-lg gap-2 overflow-hidden w-full py-2 bg-bg'>
    {Array.from({ length: 3 }).map((e: any, i: number) => <Skeleton key={i} className='bg-second/30 flex-1 h-20 md:h-48' />)}
  </section>
}

function PurchasedFallback() {
  return <div className='min-h-60 w-full flex'><Badge className="text-white gap-1 bg-second/60 hover:bg-second/80 rounded m-auto text-base">No Purchased Courses</Badge></div>
}