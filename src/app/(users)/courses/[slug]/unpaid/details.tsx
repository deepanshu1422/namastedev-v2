"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, ChevronDown, Dot, Video } from "lucide-react";
import Checkout from "./checkout";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import Reviews from "./reviews"

export default function Details({
  image,
  longDescription,
  modulesCollection,
}: {
  image: string;
  longDescription: React.JSX.Element;
  modulesCollection: {
    total: number;
    items: {
      title: string;
      duration: string;
      chaptersCollection: {
        total: number;
        items: [
          {
            public: boolean;
            title: string;
            duration: string;
            youtubeId: string;
          }
        ];
      };
    }[];
  };
}) {
  const [expand, setExpand] = useState(false);

  const stack = [
    "React Hooks",
    "State Management",
    "Config Drive UI",
    "Redux",
    "Reusable Components",
    "Functional Comp.",
    "Props & State",
    "List & Keys",
    "Class Components",
    "Scaling React Apps",
    "Best Coding Practices",
    "React Router",
    "Optimizing React Apps",
    "Building Live Projects",
    "Bundlers & Babel",
    "JSX",
    "React Fragment",
    "Code Splitting",
    "Dynamic UI",
    "Higher Order Comp.",
    "Pure Components",
    "Code Splitting",
    "React Testing Library",
    "Interview Questions",
    "Uncontrolled Comp.",
    "Building Custom Hooks",
    "Handling Events",
    "Conditional Rendering",
    "Tailwind CSS",
    "Jest",
  ];

  return (
    <div className="tab:p-[1.5rem_5.5rem_3.75rem] max-tab:pt-[1rem] max-tab:pb-[2.5rem] max-tab:px-8 max-phone:px-4 m-auto max-w-[90rem] flex w-full">
      <div className="flex flex-col w-full gap-6">
        <div>
          <section
            className={`flex flex-col ${
              !expand && "max-h-96"
            } gap-3 overflow-hidden`}
          >
            <h2 className="text-3xl font-bold text-white">Overview</h2>
            <ErrorBoundary
              errorComponent={({ error, reset }) => (
                <div className="flex flex-col gap-1 text-sm">
                  <p>{error.message}</p>
                </div>
              )}
            >
              <div className="text-sm text-white/80 leading-6 techStack">
                {longDescription}
              </div>
            </ErrorBoundary>
          </section>
          <div className="flex w-full h-16 bg-gradient-to-b from-10% to-90% -translate-y-12 from-transparent to-bg">
            <Button
              onClick={() => setExpand(!expand)}
              variant={"outline"}
              className="mx-auto translate-y-16"
            >
              <ChevronDown className={`h-4 w-4 ${expand && "rotate-180"}`} />
              Expand
            </Button>
          </div>
        </div>

        <section className="flex flex-col gap-1 pt-2 tab:pr-6">
          {/* <h2 className="text-3xl font-bold text-white">Tech Stack</h2> */}
          <div className="flex flex-col gap-3 rounded-2xl bg-second/30 p-6">
            <span className="mx-auto text-lg font-bold text-prime uppercase">
              Learnings
            </span>
            <div className="grid phone:grid-cols-2 tab:grid-cols-3 gap-3 py-3">
              {stack.map((e, i) => (
                <span key={i} className="flex gap-2 items-center">
                  <Check className="h-6 w-6 text-prime" />
                  {e}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
          <ul className="flex flex-col gap-2 list-inside list-decimal text-white/80 py-5">
            <li>
              <strong>Node</strong>.js for our backend code which would be
              running GraphQL server inside the node.js environment.
            </li>
            <li>
              <strong>GraphQL</strong> for our API, which provides a flexible
              and efficient way to define our data model and query it.
            </li>
            <li>
              <strong>Prisma</strong> ORM for our database ORM, which provides a
              type-safe and easy-to-use interface for interacting with our
              PostgreSQL database.
            </li>
            <li>
              <strong>PostgreSQL</strong> is our database, which is a powerful
              and reliable relational database system.
            </li>
            <li>
              <strong>Supabase</strong> for hosting and managing cloud
              Postgresql db.
            </li>
            <li>
              <strong>Redis</strong> for query caching on the server side and
              increasing query speeds
            </li>
            <li>
              <strong>Google</strong> OAuth for Sign in with Google
            </li>
            <li>
              <strong>JSON</strong> WEB TOKENS for authentication
            </li>
            <li>
              <strong>Next</strong>.js for our front, which is a popular
              framework for building React applications with server-side
              rendering and optimized performance.
            </li>
            <li>
              <strong>TailwindCSS</strong> for styling and reusable components.
            </li>
            <li>
              <strong>Codegen</strong> for typesafe GraphQL queries and
              mutations.
            </li>
            <li>
              <strong>Graphql</strong>-Request as API client for client-server
              communication
            </li>
            <li>
              <strong>React</strong>-Query for client-side data caching and
              query caching
            </li>
            <li>
              <strong>Typescript</strong> to maintain code quality and write
              type-safe code.
            </li>
            <li>
              <strong>Amazon</strong> Web Services for storage, deployments, and
              CDN.
            </li>
          </ul>
          <p className="text-white/80">
            Checkout detailed document on Twitter Clone Notion Page
          </p>
          <p className="text-white/80">
            Join Discord Server http://localhost:3000/
          </p>
        </section> */}

        <section className="flex flex-col gap-4 tab:pr-6">
          <div className="flex max-sm:flex-col gap-2 sm:items-end">
            <h2 className="text-3xl font-bold text-white">
              Course&apos;s Content
            </h2>
            <span className="flex text-sm text-white/60 items-center">
              ({modulesCollection.total} Lessons)
            </span>
          </div>
          <Chapters modulesCollection={modulesCollection} />
        </section>

        {/* <Reviews /> */}
      </div>

      <Checkout image={image} checkout="909" />
    </div>
  );
}

// function Learning(){
//     return(

//     )
// }

export function Chapters({
  modulesCollection,
}: {
  modulesCollection: {
    total: number;
    items: {
      title: string;
      duration: string;
      chaptersCollection: {
        total: number;
        items: [
          {
            public: boolean;
            title: string;
            duration: string;
            youtubeId: string;
          }
        ];
      };
    }[];
  };
}) {
  let chapters = [
    {
      title: "Introduction",
      lessons: 4,
      duration: "15m 39s",
      subs: [
        {
          title: "Introduction",
          duration: "4m 39s",
        },
        {
          title: "How to do this",
          duration: "4m 39s",
        },
      ],
    },
    {
      title: "Raycasting",
      lessons: 4,
      duration: "15m 39s",
      subs: [
        {
          title: "Introduction",
          duration: "4m 39s",
        },
        {
          title: "How to do this",
          duration: "4m 39s",
        },
      ],
    },
    {
      title: "Multiple Inheritance",
      lessons: 4,
      duration: "15m 39s",
      subs: [
        {
          title: "Introduction",
          duration: "4m 39s",
        },
        {
          title: "How to do this",
          duration: "4m 39s",
        },
      ],
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-prime/30"
    >
      {modulesCollection.items.map(({ title, chaptersCollection }, i) => (
        <AccordionItem
          key={i}
          className="border-t border-prime/40"
          value={`item-${i + 1}`}
        >
          <AccordionTrigger className="bg-second/40 px-5 font-bold flex text-sm">
            <span>{title}</span>
            <span className="ml-auto">{chaptersCollection.total} Lessons</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col pb-0">
            {chaptersCollection.items.map(({ title }, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-5 border-b border-prime/20"
              >
                <span className="flex gap-2 items-center">
                  <Video className="h-5 w-5" />
                  {title}
                </span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
