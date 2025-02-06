import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "Interactive Playground | 30 Days Coding",
  description: "Practice coding with interactive playgrounds for SQL, DSA, and more",
};

export default function Page() {
  return <Main />;
} 