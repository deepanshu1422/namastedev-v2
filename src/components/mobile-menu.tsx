"use client";

import {
  AlignJustify,
  ChevronDown,
  Earth,
  Layers,
  Network,
  Rss,
  Shapes,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { href } from "./nav-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function CollapsibleMenu({
  title,
  href,
}: {
  title: string;
  href: string | href[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (typeof href === "string")
    return (
      <span>
        <Link href={href} className="font-semibold text-lg">
          {title}
        </Link>
      </span>
    );

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center">
        <CollapsibleTrigger className="font-semibold items-center flex gap-3">
          <span className="text-lg">{title}</span>
          <ChevronDown
            className={`h-4 w-4 ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          />
        </CollapsibleTrigger>
      </div>

      {isOpen && (
        <CollapsibleContent className="flex flex-col gap-5 py-5 overflow-hidden">
          {href.map(({ title, href }, i) => {
            return (
              <Link
                key={i}
                href={href}
                className="font-semibold text-muted-foreground"
              >
                {title}
              </Link>
            );
          })}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}

export default function MobileMenu() {
  const [state, setState] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setState(false);
    console.log(pathName[0]);
  }, [pathName]);

  const navTitle = [
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Courses",
      href: "/",
      selected: false,
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: "Products",
      href: "/products",
      selected: false,
      // number: 6,
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Reviews",
      href: "/testimonials",
      selected: false,
    },
    {
      icon: <Rss className="h-5 w-5" />,
      title: "Blog",
      href: "/blog",
      selected: false,
    },
    {
      icon: <Shapes className="h-5 w-5" />,
      title: "Resources",
      href: "/resources",
      selected: false,
    },
    {
      icon: <Earth className="h-5 w-5" />,
      title: "Jobs",
      href: "/jobs",
      selected: false,
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: "Projects",
      href: "/projects",
      selected: false,
    },
  ];

  return (
    // <div
    //   className={`tab:hidden fixed z-30 overflow-hidden ${
    //     state ? "pointer-events-none" : "pointer-events-auto"
    //   }`}
    // >
    //   <div
    //     className={`flex flex-col gap-4 transition-all duration-300 w-screen h-screen bg-bg p-6 relative ${
    //       state ? "translate-x-full" : "translate-x-0"
    //     }`}
    //   >
    //     <button
    //       onClick={() => setState(true)}
    //       className="hover:bg-prime/30 rounded-lg p-1 h-fit transition-all absolute top-5 right-5 flex flex-col"
    //     >
    //       <X className="tab:hidden max-tab:h-5 max-tab:w-5 h-6 w-6 stroke-[1.5]" />
    //     </button>
    //     <span className="uppercase mb-3 text-lg font-semibold text-muted-foreground">
    //       Menu
    //     </span>
    //     {navTitles.map(({ title, href }, i) => {
    //       return <CollapsibleMenu key={i} title={title} href={href} />;
    //     })}
    //   </div>
    // </div>

    <Sheet open={state} onOpenChange={setState}>
      <SheetTrigger asChild>
        <button className="hover:bg-prime/30 rounded-lg p-1 transition-all">
          <AlignJustify className="tab:hidden max-tab:h-5 max-tab:w-5 h-6 w-6 stroke-[1.5]" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <>
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image src={"/logo.png"} alt="logo" width={30} height={30} />
              <span className="sr-only">30DC</span>
            </Link>
            {navTitle.map(({ href, icon, selected, title }, i) => (
              <Link
                key={i}
                href={href}
                className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl ${
                  selected && "bg-muted"
                } px-3 py-2 text-muted-foreground hover:text-foreground`}
              >
                {icon}
                <span>{title}</span>
                {/* {number && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {number}
                  </Badge>
                )} */}
              </Link>
            ))}
            {/* <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground hover:text-foreground"
            ></Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            ></Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            ></Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            ></Link> */}
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Join Community</CardTitle>
                <CardDescription>
                  Unlock all features and get lifetime access to our coummunity
                  group.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={"https://nas.io/30dayscoding"}>
                  <Button size="sm" className="text-white bg-prime w-full">
                    Join Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </>
      </SheetContent>
    </Sheet>
  );
}
