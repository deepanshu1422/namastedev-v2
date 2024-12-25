import { notFound } from "next/navigation";
import { interviewQuestions } from "@/util/globals";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import { ResolvingMetadata } from "next/dist/lib/metadata/types/metadata-interface";
import Hero from "./hero";

export const dynamic = "force-static";

type PageProps = {
  params: {
    topic: string;
  };
};

type Props = {
  params: { topic: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  return interviewQuestions.map((e) => ({
    topic: e.slug,
  }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item = interviewQuestions.find((e) => e.slug === params.topic);

  if (!item?.slug)
    return {
      title: "Not Found",
    };

  return {
    title: `${item?.title} | 30DC Interview Questions`,
    description: item?.description,
    openGraph: {
      title: `${item?.title} | 30DC Interview Questions`,
      description: item?.description,
      url: `https://30dayscoding.com/interview/${item?.slug}`,
      type: "website",
    },
  };
}

function getData(topic: string) {
  let item = interviewQuestions.find((e) => e.slug === topic);
  if (!item?.slug) return null;
  return item;
}

export default function InterviewTopicPage({ params: { topic } }: PageProps) {
  const data = getData(topic);

  if (!data) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col min-h-svh">
      <Hero title={data.title} description={data.description} imgSrc={data.imgSrc} />
      <section className="flex flex-col gap-2 p-4 sm:p-8 sm:py-6">
        <div className="grid sm:grid-cols-[280px_1fr] pb-5 max-sm:gap-2">
          <div className="sm:p-2 py-1">
            <h2 className="pl-2 border-l-4 border-prime/40 text-xl font-medium">
              Interview Questions
            </h2>
          </div>
            <Accordion
              className="flex flex-col gap-2"
              type="single"
              collapsible
            >
              {data.interviewQuestions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="py-1 pl-1 pr-3 bg-second rounded-md [&[data-state=open]]:rounded-b-none">
                    <div className="flex text-left">
                      <span className="text-center py-2 px-1 min-w-12 rounded-md bg-footer/60">
                        {index + 1}
                      </span>
                      <div className="flex p-2">{item.question}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground bg-second rounded-b-md pb-1 px-1">
                    <div className="bg-footer/60 p-3 px-2 rounded-md sm:text-base text-white/80">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
        <div className="grid sm:grid-cols-[280px_1fr] py-5 border-t-2 border-white/20 border-dashed max-sm:gap-2">
          <div className="sm:p-2 py-1">
            <h2 className="pl-2 border-l-4 border-prime/40 text-xl font-medium">
              Take Home Projects
            </h2>
          </div>
          <div className="">
            <Accordion
              className="flex flex-col gap-2"
              type="single"
              collapsible
            >
              {data.takeHomeProjects.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="py-1 pl-1 pr-3 bg-second rounded-md [&[data-state=open]]:rounded-b-none">
                    <div className="flex text-left">
                      <span className="text-center py-2 px-1 min-w-12 rounded-md bg-footer/60">
                        {index + 1}
                      </span>
                      <div className="flex p-2">{item.question}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground bg-second rounded-b-md pb-1 px-1">
                    <div className="bg-footer/60 p-3 px-2 rounded-md sm:text-base text-white/80">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="grid sm:grid-cols-[280px_1fr] py-5 border-t-2 border-white/20 border-dashed max-sm:gap-2">
          <div className="sm:p-2 py-1">
            <h2 className="pl-2 border-l-4 border-prime/40 text-xl font-medium">
            Questions for Big Companies 
            </h2>
          </div>
          <div className="">
            <Accordion
              className="flex flex-col gap-2"
              type="single"
              collapsible
            >
              {data.bigCompanyQuestions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="py-1 pl-1 pr-3 bg-second rounded-md [&[data-state=open]]:rounded-b-none">
                    <div className="flex text-left">
                      <span className="text-center py-2 px-1 min-w-12 rounded-md bg-footer/60">
                        {index + 1}
                      </span>
                      <div className="flex p-2">{item.question}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground bg-second rounded-b-md pb-1 px-1">
                    <div className="bg-footer/60 p-3 px-2 rounded-md sm:text-base text-white/80">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="grid sm:grid-cols-[280px_1fr] py-5 border-t-2 border-white/20 border-dashed max-sm:gap-2">
          <div className="sm:p-2 py-1">
            <h2 className="pl-2 border-l-4 border-prime/60 text-xl font-medium">
              Simple Projects
            </h2>
          </div>
          <div className="">
            <Accordion
              className="flex flex-col gap-2"
              type="single"
              collapsible
            >
              {data.simpleProjects.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="py-1 pl-1 pr-3 bg-second rounded-md [&[data-state=open]]:rounded-b-none">
                    <div className="flex text-left">
                      <span className="text-center py-2 px-1 min-w-12 rounded-md bg-footer/60">
                        {index + 1}
                      </span>
                      <div className="flex p-2">{item.question}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground bg-second rounded-b-md pb-1 px-1">
                    <div className="bg-footer/60 p-3 px-2 rounded-md sm:text-base text-white/80">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
