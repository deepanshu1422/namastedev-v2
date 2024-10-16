"use client";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import refreshCourses from "../../../../actions/refreshCourses";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight, MessageCircleQuestion } from "lucide-react";

import {
  DefaultTabsTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Session } from "next-auth";
import getInvoice from "../../../../actions/getInvoice";
import { useAtom } from "jotai";
import { purchasedCourses } from "@/lib/jotai";

export default function PurchaseTabs() {
  const { data: session, update } = useSession();

  useEffect(() => {
    // @ts-ignore
    if (session?.user?.newUser) return;
    update({ courses: true });
  }, []);

  return (
    <Tabs defaultValue="courses" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-muted">
        <DefaultTabsTrigger className="font-semibold" value="courses">
          Courses
        </DefaultTabsTrigger>
        <DefaultTabsTrigger className="font-semibold" value="invoice">
          Invoices
        </DefaultTabsTrigger>
      </TabsList>
      <TabsContent value="courses">
        <Purchased session={session} />
      </TabsContent>
      <TabsContent value="invoice">
        <Invoice />
      </TabsContent>
    </Tabs>
  );
}

function Invoice() {
  // console.log(session?.user);

  const { isPending, data: items } = useQuery({
    // @ts-ignore
    queryKey: [],
    queryFn: async () => {
      return await getInvoice();
    },
    staleTime: 1000 * 60 * 10,
  });

  if (isPending) return <InvoiceFallback />;

  return items?.length ? (
    <div className="w-full grid gap-2">
      {/* {JSON.stringify(items)} */}
      {items.map((e, i) => (
        <InvoiceTile key={i} item={e} />
      ))}
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
        {/* <span className="text-prime text-xs sm:text-sm font-bold">
          {item.paymentId}
        </span> */}
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
      className="min-h-52 flex flex-col gap-3 py-2 px-3 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60 transition-all duration-300"
    >
      <div className="flex justify-between">
        <Image src={"/logo.png"} alt={"30DC Logo"} height={40} width={40} />
        {/* <Image src={"/logo.png"} alt={"30DC Logo"} height={40} width={40} /> */}
      </div>
      <h3 className="font-semibold">{e.title}</h3>
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
