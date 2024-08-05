"use client";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import refreshCourses from "../../../../actions/refreshCourses";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageCircleQuestion } from "lucide-react";

export default function Purchased() {
  const { data: session } = useSession();

  console.log(session?.user);

  const {
    isPending,
    isError,
    error,
    data: items,
  } = useQuery({
    // @ts-ignore
    queryKey: [session?.user?.courseId ?? []],
    queryFn: async ({ queryKey }) => {
      return await refreshCourses(queryKey[0]);
    },
    staleTime: 1000 * 60 * 10,
  });

  if (isPending) return <PurchasedFallback />;

  return items.length ? (
    <div className="min-h-52 w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

function CourseCard({ e }: { e: any }) {
  return (
    <Link
      href={`/courses/${e?.slug}` || ""}
      className="flex flex-col gap-3 py-2 px-3 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60 transition-all duration-300"
    >
      <div className="flex justify-between">
        <Image src={"/logo.png"} alt={"30DC Logo"} height={40} width={40} />
        {/* <Image src={"/logo.png"} alt={"30DC Logo"} height={40} width={40} /> */}
      </div>
      <h3 className="font-semibold text-lg">{e.title}</h3>
      <div className="flex flex-col gap-3 mt-auto">
        <Badge className="text-white w-fit bg-prime/40 hover:bg-prime/60 rounded">
          Progress
        </Badge>
        <Progress value={30} className="h-1 bg-bg" />
        <span className="text-xs text-muted-foreground pt-3">
          Last Updated: {new Date().toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
}

function PurchasedFallback() {
  return (
    <div className="min-h-52 w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
    </div>
  );
}
