"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { AuthDialog } from "../(guide)/auth";
import Link from "next/link";

import {
  Braces,
  Compass,
  Earth,
  GraduationCap,
  HomeIcon,
  Map,
  Menu,
  Network,
  Star,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [path, setPath] = useState(pathName);

  const { data: session, status } = useSession();

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  const navBar = [
    {
      title: "Dashboard",
      icon: <HomeIcon className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/dashboard",
      selected: path === "/dashboard",
    },
    {
      title: "Courses",
      icon: <Compass className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/courses",
      selected: path === "/courses",
    },
    {
      title: "Testimonials",
      icon: <Star className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/testimonials",
      selected: path === "/testimonials",
    },
    {
      title: "Community",
      icon: <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/community",
    },
  ];

  return (
    <div className="sticky top-0 z-50">
      <Link
        href={"/bundle/complete-package-all-course-bundle"}
        //
        className={`sticky top-0 bg-lime-400 font-bold flex items-center justify-center max-sm:text-xs text-sm text-black w-full p-2`}
      >
        <section className="flex overflow-hidden gap-20">
          <div className="flex flex-nowrap gap-4 tracking-wide text-center text-pretty [animation:loop-scroll_20s_linear_infinite] w-full">
            <p className="text-nowrap">
              Access all courses for 2499/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 2499/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 2499/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 2499/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 2499/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 2499/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
            <p className="text-nowrap">
              Access all courses for 2499/- Lifetime Valid
              <span className="underline mx-2">Claim now!</span>
            </p>
          </div>
        </section>
      </Link>
      <section className="px-3 py-2 flex justify-between bg-footer z-50">
        <Link href={"/"} className="max-md:hidden flex gap-2 items-center">
          <Image src={"/logo.png"} alt="30DC Logo" height={35} width={35} />
          <span className="text-lg font-semibold">30DC</span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col overflow-hidden overflow-y-auto"
          >
            <>
              <nav className="grid gap-2 font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Image src={"/logo.png"} alt="logo" width={30} height={30} />
                  <span className="sr-only">30DC</span>
                </Link>

                {navBar.map(({ href, icon, selected, title }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className={`mx-[-0.65rem] flex items-center gap-2 ${
                      selected ? "bg-muted" : "text-muted-foreground"
                    } rounded-xl px-3 py-1 hover:text-foreground transition-all`}
                  >
                    {icon}
                    {title}
                  </Link>
                ))}
              </nav>
              <div className="relative mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>New Courses</CardTitle>
                    <CardDescription>
                      Upskill yourself with pocket friendly courses — Enroll Now
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={"/courses"}>
                      <Button
                        size="sm"
                        className="bg-prime hover:bg-prime/80 text-white w-full"
                      >
                        Enroll Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Image
                  alt="30DayCoding New Challenge"
                  src={"/best.gif"}
                  height={120}
                  width={120}
                  className="absolute top-0 -translate-y-10 translate-x-10 right-0"
                />
              </div>
            </>
          </SheetContent>
        </Sheet>

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
