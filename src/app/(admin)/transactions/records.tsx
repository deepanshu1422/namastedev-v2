import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQueries, useQuery } from "@tanstack/react-query";
import { IndianRupee, User2 } from "lucide-react";
import { getRevenue } from "../../../../actions/admin";
import { Skeleton } from "@/components/ui/skeleton";

export default function Records() {
  const { data, isPending } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => await getRevenue(),
  });

  return isPending ? (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Today&apos;s Revenue
          </CardTitle>
          <IndianRupee className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-3 w-full mt-1" />
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Today&apos;s Users
          </CardTitle>
          <User2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-3 w-full mt-1" />
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <IndianRupee className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-3 w-full mt-1" />
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <User2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-3 w-full mt-1" />
        </CardContent>
      </Card>
    </div>
  ) : (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Today&apos;s Revenue
          </CardTitle>
          <IndianRupee className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {!!data?.revenueToday._sum.basePrice && (
            <div className="text-2xl font-bold">
              ₹{(data?.revenueToday._sum.basePrice / 100).toFixed(2)}
            </div>
          )}
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Today&apos;s Users
          </CardTitle>
          <User2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {!!data?.userToday._count && (
            <div className="text-2xl font-bold">+{data?.userToday._count}</div>
          )}
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <IndianRupee className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {!!data?.revenueTotal._sum.basePrice && (
            <div className="text-2xl font-bold">
              ₹{(data?.revenueTotal._sum.basePrice / 100).toFixed(2)}
            </div>
          )}
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total User</CardTitle>
          <User2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {!!data?.userTotal._count && (
            <div className="text-2xl font-bold">{data?.userTotal._count}</div>
          )}
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
  );
}





