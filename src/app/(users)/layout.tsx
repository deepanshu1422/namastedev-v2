import React from "react";
import Header from "./header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-bg">
      <Header />
      <main>{children}</main>
    </div>
  );
}
