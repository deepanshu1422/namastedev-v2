import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "Getting Started | 30 Days Coding",
  description: "Your step-by-step guide to getting started with 30 Days Coding platform",
};

export default function Page() {
  return <Main />;
} 