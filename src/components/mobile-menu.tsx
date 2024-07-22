"use client";

import {
  AlignJustify,
  Braces,
  ChevronDown,
  Clapperboard,
  CornerDownRight,
  CornerRightDown,
  Earth,
  GitCommitHorizontalIcon,
  Layers,
  Menu,
  Network,
  Rss,
  Shapes,
  Wrench,
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
  sources,
  icon,
  title,
}: {
  title: string;
  icon: JSX.Element;
  sources: { title: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      {/* <div className="flex items-center"> */}
      <CollapsibleTrigger className="mx-[-0.65rem] flex w-full items-center gap-4 rounded-xl px-3 py-1.5 text-muted-foreground hover:text-foreground text-base">
        {icon}
        <span>{title}</span>
        <ChevronDown
          className={`ml-auto h-4 w-4 ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
        />
      </CollapsibleTrigger>
      {/* </div> */}

      {isOpen && (
        <CollapsibleContent className="flex flex-col gap-3 py-2 overflow-hidden">
          {sources.map(({ title, href }, i) => {
            return (
              <Link
                key={i}
                href={href}
                className="flex gap-1.5 font-semibold text-sm text-muted-foreground/80 hover:text-foreground"
              >
                <GitCommitHorizontalIcon />
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
    // console.log(pathName[0]);
  }, [pathName]);

  const navTitle = [
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Courses",
      // href: "/",
      selected: false,
      sources: [
        {
          title: "Recorded DSA Mastery Course",
          href: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
        },
        {
          title: "MERN FullStack Course",
          href: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
        },
        {
          title: "Next JS FullStack",
          href: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
        },
        {
          title: "All Courses Package",
          href: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
        },
      ],
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Services",
      // href: "/products",
      selected: false,
      sources: [
        {
          title: "AI Mock Interview",
          href: "https://talktohire.com/",
        },
        {
          title: "Blogs",
          href: "https://blogs.30dayscoding.com/",
        },

        {
          title: "DSA Sheets",
          href: "http://dsa.30dayscoding.com/",
        },
        {
          title: "Resume Builder",
          href: "https://resumebldr.vercel.app/app/personal-detail",
        },
        {
          title: "Premium Guides",
          href: "https://courses.30dayscoding.com/products",
        },
      ],
      // number: 6,
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Reviews",
      // href: "/testimonials",
      selected: false,
      sources: [
        {
          title: "Testimonials",
          href: "/testimonials",
        },
        {
          title: "Wall of Love",
          href: "/wall-of-love",
        },
      ],
    },
    {
      icon: <Rss className="h-5 w-5" />,
      title: "Blog",
      href: "/blog",
      selected: false,
    },
    {
      icon: <Earth className="h-5 w-5" />,
      title: "Jobs",
      href: "/jobs",
      selected: false,
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: "Products",
      href: "/products",
      selected: false,
    },
    {
      icon: <Braces className="h-5 w-5" />,
      title: "DSA",
      href: "/dsa",
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
        {/* <button className="hover:bg-prime/30 rounded-lg p-1 transition-all">
          <AlignJustify className="tab:hidden max-tab:h-5 max-tab:w-5 h-6 w-6 stroke-[1.5]" />
          <span className="sr-only">Toggle navigation menu</span>
        </button> */}
        <Button
                variant="outline"
                size={"icon"}
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col overflow-y-auto overflow-x-hidden">
        <>
          <nav className="grid gap-1 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image src={"/logo.png"} alt="logo" width={30} height={30} />
              <span className="sr-only">30DC</span>
            </Link>
            {navTitle.map(({ href, icon, selected, title, sources }, i) => {
              if (href)
                return (
                  <Link
                    key={i}
                    href={href}
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl ${
                      selected && "bg-muted"
                    } px-3 py-1.5 text-muted-foreground hover:text-foreground text-base`}
                  >
                    {icon}
                    <span>{title}</span>
                    {/* {number && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {number}
                    </Badge>
                  )} */}
                  </Link>
                );

              if (sources !== undefined)
                return (
                  <CollapsibleMenu
                    icon={icon}
                    sources={sources!}
                    title={title}
                    key={i}
                  />
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
                <Link href={"https://courses.30dayscoding.com/s/store"}>
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
