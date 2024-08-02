"use client";

import Details from "./details";
import Checkout from "./checkout";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import CourseList from "./courses";
import { useSearchParams } from "next/navigation";
import { Floating, PaymentModal, PaymentSheet } from "./payments";
import { useState } from "react";

type CourseItem = {
  mdx: React.JSX.Element;
  item: {
    courseId: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    techStack: string;
    slug: string;
    courseImage: {
      description: string;
      url: string;
      width: number;
      height: number;
    };
    courseCreator: {
      name: string;
    };
    reviewsCollection: {
      total: number;
      items: {
        name: string;
        star: number;
        description: string;
        publishedDate: string;
      }[];
    };
    pricingsCollection: {
      items: {
        title: string;
        amount: number;
        countryCode: string;
        currencyCode: string;
      }[];
    };
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
  };
};

export default function Main({
  mdx,
  item: { title, courseId, courseImage, modulesCollection, pricingsCollection },
}: CourseItem) {
  const searchParams = useSearchParams();

  const [vidIndex, setVidIndex] = useState<{
    modIndex: number;
    chapterIndex: number;
  }>({
    modIndex: 0,
    chapterIndex: 0,
  });

  const [open, setOpen] = useState(false);
  const [openPay, setOpenPay] = useState(false);

  return (
    <>
      <section className="relative grid lg:grid-cols-[260px_1fr]">
        <div className="hidden lg:flex flex-col gap-6 p-7 sticky top-0 h-fit">
          <Link
            href={"/courses"}
            className="flex text-white/70 items-center gap-1 w-fit hover:text-white transition-all hover:underline -translate-x-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="tracking-wide text-xs">Other Courses</span>
          </Link>

          <div className="flex flex-col">
            <span className="text-[11px] text-white/70">Course</span>
            <span className="text-sm font-semibold">{title}</span>
          </div>

          <CourseList
            chapter={vidIndex.chapterIndex}
            module={vidIndex.modIndex}
            modules={modulesCollection}
            setVidIndex={setVidIndex}
          />
        </div>
        <div className="bg-bg lg:rounded-s-3xl min-h-dvh py-6 max-tab:pt-[1rem] max-tab:pb-[2.5rem] px-4 md:px-6 m-auto w-full flex">
          <section className="flex max-md:flex-col gap-6 p-1 max-w-6xl w-full mx-auto">
            <Details
              vidIndex={vidIndex}
              open={open}
              setOpen={setOpen}
              longDescription={mdx}
              modulesCollection={modulesCollection}
              title={title}
              courseId={courseId}
              courseImage={courseImage}
              chapter={vidIndex.chapterIndex}
              module={vidIndex.modIndex}
              setVidIndex={setVidIndex}
            />
            <Checkout courseId={courseId} open={open} setOpen={setOpen} />
          </section>
        </div>
      </section>
      <PaymentModal payModal={openPay} setOpenPay={setOpenPay} />
      <PaymentSheet
        open={open}
        setOpen={setOpen}
        courseId={courseId}
        title={title}
        cover={courseImage.url}
        amount={pricingsCollection.items[0].amount}
        curreny={"INR"}
        setOpenPay={setOpenPay}
      />
      <Floating
        amount={pricingsCollection.items[0].amount}
        open={open}
        setOpen={setOpen}
        courseId={courseId}
      />
    </>
  );
}
