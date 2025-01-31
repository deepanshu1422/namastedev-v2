import { Metadata } from "next";
import Main from "./main";
import React from 'react';

export const metadata: Metadata = {
  title: "Node.js & Express Interactive Learning | 30 Days Coding",
  description: "Master Node.js and Express through interactive visualizations and hands-on examples",
};

export default function Page() {
  return <Main />;
} 