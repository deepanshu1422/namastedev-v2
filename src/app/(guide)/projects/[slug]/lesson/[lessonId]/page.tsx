import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ChevronLeft,
  Clock5,
  Play,
  PlayCircle,
  PlaySquare,
  Star,
} from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

import React from "react";
import CodeSnippet from "./code-snippet";
import VideoPlayer from "./player";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export type Lesson = {
  slug: string;
  category: string;
  rating: number;
  coverImage: {
    url: string;
  };
  lesson: {
    items: {
      title: string;
      content: string;
      duration: string;
      description: string;
      ytId: string;
    }[];
  };
  allLessons: {
    total: number;
    items: {
      title: string;
      duration: string;
    }[];
  };
  author: {
    name: string;
    reviews: number;
    profilePic: {
      url: string;
    };
  };
};

type PageProps = {
  params: {
    slug: string;
    lessonId: string;
  };
};

type Props = {
  params: { slug: string; lessonId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const query = `query {
        projectsCollection(where: { publish: true }){
        items{
            slug,
            lessonsCollection{
              total
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

  const result: { slug: string; lessonId: string }[] = [];

  data.data.projectsCollection.items.forEach((project) => {
    const { slug, lessonsCollection } = project;
    const totalLessons = lessonsCollection.total;

    for (let lessonId = 1; lessonId <= totalLessons; lessonId++) {
      result.push({ slug, lessonId: lessonId.toString() });
    }
  });

  return result;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item: any = null;

  try {
    const query = `query {
                   projectsCollection(where: { slug: "${
                     params.slug
                   }", publish: true }, limit: 1){
                     items{
                       slug,
                       title,
                       category,
                       lessonsCollection( skip: ${
                         +params.lessonId - 1
                       } , limit: 1){
                                 items{
                                   title,
                                   description
                                 }
                               }
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

    if (!data.data.projectsCollection.items[0].lessonsCollection.items.length)
      throw { error: "Not Found" };

    item = data.data.projectsCollection.items[0];
  } catch (err) {
    item = {
      title: "Not Found",
    };
  }

  return {
    title: `${
      item?.lessonsCollection?.items[0].title || "Not Found"
    } | 30DC Lessons`,
    description: item?.lessonsCollection?.items[0].description,
    openGraph: {
      title: `${
        item?.lessonsCollection?.items[0].title || "Not Found"
      } | 30DC Lessons`,
      description: item?.lessonsCollection?.items[0].description,
      images: {
        url: item?.coverImage?.url ?? "",
      },
      url: `https://30dayscoding.com/projects/${item?.slug}/lesson/${params.lessonId}`,
      type: "article",
    },
  };
}

async function getLesson({
  lessonId,
  slug,
}: {
  lessonId: string;
  slug: string;
}): Promise<Lesson | null> {
  const query = `query {
    projectsCollection(where: { slug: "${slug}", publish: true }, limit: 1){
      items{
        slug,
        category,
        rating,
        lesson: lessonsCollection( skip: ${+lessonId - 1} , limit: 1){
          items{
            title,
            content,
            duration,
            description,
            ytId
          }
        }
        allLessons: lessonsCollection{
          total,
          items{
            title,
            duration,
          }
        }
        coverImage{
          url
        }
        author{
          name,
          reviews,
          profilePic{
            url
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

  if (!data.data.projectsCollection.items[0].lesson.items.length) return null;

  return data.data.projectsCollection.items[0];
}

export default async function LessonPage({
  params: { lessonId, slug },
}: PageProps) {
  const lessonData = await getLesson({ lessonId, slug });

  if (!lessonData) return notFound();

  const {
    allLessons,
    author,
    category,
    coverImage,
    lesson,
    rating,
  } = lessonData;

  return (
    <div className="bg-bg max-w-7xl mx-auto px-4 sm:px-8 py-6">
      {/* Header */}
      <section className="flex gap-3 justify-between">
        <div className="flex items-start gap-3 mb-4">
          <Link
            href={`/projects/${slug}`}
            className="max-sm:hidden bg-gray-300/10 hover:bg-gray-300/20 border border-gray-400 p-1 rounded-full transition-all"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2px]" />
          </Link>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Link
                href={`/projects/${slug}`}
                className="sm:hidden bg-gray-300/10 hover:bg-gray-300/20 border border-gray-400 p-1 rounded-full transition-all"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2px]" />
              </Link>
              <div className="flex sm:items-center gap-2 max-sm:flex-col-reverse">
                <h1 className="text-xl font-bold text-white">
                  {lesson.items[0].title}
                </h1>
                <span className="w-fit text-xs font-bold text-gray-400 border bg-gray-500/5 border-gray-200/50 p-0.5 px-2 rounded-lg">
                  {category}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-400 font-medium">
              <span className="flex items-center gap-2">
                <PlayCircle className="h-4 w-4 text-prime" />
                {lessonId} out of {allLessons.total} lessons
              </span>
              <span className="flex items-center gap-2">
                <Clock5 className="w-4 h-4 text-prime" />
                {lesson.items[0].duration}
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-prime" />
                {rating} Rating
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2"></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Video Preview */}
          {/* <div className="cursor-pointer aspect-video group bg-footer rounded-2xl mb-4 relative overflow-hidden">
            <Image
              src={coverImage.url}
              alt={title}
              className="absolute object-cover"
              fill
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-active:-translate-y-[58%] group-hover:-translate-y-[55%] transition-transform">
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
                <Play className="w-8 h-8 stroke-[3] fill-white" />
              </div>
            </div>
          </div> */}

          {lesson.items[0]?.ytId && (
            <VideoPlayer
              ytId={lesson.items[0].ytId}
              title={lesson.items[0].title}
              thumbnail={coverImage.url}
              href={
                +lessonId === allLessons.total
                  ? "/dashboard"
                  : `/projects/${slug}/lesson/${+lessonId + 1}`
              }
            />
          )}

          {/* Tabs */}
          <div className="flex max-sm:flex-col-reverse justify-between gap-3">
            <div className="flex gap-3 max-sm:mx-auto">
              {["Overview", "About", "FAQ", "Reviews"].map((tab) => (
                <button
                  key={tab}
                  className={`py-2 px-3 text-sm font-semibold rounded-lg transition-all ${
                    tab === "Overview"
                      ? "text-prime bg-prime/10"
                      : "text-gray-400 hover:text-gray-300 hover:bg-gray-100/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 max-sm:mx-auto">
              <Link
                href={
                  lessonId === "1"
                    ? "#"
                    : `/projects/${slug}/lesson/${+lessonId - 1}`
                }
                className="flex gap-1 text-sm font-bold py-2 px-2 sm:px-1 rounded-lg transition-all text-gray-400 hover:text-gray-300 hover:bg-gray-100/10 max-sm:bg-gray-100/10"
              >
                <ArrowLeftCircle className="w-5 h-5" />
                Prev
              </Link>
              <span className="sm:hidden">
                {lessonId} / {allLessons.total}
              </span>
              <Link
                href={
                  +lessonId === allLessons.total
                    ? "#"
                    : `/projects/${slug}/lesson/${+lessonId + 1}`
                }
                className="flex gap-1 text-sm font-bold py-2 px-2 sm:px-1 rounded-lg transition-all text-gray-400 hover:text-gray-300 hover:bg-gray-100/10 max-sm:bg-gray-100/10"
              >
                Next
                <ArrowRightCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium text-white">About Lesson</h2>
            <p className="text-gray-300/90 font-semibold leading-relaxed">
              {lesson.items[0].description}
            </p>
          </div>

          {/* {lesson.items[0].content} */}

          <Markdown
            className="techStack"
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <CodeSnippet language={match[1]}>
                    {String(children).replace(/\n$/, "")}
                  </CodeSnippet>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {lesson.items[0].content}
          </Markdown>

          {/* <CodeSnippet>
            {
              'import express, { urlencoded } from "express";\nimport cookieParser from "cookie-parser";\nimport dotenv from "dotenv";\nimport connectDB from "./utils/db.js";\nimport userRoute from "./routes/user.route.js";\nimport expenseRoute from "./routes/expense.route.js";\nimport cors from "cors";\n\ndotenv.config({});\n\nconnectDB();\n\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// middleware\napp.use(express.json());\napp.use(urlencoded({extended:true}));\napp.use(cookieParser());\nconst corsOptions = {\n    origin:"http://localhost:5173",\n    credentials:true\n}\napp.use(cors(corsOptions));\n\n// api\'s\napp.use("/api/v1/user", userRoute);\napp.use("/api/v1/expense", expenseRoute);\n\napp.listen(PORT, ()=>{\n    console.log(`Server listen at port ${PORT}`);\n})'
            }
          </CodeSnippet> */}

          {/* What You'll Learn */}
          {/* <div className="mb-10">
            <h2 className="text-xl font-medium text-white mb-6">
              What You'll Learn
            </h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {courseData.learnings.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Right Column */}
        <div className="rounded-2xl h-fit flex flex-col gap-3">
          <div className="border border-white/20 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-prime/5 px-2 border-b border-white/20">
              <h3 className="font-extrabold text-prime">Project Content</h3>
            </div>

            {/* Module List */}
            <div className="flex flex-col overflow-y-auto horizontal-scroll divide-y-2 divide-white/20">
              {allLessons.items.map(({ duration, title }, index) => (
                <Link
                  key={index}
                  href={`/projects/${slug}/lesson/${index + 1}`}
                >
                  <div
                    key={index}
                    className="max-sm:text-sm hover:bg-white/10 bg-white/5 transition-all p-2 py-4"
                  >
                    <div className="space-y-2 text-white/60">
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex gap-1.5 items-center ${
                            +lessonId === index + 1
                              ? "text-prime"
                              : "text-white"
                          }`}
                        >
                          <PlaySquare className="w-5 h-5 shrink-0" />
                          <h4 className="font-semibold line-clamp-1">
                            {title}
                          </h4>
                        </span>
                        <span className="text-xs font-bold shrink-0">
                          {duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Author Section */}
          <div className="border border-white/20 rounded-lg p-4">
            <h2 className="font-medium text-white mb-4">Author</h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-700 rounded-full relative overflow-hidden">
                <Image
                  src={author.profilePic.url}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-white">{author.name}</h3>
                  <svg
                    className="w-4 h-4 text-prime"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">SDE @ Google</p>
              </div>
              <div className="ml-auto flex gap-1 items-center">
                <Star className="w-5 h-5 fill-prime/40 text-prime" />
                <span className="text-white ml-1">{author.reviews}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
