import React from 'react'
import { Metadata } from 'next';
import Main from './main';

export const metadata: Metadata = {
    title: "Online 30DC Courses | MERN, Blockchain, DSA, AI & More",
    description:
        "Advance your development skills with our comprehensive online courses. Learn MERN Stack, Blockchain, Data Structures & Algorithms, AI, and more from industry experts.",
    openGraph: {
        images: "https://i.ibb.co/q7LPz35/courses-1.webp",
        title: "Online 30DC Courses | MERN, Blockchain, DSA, AI & More",
        description:
            "Advance your development skills with our comprehensive online courses. Learn MERN Stack, Blockchain, Data Structures & Algorithms, AI, and more from industry experts.",
        url: "https://30dayscoding.com",
        type: "website",
    },
    keywords: ["30 days coding, coding, coding challenges"],
    twitter: {
        card: "summary_large_image",
        images: "https://i.ibb.co/q7LPz35/courses-1.webp",
        title: "Online 30DC Courses | MERN, Blockchain, DSA, AI & More",
        description:
            "Advance your development skills with our comprehensive online courses. Learn MERN Stack, Blockchain, Data Structures & Algorithms, AI, and more from industry experts.",
        site: "https://30dayscoding.com",
    },
};


export default function Home() {

    return <Main />
}
