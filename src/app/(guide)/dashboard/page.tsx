import { auth } from '@/auth';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Dashboard | 30dayscoding",
  description:
    "Access your purchased courses with ease on our user dashboard. Enjoy seamless navigation, instant course activation, and personalized progress tracking.",
  openGraph: {
    images: "https://i.ibb.co/n1bC4Kj/image-63job.webp",
    title: "Explore | 30dayscoding",
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
    <div className='flex flex-col gap-2 px-4 py-5 lg:px-8'>
      <span>Dashboard</span>
      <h2 className='text-4xl font-bold'>Welcome, {session?.user?.name ?? "No Name"}</h2>
      <span className='text-lg text-white/50 font-bold'>Your email is {session?.user?.email}</span>
    </div>
  )
}
