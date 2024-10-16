"use client";

import Detail from "./unpaid/details";
import { Floating, PaymentModal, PaymentSheet } from "./payments";
import {
  PaymentModal as BundleModal,
  PaymentSheet as BundlePaymentSheet,
} from "../../bundle/[slug]/payments";
import { useEffect, useState } from "react";
import Hero from "./unpaid/hero";
import { YTModal } from "@/app/(main)/testimonials/slider";
import { UpsellModal } from "./unpaid/upsell";

import { addToCart, viewItem } from "@/services/gaEvents";
import { usePathname } from "next/navigation";

type CourseItem = {
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
    upsellBundle: {
      bundleTitle: string;
      slug: string;
      pricingsCollection: {
        items: {
          amount: string;
          bigAmount: string;
          percentage: string;
        };
      }[];
    };
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
  item: {
    title,
    slug,
    courseId,
    courseImage,
    upsellBundle,
    modulesCollection,
    pricingsCollection,
    faqCollection,
    offers,
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

  const pathName = usePathname();

  useEffect(() => {
    // @ts-ignore
    viewItem({
      title,
      slug,
      itemId: courseId,
      itemType: "course",
      value:
        pricingsCollection?.items?.find((e) => e.countryCode == "IN")?.amount ??
        399,
    });
  }, [pathName]);

  function Unpaid() {
    function addToCartEvent() {
      addToCart({
        itemId: courseId,
        itemType: "course",
        slug,
        title,
        value:
          pricingsCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 399,
      });
    }

    return (
      <main className="relative min-h-svh overflow-clip">
        <Hero
          addToCart={addToCartEvent}
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
          addToCart={addToCartEvent}
          courseId={courseId}
          modulesCollection={modulesCollection}
          image={courseImage?.url}
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
          faqs={faqCollection.items}
        />
        <UpsellModal
          title={upsellBundle?.bundleTitle}
          slug={upsellBundle?.slug}
          amount={upsellBundle?.pricingsCollection[0]?.items?.amount}
          bigAmount={upsellBundle?.pricingsCollection[0]?.items?.bigAmount}
          percentage={upsellBundle?.pricingsCollection[0]?.items?.percentage}
          open={openUpsell}
          setOpen={setOpenUpsell}
          setPaymentOpen={setOpen}
          setBundelPaymentOpen={setOpenBundle}
        />
        <PaymentSheet
          slug={slug}
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
        {/* <BundlePaymentSheet
          open={openBundle}
          setOpen={setOpenBundle}
          bundleId={"ALL30DC"}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          setOpenPay={setOpenPayBunlde}
        /> */}
        <YTModal open={openYt} setOpen={setOpenYt} url="nTAHWER3K-0" />
        <Floating
          addToCart={addToCartEvent}
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
      <Unpaid />
      <PaymentModal slug={slug} payModal={openPay} setOpenPay={setOpenPay} />
      <BundleModal payModal={openPayBunlde} setOpenPay={setOpenPayBunlde} />
    </>
  );
}
