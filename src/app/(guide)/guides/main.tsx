"use client";

import { useState } from "react";
import Hero from "./hero";
import Products from "./products";
import { templates } from "@/util/constants";
import Script from "next/script";

export default function Main({guideData}: {guideData: any}) {
  const [state, setState] = useState("");
  const [guides, setGuides] = useState(guideData);

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Claim these Valuable Guides at Great Price"
        desc="Discover top-notch gudiesfor free. Elevate your online presence with our valuable, solutions designed to meet your unique guides."
        heroImage="/thumbs/lib.jpeg"
        search={state}
        setSearch={setState}
      />
      <Products data={guides} state={state} />
    </main>
  );
}
