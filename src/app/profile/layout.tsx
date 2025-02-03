import { Metadata } from "next";
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: "Profile - 30 Days of Coding",
  description: "View your profile, progress, and achievements",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-muted/50">
      <Navbar />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="relative pt-14">
        {children}
      </div>
    </div>
  );
} 