"use client";

import Lifetime from "./lifetime";
import React, { useEffect, useState } from "react";
import Roadmap from "./roadmap";
import Feature from "./feature";
import { Floating, PaymentModal, PaymentSheet } from "./payment";
import { usePathname, useSearchParams } from "next/navigation";
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
    guidesCollection,
  },
}: BundleItem) {
  const sheet = useSearchParams().get("sheet");
  
    // const { data: session } = useSession();
  
    const [open, setOpen] = useState(Boolean(sheet));
    const [openPay, setOpenPay] = useState(false);
    const [openYt, setOpenYt] = useState(false);
  
    const courseOffer = offers;
  
    const pathName = usePathname();
    const posthog = usePostHog();
    let flag = true
  
    useEffect(() => {
      // @ts-ignore
      // if (!session?.user?.bundleId?.includes(bundleId))
  
      if (flag){
        posthog.capture("view_item", {
          title: bundleTitle,
          slug,
          itemId: bundleId,
          itemType: "bundle",
          value:
            pricingsCollection?.items?.find((e) => e.countryCode == "IN")?.amount ??
            999,
        });
    
        viewItem({
          title: bundleTitle,
          slug,
          itemId: bundleId,
          itemType: "bundle",
          value:
            pricingsCollection?.items?.find((e) => e.countryCode == "IN")?.amount ??
            999,
        });
    
        sendEvent("ViewContent", {
          amount: pricingsCollection?.items?.find((e) => e.countryCode == "IN")?.amount ??
          399,
          content_ids: [bundleId],
          content_type: "course",
          event_source_url: window.location.href,
        });
        flag = false
      }
      
    }, [pathName]);

  function addToCartEvent() {
        
        posthog.capture("add_to_cart", {
          title: bundleTitle,
          slug,
          itemId: bundleId,
          itemType: "bundle",
          value:
            pricingsCollection?.items?.find((e) => e.countryCode == "IN")?.amount ??
            999,
        });
  
        addToCart({
          itemId: bundleId,
          itemType: "bundle",
          slug,
          title: bundleTitle,
          value:
            pricingsCollection?.items?.find((e) => e.countryCode == "IN")
              ?.amount ?? 999,
        });
      }

  return (
    <div>
      <Lifetime />
      <Roadmap />
      <Feature setOpen={setOpen} />
      <PaymentSheet
        open={open}
        guides={guidesCollection.items}
        slug={slug}
        posthog={posthog}
        setOpen={setOpen}
        bundleId={bundleId}
        title={bundleTitle}
        cover={coverImage?.url}
        amount={
          pricingsCollection.items.find((e) => e.countryCode == "IN")?.amount ??
          0
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
      <YTModal open={openYt} setOpen={setOpenYt} url="nTAHWER3K-0" />
      <Floating
        slug={slug}
        addToCart={addToCartEvent}
        price={
          pricingsCollection.items.find((e) => e.countryCode == "IN") ?? {
            amount: 0,
            bigAmount: 0,
            percentage: 0,
          }
        }
        open={open}
        setOpen={setOpen}
        bundleId={bundleId}
      />
      <PaymentModal payModal={openPay} setOpenPay={setOpenPay} />
    </div>
  );
}
