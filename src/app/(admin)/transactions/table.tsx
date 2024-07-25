'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ArrowUpCircle, CheckCircle, File, PlusCircleIcon, Search } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { UseQueryResult } from "@tanstack/react-query"
import { $Enums } from "@prisma/client"
import { QureyResponse } from "./page"

// const invoices = [
//     {
//         invoice: "INV001",
//         paymentStatus: "Paid",
//         totalAmount: "$250.00",
//         email: "rakshitraj640@gmail.com",
//         paymentMethod: "Credit Card",
//     },
//     {
//         invoice: "INV002",
//         paymentStatus: "Pending",
//         totalAmount: "$150.00",
//         email: "rakshitraj640@gmail.com",
//         paymentMethod: "PayPal",
//     },
//     {
//         invoice: "INV003",
//         paymentStatus: "Unpaid",
//         totalAmount: "$350.00",
//         email: "rakshitraj640@gmail.com",
//         paymentMethod: "Bank Transfer",
//     },
//     {
//         invoice: "INV004",
//         paymentStatus: "Paid",
//         totalAmount: "$450.00",
//         email: "rakshitraj640@gmail.com",
//         paymentMethod: "Credit Card",
//     },
//     {
//         invoice: "INV005",
//         paymentStatus: "Paid",
//         totalAmount: "$550.00",
//         email: "rakshitraj640@gmail.com",
//         paymentMethod: "PayPal",
//     },
//     {
//         invoice: "INV006",
//         paymentStatus: "Pending",
//         totalAmount: "$200.00",
//         email: "rakshitraj640@gmail.com",
//         paymentMethod: "Bank Transfer",
//     },
//     {
//         invoice: "INV007",
//         paymentStatus: "Unpaid",
//         totalAmount: "$300.00",
//         email: "rakshitraj640@gmail.com",
//         paymentMethod: "Credit Card",
//     },
// ]

export default function TableDemo({ data, isError, isPending, error }: QureyResponse) {

    return (
        <section className="flex flex-col gap-2 sm:gap-4">
            <div className="flex max-sm:flex-col gap-2 justify-between">
                <form className="flex gap-1 flex-1">
                    <Input className="sm:max-w-80 w-full bg-background text-sm h-9" placeholder="Filter by Email or OrderId" />
                    <Button type="submit" variant={"outline"} size={"sm"} className="h-9 gap-1" ><Search className="h-4 w-4" /><span className="max-sm:hidden">Search</span></Button>
                </form>
                <div className="flex gap-1">
                    <Button variant={"outline"} size={'sm'} className="max-sm:flex-1 gap-1" ><PlusCircleIcon className="h-4 w-4" /> Status</Button>
                    <Button variant={"outline"} size={'sm'} className="max-sm:flex-1 gap-1" ><PlusCircleIcon className="h-4 w-4" /> Courses</Button>
                    <Button variant={"outline"} size={'sm'} className="max-sm:flex-1 gap-1" ><File className="h-4 w-4" /> Export</Button>
                </div>
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
                        ) : data?.map(({ email, basePrice, courseId, bundleId, createdAt, paymentStatus }, i) => (
                            <TableRow key={i}>
                                <TableCell className="py-3 text-xs font-medium">{createdAt.toLocaleString()}</TableCell>
                                <TableCell className="py-3"><Badge variant={"secondary"} className="rounded gap-1 items-center">{paymentStatus === "completed" ? <CheckCircle className="h-3 w-3" /> : <ArrowUpCircle className="h-3 w-3" />}{paymentStatus}</Badge></TableCell>
                                <TableCell className="py-3">{courseId || bundleId}</TableCell>
                                <TableCell className="py-3">{email}</TableCell>
                                <TableCell className="py-3 text-right">₹{(basePrice / 100).toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter> */}
                </Table>
            </div>
        </section>
    )
}

function TableFallback() {
    return Array.from({ length: 5 }).map((e, i) => (<TableRow key={i}>
        <TableCell className="py-3 font-medium"><Skeleton className="w-7 h-3 rounded-md" /></TableCell>
        <TableCell className="py-3"><Skeleton className="w-7 h-3 rounded-md" /></TableCell>
        <TableCell className="py-3"><Skeleton className="w-7 h-3 rounded-md" /></TableCell>
        <TableCell className="py-3"><Skeleton className="w-7 h-3 rounded-md" /></TableCell>
        <TableCell className="py-3 text-right"><Skeleton className="w-7 h-3 rounded-md" /></TableCell>
    </TableRow>))
}