"use client";

import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { getUsers } from "../../../../actions/admin";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { title } from "process";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

function CourseCard({
  title,
  src,
  email,
}: {
  title: string;
  src: string;
  email: string;
}) {
  return (
    <div className="min-h-52 flex flex-col gap-3 py-2 px-3 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60 transition-all duration-300">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={src} />
          <AvatarFallback>{title[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-muted-foreground text-sm">{email}</span>
        </div>
      </div>
      <span className="font-semibold">{src}</span>
      <div className="flex flex-col gap-3 mt-auto mb-2">
        {/* <Badge className="text-white w-fit bg-prime/20 hover:bg-prime/40 rounded">
          Continue Watching <ChevronRight className="h-3 w-3" />
        </Badge> */}
      </div>
    </div>
  );
}

function CoursesFallback() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
      <Skeleton className="min-h-40 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60" />
    </div>
  );
}

export default function Todos() {
  const [email, setEmail] = useState("");

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["users", email],
      queryFn: ({ queryKey }) =>
        getUsers({
          email: queryKey[1],
        }),
      //   placeholderData: keepPreviousData,
      staleTime: 1000 * 60 * 10,
    });

  return (
    <div className="mt-16 flex flex-col min-h-52 max-w-7xl mx-auto w-full gap-4">
      <title>New Users</title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const email = formData.get("search");
          setEmail(String(email) ?? "");
        }}
        className="flex gap-1 flex-1"
      >
        <Input
          name="search"
          disabled={isPending}
          className="sm:max-w-80 w-full bg-background text-sm h-9"
          placeholder="Filter by Email or OrderId"
        />
        <Button
          disabled={isPending}
          type="submit"
          variant={"outline"}
          size={"sm"}
          className="h-9 gap-1"
        >
          {isPending ? (
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : (
            <Search className="h-4 w-4" />
          )}
          <span className="max-sm:hidden">Search</span>
        </Button>
      </form>
      {isPending ? (
        <CoursesFallback />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map(
            (
              { email, name, bundleId, courseId, image, mentorshipId },
              i
            ) => (
              <CourseCard
                key={i}
                title={name ?? ""}
                src={image ?? ""}
                email={email}
              />
            )
          )}
        </div>
      )}
      {data?.length === 0 && (
        <div className="h-40 flex items-center justify-center">
          <Badge className="bg-prime hover:bg-prime text-white rounded-md">
            No User
          </Badge>
        </div>
      )}
      <div className="flex justify-between">
        {/* <Button
          variant={"outline"}
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </Button>
        <span>Current Page: {page + 1}</span>
        <Button
          variant={"outline"}
          onClick={() => {
            if (!isPlaceholderData) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPlaceholderData}
        >
          Next Page
        </Button> */}
      </div>
      {/* {isFetching ? <span> Loading...</span> : null} */}
    </div>
  );
}
