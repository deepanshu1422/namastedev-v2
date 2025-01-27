"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

export type href = { title: string; href: string; description: string };

export const navTitles: {
  title: string;
  href: string | href[];
}[] = [
  // {
  //   title: "Courses",
  //   href: [
  //     // {
  //     //   title: "Mern FullStack Course",
  //     //   href: "/course/mern-full-stack-developer-course",
  //     //   description:
  //     //     "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  //     // },
  //     // {
  //     //   title: "Live Mern Cohort",
  //     //   href: "/course/mern-cohort",
  //     //   description:
  //     //     "A live mern stack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
  //     // },
  //     // {
  //     //   title: "DSA Live Course",
  //     //   href: "/course/dsa-live-placement-ready-course",
  //     //   description:
  //     //     "A live dsa placement ready course from 30 days coding. Checkout on www.courses.30dayscoding.com",
  //     // },
  //     {
  //       title: "Recorded DSA Mastery Course",
  //       href: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
  //       description:
  //         "A full dsa mastery course from 30 days coding. Checkout on www.courses.30dayscoding.com",
  //     },
  //     {
  //       title: "MERN FullStack Course",
  //       href: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
  //       description:
  //         "A complete mern full stack development course for 30 days coding challenge. Checkout on www.courses.30dayscoding.com",
  //     },
  //     {
  //       title: "Next JS FullStack",
  //       href: "/courses",
  //       description:
  //         "A live next js fullstack development cohort from 30 days coding. Checkout on www.courses.30dayscoding.com",
  //     },
  //     {
  //       title: "All Courses Package",
  //       href: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
  //       description:
  //         "Get a course from 30 days coding. Checkout on www.courses.30dayscoding.com",
  //     },
  //   ],
  // },
  // {
  //   title: "Services",
  //   href: [
  //     {
  //       title: "AI Mock Interview",
  //       href: "https://talktohire.com/",
  //       description: "",
  //     },
  //     {
  //       title: "Blogs",
  //       href: "https://blogs.30dayscoding.com/",
  //       description: "",
  //     },

  //     {
  //       title: "DSA Sheets",
  //       href: "/courses",
  //       description:
  //         "Explore our comprehensive Data Structures and Algorithms (DSA) sheet, meticulously curated to aid your journey through our DSA courses.",
  //     },
  //     {
  //       title: "Resume Builder",
  //       href: "https://resumebldr.vercel.app/app/personal-detail",
  //       description:
  //         "Create your best resume ever with our All-in-one AI Builder, Reviewer, and Optimizer.",
  //     },
  //     {
  //       title: "Premium Guides",
  //       href: "https://courses.30dayscoding.com/products",
  //       description:
  //         "Elevate your coding skills with our premium guide, meticulously crafted to propel you towards mastery in programming. Dive deep into advanced concepts, best practices, and insider tips curated by industry experts.",
  //     },
  //   ],
  // },
  // {
  //   title: "Reviews",
  //   href: [
  //     {
  //       title: "Testimonials",
  //       href: "/testimonials",
  //       description:
  //         "Work reviews and words of people how they felt working with us.",
  //     },
  //     {
  //       title: "Wall of Love",
  //       href: "/wall-of-love",
  //       description:
  //         "A whole page dedicated for the kind of love we recieves from the people.",
  //     },
  //   ],
  // },
  // {
  //   title: "Mentors",
  //   href: "/mentors",
  // },
  {
    title: "Courses",
    href: "/courses",
  },
  // { title: "Testimonials", href: "/testimonials" },
  // { title: "Resume", href: "/resume" },
  { title: "Roadmaps", href: "/roadmaps" },
  { title: "DSA", href: "/dsa" },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  // {
  //   title: "Jobs",
  //   href: "/jobs",
  // },
  // {
  //   title: "DSA",
  //   href: "/dsa",
  // },
];

interface NavItem {
  title: string;
  href: string;
  description: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function NavMenu({ items }: { items: NavSection[] }) {
  const pathName = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((section) => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {section.items.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
