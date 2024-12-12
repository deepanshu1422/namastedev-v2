"use client";

import { useState } from "react";
import Hero from "./hero";
import Products from "./products";
import { PaymentSheet, PaymentModal } from "./payment";

export default function Main({ guideData }: { guideData: any }) {
  const [state, setState] = useState("");
  const [guides, setGuides] = useState(guideData);

  const [guide, setGuide] = useState<{
    title: string;
    amount: number;
    bigAmount: number;
    percentage: number;
    curreny: string;
    guideId: string;
  } | null>(null);

  const [open, setOpen] = useState(false);
  const [payModal, setOpenPay] = useState(false);

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Claim these Valuable Guides at Great Price"
        desc="Discover top-notch gudiesfor free. Elevate your online presence with our valuable, solutions designed to meet your unique guides."
        heroImage="/thumbs/lib.jpeg"
        search={state}
        setSearch={setState}
      />
      <Products
        data={guides}
        state={state}
        setGuide={setGuide}
        setOpen={setOpen}
      />
      <PaymentSheet
        title={guide?.title}
        amount={guide?.amount}
        bigAmount={guide?.bigAmount}
        curreny={guide?.curreny}
        guideId={guide?.guideId}
        percentage={guide?.percentage}
        open={open}
        setOpen={setOpen}
        setOpenPay={setOpenPay}
      />
      <PaymentModal payModal={payModal} setOpenPay={setOpenPay} />
    </main>
  );
}
