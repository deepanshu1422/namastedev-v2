"use client";

import {
  NewTabsTrigger,
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export function CourseTabMenu({
  data,
}: {
  data: {
    title: string;
    courses: {
      title: string;
      imgSrc: string;
      link: string;
    }[];
  }[];
}) {
  return (
    <Tabs
      defaultValue="chapter1"
      className="flex shrink-0 max-lg:flex-col gap-2"
    >
      <TabsList className="max-lg:max-w-[550px] mx-auto text-muted-foreground lg:grid lg:place-items-start flex flex-wrap justify-center gap-3 h-fit">
        {data.map(({ title }, i) => (
            <NewTabsTrigger key={i} value={`chapter${i + 1}`}>
              <span>{title}</span>
            </NewTabsTrigger>
        ))}
      </TabsList>
      {/* <TabsContent value="account">Tab 1</TabsContent>
      <TabsContent value="password">Tab 2</TabsContent> */}
      <div className="mx-auto">
        {data.map(({ courses }, i) => (
          <TabsContent
            key={i}
            className="max-w-[700px] lg:max-w-96 w-full px-4"
            value={`chapter${i + 1}`}
          >
              <div className="grid lg:grid-rows-2 lg:grid-flow-col max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 max-lg:gap-8 max-lg:place-items-center lg:w-[640px] lg:overflow-x-scroll horizontal-scroll p-2">
                {courses.map(({ title, imgSrc, link }, index) => (
                  <Link
                    key={index}
                    href={link}
                    className="flex-1 w-[300px] lg:hover:-translate-y-1 transition-all"
                  >
                    <div className="max-lg:m-auto flex flex-col max-lg:justify-center rounded-xl bg-second p-1 h-fit">
                      <Image
                        className="rounded-lg w-96 h-48"
                        loader={() => imgSrc}
                        src={imgSrc}
                        width={280}
                        height={280}
                        alt={`30 days coding ${title}`}
                      />
                      <p className="text-sm font-semibold p-1 line-clamp-1 text-wrap">
                        {title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}

// previous example

{
  /* <div className="max-lg:m-auto flex lg:flex-col max-lg:items-center max-lg:justify-center lg:p-[2rem_1rem_0.5rem] p-8 gap-4 rounded-t-xl bg-second h-fit shadow-[0_2px_40px_0_rgba(0,0,0,.2)] lg:hover:shadow-2xl">
                      <Image
                        src={imgSrc}
                        width={35}
                        height={35}
                        alt="fullstack"
                      />
                      <span className="text-lg font-semibold">{title}</span>
                    </div>
                    <div className="max-lg:m-auto flex flex-wrap items-center p-4 gap-4 rounded-b-xl bg-second h-fit text-sm">
                      <span>140+ Hrs of Content</span>
                      <span>300+ Problems</span>
                      <span>10k+ Learners</span>
                    </div> */
}
