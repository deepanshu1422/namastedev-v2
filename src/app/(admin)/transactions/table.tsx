"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowUpCircle,
  CheckCircle,
  File,
  PlusCircleIcon,
  Search,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { QureyResponse } from "./page";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PaymentStatus } from "@prisma/client";
import { useState } from "react";
import Link from "next/link";
import TablePagination from "./pagination";
import { useQuery } from "@tanstack/react-query";
import { getContentfulData } from "@/lib/cotentful";
import getContentful from "../../../../actions/getContentful";

export default function TableDemo({
  data,
  isError,
  isPending,
  error,
  createQueryString,
  clearQueryString,
}: QureyResponse) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const { data: courseId, isPending: loadingCourses } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => await getContentful(),
  });

  return (
    <section className="flex flex-col gap-2">
      <div className="flex max-sm:flex-col gap-2 justify-between">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const search = formData?.get("search") as string;
            router.push(pathName + "?" + createQueryString("q", search));
          }}
          className="flex gap-1 flex-1"
        >
          <Input
            name="search"
            defaultValue={searchParams?.get("q") ?? ""}
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

        <div className="flex gap-1">
          <Select
            value={searchParams.get("status") ?? ""}
            onValueChange={(value) => {
              if (value)
                router.push(
                  pathName + "?" + createQueryString("status", value)
                );
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value={PaymentStatus.completed}>Completed</SelectItem>
              <SelectItem value={PaymentStatus.created}>Created</SelectItem>
              <SelectItem value={PaymentStatus.failed}>Failed</SelectItem>
            </SelectContent>
          </Select>

          {/* {JSON.stringify(courseId)} */}

          <Select
            disabled={loadingCourses}
            value={
              searchParams.get("course") ?? searchParams.get("bundle") ?? ""
            }
            onValueChange={(value) => {
              if (value)
                router.push(
                  pathName + "?" + createQueryString("course", value)
                );
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Course" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem className="uppercase" value={"ALL30DC"}>
                ALL30DC
              </SelectItem>
              {courseId?.map((e: Record<string, string>, i: number) => (
                <SelectItem className="uppercase" key={i} value={e.courseId}>
                  {e.courseId}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={searchParams.get("page") ?? ""}
            onValueChange={(value) => {
              if (value)
                router.push(
                  pathName + "?" + createQueryString("page", String(value))
                );
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Page" />
            </SelectTrigger>
            <SelectContent position="popper" className="max-h-60">
              {Array.from({
                length: Math.ceil((data?.totalCount ?? 0) / 10),
              }).map((_, i) => (
                <SelectItem className="uppercase" key={i} value={String(i + 1)}>
                  {String(i + 1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant={"outline"}
            size={"sm"}
            className="max-sm:flex-1 gap-1"
          >
            <File className="h-4 w-4" /> Export
          </Button>
        </div>
        <Link href={pathName + clearQueryString()}>
          <Button className="hidden sm:block" variant={"destructive"}>
            Clear
          </Button>
        </Link>
      </div>
      <div className="flex justify-between">
        <Badge
          variant={"outline"}
          className="rounded w-fit border-none text-muted-foreground"
        >
          {data?.totalCount} Transactions
        </Badge>
        <Link href={pathName + clearQueryString()}>
          <Button className="sm:hidden block" variant={"destructive"}>
            Clear
          </Button>
        </Link>
      </div>
      <div className="border border-border rounded-md overflow-hidden">
        <Table className="bg-background">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Date & Time</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
              <TableHead className="w-[150px]">Course</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isPending ? (
              <TableFallback />
            ) : isError ? (
              <div>Error: {error?.message}</div>
            ) : data?.data?.length ? (
              data?.data.map(
                (
                  {
                    email,
                    basePrice,
                    courseId,
                    bundleId,
                    createdAt,
                    paymentStatus,
                  },
                  i
                ) => (
                  <TableRow key={i}>
                    <TableCell className="py-3 text-xs font-medium">
                      {createdAt.toLocaleString()}
                    </TableCell>
                    <TableCell className="py-3">
                      <Badge
                        variant={"secondary"}
                        className="rounded gap-1 items-center"
                      >
                        {paymentStatus === "completed" ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : (
                          <ArrowUpCircle className="h-3 w-3" />
                        )}
                        {paymentStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-3">
                      {courseId || bundleId}
                    </TableCell>
                    <TableCell className="py-3">{email}</TableCell>
                    <TableCell className="py-3 text-right">
                      ₹{(basePrice / 100).toFixed(2)}
                    </TableCell>
                  </TableRow>
                )
              )
            ) : (
              <TableRow className="py-3 text-xs font-medium">
                <TableCell>No Data</TableCell>
                <TableCell>No Data</TableCell>
                <TableCell>No Data</TableCell>
                <TableCell>No Data</TableCell>
                <TableCell className="text-right">No Data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* {!isPending && !!data?.totalCount && (
        <TablePagination
          createQueryString={createQueryString}
          total={data?.totalCount ?? 0}
        />
      )} */}
    </section>
  );
}

function TableFallback() {
  return Array.from({ length: 10 }).map((e, i) => (
    <TableRow key={i}>
      <TableCell className="py-3 font-medium">
        <Skeleton className="w-7 h-3 rounded-md" />
      </TableCell>
      <TableCell className="py-3">
        <Skeleton className="w-7 h-3 rounded-md" />
      </TableCell>
      <TableCell className="py-3">
        <Skeleton className="w-7 h-3 rounded-md" />
      </TableCell>
      <TableCell className="py-3">
        <Skeleton className="w-7 h-3 rounded-md" />
      </TableCell>
      <TableCell className="py-3 text-right">
        <Skeleton className="w-7 h-3 rounded-md" />
      </TableCell>
    </TableRow>
  ));
}
