"use client";

import Link from "next/link";
import { Bookmark, CircleUser, Earth, Home, Menu, Network } from "lucide-react";

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const [path, setPath] = useState(pathName);

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  const navBar = [
    {
      title: "Home",
      icon: <Home className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/",
      selected: path === "/",
    },
    {
      title: "Projects",
      icon: <Network className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/projects",
      selected: path === "/projects",
    },
    {
      title: "Guides",
      icon: <Bookmark className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/guides",
      selected: path === "/guides",
    },
    {
      title: "Jobs",
      icon: <Earth className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/jobs",
      selected: path === "/jobs",
    },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={"/logo.png"} alt="logo" width={30} height={30} />
              <span className="">30DC</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navBar.map(({ href, icon, selected, title }, i) => (
                <Link
                  key={i}
                  href={href}
                  className={`flex items-center gap-3 ${
                    selected && "bg-second/30 text-prime"
                  } rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-prime`}
                >
                  {icon}
                  {title}
                  {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge> */}
                </Link>
              ))}
            </nav>
          </div>
          <div className="relative mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Win ₹ 50,000</CardTitle>
                <CardDescription>
                  Find exciting opportunities like Rs.50,000 cash prize
                  challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Link href={"https://nas.io/30dc-challenges-n-hackathons/home"}>
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
                src={"/NEW2.gif"}
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
            <SheetContent side="left" className="flex flex-col">
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
                      className={`mx-[-0.65rem] flex items-center gap-4 ${
                        selected ? "bg-muted" : "text-muted-foreground"
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
                      <CardTitle>Win ₹ 50,000</CardTitle>
                      <CardDescription>
                        Find exciting opportunities like Rs.50,000 cash prize
                        challenges.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={
                          "https://nas.io/30dc-challenges-n-hackathons/home"
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
                    src={"/NEW2.gif"}
                    height={120}
                    width={120}
                    className="absolute top-0 -translate-y-10 translate-x-10 right-0"
                  />
                </div>
              </>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
    </div>
  );
}
