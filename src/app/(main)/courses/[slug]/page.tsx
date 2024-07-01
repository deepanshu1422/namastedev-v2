import React, { cache } from 'react'
import { courses } from '@/util/constants'
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from './hero';
import Details from './details';
import Checkout from './checkout';

export const dynamicParams = true;

type PageProps = {
    params: {
        slug: string;
    };
};

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {

    return courses.map(({ slug }) => {
        if (!slug) return;
        slug: slug.toString();
    });
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    let item = null;

    try {
        item = courses.find(e => e.slug === params.slug)
    } catch (err) {
        item = {
            title: "Not Found",
        };
    }

    return {
        title: `${item?.title} | 30DC Courses`,
        description: item?.description,
        openGraph: {
            title: `${item?.title} | 30DC Courses`,
            description: item?.description,
            images: {
                url: item?.imgSrc ?? "",
            },
        },
    };
}

const getCourses = cache(
    async (slug: string) => {
        const item = courses.find(e => e.slug === slug)
        return item;
    }
);

export default async function Home({ params: { slug } }: PageProps) {

    const item = await getCourses(slug)

    if (!item) return notFound();

    const { description, title, category, imgSrc, link } = item

    return (
        <main className='min-h-svh overflow-clip'>
            <Hero
                title={title}
                desc={description}
                heroImage={imgSrc}
                details={["details"]}
                image={imgSrc}
                checkout={"800"}
                live={"live"}
            />
            <Details image={imgSrc} />
        </main>
    )
}
