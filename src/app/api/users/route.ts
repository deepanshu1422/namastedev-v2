import prisma from "@/util/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams

    const limit = searchParams.get('limit') ?? "0"

    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        },
        select: {
            name: true,
            email: true
        },
        where: {
            createdAt: {
                lt: new Date("2024-07-25"),
                gte: new Date("2024-07-19"),
            }
        },
        // take: (+limit + 1) * 5
    })

    return NextResponse.json({ users }, { status: 200 })
}