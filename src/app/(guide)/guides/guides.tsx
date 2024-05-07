"use client";

import React, { useState } from "react";
import Hero from "./hero";
import Cards from "./cards";
import { guidesData } from "@/util/globals";

export default function Guides() {
  const [filteredGuides, setFilteredGuides] = useState(guidesData);

  return (
    <main className="w-full flex flex-col min-h-svh">
      <Hero filter={setFilteredGuides} />
      <Cards data={filteredGuides} />
    </main>
  );
}
