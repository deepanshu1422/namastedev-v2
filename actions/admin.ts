'use server'

import prisma from "@/util/prismaClient"
import { subDays } from "date-fns";

export default async function getPaymets(queryParams: {
    q: string | null;
    days: string | null;
    status: string | null;
    course: string | null;
    page: string | null;
}) {

    let where: Record<string, any> = {}
    let skip: number = 0

    if (queryParams.page) skip = (parseInt(queryParams.page ?? "0") - 1) * 10

    const days = parseInt(queryParams?.days ?? "7")

    where.createdAt = {
        lte: new Date(),
        gte: subDays(new Date(), days ? days : 7),
    }

    if (!!queryParams.status) where.paymentStatus = queryParams.status

    if (!!queryParams.course) where.courseId = queryParams.course

    if (!!queryParams.q) where.OR = [
        {
            email: {
                contains: queryParams.q
            }
        },
        {
            razorpayOrderId: {
                contains: queryParams.q
            }
        }
    ]

    // console.log(where);

    const totalCount = await prisma.payments.count({
        where
    })

    // console.log({ totalCount });


    const data = await prisma.payments.findMany({
        select: {
            createdAt: true,
            basePrice: true,
            courseId: true,
            bundleId: true,
            paymentStatus: true,
            email: true
        },
        where,
        take: 10,
        skip,
        orderBy: {
            createdAt: "desc"
        }
    })

    return { data, totalCount }

}