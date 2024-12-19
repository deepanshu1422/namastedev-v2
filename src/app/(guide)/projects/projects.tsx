"use client";

import React, { useState } from "react";
import Hero from "./hero";
import Cards from "./cards";
import { Project } from "./page";

export default function Projects({ projects }: { projects: Project[] }) {
  const [filteredProijects, setFilteredProijects] = useState(projects);

  return (
    <main className="w-full flex flex-col min-h-svh">
      <Hero data={projects} filter={setFilteredProijects} />
      <Cards data={filteredProijects} />
    </main>
  );
}
