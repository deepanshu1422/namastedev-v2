import { roadmapsData } from "@/util/globals";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Hero from "./hero";
import Flow from "./flow";

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
  const posts = roadmapsData;

  return posts.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params: { slug }, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item = roadmapsData.find((e) => e.slug === slug);

  // fetch data
  return {
    title: item?.name,
    description: item?.description,
    openGraph: {
      title: item?.name,
      description: item?.description,
    },
  };

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
}

export default function Home({ params: { slug } }: PageProps) {
  const map = roadmapsData.find((e) => e.slug === slug);

  if (!map?.slug) return notFound();

  return (
    <main className="w-full flex flex-col min-h-svh">
      <Hero title={map.name} description={map.description} />
      <Flow />
    </main>
  );
}
