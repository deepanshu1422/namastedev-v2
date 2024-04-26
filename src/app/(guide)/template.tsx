import Link from "next/link";
import {
  Bell,
  Bookmark,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Network,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { title } from "process";

export default function Template() {
  const navBar = [
    {
      title: "Home",
      icon: <Home className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/",
      selected: false,
    },
    {
      title: "Projects",
      icon: <Network className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/projects",
      selected: true,
    },
    {
      title: "Guides",
      icon: <Bookmark className="h-4 w-4 md:h-5 md:w-5" />,
      href: "/guides",
      selected: false,
    },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
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
                    selected && "bg-muted text-prime"
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
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Join Community</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our community
                  group.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Link href={"https://nas.io/30dayscoding"}>
                  <Button size="sm" className="bg-prime text-white w-full">
                    Join Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
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
                      } rounded-xl px-3 py-2 hover:text-foreground`}
                    >
                      {icon}
                      {title}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Join Community</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        community group.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={"https://nas.io/30dayscoding"}>
                        <Button
                          size="sm"
                          className="bg-prime text-white w-full"
                        >
                          Join Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          {/* <DropdownMenu>
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
          </DropdownMenu> */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no projects
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start making projects as soon as you join our community.
              </p>
              <Link href={"https://nas.io/30dayscoding"}>
                <Button className="mt-4 bg-prime text-white">Join Now</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
