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

    // Transform the grouped data into an array with counts
    let resultUsers = Object.keys(groupedUsers).map(day => ({
        date: day,
        users: groupedUsers[day].length,
    }));

    let resultPayments = Object.keys(groupedPayments).map(day => ({
        date: day,
        transaction: groupedPayments[day].length,
    }));

    return NextResponse.json({ groupedUsers, groupedPayments });
}