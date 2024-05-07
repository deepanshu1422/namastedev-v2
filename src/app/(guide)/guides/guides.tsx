"use client";

import React, { useState } from "react";
import Hero from "./hero";
import Cards from "./cards";
import { projectsData } from "@/util/globals";

export default function Guides() {
  const [filteredProijects, setFilteredProijects] = useState(projectsData);

  return (
    <main className="w-full flex flex-col min-h-svh">
      <Hero filter={setFilteredProijects} />
      <Cards data={filteredProijects} />
    </main>
  );
}
