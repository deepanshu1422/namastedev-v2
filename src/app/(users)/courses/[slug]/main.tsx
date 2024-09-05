"use client";

import Detail from "./unpaid/details";
import Details from "./details";
import Checkout from "./checkout";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import CourseList from "./courses";
import { Floating, PaymentModal, PaymentSheet } from "./payments";
import {
  PaymentModal as BundleModal,
  PaymentSheet as BundlePaymentSheet,
} from "../../bundle/[slug]/payments";
import { useState } from "react";
import Hero from "./unpaid/hero";
import { YTModal } from "@/app/(guide)/testimonials/slider";
import { Session } from "next-auth";
import { UpsellModal } from "./unpaid/upsell";

type CourseItem = {
  session: Session | null;
  mdx: React.JSX.Element;
  item: {
    courseId: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    techStack: string;
    offers: string[];
    learn: string[];
    rating: number;
    slug: string;
    projectsCollection: {
      items: {
        title: string;
        content: string[];
        coverImage: {
          url: string;
        };
      }[];
    };
    courseImage: {
      description: string;
      url: string;
      width: number;
      height: number;
    };
    courseCreator: {
      name: string;
    };
    pricingsCollection: {
      items: {
        title: string;
        amount: number;
        percentage: number;
        bigAmount: number;
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
              sys: {
                id: string;
              };
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
  session,
  item: {
    title,
    slug,
    courseId,
    courseImage,
    modulesCollection,
    pricingsCollection,
    projectsCollection,
    faqCollection,
    offers,
    learn,
    rating,
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
  const [openBundle, setOpenBundle] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [openPayBunlde, setOpenPayBunlde] = useState(false);
  const [openYt, setOpenYt] = useState(false);
  const [openUpsell, setOpenUpsell] = useState(false);

  const courseOffer = offers ?? [];

  function Paid() {
    return (
      <main className="bg-footer">
        <section className="relative grid lg:grid-cols-[260px_1fr]">
          <div className="hidden lg:flex flex-col sticky top-8 h-fit">
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
                courseId={courseId}
                chapter={vidIndex.chapterIndex}
                module={vidIndex.modIndex}
                modules={modulesCollection}
                setVidIndex={setVidIndex}
              />
            </div>
          </div>
          <div className="bg-bg lg:rounded-s-3xl min-h-dvh py-6 max-tab:pt-[1rem] px-4 md:px-6 m-auto w-full flex">
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
                features={courseOffer}
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
      </main>
    );
  }

  function Unpaid() {
    return (
      <main className="relative min-h-svh overflow-clip">
        <Hero
          courseId={courseId}
          rating={rating}
          title={title ?? "NULL"}
          image={courseImage?.url}
          shortDescription={shortDescription ?? "NULL"}
          price={
            pricingsCollection.items.find((e) => e.countryCode == "IN") ?? {
              amount: 0,
              bigAmount: 0,
              percentage: 0,
            }
          }
          courseOffer={courseOffer}
          setOpen={setOpenUpsell}
          setYtOpen={setOpenYt}
        />
        <Detail
          courseId={courseId}
          projectsCollection={projectsCollection}
          modulesCollection={modulesCollection}
          longDescription={mdx}
          image={courseImage?.url}
          price={
            pricingsCollection.items.find((e) => e.countryCode == "IN") ?? {
              amount: 0,
              bigAmount: 0,
              percentage: 0,
            }
          }
          courseOffer={courseOffer}
          learn={learn ?? []}
          setOpen={setOpenUpsell}
          setYtOpen={setOpenYt}
          faqs={faqCollection.items}
        />
        <UpsellModal
          open={openUpsell}
          setOpen={setOpenUpsell}
          setPaymentOpen={setOpen}
          setBundelPaymentOpen={setOpenBundle}
        />
        <PaymentSheet
          open={open}
          setOpen={setOpen}
          courseId={courseId}
          title={title}
          cover={courseImage?.url}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          curreny={"INR"}
          setOpenPay={setOpenPay}
        />
        <BundlePaymentSheet
          open={openBundle}
          setOpen={setOpenBundle}
          bundleId={"ALL30DC"}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          setOpenPay={setOpenPayBunlde}
        />
        <YTModal open={openYt} setOpen={setOpenYt} url="nTAHWER3K-0" />
        <Floating
          price={
            pricingsCollection.items.find((e) => e.countryCode == "IN") ?? {
              amount: 0,
              percentage: 0,
              bigAmount: 0,
            }
          }
          setOpen={setOpenUpsell}
          courseId={courseId}
        />
      </main>
    );
  }

  return (
    <>
      {/* @ts-ignore */}
      {session?.user?.courseId?.includes(courseId) ? <Paid /> : <Unpaid />}
      <PaymentModal slug={slug} payModal={openPay} setOpenPay={setOpenPay} />
      <BundleModal payModal={openPayBunlde} setOpenPay={setOpenPayBunlde} />
    </>
  );
}
