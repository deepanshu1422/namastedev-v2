"use client";

import Link from "next/link";
import {
  FileText,
  GraduationCap,
  HomeIcon,
  Menu,
  Network,
  Star,
  Eye,
  Check,
  BookMarked,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { AuthDialog } from "./auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Badge } from "@/components/ui/badge";
import { CertificateDialog } from "./dashboard/new-user";
import { useAtom } from "jotai";
import { certificate, notification } from "@/lib/jotai";
import Sidebar, { MobileSidebar } from "../../components/sidebar";
import { StreakDisplay } from "../../components/StreakDisplay";

export default function Template({ children }: { children: React.ReactNode }) {
  const [logout, setLogout] = useState(false);
  const [notify, setNotify] = useState(false);

  const { data: session, status } = useSession();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[60px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="sticky z-10 top-0 flex items-center border-b bg-bg">
            <Link
              href="/"
              className="h-14 bg-muted/40 px-4 py-2 lg:h-[60px] lg:px-6 w-full flex items-center gap-2 font-semibold"
            >
              <Image src={"/logo.png"} alt="logo" width={35} height={35} />
              <span className="max-lg:hidden">30DC</span>
            </Link>
          </div>
          <Sidebar />
          <div className="max-lg:hidden relative mt-auto p-2">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>New Courses</CardTitle>
                <CardDescription>
                  Upskill yourself with pocket friendly courses — Enroll Now
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Link href={"/courses"}>
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
                src={"/best.gif"}
                height={120}
                width={120}
                className="absolute top-0 -translate-y-5 translate-x-3 right-0"
              />
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-sm:overflow-hidden">
        {/* <div className="h-20" ></div> */}
        <header className="bg-bg">
          <div className="bg-muted/40 flex items-center gap-3 border-b px-4 lg:px-6 h-14 lg:h-[60px] sticky top-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5 mx-2" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col overflow-hidden overflow-y-auto"
              >
                <>
                  <nav className="grid gap-2 font-medium">
                    <Link
                      href="/"
                      className="flex items-center gap-2 font-semibold"
                    >
                      <Image
                        src={"/logo.png"}
                        alt="logo"
                        width={30}
                        height={30}
                      />
                      <span className="sr-only">30DC</span>
                    </Link>
                    <MobileSidebar />
                  </nav>
                  <div className="max-lg:hidden relative mt-auto p-2">
                    <Card>
                      <CardHeader className="p-2 pt-0 md:p-4">
                        <CardTitle>New Courses</CardTitle>
                        <CardDescription>
                          Upskill yourself with pocket friendly courses — Enroll
                          Now
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                        <Link href={"/courses"}>
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
                        src={"/best.gif"}
                        height={120}
                        width={120}
                        className="absolute top-0 -translate-y-5 translate-x-3 right-0"
                      />
                    </Card>
                  </div>
                </>
              </SheetContent>
            </Sheet>
            <div className="flex gap-3 ml-auto h-full py-2">
              <StreakDisplay />
              {status === "loading" ? (
                <button className="font-jakarta flex items-center font-semibold gap-2 bg-prime/20 transition-all p-2 rounded-md text-sm">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#878787"
                  >
                    <defs>
                      <linearGradient
                        x1="8.042%"
                        y1="0%"
                        x2="65.682%"
                        y2="23.865%"
                        id="tail-spin_svg__a_19"
                      >
                        <stop
                          stop-color="currentColor"
                          stop-opacity="0"
                          offset="0%"
                        ></stop>
                        <stop
                          stop-color="currentColor"
                          stop-opacity=".631"
                          offset="63.146%"
                        ></stop>
                        <stop stop-color="currentColor" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <g
                      transform="translate(1 1)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M36 18c0-9.94-8.06-18-18-18"
                        stroke="url(#tail-spin_svg__a_19)"
                        stroke-width="2"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="0.9s"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </path>
                      <circle fill="#fff" cx="36" cy="18" r="1">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="0.9s"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </circle>
                    </g>
                  </svg>
                </button>
              ) : status === "authenticated" ? (
                <UserButton
                  logout={logout}
                  notify={notify}
                  setLogout={setLogout}
                  setNotify={setNotify}
                  src={session.user?.image ?? ""}
                  name={session.user?.name ?? session.user?.email ?? ""}
                />
              ) : (
                <AuthDialog>
                  <button className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:py-2 rounded-md text-sm">
                    Dashboard
                  </button>
                </AuthDialog>
              )}
            </div>
          </div>
        </header>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export function UserButton({
  src,
  name,
  logout,
  notify,
  setLogout,
  setNotify,
}: {
  src: string;
  name: string;
  logout: boolean;
  notify: boolean;
  setLogout: React.Dispatch<React.SetStateAction<boolean>>;
  setNotify: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useAtom(certificate);
  const [notifications] = useAtom(notification);
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={src} />
            <AvatarFallback className="uppercase text-white font-bold">
              {name[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[9rem]" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/profile">
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => setNotify(true)}>
            Notifications{" "}
            <Badge className="bg-red-600 text-white ml-auto flex h-5 w-5 text-xs shrink-0 items-center justify-center rounded-full">
              {notifications.filter((e) => e.new === true).length}
            </Badge>
          </DropdownMenuItem>
          <Link href={"/support"}>
            <DropdownMenuItem>Support</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setLogout(true)}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CertificateDialog open={open} setOpen={setOpen} />
      <LogoutModal logout={logout} setLogout={setLogout} />
      <NotificationSheet notify={notify} setNotify={setNotify} />
      <div className="absolute top-0 right-0 h-4 w-4 grid place-items-center font-semibold bg-red-700 text-xs rounded-full">
        {notifications.filter((e) => e.new === true).length}
      </div>
    </div>
  );
}

function LogoutModal({
  logout,
  setLogout,
}: {
  logout: boolean;
  setLogout: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AlertDialog open={logout} onOpenChange={setLogout}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure want to Sign Out?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently sign out your
            account and you need to re-login.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-prime/70 hover:bg-prime/90 text-white"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function NotificationSheet({
  notify,
  setNotify,
}: {
  notify: boolean;
  setNotify: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useAtom(certificate);
  const [notfications, setNotifications] = useAtom(notification);

  return (
    <Sheet open={notify} onOpenChange={setNotify}>
      <SheetContent className="overflow-auto horizontal-scroll">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Stay tuned for new updates, we&apos;ll notify and reach out to you
            soon.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-2 py-4">
          {notfications.map((e, i) => (
            <div
              key={i}
              onClick={() => {
                setNotify(false);
                setNotifications(
                  notfications.map((e) =>
                    e.id === i + 1 ? { ...e, new: false } : e
                  )
                );
                setOpen(true);
              }}
            >
              <div className="rounded-lg border-prime border bg-second/30 min-h-20 w-full flex flex-col gap-2 p-1">
                <Badge className="rounded bg-prime/60 hover:bg-prime/80 text-white text-center w-full">
                  {e.title}
                </Badge>
                <p className="text-sm px-2 line-clamp-2">{e.description}</p>
                {Boolean(e.href) ? (
                  <Link href={e.href}>
                    <Button
                      size={"sm"}
                      className="w-full bg-prime/80 hover:bg-prime text-white"
                    >
                      {e?.btnText ?? "Visit Now"}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size={"sm"}
                    className="bg-prime/80 hover:bg-prime text-white"
                  >
                    {e?.btnText ?? "Visit Now"}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
