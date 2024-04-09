import type { Metadata, ResolvingMetadata } from "next";
import Hero from "./hero";
import Reveal from "@/components/framer/reveal";
import { ReactNode } from "react";
import Mid from "./Mid";
import { contentfulHeaders } from "@/lib/cotentful";

export const dynamicParams = false;

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/f7l5sefbt57k/environments/master",
    {
      method: "POST",
      headers: contentfulHeaders,
      body: JSON.stringify({
        query: `query {
          blogPageTemplateCollection{
            items{
              slug
            }
          }
        }`,
      }),
      next: {
        revalidate: 60 * 60,
      },
    }
  ).then((res) => res.json());

  return slugs.data.blogPageTemplateCollection.items.map((slug: any) => ({
    slug: slug.slug,
  }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const response = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/f7l5sefbt57k/environments/master",
    {
      method: "POST",
      headers: contentfulHeaders,
      body: JSON.stringify({
        query: `query {
          blogPageTemplateCollection(where: {
            slug: "${params.slug}" }){
            items{
              metaTitle
              metaDescription
              heroImage{
                height
                width
                url
              }
            }
          }
        }`,
      }),
    }
  ).then((res) => res.json());

  return {
    title: response.data.blogPageTemplateCollection.items[0].metaTitle,
    description:
      response.data.blogPageTemplateCollection.items[0].metaDescription,
    openGraph: {
      images: [
        {
          url: response.data.blogPageTemplateCollection.items[0].heroImage.url,
          height:
            response.data.blogPageTemplateCollection.items[0].heroImage.height,
          width:
            response.data.blogPageTemplateCollection.items[0].heroImage.width,
        },
      ],
    },
  };
}

async function getBlogData(slug: string): Promise<BlogData> {
  const response = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/f7l5sefbt57k/environments/master",
    {
      method: "POST",
      headers: contentfulHeaders,
      body: JSON.stringify({
        query: `query {
          blogPageTemplateCollection(where: {
            slug: "${slug}" }){
            items{
              title
              metaDescription
              heroImage{
                height
                width
                url
              }
            }
          }
        }`,
      }),
    }
  ).then((res) => res.json());

  const blogData: BlogData = response.data.blogPageTemplateCollection.items[0];

  return blogData;
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="max-w-lg md:max-w-3xl m-auto md:text-lg lg:text-xl py-4 px-8 lg:px-5">
        {children}
      </p>
    </Reveal>
  );
}

function Heading2({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="max-w-lg md:max-w-3xl m-auto text-2xl max-md:text-xl font-bold px-8 lg:px-5 pt-8 break-words">
        {children}
      </h2>
    </Reveal>
  );
}

export default async function Home({ params: { slug } }: PageProps) {
  const { title, metaDescription, heroImage, blogSectionCollection } =
    await getBlogData(slug);

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero title={title} desc={metaDescription} heroImage={heroImage.url} />
      <Heading2>{slug}</Heading2>
      <Paragraph>
        Apple’s newest store in Shanghai opened this Thursday, March 21, to
        excited customers ready to discover Apple’s full lineup of products and
        services. Located next to the landmark Jing’an Temple, Apple Jing’an
        will host a special six-week Today at Apple program that pays homage to
        the local community and its creatives.
      </Paragraph>
      <Paragraph>
        The series, Let Diverse Creativity Bloom in Jing’an, showcases
        Shanghai’s next generation of creators and how they use the
        groundbreaking capabilities of iPhone.
      </Paragraph>
      <Mid
        blogImage="https://www.apple.com/newsroom/images/2024/03/apple-jingan-opens-to-thousands-of-customers-in-shanghai/article/Apple-Jingan-China-opening-day-plaza-overhead_big.jpg.small_2x.jpg"
        desc="Located near Jing’an Temple and Jing’an Park in Shanghai, the store offers the community a gathering place for special events, as well as providing a one-of-a-kind shopping destination."
      />
    </main>
  );
}
