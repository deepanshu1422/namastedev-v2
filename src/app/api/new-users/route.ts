import prisma from "@/util/prismaClient";
import { format, parseISO } from "date-fns";
import { NextResponse } from "next/server";

export async function GET() {
    const payments = await prisma.user.groupBy({
        by: ['createdAt'],
    });

    const groupedPayments = payments.reduce((acc, curr) => {
        const day = format(parseISO(curr.createdAt.toISOString()), 'yyyy-MM-dd');
        if (!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(curr);
        return acc;
    }, {} as Record<string, typeof payments>);

    // Transform the grouped data into an array with counts
    const result = Object.keys(groupedPayments).map(day => ({
        day,
        count: groupedPayments[day].length,
    }));

    return NextResponse.json(result);
}