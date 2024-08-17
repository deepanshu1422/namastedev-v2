"use client";

import Detail from "./unpaid/details";
import Details from "./details";
import Checkout from "./checkout";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import CourseList from "./courses";
import { useSearchParams } from "next/navigation";
import { Floating, PaymentModal, PaymentSheet } from "./payments";
import { useState } from "react";
import Hero from "./unpaid/hero";
import Guides from "./unpaid/guides";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingBag } from "lucide-react";
import FAQ from "./unpaid/faq";
import { YTModal } from "@/app/(guide)/testimonials/slider";
import { useSession } from "next-auth/react";

type CourseItem = {
  mdx: React.JSX.Element;
  item: {
    courseId: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    techStack: string;
    features: string[];
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
    faqCollection: {
      items: {
        question: string;
        answer: string;
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
  item: {
    title,
    courseId,
    courseImage,
    modulesCollection,
    pricingsCollection,
    faqCollection,
    features,
    shortDescription,
  },
}: CourseItem) {
  const [vidIndex, setVidIndex] = useState<{
    modIndex: number;
    chapterIndex: number;
  }>({
    modIndex: 0,
    chapterIndex: 0,
  });

  const [open, setOpen] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [openYt, setOpenYt] = useState(false);

  const courseOffer = [
    "Certificate of completion",
    "Lifetime Access to resources",
    "100% Money Back Guarantee",
    "Revision notes and guides",
    "Interview questions included",
  ];

  function Paid() {
    return (
      <main className="bg-footer">
        <section className="relative grid lg:grid-cols-[260px_1fr]">
          <div className="hidden lg:flex flex-col sticky top-0 h-fit">
            <div className="flex flex-col gap-4 p-7 h-full">
              <Link
                href={"/courses"}
                className="flex gap-2 text-xs text-white/70 hover:text-white/90"
              >
                <ChevronLeft className="h-3 w-3" />
                Other Courses
              </Link>

              <div className="flex flex-col">
                <span className="text-[11px] text-white/70">Course</span>
                <span className="text-sm font-semibold">{title}</span>
              </div>
            </div>

            <div className="px-7 max-h-[65dvh] overflow-hidden overflow-y-auto horizontal-scroll">
              <CourseList
                chapter={vidIndex.chapterIndex}
                module={vidIndex.modIndex}
                modules={modulesCollection}
                setVidIndex={setVidIndex}
              />
            </div>
          </div>
          <div className="bg-bg lg:rounded-s-3xl min-h-dvh py-6 max-tab:pt-[1rem] max-tab:pb-[2.5rem] px-4 md:px-6 m-auto w-full flex">
            <section className="relative flex max-md:flex-col gap-6 p-1 max-w-6xl w-full mx-auto">
              <Details
                faqCollection={faqCollection}
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
              <Checkout
                features={features}
                faqCollection={faqCollection}
                amount={
                  pricingsCollection.items.find((e) => e.countryCode == "IN")
                    ?.amount ?? 0
                }
                courseId={courseId}
                open={open}
                setOpen={setOpen}
              />
            </section>
          </div>
        </section>

        <PaymentSheet
          open={open}
          setOpen={setOpen}
          courseId={courseId}
          title={title}
          cover={courseImage.url}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          curreny={"INR"}
          setOpenPay={setOpenPay}
        />
        <Floating
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          open={open}
          setOpen={setOpen}
          courseId={courseId}
        />
      </main>
    );
  }

  function Unpaid() {
    return (
      <main className="relative min-h-svh overflow-clip">
        <Hero
          title={title}
          image={courseImage.url}
          shortDescription={shortDescription}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          courseOffer={courseOffer}
          setOpen={setOpen}
          setYtOpen={setOpenYt}
        />
        <Detail
          modulesCollection={modulesCollection}
          longDescription={mdx}
          image={courseImage.url}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          courseOffer={courseOffer}
          setOpen={setOpen}
          setYtOpen={setOpenYt}
          faqs={faqCollection.items}
        />
        <PaymentSheet
          open={open}
          setOpen={setOpen}
          courseId={courseId}
          title={title}
          cover={courseImage.url}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          curreny={"INR"}
          setOpenPay={setOpenPay}
        />
        <YTModal open={openYt} setOpen={setOpenYt} url="nTAHWER3K-0" />
        <Floating
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          open={open}
          setOpen={setOpen}
          courseId={courseId}
        />
      </main>
    );
  }

  const { data: session } = useSession();

  // @ts-ignore
  return session?.user?.courseId?.includes(courseId) ? <Paid /> : <Unpaid />;
}

type TestimonialType = {
  name: string;
  review: JSX.Element;
  pos: string;
  linkedin: string;
  profile: string;
  // course?: string;
  link: string;
};

function Testimonial({
  name,
  review,
  link,
  linkedin,
  pos,
  profile,
}: TestimonialType) {
  return (
    <div className="lg:hover:bg-opacity-70 transition-all duration-200 flex flex-col p-6 gap-4 bg-second rounded-lg">
      <div className="flex justify-between">
        <Link
          href={linkedin}
          target="_blank"
          className="flex items-center gap-2"
        >
          <Avatar>
            <AvatarImage src={profile} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((e) => e[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="flex flex-col">
            <span className="flex gap-1 font-bold leading-4">
              {name}
              <svg
                className={`fill-sky-500 dark:fill-white h-5 w-5 transition-all hover:scale-110`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </span>
            <span className="text-white/60 text-sm">{pos}</span>
          </span>
        </Link>

        <Link
          target="_blank"
          href={link}
          className="flex gap-1 p-2 rounded-full bg-prime/90 hover:bg-prime/70 text-sm font-semibold shadow-[rgb(0,_0,_0)_6px_6px_0px_0px] border-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-75 hover:shadow-[rgb(0,_0,_0)_3px_3px_0px_0px]"
        >
          <ShoppingBag className="h-5 w-5" />
          {/* Try Now */}
        </Link>
      </div>
      {review}
    </div>
  );
}
