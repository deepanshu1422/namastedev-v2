"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { AuthDialog } from "../(guide)/auth";

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <section className="px-3 py-2 flex justify-between sticky top-0 bg-footer z-10">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.png"} alt="30DC Logo" height={35} width={35} />
        <span className="text-lg font-semibold">30DC</span>
      </div>

      <div className="flex gap-1 items-center">
        <Button variant={"link"} size={"sm"} className="text-white">
          Join Mentorship
        </Button>
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
          <Button variant={"link"} size={"sm"} className="text-white">
            Dashboard
          </Button>
        ) : (
          <AuthDialog>
            <Button variant={"link"} size={"sm"} className="text-white">
              Login
            </Button>
          </AuthDialog>
        )}
      </div>
    </section>
  );
}
