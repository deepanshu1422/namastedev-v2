"use client";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import refreshCourses from "../../../../actions/refreshCourses";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRightCircle, BookMarked, ChevronRight, MessageCircleQuestion, ReceiptText, StepForward } from "lucide-react";

import {
  DefaultTabsTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Session } from "next-auth";
import getInvoice from "../../../../actions/getInvoice";
import getGuides from "../../../../actions/getGuides";
import { useAtom } from "jotai";
import { purchasedCourses } from "@/lib/jotai";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PurchaseTabs() {
  const { data: session, update } = useSession();

  useEffect(() => {
    // @ts-ignore
    if (session?.user?.newUser) return;
    // @ts-ignore
    console.log(session?.user?.courseId);
    update({ courses: true });
  }, []);

  return (
    <Tabs defaultValue="courses" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-muted">
        <DefaultTabsTrigger className="font-semibold" value="courses">
          Courses
        </DefaultTabsTrigger>
        <DefaultTabsTrigger className="font-semibold" value="guides">
          Guides
        </DefaultTabsTrigger>
        <DefaultTabsTrigger className="font-semibold" value="invoice">
          <ReceiptText className="h-5 w-5" />
        </DefaultTabsTrigger>
      </TabsList>
      <TabsContent value="courses">
        <Purchased session={session} />
      </TabsContent>
      <TabsContent value="guides">
        <Guides />
      </TabsContent>
      <TabsContent value="invoice">
        <Invoice />
      </TabsContent>
    </Tabs>
  );
}

function Guides() {
  // console.log(session?.user);

  const { isPending, data: items } = useQuery({
    // @ts-ignore
    queryKey: ["guides"],
    queryFn: async () => {
      return await getGuides();
    },
    staleTime: 1000 * 60 * 10,
  });

  if (isPending) return <GuidesFallback />;

  return items.length ? (
    <div className="w-full grid sm:grid-cols-2 gap-3">
      {items.map((e, i) => {
        return <GuideTile key={i} title={e.title} src={e.source} />;
      })}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center w-full h-52 gap-2">
      <Badge className="text-white gap-1 py-2 hover:bg-second/60 bg-second/40 rounded">
        <MessageCircleQuestion className="h-4 w-4" />
        Not Purchased Yet
      </Badge>
      <span className="text-xs flex gap-1">
        Need Some Guides ?
      <Link className="underline text-lime-500" href={"/guides?utm_source=dashboard&utm_medium=dashboard&utm_campaign=no_purcahse"}>Add Guides</Link>
      </span>
    </div>
  );
}

function Invoice() {
  // console.log(session?.user);

  const { isPending, data: items } = useQuery({
    // @ts-ignore
    queryKey: ["invoice"],
    queryFn: async () => {
      return await getInvoice();
    },
    staleTime: 1000 * 60 * 10,
  });

  if (isPending) return <InvoiceFallback />;
  return items?.length ? (
    <div className="w-full grid gap-2">
      {/* {JSON.stringify(guides)} */}
      {items.map((e, i) => {
        return <InvoiceTile key={i} item={e} />;
      })}
    </div>
  ) : (
    <div className="flex w-full h-52">
      <Badge className="text-white gap-1 py-2 hover:bg-second/60 bg-second/40 rounded m-auto">
        <MessageCircleQuestion className="h-4 w-4" />
        Not Purchased Yet
      </Badge>
    </div>
  );
}

function Purchased({ session }: { session: Session | null }) {
  // console.log(session?.user);

  const [_, setCourses] = useAtom(purchasedCourses);

  const { isPending, data: items } = useQuery({
    // @ts-ignore
    queryKey: [session?.user?.courseId ?? []],
    queryFn: async ({ queryKey }) => {
      console.log("Refresh Courses");
      const courses = await refreshCourses(queryKey[0]);
      setCourses(courses.map((e: any) => e.title));
      return courses;
    },

    staleTime: 1000 * 60 * 10,
  });

  if (isPending) return <CoursesFallback />;

  return items.length ? (
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((e: any, i: number) => (
        <CourseCard key={i} e={e} />
      ))}
    </div>
  ) : (
    <div className="flex w-full h-52">
      <Badge className="text-white gap-1 hover:bg-second/60 bg-second/40 rounded m-auto">
        <MessageCircleQuestion className="h-4 w-4" />
        Not Purchased Yet
      </Badge>
    </div>
  );
}

function InvoiceTile({
  item,
}: {
  item: {
    paymentId: string;
    Invoices: {
      createdAt: Date;
      item: string;
      amount: number;
    } | null;
  };
}) {
  return (
    <div className="min-h-12 flex max-sm:flex-col justify-between gap-3 p-2 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60 transition-all duration-300">
      <span className="flex flex-col gap-1">
        <h3 className="font-semibold text-sm line-clamp-2">
          {item.Invoices?.item ?? "Item Name Missing"}
        </h3>
      </span>
      <div className="flex max-sm:flex-row-reverse max-sm:justify-between sm:flex-col gap-2 mt-auto mb-2">
        <Badge className="text-white w-fit border-prime/50 bg-background hover:bg-background/40 rounded">
          ₹{item.Invoices?.amount}
        </Badge>
        <Badge className="text-white w-fit bg-prime/20 hover:bg-prime/40 rounded">
          {item.Invoices?.createdAt.toLocaleDateString() || "No Date"}
        </Badge>
        {/* <Progress value={0} className="h-1 bg-bg" /> */}
        {/* <span className="flex items-center text-xs text-muted-foreground">
          Continue Watching <ChevronRight className="h-3 w-3" />
        </span> */}
      </div>
    </div>
  );
}

function CourseCard({ e }: { e: any }) {
  return (
    <Link
      href={`/dashboard/${e?.slug}` || ""}
      className="min-h-52 flex flex-col gap-2 p-1 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60 transition-all duration-300"
    >
      <div className="flex justify-between">
        <Image
          src={e?.courseImage?.url}
          alt={"30DC Logo"}
          height={200}
          width={200}
          className="rounded aspect-[6/4] w-full"
        />
        {/* <Image src={"/logo.png"} alt={"30DC Logo"} height={40} width={40} /> */}
      </div>
      <h3 className="font-semibold text-sm line-clamp-2">{e.title}</h3>
      <div className="flex flex-col gap-3 mt-auto mb-2">
        <Badge className="text-white w-fit bg-prime/20 hover:bg-prime/40 rounded">
          Continue Watching <ChevronRight className="h-3 w-3" />
        </Badge>
        {/* <Progress value={0} className="h-1 bg-bg" /> */}
        {/* <span className="flex items-center text-xs text-muted-foreground">
          Continue Watching <ChevronRight className="h-3 w-3" />
        </span> */}
      </div>
    </Link>
  );
}

function GuideTile({ title, src }: { title: string; src: string }) {
  return (
    <Link href={src} target="_blank">
      <Card className="border border-prime/40 rounded-md bg-second/20 hover:bg-second/40 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="p-1 flex flex-row items-center gap-1.5">
          <div className="p-2.5 rounded-md bg-gradient-to-b from-prime/70 to-head/40">
          <BookMarked className="shrink-0 h-5 w-5" />
          </div>
          <CardTitle className="font-medium text-base text-foreground/70 -translate-y-0.5 line-clamp-1">{title}</CardTitle>
          <StepForward className="shrink-0 h-5 w-5 ml-auto" />
          {/* <CardDescription></CardDescription> */}
        </CardHeader>
      </Card>
    </Link>
  );
}

function CoursesFallback() {
  return (
    <div className="min-h-52 w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
    </div>
  );
}

function InvoiceFallback() {
  return (
    <div className="w-full grid gap-2 py-2">
      <Skeleton className="min-h-12 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-12 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-12 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
    </div>
  );
}
function GuidesFallback() {
  return (
    <div className="w-full grid sm:grid-cols-2 gap-2 py-2">
      <Skeleton className="min-h-12 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-12 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-12 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
    </div>
  );
}
