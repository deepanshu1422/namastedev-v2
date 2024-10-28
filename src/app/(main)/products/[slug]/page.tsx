import React, { cache } from "react";
import Hero from "./hero";
import { templates } from "@/util/constants";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

// export const dynamicParams = true;
export const dynamic = "force-static";

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
  return templates.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item = null;

  try {
    item = templates.find((e) => e.slug === params.slug);
  } catch (err) {
    item = {
      title: "Not Found",
    };
  }

  return {
    title: `${item?.title} | 30DC Templates`,
    description: item?.description,
    openGraph: {
      type: "article",
      title: `${item?.title} | 30DC Templates`,
      description: item?.description,
      images: {
        url: item?.cover ?? "",
      },
    },
  };
}

export default async function Home({ params: { slug } }: PageProps) {
  const item = templates.find((e) => e.slug === slug);

  if (!item) return notFound();

  const { cover, description, title, details, images, checkout, live } = item;

  return (
    <main className="min-h-svh overflow-clip">
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
  );
}
