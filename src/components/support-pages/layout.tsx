import React from "react";
import BundleNavbar from "@/components/BundleNavbar";
import Footer from "@/components/new-cohort/footer";

export default function SupportPageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen bg-[#0A1F1C]">
      <BundleNavbar />
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#22C55E] mb-8 text-center">
          {title}
        </h1>
        <div className="bg-[#0A2818]/50 rounded-xl p-6 md:p-8 shadow-lg border border-[#22C55E]/20">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
} 