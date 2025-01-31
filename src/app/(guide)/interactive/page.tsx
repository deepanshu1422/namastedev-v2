import { Metadata } from "next";
import Main from "./main";
import React from 'react';

export const metadata: Metadata = {
  title: "Interactive Learning | 30 Days Coding",
  description: "Learn full stack development through interactive lessons and exercises",
};

export default function Page() {
  return <Main />;
} 