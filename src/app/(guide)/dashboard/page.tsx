import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import React, { Suspense } from 'react'
import Courses from './courses';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import Purchased from './purchased';
import Notifications from './notifications';
import { UserDialog } from './new-user';

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
    <div className='flex h-full'>
      <div className='flex-1 flex flex-col gap-2 px-4 py-5 lg:px-8'>
        <span>Dashboard</span>
        <Suspense fallback={<CoursesFallback />}>
          <Courses />
        </Suspense>
        <div className='flex justify-between py-3'>
          <span className='text-xl text-white/70 font-bold'>Purchased Courses</span>
        </div>
        <Suspense fallback={<PurchasedFallback />}>
          <Purchased />
        </Suspense>
      </div>
      <Notifications />
      <UserDialog />
    </div>
  )
}

function CoursesFallback() {
  return <section className='flex max-md:flex-col rounded-lg gap-2 overflow-hidden w-full py-2 bg-bg'>
    {Array.from({ length: 3 }).map((e: any, i: number) => <Skeleton key={i} className='bg-second/30 flex-1 h-20 md:h-48' />)}
  </section>
}

function PurchasedFallback() {
  return <div className='min-h-52 w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <Skeleton className='min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60' />
    <Skeleton className='min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60' />
    <Skeleton className='min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60' />
  </div>
}