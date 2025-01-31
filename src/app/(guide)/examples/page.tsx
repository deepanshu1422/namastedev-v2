import { Metadata } from "next";
import  Main  from "./main";
import React from 'react';

export const metadata: Metadata = {
  title: "Code Examples & Snippets | 30 Days Coding",
  description: "Learn from real-world code examples covering AI, frontend, backend, and more",
};

export default function Page() {
  return <Main />;
} 