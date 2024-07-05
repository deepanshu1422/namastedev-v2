"use client";

import Link from "next/link";
import {
  Bookmark,
  Braces,
  CircleUser,
  Compass,
  Earth,
  GraduationCap,
  Home,
  Library,
  Map,
  Menu,
  Network,
  Shapes,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const [path, setPath] = useState(pathName);

  const { isLoaded, isSignedIn } = useUser()

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  const navBar = [
    {
      title: "Explore",
      icon: <Compass className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/explore",
      selected: path === "/explore",
    },
    {
      title: "Projects",
      icon: <Network className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/projects",
      selected: path === "/projects",
    },
    {
      title: "Jobs",
      icon: <Earth className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/jobs",
      selected: path === "/jobs",
    },
    {
      title: "Roadmaps",
      icon: <Map className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/roadmaps",
      selected: path === "/roadmaps",
    },
    {
      title: "Testimonials",
      icon: <Star className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/testimonials",
      selected: path === "/testimonials"
    },
    {
      title: "DSA",
      icon: <Braces className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/dsa",
      selected: path === "/dsa"
    },
    {
      title: "Courses",
      icon: <Library className="h-4 w-4 md:h-5 md:w-5" />,
      href: "https://courses.30dayscoding.com/s/store",
    },
    {
      title: "1:1 Mentorship",
      icon: <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/mentorship",
    },
  ];



  return (
    <div className="grid min-h-screen w-full md:grid-cols-[60px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-14 items-center border-b px-4 py-2 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={"/logo.png"} alt="logo" width={35} height={35} />
              <span className="max-lg:hidden">30DC</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navBar.map(({ href, icon, selected, title }, i) => (
                <Link
                  key={i}
                  href={href}
                  className={`flex items-center gap-3 ${selected && "bg-second/20 text-prime"
                    } rounded-lg px-3 max-lg:py-3 lg:py-2 text-muted-foreground transition-all hover:text-prime`}
                >
                  {icon}
                  <span className="hidden lg:block">
                    {title}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="max-lg:hidden relative mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>New Courses</CardTitle>
                <CardDescription>
                  Upskill yourself with pocket friendly courses — Enroll Now
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Link href={"https://courses.30dayscoding.com/s/store"}>
                  <Button
                    size="sm"
                    className="bg-prime hover:bg-prime/80 text-white w-full"
                  >
                    Enroll Now
                  </Button>
                </Link>
              </CardContent>
              <Image
                alt="30DayCoding New Challenge"
                src={"/NEW.gif"}
                height={120}
                width={120}
                className="absolute top-0 -translate-y-5 translate-x-3 right-0"
              />
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col overflow-hidden overflow-y-auto">
              <>
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Image
                      src={"/logo.png"}
                      alt="logo"
                      width={30}
                      height={30}
                    />
                    <span className="sr-only">30DC</span>
                  </Link>

                  {navBar.map(({ href, icon, selected, title }, i) => (
                    <Link
                      key={i}
                      href={href}
                      className={`mx-[-0.65rem] flex items-center gap-4 ${selected ? "bg-muted" : "text-muted-foreground"
                        } rounded-xl px-3 py-2 hover:text-foreground transition-all`}
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
                      <Link
                        href={
                          "https://courses.30dayscoding.com/s/store"
                        }
                      >
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
                    src={"/NEW.gif"}
                    height={120}
                    width={120}
                    className="absolute top-0 -translate-y-10 translate-x-10 right-0"
                  />
                </div>
              </>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          {
            !isLoaded ? <button className="font-jakarta flex items-center font-semibold gap-2 bg-prime/20 transition-all p-2 rounded-md text-sm"
            ><svg width="32px" height="32px" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" color="#878787"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="tail-spin_svg__a_19"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#tail-spin_svg__a_19)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g></svg></button> : isSignedIn ? <UserButton appearance={{
              elements: {
                userButtonAvatarBox: "sm:w-11 sm:h-11 w-9 h-9"
              }
            }} /> : <SignInButton>
              <button className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:py-2 rounded-md text-sm"
              >Login</button>
            </SignInButton>
          }
        </header>
        {children}
      </div>
    </div>
  );
}
