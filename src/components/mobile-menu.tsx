"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
  title: string;
  href: string;
};

export default function MobileMenu({ items }: { items: NavItem[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden p-2 hover:bg-secondary/20 rounded-lg transition-colors">
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[350px] p-0">
        <div className="flex flex-col h-full bg-background">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/30days_logo.jpg"
                alt="30 Days Coding"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold">30 Days Coding</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-2">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block p-2 text-sm rounded-lg hover:bg-secondary/20 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Link
              href="/dashboard"
              className="block w-full py-2 px-4 text-center text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
