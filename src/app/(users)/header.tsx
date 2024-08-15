"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { AuthDialog } from "../(guide)/auth";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <div className="sticky top-0 z-50">
      <Link
        href={"/course/dsa-live-placement-ready-course"}
        //
        className={`sticky top-0 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 animate-gradient bg-[length:200%_auto] font-bold flex items-center justify-center text-lg text-black min-h-8 w-full py-2`}
      >
        <p className="tracking-wide text-center">
          DSA classes will start from April 20th , Limited Seats 🎁
          <span className="underline mx-2">Apply now!</span>
        </p>
      </Link>
      <section className="px-3 py-2 flex justify-between bg-footer z-50">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src={"/logo.png"} alt="30DC Logo" height={35} width={35} />
          <span className="text-lg font-semibold">30DC</span>
        </Link>

        <div className="flex gap-1 items-center">
          <Link href="/courses">
            <Button variant={"link"} size={"sm"} className="text-white">
              More Courses
            </Button>
          </Link>
          {status === "loading" ? (
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : status === "authenticated" ? (
            <Link href="/dashboard">
              <Button variant={"link"} size={"sm"} className="text-white">
                Dashboard
              </Button>
            </Link>
          ) : (
            <AuthDialog>
              <Button variant={"link"} size={"sm"} className="text-white">
                Login
              </Button>
            </AuthDialog>
          )}
        </div>
      </section>
    </div>
  );
}
