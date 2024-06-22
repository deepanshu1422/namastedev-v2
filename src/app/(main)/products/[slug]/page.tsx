import React, { cache } from 'react'
import Hero from './hero'
import { templates } from '@/util/constants'
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

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

    return templates.map(({ slug }) => {
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
        item = templates.find(e => e.slug === params.slug)
    } catch (err) {
        item = {
            title: "Not Found",
        };
    }

    return {
        title: item?.title,
        description: item?.description,
        openGraph: {
            type: "article",
            title: item?.title,
            description: item?.description,
            images: {
                url: item?.cover ?? "",
            },
        },
    };
}

const getTemplate = cache(
    async (slug: string) => {
        const item = templates.find(e => e.slug === slug)
        return item;
    }
);

export default async function Home({ params: { slug } }: PageProps) {

    const item = await getTemplate(slug)

    if (!item) return notFound();

    const { cover, description, title, details, images, checkout, live } = item

    return (
        <main className='min-h-svh overflow-clip'>
            <Hero
                title={title}
                desc={description}
                heroImage={cover}
                details={details}
                images={images}
                checkout={checkout}
                live={live}
            />
        </main>
    )
}
