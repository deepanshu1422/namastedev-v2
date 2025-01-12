import React from "react";
import Header from "./header";
import Footer from "@/components/new-cohort/footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-bg">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
