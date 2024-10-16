"use client";

import { Layers, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function MobileMenu() {
  const [state, setState] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setState(false);
  }, [pathName]);

  const navTitle = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Dashboard",
      href: "/dashboard",
      selected: false,
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Courses",
      href: "/courses",
      selected: false,
    },
  ];

  return (
    <Sheet open={state} onOpenChange={setState}>
      <SheetTrigger asChild>
        <Button variant="outline" size={"icon"} className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col overflow-y-auto overflow-x-hidden"
      >
        <>
          <nav className="grid gap-1 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image src={"/logo.png"} alt="logo" width={30} height={30} />
              <span className="sr-only">30DC</span>
            </Link>
            {navTitle.map(({ href, icon, title }, i) => {
              if (href)
                return (
                  <Link
                    key={i}
                    href={href}
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-1.5 text-muted-foreground hover:text-foreground text-base`}
                  >
                    {icon}
                    <span>{title}</span>
                  </Link>
                );
            })}
          </nav>
          <div className="relative mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>New Courses</CardTitle>
                <CardDescription>
                  Upskill yourself with pocket friendly courses — enroll now
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={"/courses"}>
                  <Button size="sm" className="text-white bg-prime w-full">
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
  );
}
