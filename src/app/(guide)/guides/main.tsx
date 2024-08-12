"use client";

import { useState } from "react";
import Hero from "./hero";
import Products from "./products";
import { templates } from "@/util/constants";
import Script from "next/script";

export default function Main() {
  const [state, setState] = useState("");
  const [guides, setGuides] = useState([
    {
      title: "DSA Unlocked: A Step-by-Step Guide",
      description:
        "A Step-by-Step Guide to Crushing Data Structures and Algorithms. Covers all fundamental data structures and algorithms in a 98-page book",
      cover: "/guides/dsa.jpg",
      slug: "https://30dayscoding.gumroad.com/l/dsa",
    },
    {
      title: "ATS friendly Resume Template Guide",
      description:
        "ATS friendly Resume Template and Guide for ALL roles in 2024. Step-by-step instructions for crafting a compelling resume",
      cover: "/guides/resume.jpg",
      slug: "https://30dayscoding.gumroad.com/l/resume",
    },
  ]);

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Claim these Valuable Guides for Free Now"
        desc="Discover top-notch gudiesfor free. Elevate your online presence with our valuable, solutions designed to meet your unique guides."
        heroImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        search={state}
        setSearch={setState}
      />
      <Products data={guides} state={state} />
    </main>
  );
}
