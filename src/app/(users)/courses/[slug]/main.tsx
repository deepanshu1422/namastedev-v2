"use client";

import Detail from "./unpaid/details";
import { Floating, PaymentModal, PaymentSheet } from "./payments";
import {
  PaymentModal as BundleModal,
  PaymentSheet as BundlePaymentSheet,
} from "../../bundle/[slug]/payments";
import { useEffect, useState } from "react";
import Hero from "./unpaid/hero";
import { YTModal } from "@/app/(guide)/testimonials/slider";
import { UpsellModal } from "./unpaid/upsell";

import { addToCart, viewItem, viewItemPage } from "@/services/gaEvents";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { sendEvent } from "@/services/fbpixel";
import { BASE_URL } from "@/util/constants";

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
    guidesCollection: {
      items: {
        guideId: string;
        title: string;
        description: string;
        pricing: {
          amount: number;
          bigAmount: number;
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
    guidesCollection,
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

  const posthog = usePostHog();
  let flag = true;

  useEffect(() => {
    if (flag) {
      posthog?.capture("view_item_page", {
        title,
        itemId: courseId,
        slug,
        itemType: "course",
        value:
          pricingsCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 399,
      });
      // @ts-ignore
      viewItemPage({
        title,
        slug,
        itemId: courseId,
        itemType: "course",
        value:
          pricingsCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 399,
      });

      sendEvent("ViewContent", {
        amount: pricingsCollection?.items?.find((e) => e.countryCode == "IN")?.amount ??
        399,
        content_ids: [courseId],
        content_type: "course",
        event_source_url: window.location.href,
      });
      flag = false;
    }
  }, [pathName]);

  const router = useRouter();
  const utmParams = useSearchParams();
  const utm_source = utmParams.get("utm_source");
  const utm_medium = utmParams.get("utm_medium");
  const utm_campaign = utmParams.get("utm_campaign");
  const utm_content = utmParams.get("utm_content");
  const utm_term = utmParams.get("utm_term");

  // async function addToCartEvent() {
  //   router.push(
  //     `/payments/courses/${courseId}?${
  //       utm_source ? `&utm_source=${utm_source}` : ""
  //     }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
  //       utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
  //     }${utm_content ? `&utm_content=${utm_content}` : ""}${
  //       utm_term ? `&utm_term=${utm_term}` : ""
  //     }`
  //   );
  // }

  function Unpaid() {
    // function addToCartEvent() {
    //   // posthog?.capture("add_to_cart", {
    //   //   title,
    //   //   itemId: courseId,
    //   //   itemType: "course",
    //   //   slug,
    //   //   value:
    //   //     pricingsCollection?.items?.find((e) => e.countryCode == "IN")
    //   //       ?.amount ?? 399,
    //   // });

    //   // addToCart({
    //   //   itemId: courseId,
    //   //   itemType: "course",
    //   //   slug,
    //   //   title,
    //   //   value:
    //   //     pricingsCollection?.items?.find((e) => e.countryCode == "IN")
    //   //       ?.amount ?? 399,
    //   // });

    //   handleAddToCart()
    // }

    return (
      <main className="relative min-h-svh overflow-clip">
        <Hero
          slug={slug}
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
          cover={courseImage?.url}
          slug={slug}
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
          // addToCart={addToCartEvent}
          open={openUpsell}
          setPaymentOpen={setOpen}
          setOpen={setOpenUpsell}
        />
        <PaymentSheet
          slug={slug}
          posthog={posthog}
          open={open}
          setOpen={setOpen}
          courseId={courseId}
          title={title}
          cover={courseImage?.url}
          guides={guidesCollection.items}
          amount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.amount ?? 0
          }
          bigAmount={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.bigAmount ?? 0
          }
          percentage={
            pricingsCollection.items.find((e) => e.countryCode == "IN")
              ?.percentage ?? 0
          }
          curreny={"INR"}
          setOpenPay={setOpenPay}
        />
        <YTModal open={openYt} setOpen={setOpenYt} url="05xRJjzcYcQ" />
        <Floating
          slug={slug}
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
