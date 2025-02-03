"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { HomeIcon, LogOut } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <span className="hidden sm:inline-block">30DC</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {session ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <HomeIcon className="h-4 w-4" />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </>
          ) : (
            <Link href="/api/auth/signin">
              <Button size="sm" className="bg-prime hover:bg-prime/90">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
} 