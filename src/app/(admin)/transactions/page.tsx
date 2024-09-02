"use client";

import React, { useCallback } from "react";
import DataTable from "./table";
import DatePicker from "./date-picker";
import TablePagination from "./pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import getPaymets from "../../../../actions/admin";
import { $Enums } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Records from "./records";
import { TxnChart } from "./txn-chart";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DefaultTabsTrigger, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type QureyResponse = Pick<
  UseQueryResult<
    {
      data: {
        email: string;
        basePrice: number;
        paymentStatus: $Enums.PaymentStatus;
        courseId: string | null;
        bundleId: string | null;
        createdAt: Date;
      }[];
      totalCount: number;
    },
    Error
  >,
  "data" | "isPending" | "isError" | "error"
> & {
  createQueryString: (name: string, value: string) => string;
  clearQueryString: (name?: string) => string;
};

export default function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  const days = searchParams.get("days");
  const status = searchParams.get("status");
  const course = searchParams.get("course");
  const page = searchParams.get("page");

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      // if (name !== "page") params.delete("page");

      if (!value || value === "") params.delete(name);
      else params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const clearQueryString = useCallback(
    (name?: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (name) params.delete(name);
      else {
        params.delete("q");
        params.delete("status");
        params.delete("course");
        params.delete("days");
        params.delete("page");
      }

      return params.toString();
    },
    [searchParams]
  );

  const { isPending, isError, error, data } = useQuery({
    queryKey: [
      {
        q,
        days: days ?? "1",
        status,
        course,
        page: page ?? "1",
        type: "payment",
      },
    ],
    queryFn: async ({ queryKey }) => {
      return await getPaymets(queryKey[0]);
    },
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div className="flex flex-col sm:gap-4 gap-2">
      <title>Transactions | 30dayscoding</title>
      <section className="flex max-sm:flex-col justify-between gap-4 pt-16">
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-muted-foreground text-2xl">#</span>
            Transactions
          </h2>
          <p className="text-muted-foreground ml-6">
            Here&apos;s a list of all transactions!
          </p>
        </div>
        <div className="flex gap-2 max-sm:w-full">
          <DatePicker createQueryString={createQueryString} />
        </div>
      </section>

      <Records />

      <Tabs defaultValue="chart">
        <TabsList className="grid w-full grid-cols-2 bg-card max-w-96 mx-auto shadow-lg drop-shadow-[0px_0px_10px_#07928150] hover:drop-shadow-[0px_0px_15px_#07928170] transition-all">
          <DefaultTabsTrigger value="chart">Chart</DefaultTabsTrigger>
          <DefaultTabsTrigger value="table">Table</DefaultTabsTrigger>
        </TabsList>
        <TabsContent value="chart">
          <TxnChart />
        </TabsContent>
        <TabsContent value="table">
          <DataTable
            clearQueryString={clearQueryString}
            createQueryString={createQueryString}
            isPending={isPending}
            isError={isError}
            error={error}
            data={data}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
