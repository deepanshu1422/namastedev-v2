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
  PlayCircle,
  Briefcase,
  MessageSquare,
  User,
  Notebook,
  Activity,
  Settings,
  ChevronDown,
  Binary,
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
import { cn } from "@/lib/utils";

const userMenu = [
  {
    title: "Dashboard",
    icon: <HomeIcon className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/dashboard",
    //   selected: path === "/dashboard",
  },
  {
    title: "Getting Started",
    icon: <BookOpen className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/getting-started",
  },
];

const navBar = [
  // {
  //   title: "Courses",
  //   icon: <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />,
  //   href: "/courses",
  //   recent: [],
  // },
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
    icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />,
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
  // {
  //   title: "Interactive",
  //   icon: <PlayCircle className="h-4 w-4 md:h-5 md:w-5" />,
  //   href: "/interactive",
  //   recent: [
  //     {
  //       title: "JavaScript Fundamentals",
  //       link: "/interactive/javascript",
  //     },
  //     {
  //       title: "React Essentials",
  //       link: "/interactive/react",
  //     },
  //     {
  //       title: "Node.js & Express",
  //       link: "/interactive/nodejs",
  //     }
  //   ],
  // },
  {
    title: "Examples",
    icon: <Code2 className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/examples",
    recent: [
      {
        title: "AI Integration",
        link: "/examples#ai-integration",
      },
      {
        title: "Frontend Patterns",
        link: "/examples#frontend",
      },
      {
        title: "Backend Patterns",
        link: "/examples#backend",
      },
      {
        title: "Testing Patterns",
        link: "/examples#testing",
      }
    ],
  },
  {
    title: "Career Tools",
    icon: <Briefcase className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/bundle",
    recent: [
      {
        title: "Resume Builder",
        link: "/resume",
      },
    ],
  },
  {
    title: "Playground",
    icon: <Code2 className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/playground",
    recent: [
      {
        title: "HTML Practice",
        link: "/playground/html",
        description: "Practice HTML with interactive examples and live preview"
      },
      {
        title: "JavaScript Practice",
        link: "/playground/javascript",
        description: "Write and run JavaScript code with live console output"
      },
      {
        title: "SQL Practice",
        link: "/playground/sql",
        description: "Write and execute SQL queries with instant feedback"
      }
    ],
  },
  {
    title: "DSA",
    icon: <Binary className="h-4 w-4 md:h-5 md:w-5" />,
    href: "/dsa",
    recent: [
      {
        title: "Problem Sheet",
        link: "/dsa",
        description: "Curated DSA problems with solutions"
      },
      {
        title: "Visualizer",
        link: "/visualizer",
        description: "Interactive algorithm visualization tool"
      }
    ],
  },
  // {
  //   title: "Profile",
  //   icon: <User className="h-4 w-4 md:h-5 md:w-5" />,
  //   href: "/dashboard/profile",
  //   recent: [
  //     {
  //       title: "My Notes",
  //       link: "/dashboard/profile/notes",
  //       icon: <Notebook className="h-4 w-4" />
  //     },
  //     {
  //       title: "Saved Items",
  //       link: "/dashboard/profile/saved",
  //       icon: <BookMarked className="h-4 w-4" />
  //     },
  //     {
  //       title: "Course Progress",
  //       link: "/dashboard/profile/progress",
  //       icon: <Activity className="h-4 w-4" />
  //     },
  //     {
  //       title: "Settings",
  //       link: "/dashboard/profile/settings",
  //       icon: <Settings className="h-4 w-4" />
  //     },
  //   ],
  // },
];

export default function Sidebar() {
  const pathName = usePathname();
  const [path, setPath] = useState(pathName);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  useEffect(() => {
    setPath(pathName);
    // Auto-expand section containing current path
    const currentSection = navBar.find(section => 
      section.recent?.some(item => item.link === pathName)
    );
    if (currentSection && !expandedSections.includes(currentSection.title)) {
      setExpandedSections(prev => [...prev, currentSection.title]);
    }
  }, [pathName]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

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
        {navBar.map(({ href, icon, title, recent }, i) => {
          const isExpanded = expandedSections.includes(title);
          const isCurrentSection = recent?.some(item => item.link === path);
          
          return (
            <div key={i}>
              <button
                onClick={() => toggleSection(title)}
                className={cn(
                  "flex items-center justify-between w-full p-2 rounded-lg transition-colors",
                  isCurrentSection 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  {icon}
                  <span className="font-medium">{title}</span>
                </div>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${
                    isExpanded ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>

              {isExpanded && recent && (
                <div className="ml-6 mt-2 space-y-2">
                  {recent.map(({ link, title }, i) => (
                    <Link
                      key={i}
                      className={cn(
                        "block p-2 text-sm rounded-lg transition-colors",
                        path === link 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                      href={link}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </Accordion>
  );
}

export function MobileSidebar() {
  const pathName = usePathname();
  const [path, setPath] = useState(pathName);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

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
        {navBar.map(({ href, icon, title, recent }, i) => {
          const isExpanded = expandedSections.includes(title);
          
          return (
            <div key={i}>
              <button
                onClick={() => toggleSection(title)}
                className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {icon}
                  <span className="font-medium">{title}</span>
                </div>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${
                    isExpanded ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>

              {isExpanded && recent && (
                <div className="ml-6 mt-2 space-y-2">
                  {recent.map(({ link, title }, i) => (
                    <Link
                      key={i}
                      className="block p-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      href={link}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent closing when clicking link
                      }}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </Accordion>
    </>
  );
}
