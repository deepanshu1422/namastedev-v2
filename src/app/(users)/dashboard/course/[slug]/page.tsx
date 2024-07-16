import Link from "next/link";
import {
  Book,
  Box,
  Circle,
  Compass,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import UserProfile from "@/app/(users)/user-profile";

import React, { Suspense } from 'react'
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getContentfulData } from '@/lib/cotentful';
import Player from "./video-player";

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

  const { courseCreator, modulesCollection, title, courseId } = items[0]

  // const navBar = [
  //   {
  //     title: "Explore",
  //     icon: <Compass className="h-4 w-4 md:h-5 md:w-5" />,
  //     href: "/explore",
  //   },
  // ];

  return (
    <main className='min-h-svh overflow-clip'>
      <div className="grid min-h-screen w-full md:grid-cols-[180px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
            <div className="sticky z-10 top-0 flex items-center border-b bg-bg">
              <Link href="/" className="h-14 bg-muted/40 px-4 py-2 lg:h-[60px] lg:px-6 w-full flex items-center gap-2 font-semibold">
                <Image src={"/logo.png"} alt="logo" width={35} height={35} />
                <span className="max-lg:hidden">30DC</span>
              </Link>
            </div>
            <div className="flex-1 overflow-y-auto overflow-x-hidden horizontal-scroll">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">

                {modulesCollection.items.map(({ title, chaptersCollection }, modIndex) => (
                  <div key={modIndex} className="flex flex-col gap-2">
                    <button
                      className={`flex items-center gap-2 rounded-lg px-2 max-lg:py-3 lg:py-2 text-white/70 transition-all hover:text-prime/90 bg-white bg-clip-text`}
                    >
                      <Book className="h-4 w-4" />
                      <span className="hidden text-left md:block">
                        {title}
                      </span>
                    </button>

                    {chaptersCollection.items.map(({ title }, chapterIndex) => (
                      <div key={chapterIndex} className="flex flex-col gap-2">
                        <button
                          className={`flex items-center gap-2 rounded-lg px-2 max-lg:py-3 lg:py-2 text-white/70 transition-all hover:text-prime/90 bg-white bg-clip-text`}
                        >
                          <Circle className="h-3 w-3 shrink-0" />
                          <span className="hidden text-xs text-left md:block">
                            {title}
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </nav>
            </div>
            <div className="max-lg:hidden relative mt-auto p-4">
              <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>New Courses</CardTitle>
                  <CardDescription>
                    Upskill yourself with pocket friendly courses — Enroll Now
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Link href={"https://courses.30dayscoding.com/s/store"}>
                    <Button
                      size="sm"
                      className="bg-prime hover:bg-prime/80 text-white w-full"
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
                <Image
                  alt="30DayCoding New Challenge"
                  src={"/best.gif"}
                  height={120}
                  width={120}
                  className="absolute top-0 -translate-y-5 translate-x-3 right-0"
                />
              </Card>
            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
          {/* <div className="h-20" ></div> */}
          <header className="bg-bg">
            <div className="bg-muted/40 flex items-center gap-4 border-b px-2 h-14 lg:h-[60px]">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden px-2"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col overflow-hidden overflow-y-auto">
                  <>
                    <nav className="grid gap-2 text-lg font-medium">
                      <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                      >
                        <Image
                          src={"/logo.png"}
                          alt="logo"
                          width={30}
                          height={30}
                        />
                        <span className="sr-only">30DC</span>
                      </Link>

                      {modulesCollection.items.map(({ title, chaptersCollection }, i) => (
                        <button
                          key={i}
                          className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground transition-all`}
                        >
                          {title}
                        </button>
                      ))}
                    </nav>
                    <div className="relative mt-auto">
                      <Card>
                        <CardHeader>
                          <CardTitle>New Courses</CardTitle>
                          <CardDescription>
                            Upskill yourself with pocket friendly courses — Enroll Now
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Link
                            href={
                              "https://courses.30dayscoding.com/s/store"
                            }
                          >
                            <Button
                              size="sm"
                              className="bg-prime hover:bg-prime/80 text-white w-full"
                            >
                              Enroll Now
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                      <Image
                        alt="30DayCoding New Challenge"
                        src={"/best.gif"}
                        height={120}
                        width={120}
                        className="absolute top-0 -translate-y-10 translate-x-10 right-0"
                      />
                    </div>
                  </>
                </SheetContent>
              </Sheet>
              <span className="flex items-center gap-1">
                <Box className="w-5 h-5 shrink-0" />
                <h2 className="font-bold line-clamp-1">{title}</h2>
              </span>
              <UserProfile />
            </div>
          </header>
          <div className="flex-1 flex flex-col gap-3 items-center p-6">
            <span className="text-xl mt-auto mx-auto sm:text-3xl">{modulesCollection.items[0].chaptersCollection.items[0].title}</span>
            <div className="max-w-[900px] w-full m-auto bg-slate-500">
              <Suspense fallback={<></>}>
                <Player src={modulesCollection.items[0].chaptersCollection.items[0].youtubeId} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
