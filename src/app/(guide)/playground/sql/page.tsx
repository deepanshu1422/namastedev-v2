import { Metadata } from "next";
import Main from "./main";

export const metadata: Metadata = {
  title: "SQL Playground | 30 Days Coding",
  description: "Practice SQL queries with interactive examples and real-time feedback",
};

export default function Page() {
  return <Main />;
} 