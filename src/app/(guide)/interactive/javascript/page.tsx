import { Metadata } from "next";
import Main from "./main";
import React from 'react';
export const metadata: Metadata = {
  title: "JavaScript Interactive Learning | 30 Days Coding",
  description: "Master JavaScript through interactive visualizations and hands-on examples",
};

export default function Page() {
  return <Main />;
} 