import { headers } from 'next/headers'
import { verifySignatureSvix } from "@/util/payment"
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/util/prismaClient';

export async function POST(req: NextRequest) {

    const headerPayload = headers();
    const body = await req.json()

    let { data, error, } = verifySignatureSvix(JSON.stringify(body), headerPayload);
    if (error) {
        return new Response('invalid signature', { status: 200 })
    }

    // console.log(data);

    if (data?.eventType === "user.created") {
        try {

            await prisma.clerkUser.create({
                data: {
                    userId: data.id,
                    email: body?.data?.email_addresses[0]?.email_address,
                    name: body?.data?.first_name,
                    image: body?.data?.profile_image_url,
                },
            })

            return new NextResponse('New User Created', { status: 200 })

        } catch (error: any) {
            return new NextResponse(error.message || "Internal Server Error", { status: error.status || 500 })

        }
    }

    if (data?.eventType === "user.deleted") {
        try {
            let user = await prisma.clerkUser.delete({
                where: {
                    userId: data.id
                }
            });

            if (!user) throw { message: "User Not Found", status: 404 }

            await prisma.deletedUser.create({
                data: {
                    userId: user.userId,
                    email: user.email,
                    name: user.name,
                    purchasedCourseId: user.purchasedCourseId,
                    completedLessons: user.completedLessons,
                }
            })

            return new NextResponse('User Deleted Successfully', { status: 200 })
        } catch (error: any) {
            return new NextResponse(error.message || "Internal Server Error", { status: error.status || 500 })

        }
    }

    // Do something with the payload
    // For this guide, you simply log the payload to the console

    console.log(`Webhook with and ID of ${data?.id} and type of ${data?.eventType}`)
    console.log('Webhook body:', body)

    return new NextResponse('Somehting', { status: 200 })
}