'use client'

import Image from "next/image";
import { NavMenu } from "../nav-menu";
import Link from "next/link";
import MobileMenu from "../mobile-menu";
import { useSession } from "next-auth/react";
import { AuthDialog } from "@/app/(guide)/auth";
import { LayoutDashboard } from "lucide-react";

export default function Navbar() {

  // const { isSignedIn } = useAuth()
  const { data: session, status } = useSession()

  return (
    <div className={`relative font-jakarta tab:min-h-9`}>
      <div className="min-h-16" />

      <div className="flex bg-bg items-center justify-center text-lg text-white h-20 fixed top-0 w-full z-20 pt-2">
        <div
          className={`sm:p-[.875rem_4.25rem] p-[0.5rem_1rem] text-white flex gap-6 justify-between items-center w-full max-w-[90rem]`}
        >
          <section className="flex gap-12">
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
              <span className="text-sm line-clamp-1">Join Mentorship</span>
            </Link>

            {
              status === "loading" ? <button className="font-jakarta flex items-center font-semibold gap-2 bg-prime/20 transition-all p-2 rounded-md text-sm"
              ><svg width="32px" height="32px" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" color="#878787"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="tail-spin_svg__a_19"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#tail-spin_svg__a_19)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g></svg></button> : status === "authenticated" ? <Link
                href={"/dashboard"}
                className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:p-2 rounded-md"
              >
                <span className="text-sm max-sm:hidden">Dashboard</span>
                <LayoutDashboard className="h-5 w-5 sm:hidden" />
              </Link> : <AuthDialog><button className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:py-2 rounded-md text-sm"
              >Login</button></AuthDialog>
            }

            <MobileMenu />

          </section>
        </div>
      </div>
    </div >
  );
}

