"use client";

import Hero from "./unpaid/hero";
import Detail from "./unpaid/details";
import { Floating, PaymentModal, PaymentSheet } from "./payments";
import { useState } from "react";
import { YTModal } from "@/app/(guide)/testimonials/slider";

type BundleItem = {
  item: {
    bundleId: string;
    bundleTitle: string;
    shortDescription: string;
    learn: string[];
    rating: number;
    slug: string;
    offers: string[];
    coursesCollection: {
      items: {
        title: string;
        slug: string;
        rating: number;
        courseImage: {
          url: string;
        };
      }[];
    };
    coverImage: {
      description: string;
      url: string;
      width: number;
      height: number;
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
  };
};

export default function Main({
  item: {
    bundleId,
    bundleTitle,
    coverImage,
    slug,
    offers,
    coursesCollection,
    pricingsCollection,
    faqCollection,
    learn,
    rating,
    shortDescription,
  },
}: BundleItem) {
  const [open, setOpen] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [openYt, setOpenYt] = useState(false);

  const courseOffer = offers;

  // function Paid() {
  //   return (
  //     <main className="bg-footer">
  //       <section className="relative grid lg:grid-cols-[260px_1fr]">
  //         <div className="hidden lg:flex flex-col sticky top-0 h-fit">
  //           <div className="flex flex-col gap-4 p-7 h-full">
  //             <Link
  //               href={"/courses"}
  //               className="flex gap-2 text-xs text-white/70 hover:text-white/90"
  //             >
  //               <ChevronLeft className="h-3 w-3" />
  //               Other Courses
  //             </Link>

  //             <div className="flex flex-col">
  //               <span className="text-[11px] text-white/70">Course</span>
  //               <span className="text-sm font-semibold">{bundleTitle}</span>
  //             </div>
  //           </div>

  //           <div className="px-7 max-h-[65dvh] overflow-hidden overflow-y-auto horizontal-scroll">
  //             <CourseList
  //               chapter={vidIndex.chapterIndex}
  //               module={vidIndex.modIndex}
  //               modules={modulesCollection}
  //               setVidIndex={setVidIndex}
  //             />
  //           </div>
  //         </div>
  //         <div className="bg-bg lg:rounded-s-3xl min-h-dvh py-6 max-tab:pt-[1rem] max-tab:pb-[2.5rem] px-4 md:px-6 m-auto w-full flex">
  //           <section className="relative flex max-md:flex-col gap-6 p-1 max-w-6xl w-full mx-auto">
  //             <Details
  //               faqCollection={faqCollection}
  //               vidIndex={vidIndex}
  //               open={open}
  //               setOpen={setOpen}
  //               longDescription={mdx}
  //               modulesCollection={modulesCollection}
  //               title={title}
  //               courseId={courseId}
  //               courseImage={courseImage}
  //               chapter={vidIndex.chapterIndex}
  //               module={vidIndex.modIndex}
  //               setVidIndex={setVidIndex}
  //             />
  //             <Checkout
  //               features={courseOffer}
  //               faqCollection={faqCollection}
  //               amount={
  //                 pricingsCollection.items.find((e) => e.countryCode == "IN")
  //                   ?.amount ?? 0
  //               }
  //               courseId={courseId}
  //               open={open}
  //               setOpen={setOpen}
  //             />
  //           </section>
  //         </div>
  //       </section>

  //       <PaymentSheet
  //         open={open}
  //         setOpen={setOpen}
  //         courseId={courseId}
  //         title={title}
  //         cover={courseImage?.url}
  //         amount={
  //           pricingsCollection.items.find((e) => e.countryCode == "IN")
  //             ?.amount ?? 0
  //         }
  //         curreny={"INR"}
  //         setOpenPay={setOpenPay}
  //       />
  //       <Floating
  //         amount={
  //           pricingsCollection.items.find((e) => e.countryCode == "IN")
  //             ?.amount ?? 0
  //         }
  //         open={open}
  //         setOpen={setOpen}
  //         courseId={courseId}
  //       />
  //     </main>
  //   );
  // }

  function Unpaid() {
    return (
      <main className="relative min-h-svh overflow-clip">
        <Hero
          rating={rating}
          title={bundleTitle ?? "NULL"}
          image={coverImage?.url}
          shortDescription={shortDescription ?? "NULL"}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          courseOffer={courseOffer}
          setOpen={setOpen}
          setYtOpen={setOpenYt}
        />
        <Detail
          bundleId={bundleId}
          coursesCollection={coursesCollection}
          // longDescription={mdx}
          image={coverImage?.url}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          courseOffer={courseOffer}
          learn={learn ?? []}
          setOpen={setOpen}
          setYtOpen={setOpenYt}
          faqs={faqCollection.items}
        />
        <PaymentSheet
          open={open}
          setOpen={setOpen}
          bundleId={bundleId}
          title={bundleTitle}
          cover={coverImage?.url}
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
          bundleId={bundleId}
        />
        <PaymentModal payModal={openPay} setOpenPay={setOpenPay} />
      </main>
    );
  }

  return <Unpaid />;
}
