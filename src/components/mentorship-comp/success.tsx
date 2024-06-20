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
        review: "Before joining 30DC, I was struggling to make sense of the vast world of tech. The mentorship program gave me a structured approach and personalized guidance that I desperately needed. With 30DC's resources and community, I successfully transitioned from a non-tech background to securing a software engineering role at Amazon within six months.",
        name: "Alex Munich",
        link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0"
    },
    {
        review: "I was stuck in a low-paying job and felt lost in my career. 30DC's mentorship group changed everything for me. The courses and community support helped me sharpen my skills and regain confidence. With the support from 30DC, I landed a dream job at Facebook, doubling my salary and setting a new career trajectory.",
        name: "Dhanush Kamath",
        link: "https://courses.30dayscoding.com/courses/Full-stack-package-652a0a17e4b0db14394522ed"

    },
    {
        review: "Joining 30DC was the best decision I made for my career. The personalized mentorship and the comprehensive courses provided me with the tools and strategies I needed to excel in interviews. Thanks to 30DC and the community, I secured an internship at LinkedIn, which eventually turned into a full-time software engineering position at Apple.",
        name: "Kevin Smith",
        link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d"

    },
    {
        review: "I had been applying to tech jobs for months with no success. The 30DC mentorship program, particularly the courses and the supportive community, provided me with a clear roadmap and the confidence to ace my interviews. 30DC's guidance was instrumental in helping me land a high-paying role at Microsoft right after graduation.",
        name: "Umang Chaudhary",
        link: "https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"

    },
    {
        review: "After struggling with countless job applications and rejections, I discovered 30DC. The structured courses and mentorship provided me with the direction and skills I needed to stand out. The supportive community kept me motivated throughout the process, and I eventually landed a software engineering position at Netflix, transforming my career.",
        name: "Nimish Sharma",
        link: "https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"

    },
    {
        review: "30DC was a game-changer for me. The personalized mentorship, comprehensive courses, and the encouraging community created a perfect environment for my growth. With the help of 30DC, I went from being unsure about my career path to securing a high-paying tech role at Adobe, right after completing my studies.",
        name: "Parth Sankpal",
        link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0"

    },
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
