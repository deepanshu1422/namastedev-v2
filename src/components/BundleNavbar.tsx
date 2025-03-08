'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Beginner",
    href: "/beginner",
  },
  {
    title: "Intermediate",
    href: "/intermediate",
  },
  {
    title: "Advanced",
    href: "/advanced",
  }
];

export default function BundleNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-[#0A1F1C]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A1F1C]/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-[#22C55E]">
              30 Days Coding
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#22C55E] ${
                  pathname === item.href ? "text-[#22C55E]" : "text-gray-400"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-4">
          <a
            href="https://courses.30dayscoding.com/s/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Dashboard
          </a>
        </div>
      </div>
    </header>
  );
} 