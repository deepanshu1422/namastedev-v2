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
        className={`sticky top-0 bg-yellow-400 font-bold flex items-center justify-center max-sm:text-xs text-sm text-black w-full p-2`}
      >
        <section className="flex overflow-hidden">
          <div className="flex flex-nowrap gap-4 tracking-wide text-center text-pretty [animation:loop-scroll_10s_linear_infinite] w-full">
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
          </div>
          <div className="max-tab:hidden flex flex-nowrap gap-4 tracking-wide text-center text-pretty [animation:loop-scroll_10s_linear_infinite] w-full">
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 1229/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
          </div>
        </section>
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
