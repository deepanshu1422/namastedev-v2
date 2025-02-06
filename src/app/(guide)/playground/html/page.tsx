import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "HTML Playground | 30 Days Coding",
  description: "Practice HTML with interactive examples and live preview",
};

export default function Page() {
  return <Main />;
} 