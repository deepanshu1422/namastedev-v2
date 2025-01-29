import {
  Blocks,
  BookMarked,
  Check,
  Eye,
  FileText,
  GraduationCap,
  HomeIcon,
  Network,
  Star,
  Code2,
  BookOpen,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const userMenu = [
  {
    title: "Dashboard",
    icon: <HomeIcon className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/dashboard",
    //   selected: path === "/dashboard",
  },
];

const navBar = [
  {
    title: "Courses",
    icon: <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/courses",
    recent: [],
  },
  {
    title: "Projects",
    icon: <Code2 className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/projects",
    recent: [
      {
        title: "Real-time Chat App",
        link: "/projects/create-a-real-time-chat-application-with-mern-stack",
        image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1200&auto=format&fit=crop",
        description: "Build a complete real-time chat application using MERN stack"
      },
      {
        title: "E-commerce App",
        link: "/projects/e-commerce-application-with-react-redux-toolkit-tailwind-css-and-firebase",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
        description: "Create a full-featured e-commerce platform with React and Firebase"
      },
      {
        title: "Expense Tracker",
        link: "/projects/build-expense-tracker-app-with-mern-stack",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
        description: "Develop an expense tracking application using MERN stack"
      },
    ],
  },
  {
    title: "Interview Prep",
    icon: <BookOpen className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/interview",
    recent: [
      {
        title: "JavaScript",
        link: "/interview/javascript",
      },
      {
        title: "React",
        link: "/interview/react",
      },
      {
        title: "Python",
        link: "/interview/python",
      },
      {
        title: "SQL",
        link: "/interview/sql",
      },
      {
        title: "Node.js",
        link: "/interview/nodejs",
      },
    ],
  },
  {
    title: "Roadmaps",
    icon: <Star className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/roadmaps",
    //   selected: path === "/roadmaps",
    recent: [
      {
        title: "MERN FullStack Roadmap",
        link: "/roadmaps/mern-react",
      },
      {
        title: "Blockchain Development",
        link: "/roadmaps/blockchain-development",
      },
      {
        title: "Data Structures and Algorithms",
        link: "/roadmaps/data-structures-algorithm",
      },
    ],
  },
  {
    title: "Testimonials",
    icon: <Star className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/testimonials",
    //   selected: path === "/interview",
    recent: [
      {
        title: "Wall of Love",
        link: "/testimonials/wall-of-love",
      },
      {
        title: "Success Stories",
        link: "/testimonials/success-stories",
      },
      {
        title: "Gallery",
        link: "/testimonials/gallery",
      },
    ],
  },
  {
    title: "Resources",
    icon: <Network className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/motivation",
    recent: [
      {
        title: "Daily Motivation",
        link: "/motivation",
      },
      {
        title: "Success Journey",
        link: "/journey",
      },
      {
        title: "DSA Sheet",
        link: "/dsa",
      },
      {
        title: "DSA Visualizer",
        link: "/visualizer",
      },
      {
        title: "Resume Builder",
        link: "/resume",
      },
    ],
  },
  {
    title: "Resume",
    icon: <FileText className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/resume",
    //   selected: path === "/resume",
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  const [path, setPath] = useState(pathName);

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full shrink overflow-auto horizontal-scroll h-full"
    >
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <div className="flex flex-col gap-2 pb-2">
          <span className="text-xs max-lg:hidden uppercase">
            Access your account
          </span>
          {userMenu.map(({ href, icon, title }, i) => (
            <Link
              key={i}
              href={href}
              className={`flex items-center gap-3 ${
                href === path && "bg-second/20 text-prime"
              } rounded-lg px-3 max-lg:py-3 lg:py-2 text-muted-foreground transition-all hover:text-prime hover:bg-second/20`}
            >
              {icon}
              <span className="hidden lg:block">{title}</span>
            </Link>
          ))}
          <span className="text-xs max-lg:hidden uppercase">Explore more</span>
          <span className="text-xs text-muted-foreground text-center lg:hidden">
            ----
          </span>
        </div>
        {navBar.map(({ href, icon, title, recent }, i) =>
          Boolean(recent?.length) ? (
            <AccordionItem key={i} value={`item-${i + 1}`}>
              <AccordionTrigger
                className={`flex items-center gap-3 ${
                  href === path && "bg-second/20 text-prime"
                } rounded-lg px-3 max-lg:py-3 lg:py-2 text-muted-foreground transition-all hover:text-prime hover:bg-second/20`}
              >
                <span className="flex gap-3">
                  {icon}
                  <span className="hidden lg:block">{title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-1 px-3 max-lg:py-2 lg:py-1 ml-5 border-l-[1.5px] border-zinc-600">
                {recent?.map(({ link, title }, i) => (
                  <Link
                    key={i}
                    className="rounded-lg px-2 py-1.5 text-xs text-muted-foreground transition-all hover:text-prime hover:bg-second/20"
                    href={link}
                  >
                    {title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ) : (
            // </Link>
            <Link
              key={i}
              href={href}
              className={`flex items-center gap-3 ${
                href === path && "bg-second/20 text-prime"
              } rounded-lg px-3 max-lg:py-3 lg:py-2 text-muted-foreground transition-all hover:text-prime hover:bg-second/20`}
            >
              {icon}
              <span className="hidden lg:block">{title}</span>
            </Link>
          )
        )}
      </nav>
      {/* </div> */}
    </Accordion>
  );
}

export function MobileSidebar() {
  const pathName = usePathname();
  const [path, setPath] = useState(pathName);

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  return (
    <>
      {userMenu.map(({ href, icon, title }, i) => (
        <Link
          key={i}
          href={href}
          className={`text-sm mx-[-0.65rem] flex items-center gap-2 ${
            href === path ? "bg-muted" : "text-muted-foreground"
          } rounded-xl px-3 py-1 hover:text-foreground transition-all`}
        >
          {icon}
          {title}
        </Link>
      ))}

      <Accordion
        type="single"
        collapsible
        className="w-full text-sm shrink overflow-auto horizontal-scroll h-full overflow-x-hidden"
      >
        {navBar.map(({ href, icon, title, recent }, i) =>
          Boolean(recent?.length) ? (
            <AccordionItem key={i} value={`item-${i + 1}`}>
              <AccordionTrigger
                className={`flex items-center gap-3 ${
                  href === path && "bg-second/20 text-prime"
                } rounded-lg px-0.5 py-2 text-muted-foreground`}
              >
                <span className="flex gap-2">
                  {icon}
                  <span className="">{title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col py-1 ml-2.5 border-l-[2px] border-zinc-600">
                {recent?.map(({ link, title }, i) => (
                  <Link
                    key={i}
                    className="rounded-lg px-2 py-1.5 text-xs text-muted-foreground"
                    href={link}
                  >
                    {title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ) : (
            <Link
              key={i}
              href={href}
              className={`mx-[-0.65rem] flex items-center gap-2 ${
                href === path ? "bg-muted" : "text-muted-foreground"
              } rounded-xl px-3 py-1 hover:text-foreground transition-all`}
            >
              {icon}
              {title}
            </Link>
          )
        )}
      </Accordion>
    </>
  );
}
