import { Metadata } from 'next';
import React from 'react'
import Hero from './hero';

export const metadata: Metadata = {
    title: "Products | 30dayscoding",
    description:
        "Discover top-notch web design services and premium pre-built Next.js templates. Elevate your online presence with our affordable, customizable solutions designed to meet your unique needs.",
    openGraph: {
        images: "https://i.ibb.co/wSY7bDZ/products.webp",
        title: "Affordable Pre-built Next.js Web Templates",
        description:
            "Discover top-notch web design services and premium pre-built Next.js templates. Elevate your online presence with our affordable, customizable solutions designed to meet your unique needs.",
        url: "https://30dayscoding.com",
        type: "website",
    },
    keywords: ["30 days coding, coding, coding challenges"],
    twitter: {
        card: "summary_large_image",
        images: "https://i.ibb.co/wSY7bDZ/products.webp",
        title: "Affordable Pre-built Next.js Web Templates",
        description:
            "Discover top-notch web design services and premium pre-built Next.js templates. Elevate your online presence with our affordable, customizable solutions designed to meet your unique needs.",
        site: "https://30dayscoding.com",
    },
};

export default function Home() {
    return (
        <main className="bg-background bg-bg min-h-svh transition-all">
            <Hero
                title="Affordable Pre-built Next.js Web Templates"
                desc="Discover top-notch web design services and premium pre-built Next.js templates. Elevate your online presence with our customizable solutions."
                heroImage="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </main>
    )
}
