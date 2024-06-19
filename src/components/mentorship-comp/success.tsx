"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Reveal from "@/components/framer/reveal";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

type TestimonialType = {
    name: string;
    review: string;
    // course?: string;
    link: string;
};

function Testimonial({ name, review, link }: TestimonialType) {
    return (
        <div className="lg:hover:bg-opacity-70 transition-all duration-200 flex flex-col p-6 gap-4 bg-second rounded-lg">
            <div className="flex justify-between">
                <section className="flex items-center gap-2">
                    <Avatar>
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback>{name.split(" ").map(e => e[0]).join("").toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="flex flex-col">
                        <span className="font-bold leading-4">{name}</span>
                        <span className="text-white/60 text-sm">Review</span>
                    </span>
                </section>

                <Link target="_blank" href={link} className="flex gap-1 p-2 rounded-full bg-prime/90 hover:bg-prime/70 text-sm font-semibold shadow-[rgb(0,_0,_0)_6px_6px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_3px_3px_0px_0px]">
                    <ShoppingBag className="h-5 w-5" />
                    {/* Try Now */}
                </Link>
            </div>
            <p className="leading-6 text-sm font-normal">{review}</p>
        </div>
    );
}

const testimonials: TestimonialType[] = [
    {
        review: "I knew I had what it took to break into tech, but didn't really know how to do it. Aryan reached out to me about the dsa revision guide and joining the group right when I was looking to get started. The dsa revison guide, paired with support from the group, gave me a clear path to land internships at GitHub and Google, and eventually a full time role at Tesla Autopilot right after undergrad.",
        name: "Alex Munich",
        link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0"
    },
    {
        review: "This community has been a game-changer for my career. The exclusive courses and personalized guidance from expert mentors have helped me take my coding skills to the next level.",
        name: "Dhanush Kamath",
        link: "https://courses.30dayscoding.com/courses/Full-stack-package-652a0a17e4b0db14394522ed"

    },
    {
        review: "The exclusive courses and bi-weekly live sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to build my portfolio. I highly recommend this community.",
        name: "Kevin Smith",
        link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d"

    },
    {
        review: "Joining this community was one of the best decisions I've made for my career. The 24/7 WhatsApp group has been an incredible resource for networking and collaboration. I highly recommend this community",
        name: "Umang Chaudhary",
        link: "https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"

    },
    {
        review: "Content across 30days coding is great and its really easy to understand, and best part about it is project based learning which starts with beginner to intermediate to hard and handholding support by aryan and his team is impeccable. A must join mentorship programme.",
        name: "Nimish Sharma",
        link: "https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"

    },
    {
        review: "I have purchased your course of mern bundle and blockchain the course is great as both the person are adding new material every day in the course just 1 suggestion is to add more video lecture in the blockchain course else the mern course is really good i am currently learning react js from that course. I just want my 800 rupees refund so that i can buy the bundel of whole course (10 course bundel ) because i want it really badly",
        name: "Parth Sankpal",
        link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0"

    },
    //   {
    //     time: "3/7/2024 7:00:59",
    //     name: "Punit ",
    //     email: "Punitmistr@gmail.com",
    //     review:
    //       "Very good person got to learn new new things about the web development and how to prepare for the future and amazing content for education purpose as well as for the entertainment also ",
    //   },
    //   {
    //     time: "3/8/2024 0:23:51",
    //     name: "Jaydeep Bariya",
    //     email: "jaydeepbariya.dev@gmail.com",
    //     review:
    //       "I have purchased 10 courses bundle 2 days ago. I know MERN, but bought for other things this bundle offers. I am amazed with the amount of content and variety on veriety of tech. Thanks. ",
    //   },
    //   {
    //     time: "3/10/2024 22:04:05",
    //     name: "Darshan ",
    //     email: "darsingh07@yahoo.com",
    //     review:
    //       "I have taken a mern stack course ,its a veey good course for professional as well as beginner,deep learning concepts plenty of projects. Interview question etc lot of things its a job ready course in such a small amount. \nThankyou",
    //   },
    //   {
    //     time: "3/7/2024 1:38:21",
    //     name: "Parth Sankpal ",
    //     email: "psankpal87@gmail.com",
    //     review:
    //       "I just purchased course.This is the best price i could get the course compared to market.It is very nice to know that you just want to educate people,don't want to make money out of them. Really value for money.\n\nAlso please share community links to join",
    //   },
    //   {
    //     time: "3/10/2024 23:09:03",
    //     name: "Nimish Sharma",
    //     email: "snimish123@gmail.com",
    //     review:
    //       "content across 30days coding is great and its really easy to understand, and best part about it is project based learning which starts with beginner to intermediate to hard and handholding support by aryan and his team is impeccable. ",
    //   },
    //   {
    //     time: "3/7/2024 7:00:59",
    //     name: "Punit ",
    //     email: "Punitmistr@gmail.com",
    //     review:
    //       "Very good person got to learn new new things about the web development and how to prepare for the future and amazing content for education purpose as well as for the entertainment also ",
    //   },
    //   {
    //     time: "3/8/2024 0:23:51",
    //     name: "Jaydeep Bariya",
    //     email: "jaydeepbariya.dev@gmail.com",
    //     review:
    //       "I have purchased 10 courses bundle 2 days ago. I know MERN, but bought for other things this bundle offers. I am amazed with the amount of content and variety on veriety of tech. Thanks. ",
    //   },
    //   {
    //     time: "3/10/2024 22:04:05",
    //     name: "Darshan ",
    //     email: "darsingh07@yahoo.com",
    //     review:
    //       "I have taken a mern stack course ,its a veey good course for professional as well as beginner,deep learning concepts plenty of projects. Interview question etc lot of things its a job ready course in such a small amount. \nThankyou",
    //   },
    //   {
    //     time: "3/7/2024 1:38:21",
    //     name: "Parth Sankpal ",
    //     email: "psankpal87@gmail.com",
    //     review:
    //       "I just purchased course.This is the best price i could get the course compared to market.It is very nice to know that you just want to educate people,don't want to make money out of them. Really value for money.\n\nAlso please share community links to join",
    //   },
    //   {
    //     time: "3/10/2024 23:09:03",
    //     name: "Nimish Sharma",
    //     email: "snimish123@gmail.com",
    //     review:
    //       "content across 30days coding is great and its really easy to understand, and best part about it is project based learning which starts with beginner to intermediate to hard and handholding support by aryan and his team is impeccable. ",
    //   },
];

export default function Success() {
    return (
        <div className={"grid grid-cols-1 gap-1 pt-10 max-w-[75rem] m-auto"}>
            <span className="flex items-center justify-center gap-4 relative">
                <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
                <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
                    Success Stories
                </h2>
                <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
            </span>
            <p className="max-w-2xl text-center mx-auto text-sm text-white/70 px-10">A collection of inspiring narratives highlighting the journeys of individuals who have overcome significant challenges to achieve remarkable accomplishments.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-10 py-5 lg:py-10">
                {testimonials.map(({ name, review, link }, i) => (
                    <Testimonial key={i} name={name} review={review} link={link} />
                ))}
            </div>

            {/* <div className="py-12 relative flex flex-col gap-7 overflow-hidden bg-gradient-to-tr">
        <div className="relative flex gap-5 animate-[loop-scroll_40s_infinite_linear] hover:[animation-play-state:paused] w-fit">
        </div>

        <div className="pointer-events-none h-full w-full absolute z-10 bg-gradient-to-r from-bg max-lg:from-0% from-5% via-bg/10 via-50% to-bg max-lg:to-100% to-95%"></div>
      </div> */}

            <div className="m-auto">
                <Link className="text-sm" href={"/testimonials"}>
                    <button
                        className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
                    >
                        Show More
                    </button>
                </Link>
            </div>
        </div>
    );
}
