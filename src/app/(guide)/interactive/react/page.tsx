import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "React Interactive Learning | 30 Days Coding",
  description: "Master React through interactive visualizations and hands-on examples",
};

export default function Page() {
  return <Main />;
} 