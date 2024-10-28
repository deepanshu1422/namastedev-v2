import { Button } from "@/components/ui/button";
import { Home, Workflow } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Menu() {
  const menu = [
    {
      link: "/",
      icon: <Home className="w-5 h-5 stroke-white" />,
    },
    {
      link: "/projects",
      icon: <Workflow className="w-5 h-5 stroke-white" />,
    },
    {
      link: "/guides",
      icon: <Workflow className="w-5 h-5 stroke-white" />,
    },
  ];
  return (
    <div className="fixed flex flex-col gap-2 top-2 left-2 p-2 rounded-md border z-20 bg-background/40 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
      {menu.map(({ link, icon }, i) => (
        <Link key={i} href={link}>
          <Button className="px-2" variant={"outline"}>
            {icon}
          </Button>
        </Link>
      ))}
    </div>
  );
}
