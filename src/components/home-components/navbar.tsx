"use client";

import Image from "next/image";
import { NavMenu } from "../nav-menu";
import Link from "next/link";
import MobileMenu from "../mobile-menu";
import { useSession } from "next-auth/react";
import { AuthDialog } from "@/app/(guide)/auth";
import { LayoutDashboard, LogIn } from "lucide-react";

export default function Navbar() {
  // const { isSignedIn } = useAuth()
  const { data: session, status } = useSession();

  return (
    <div className={`relative font-jakarta tab:min-h-9`}>
      <div className="min-h-16" />

      <div className="flex bg-bg items-center justify-center text-lg text-white sm:h-20 fixed top-0 w-full z-20 pt-2">
        <div
          className={`sm:p-[.875rem_2.25rem] p-[0.5rem_1rem] text-white flex gap-6 justify-between items-center w-full max-w-[90rem]`}
        >
          <section className="flex gap-6">
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className="max-phone:h-8 max-phone:w-8 shadow-xl"
              />
              <span className="max-phone:hidden text-[1.6rem] font-medium">
                30DC
              </span>
            </Link>

            <div className="max-tab:hidden font-jakarta flex items-center font-medium gap-8">
              <NavMenu />
            </div>
          </section>

          <section className="flex items-center gap-2">
            <Link
              href={"/mentorship"}
              className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:py-2 rounded-md"
            >
              <span className="text-sm line-clamp-1">Job Support Mentorship</span>
            </Link>

            <Link
              href={"/dashboard"}
              className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:p-2 rounded-md"
            >
              <span className="text-sm">Login</span>
              {/* <LogIn className="h-5 w-5 sm:hidden" /> */}
            </Link>

            <MobileMenu />
          </section>
        </div>
      </div>
    </div>
  );
}
