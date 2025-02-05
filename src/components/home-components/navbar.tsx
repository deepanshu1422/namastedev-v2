"use client";

import Link from "next/link";
import { Menu, HelpCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Roadmaps",
    href: "/roadmaps",
  },
  {
    title: "Interview",
    href: "/interview",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isBundlePage = pathname.includes("/bundle/");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg">
              30 Days Coding
            </span>
          </Link>

          {!isBundlePage && (
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-4 lg:pr-0 pr-16">
          {!isBundlePage && (
            <>
              <Link
                href="/dashboard"
                className="bg-prime hover:bg-prime/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
