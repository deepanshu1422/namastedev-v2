import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "JavaScript Playground | 30 Days Coding",
  description: "Practice JavaScript with interactive examples and live console",
};

export default function Page() {
  return <Main />;
} 