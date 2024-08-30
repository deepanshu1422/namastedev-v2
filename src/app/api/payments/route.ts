import prisma from "@/util/prismaClient";
import { format, parseISO } from "date-fns";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.groupBy({
        by: ['createdAt'],
    });

    const payments = await prisma.payments.groupBy({
        by: ["createdAt"]
    })

    const groupedUsers = users.reduce((acc, curr) => {
        const day = format(parseISO(curr.createdAt.toISOString()), 'yyyy-MM-dd');
        if (!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(curr);
        return acc;
    }, {} as Record<string, typeof users>);

    const groupedPayments = payments.reduce((acc, curr) => {
        const day = format(parseISO(curr.createdAt.toISOString()), 'yyyy-MM-dd');
        if (!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(curr);
        return acc;
    }, {} as Record<string, typeof payments>);

    let resultUsers: Record<string, number> = {}

    Object.keys(groupedUsers).forEach(day => {
        resultUsers[day] = groupedUsers[day].length
    });

    let resultPayments: Record<string, number> = {}

    Object.keys(groupedPayments).forEach(day => {
        resultPayments[day] = groupedPayments[day].length
    });

    return NextResponse.json({ resultUsers, resultPayments });
}