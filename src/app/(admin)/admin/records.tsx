import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/util/prismaClient";
import { DollarSign } from "lucide-react"

async function getPaymentSums() {
    const now = new Date();

    const past7Days = new Date(now);
    past7Days.setDate(past7Days.getDate() - 7);

    const past30Days = new Date(now);
    past30Days.setDate(past30Days.getDate() - 30);

    const past90Days = new Date(now);
    past90Days.setDate(past90Days.getDate() - 90);
    
    const pastYear = new Date(now);
    pastYear.setDate(pastYear.getDate() - 360);

    const sumLast7Days = await prisma.payments.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            createdAt: {
                gte: past7Days,
            },
        },
    });

    const sumLast30Days = await prisma.payments.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            createdAt: {
                gte: past30Days,
            },
        },
    });

    const sumLast90Days = await prisma.payments.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            createdAt: {
                gte: past90Days,
            },
        },
    });
    
    const sumLastYear = await prisma.payments.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            createdAt: {
                gte: pastYear,
            },
        },
    });

    return {
        sum_last_7_days: sumLast7Days._sum.amount || 0,
        sum_last_30_days: sumLast30Days._sum.amount || 0,
        sum_last_90_days: sumLast90Days._sum.amount || 0,
        sum_last_year: sumLastYear._sum.amount || 0
    };
}


export default async function Records() {

    const payments = await getPaymentSums()

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 pt-16">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        7 Days Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₹{(payments.sum_last_7_days / 100).toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                    </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        30 Days Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₹{(payments.sum_last_30_days / 100).toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                        +180.1% from last month
                    </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">90 Days Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₹{(payments.sum_last_90_days / 100).toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                        +19% from last month
                    </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">1 Year Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₹{(payments.sum_last_year / 100).toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                        +201 since last hour
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export function RecordsFallback() {
    return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 pt-16">
        {Array.from({ length: 4 }).map((e, i) => (<Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-5 w-2/4" />
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-1/2" />
            </CardContent>
        </Card>))}
        {/* <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Subscriptions
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold"></div>
                <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                </p>
            </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold"></div>
                <p className="text-xs text-muted-foreground">
                    +19% from last month
                </p>
            </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                    +201 since last hour
                </p>
            </CardContent>
        </Card> */}
    </div>
}