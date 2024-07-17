import React from 'react'
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getContentfulData } from '@/lib/cotentful';
import Main from "./main";

export const dynamic = "force-dynamic";

export type Courses = {
  courseCollection: {
    items: {
      courseId: string,
      title: string,
      // shortDescription: string,
      // longDescription: string,
      slug: string,
      courseCreator: {
        name: string
      },
      modulesCollection: {
        total: number,
        items: {
          title: string,
          duration: string,
          chaptersCollection: {
            total: number,
            items: [
              {
                title: string,
                duration: string,
                youtubeId: string
              },

            ]
          }
        }[]
      }
    }[]
  }
}

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

  const data = await getContentfulData(`query {
        courseCollection{
        items{
            courseId
            }
        }
    }`)

  return data.data.courseCollection.items.map((e: Record<string, string>) => {
    if (!e.courseId) return;
    slug: e.courseId.toString();
  });
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  let item = null;

  try {
    const data = await getContentfulData(`query {
            courseCollection{
            items{
                slug,
                courseId,
                title,
                shortDescription,
                courseImage{
                    url
                    }
                }
            }
        }`)

    item = data.data.courseCollection.items.find((e: Record<string, string>) => e.courseId === params.slug)
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

async function getCourses({ slug }: { slug: string }): Promise<Courses> {

  const query = `query {
    courseCollection(where: {courseId: "${slug}"},limit:1){
        items{
        courseId,
        title,
        courseCreator{
            name,
        },
        modulesCollection{
            total,
            items{
                title,
                duration,
                chaptersCollection{
                total,
                items{
                title,
                duration,
                youtubeId,
                videoLink
                    }
                }
                    }
                }
            }
        }
    }`

  const fetchedData = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 3600,
    },
  })

  const data = await fetchedData.json()

  return data.data
}

export default async function Home({ params: { slug } }: PageProps) {

  const data = await getCourses({ slug })

  if (!data.courseCollection.items.length) return notFound();

  const { courseCollection: { items } } = data

  const { modulesCollection, title, courseId } = items[0]

  return (
    <main className='min-h-svh overflow-clip'>
      <div className="grid min-h-screen w-full md:grid-cols-[180px_1fr] lg:grid-cols-[280px_1fr]">
        <Main modulesCollection={modulesCollection} title={title} />
      </div>
    </main>
  )
}
