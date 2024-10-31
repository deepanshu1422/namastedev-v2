import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import Image from "next/image";

function CourseCard({
    title,
    description,
    image,
    link,
    alt
}: {
    title: string;
    description: string;
    image: string;
    link: string;
    alt: string
}) {
    return (
        <Link
            href={link}
            className="shadow-lg flex flex-col bg-second border relative group"
        >
            <div className="overflow-hidden bg-bg w-full h-56 shadow-lg relative">
                <Image
                    className="absolute object-cover group-hover:scale-105 transition-transform duration-200"
                    fill
                    src={image}
                    alt={alt}
                />
            </div>
            <div className="absolute bottom-0 left-0 p-3 py-4 flex flex-col flex-1 bg-gradient-to-t from-bg/80 from-20% to-transparent h-full">
                <div className="flex flex-col gap-1 mt-auto">
                    <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
                    <p className="max-sm:text-xs text-sm text-white/60 leading-5 font-medium line-clamp-3 sm:line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default function Courses() {

    const data = [
        {
            title: "DSA Complete Placement Course",
            image: "/courses/dsa.jpg",
            link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
            alt: "30 days coding dsa courses",
            description: "Prepare for your dream job with our comprehensive DSA Complete Placement Course. Gain in-depth knowledge of Data Structures and Algorithms through expert-led tutorials and hands-on coding challenges. Perfect for acing technical interviews and boosting your coding proficiency."
        },
        {
            title: "MERN FullStack Web Development",
            image: "/courses/mern.jpg",
            link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
            alt: "30 days coding mern fullstack courses",
            description: "Become a proficient full-stack developer with our MERN FullStack Web Development course. Learn to build dynamic and responsive web applications using MongoDB, Express, React, and Node.js. Ideal for aspiring web developers seeking a comprehensive learning experience."
        },
        {
            title: "Next JS FullStack Web Development",
            image: "/courses/nextjs.jpg",
            link: "/courses",
            alt: "30 days coding nextjs fullstack web dev courses",
            description: "Master the Next.js framework with our Next JS FullStack Web Development course. Build scalable and high-performance web applications with ease. This course covers everything from basics to advanced techniques, tailored for developers aiming to enhance their skills in modern web development."
        },
    ]

    return (
        <div className="w-full text-white bg-bg flex flex-col px-4 py-2 lg:px-8">
            <section className="flex flex-col gap-1.5 max-w-7xl w-full mx-auto ">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-pretty">Special Courses just for Prepared for You</h2>
                <Slider data={data} />
            </section>
        </div>
    );
}

export function Slider({ data }: { data: { title: string; description: string, link: string, image: string; alt: string }[] }) {
    return (
        <Carousel opts={{
            loop: true
        }} className="py-3">
            <CarouselContent>
                {data.map(({ title, description, alt, image, link }, index) => (
                    <CarouselItem className="basis-full max-md:basis-4/5 md:basis-1/2 xl:basis-1/3" key={index}>
                        <CourseCard title={title} description={description} image={image} link={link} alt={alt} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 h-12 w-12" />
            <CarouselNext className="-right-4 h-12 w-12" />
        </Carousel>
    )
}
