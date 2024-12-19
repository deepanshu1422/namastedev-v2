import { notFound } from "next/navigation";
import { Clock, StarIcon, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  duration: string;
  rating: number;
  coverImage: {
    url: string;
  };
  lessonsCollection: {
    total: number;
    items: {
      title: string;
      description: string;
      duration: string;
    }[];
  };
  reviewsCollection: {
    total: number;
    items: {
      name: string;
      star: number;
      description: string;
    }[];
  };
  faqCollection: {
    items: {
      question: string;
      answer: string;
    }[];
  };
  author: {
    name: string;
    profilePic: {
      url: string;
    };
  };
};

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
  const query = `query {
        projectsCollection(where: { publish: true }){
        items{
            slug,
          }
        }
      }`;

  const fetchedData = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await fetchedData.json();

  return data.data.projectsCollection.items.map(
    (e: Record<string, string>) => ({
      slug: e.slug,
    })
  );
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item: any = null;

  try {
    const query = `query {
            projectsCollection(where: { publish: true, slug: "${params.slug}" }, limit: 1){
            items{
                slug,
                title,
                description,
                coverImage{
                    url
                  }
                }
              }
            }`;

    const fetchedData = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );

    const data = await fetchedData.json();

    if (!data.data.projectsCollection.items.length) throw { error: true };

    item = data.data.projectsCollection.items[0];
  } catch (err) {
    item = {
      title: "Not Found",
    };
  }

  return {
    title: `${item?.title} | 30DC Projects`,
    description: item?.description,
    openGraph: {
      title: `${item?.name} | 30DC Projects`,
      description: item?.description,
      images: {
        url: item?.image?.url ?? "",
      },
      url: `https://30dayscoding.com/projects/${item?.slug}`,
      type: "website",
    },
  };
}

async function getProject(slug: string): Promise<Project | null> {
  const query = `query {
  projectsCollection(where: { publish: true, slug: "${slug}" }, limit: 1){
    items{
      slug,
      title,
      description,
      category,	
			techStack,
      duration,
      rating,
      coverImage{
        url
      }
      author{
        name,
        profilePic{
          url
        }
      }
      lessonsCollection{
        total,
        items{
          title,
          description,
          duration
        }
      }
      reviewsCollection{
        total,
        items{
          name,
          star,
          description
        }
      }
      faqCollection{
        items{
          question,
          answer
        }
      }
    }
  }
}`;

  const fetchedData = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await fetchedData.json();

  if (!data.data.projectsCollection.items.length) return null;

  return data.data.projectsCollection.items[0];
}

export default async function ProjectPage({ params: { slug } }: PageProps) {
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const {
    author,
    category,
    coverImage: { url },
    description,
    duration,
    faqCollection,
    lessonsCollection,
    rating,
    reviewsCollection,
    techStack,
    title,
  } = project;

  return (
    <main className="min-h-screen bg-gray-200">
      {/* Navigation Breadcrumb */}
      <section className="w-full bg-bg">
        <div className="max-w-6xl mx-auto px-4 py-4 text-white/80 text-sm">
          <div className="flex items-center gap-2 flex-nowrap">
            <Link
              className="flex gap-1 items-center hover:text-prime hover:underline transition-all"
              href={"/projects"}
            >
              <Blocks className="w-4 h-4" />
              Projects
            </Link>
            <span>›</span>
            <span className="line-clamp-1">{title}</span>
          </div>
        </div>

        {/* Header Section */}

        <div className="max-w-6xl mx-auto px-4 py-3 pb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 relative">
              <Image
                src={author.profilePic.url}
                alt={author.name}
                fill
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-white">{author.name}</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:items-start mb-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h1>
              <div className="max-sm:text-sm flex flex-wrap items-center gap-2 sm:gap-3 text-white/60">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{duration}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <span>{lessonsCollection.total} lessons</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <StarIcon className="h-4 w-4 text-prime fill-prime/80" />
                  <span>
                    {rating} ({reviewsCollection.total} reviews)
                  </span>
                </div>
              </div>

              <div className="text-xs sm:text-sm flex flex-wrap items-center gap-2 text-white/60">
                {techStack.map((topic, i) => (
                  <Link
                    href={"#"}
                    key={i}
                    className="border border-white/15 px-2 py-1 rounded-2xl bg-white/10 flex items-center gap-2 hover:bg-prime/10 hover:border-prime/40 hover:text-prime transition-all"
                  >
                    <span>{topic}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Link href={`/projects/${slug}/lesson/1`} className="flex-1">
                <Button className="w-full bg-prime/80 hover:bg-prime/70 text-white sm:flex-initial sm:m-auto">
                  Start Building Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[350px,1fr] gap-4 sm:gap-6 bg-gray-100 border border-black/20 shadow-md sm:p-6 rounded-lg -translate-y-20">
          {/* Left Sidebar */}
          <div className="border border-border/20 rounded-lg order-2 lg:order-1 overflow-hidden max-sm:mx-4 max-sm:mb-4">
            <div className="flex items-center justify-between p-4 bg-prime/20 pr-2 border-b border-black/20">
              <h3 className="font-semibold text-prime">Project Content</h3>
              <span className="text-black font-semibold text-sm px-2 py-1 rounded-full bg-white">
                {lessonsCollection.total} Lessons
              </span>
            </div>

            {/* Module List */}
            <div className="space-y-2 divide-y-2 divide-black/20 py-2">
              {lessonsCollection.items.map(
                ({ description, duration, title }, index) => (
                  <div
                    key={index}
                    className="max-sm:text-sm bg-white/5 p-3 py-2"
                  >
                    <div className="space-y-2 text-black/60">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-black line-clamp-1">
                          {title}
                        </h4>
                        <span className="text-xs font-bold shrink-0">{duration}</span>
                      </div>
                      <span className="line-clamp-2 text-sm max-sm:text-xs">
                        {description}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/5 rounded-lg order-1 lg:order-2 gap-4 flex flex-col">
            <div className="aspect-video relative max-sm:rounded-b-none rounded-lg overflow-hidden">
              <Image
                src={url}
                alt={title}
                className="w-full h-full object-cover"
                fill
              />
            </div>

            <div className="border-b border-black/10 max-sm:px-4">
              <div className="flex gap-4 text-black/60 overflow-x-auto">
                <button className="py-2 text-black border-b-4 border-black">
                  Description
                </button>
                <button className="py-2">Rating and review</button>
              </div>
            </div>

            <p className="max-sm:text-sm text-black/80 leading-relaxed max-sm:px-4">
              {project.description}
            </p>
            <Button className="bg-prime/80 hover:bg-prime/90 text-white flex-1 sm:flex-initial max-sm:mx-4 lg:w-fit">
              Start Building Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
