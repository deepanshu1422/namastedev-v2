"use client";

import Lifetime from "./lifetime";
import React, { useEffect, useState } from "react";
import Roadmap from "./roadmap";
import Feature from "./feature";
import { Floating, PaymentModal, PaymentSheet } from "./payment";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { addToCart, viewItem } from "@/services/gaEvents";
import { sendEvent } from "@/services/fbpixel";
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
  };
};

export default function Main({
  item: {
    bundleId,
    bundleTitle,
    coverImage,
    slug,
    offers,
    pricingsCollection,
    faqCollection
  },
}: BundleItem) {
  const router = useRouter();
  const [openYt, setOpenYt] = useState(false);

  const pathName = usePathname();
  const posthog = usePostHog();
  let flag = true;

  useEffect(() => {
    // @ts-ignore
    // if (!session?.user?.bundleId?.includes(bundleId))

    if (flag) {
      posthog.capture("view_item", {
        title: bundleTitle,
        slug,
        itemId: bundleId,
        itemType: "bundle",
        value:
          pricingsCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 999,
      });

      viewItem({
        title: bundleTitle,
        slug,
        itemId: bundleId,
        itemType: "bundle",
        value:
          pricingsCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 999,
      });

      sendEvent("ViewContent", {
        amount:
          pricingsCollection?.items?.find((e) => e.countryCode == "IN")
            ?.amount ?? 399,
        content_ids: [bundleId],
        content_type: "bundle",
        event_source_url: window.location.href,
      });
      flag = false;
    }
  }, [pathName]);

  const utmParams = useSearchParams();
  const utm_source = utmParams.get("utm_source");
  const utm_medium = utmParams.get("utm_medium");
  const utm_campaign = utmParams.get("utm_campaign");
  const utm_content = utmParams.get("utm_content");
  const utm_term = utmParams.get("utm_term");

  async function handleAddToCart() {
    router.push(
      `/payments/bundles/${bundleId}?${
        utm_source ? `&utm_source=${utm_source}` : ""
      }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
        utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
      }${utm_content ? `&utm_content=${utm_content}` : ""}${
        utm_term ? `&utm_term=${utm_term}` : ""
      }`
    );
  }

  return (
    <div>
      <Lifetime image={coverImage.url} setYtOpen={setOpenYt} />
      <Roadmap />
      <Feature handleAddToCart={handleAddToCart} faqCollection={faqCollection} />
      <YTModal open={openYt} setOpen={setOpenYt} url="05xRJjzcYcQ" />
    </div>
  );
}
