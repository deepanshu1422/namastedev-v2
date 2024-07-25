'use server'

import prisma from "@/util/prismaClient"

export default async function getPaymets() {

    const data = await prisma.payments.findMany({
        select: {
            createdAt: true,
            basePrice: true,
            courseId: true,
            bundleId: true,
            paymentStatus: true,
            email: true
        }
    })

    return data

}