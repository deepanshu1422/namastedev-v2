"use client";

import Image from "next/image";
import Link from "next/link";

export default function Cards({ data }: { data: { title: string; description: string, link: string, image: string; alt: string }[] }) {
    return <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[84rem] mx-auto  px-4 lg:px-8 py-3">
        {data.map(({ title, description, link, image }, i) => (
            <Card
                key={i}
                title={title}
                description={description}
                link={link}
                image={image ??
                    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            />
        ))}
    </div>
}

function Card({
    title,
    description,
    image,
    link,
}: {
    title: string;
    description: string;
    image: string;
    link: string;
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
                    loader={() => image}
                    alt={title}
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
