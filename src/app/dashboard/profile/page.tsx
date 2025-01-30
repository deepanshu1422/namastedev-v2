import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "User Profile | 30 Days Coding",
  description: "View and manage your learning journey, saved content, and course progress",
};

export default function Page() {
  return <Main />;
} 