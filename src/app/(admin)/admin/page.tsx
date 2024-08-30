import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Metadata } from "next";
import { Suspense } from "react";
import Transaction, { TransactionFallback } from "./transctions";
import RecentUsers, { UsersFallback } from "./recent-users";
import { TransactionChart } from "./chart";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Admin | 30dayscoding",
  description: "This is a about page for our admin.",
};

export default function Dashboard() {
  return (
    <>
      <TransactionChart />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
            <Button
              asChild
              size="sm"
              className="bg-prime/70 text-white hover:bg-prime ml-auto gap-1"
            >
              <Link href="/transactions">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden xl:table-column">Type</TableHead>
                  <TableHead className="hidden xl:table-column">
                    Status
                  </TableHead>
                  <TableHead className="max-lg:">Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <Suspense fallback={<TransactionFallback />}>
                <Transaction />
              </Suspense>
            </Table>
          </CardContent>
        </Card>

        <Card className="sticky top-20 h-fit">
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <Suspense fallback={<UsersFallback />}>
            <RecentUsers />
          </Suspense>
        </Card>
      </div>
    </>
  );
}
