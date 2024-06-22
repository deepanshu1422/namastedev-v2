import React from 'react'
import { Metadata } from 'next';
import Main from './main';

export const metadata: Metadata = {
    title: "Products | 30dayscoding",
    description:
        "Discover top-notch web design services and premium pre-built Next.js templates. Elevate your online presence with our affordable, customizable solutions designed to meet your unique needs.",
    openGraph: {
        images: "https://i.ibb.co/ZSkm4HH/30dc1.webp",
        title: "Affordable Pre-built Next.js Web Templates",
        description:
            "Discover top-notch web design services and premium pre-built Next.js templates. Elevate your online presence with our affordable, customizable solutions designed to meet your unique needs.",
        url: "https://30dayscoding.com",
        type: "website",
    },
    keywords: ["30 days coding, coding, coding challenges"],
    twitter: {
        card: "summary_large_image",
        images: "https://i.ibb.co/ZSkm4HH/30dc1.webp",
        title: "Affordable Pre-built Next.js Web Templates",
        description:
            "Discover top-notch web design services and premium pre-built Next.js templates. Elevate your online presence with our affordable, customizable solutions designed to meet your unique needs.",
        site: "https://30dayscoding.com",
    },
};


export default function Home() {

    return <Main />
}
