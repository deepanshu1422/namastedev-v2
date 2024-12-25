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
  Briefcase,
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
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useAtom } from "jotai";
import { certificate, notification } from "@/lib/jotai";
import Sidebar, { MobileSidebar } from "../../components/sidebar";

export default function Template({ children }: { children: React.ReactNode }) {

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
          <div className="max-lg:hidden relative mt-auto p-4">
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
                  <div className="relative mt-auto">
                    <Card>
                      <CardHeader>
                        <CardTitle>New Courses</CardTitle>
                        <CardDescription>
                          Upskill yourself with pocket friendly courses — Enroll
                          Now
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href={"/courses"}>
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
                      src={"/best.gif"}
                      height={120}
                      width={120}
                      className="absolute top-0 -translate-y-10 translate-x-10 right-0"
                    />
                  </div>
                </>
              </SheetContent>
            </Sheet>
            <div className="flex gap-3 ml-auto h-full py-2">
              <Link href={"/dashboard"} className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:py-2 rounded-md text-sm">
                Dashboard
              </Link>
            </div>
          </div>
        </header>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

// export function UserButton({
//   src,
//   name,
//   logout,
//   notify,
//   setLogout,
//   setNotify,
// }: {
//   src: string;
//   name: string;
//   logout: boolean;
//   notify: boolean;
//   setLogout: React.Dispatch<React.SetStateAction<boolean>>;
//   setNotify: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   const [open, setOpen] = useAtom(certificate);
//   const [notifications] = useAtom(notification);
//   return (
//     <div className="relative">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Avatar className="cursor-pointer">
//             <AvatarImage src={src} />
//             <AvatarFallback className="uppercase text-white font-bold">
//               {name[0]}
//             </AvatarFallback>
//           </Avatar>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="min-w-[9rem]" align="end">
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={() => setNotify(true)}>
//             Notifications{" "}
//             {Boolean(notifications.filter((e) => e.new === true).length) && (
//               <Badge className="bg-red-600 text-white ml-auto flex h-5 w-5 text-xs shrink-0 items-center justify-center rounded-full">
//                 {notifications.filter((e) => e.new === true).length}
//               </Badge>
//             )}
//           </DropdownMenuItem>
//           <Link href={"/support"}>
//             <DropdownMenuItem>Support</DropdownMenuItem>
//           </Link>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={() => setLogout(true)}>
//             Logout
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//       <CertificateDialog open={open} setOpen={setOpen} />
//       {/* <LogoutModal logout={logout} setLogout={setLogout} /> */}
//       <NotificationSheet notify={notify} setNotify={setNotify} />
//       {Boolean(notifications.filter((e) => e.new === true).length) && (
//         <div className="absolute top-0 right-0 h-4 w-4 grid place-items-center font-semibold bg-red-700 text-xs rounded-full">
//           {notifications.filter((e) => e.new === true).length}
//         </div>
//       )}
//     </div>
//   );
// }

// function LogoutModal({
//   logout,
//   setLogout,
// }: {
//   logout: boolean;
//   setLogout: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   return (
//     <AlertDialog open={logout} onOpenChange={setLogout}>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you sure want to Sign Out?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently sign out your
//             account and you need to re-login.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction
//             className="bg-prime/70 hover:bg-prime/90 text-white"
//             onClick={() => signOut({ callbackUrl: "/" })}
//           >
//             Sign Out
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Stay tuned for new updates, we&apos;ll notify and reach out to you
            soon.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="rounded-lg border-prime border bg-second/30 min-h-20 w-full flex flex-col gap-2 p-1">
            <Badge className="rounded bg-prime/60 hover:bg-prime/80 text-white text-center w-full">
              🎉 Certificate Ready!
            </Badge>
            <p className="text-sm px-2">
              Your certificate is generated. Download it from here now!
            </p>
            <Button
              onClick={() => {
                setNotify(false),
                  setNotifications(
                    notfications.map((e) =>
                      e.id === 1 ? { ...e, new: false } : e
                    )
                  ),
                  setOpen(true);
              }}
              size={"sm"}
              className="bg-prime/80 hover:bg-prime text-white"
            >
              Download Certificate
            </Button>
          </div>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
