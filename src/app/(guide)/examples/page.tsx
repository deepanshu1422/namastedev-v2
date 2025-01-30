import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "Code Examples & Snippets | 30 Days Coding",
  description: "Learn from real-world code examples covering AI, frontend, backend, and more",
};

export default function Page() {
  return <Main />;
} 