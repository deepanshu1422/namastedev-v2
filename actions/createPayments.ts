'use server'

import { createSignedHeader } from "@/util/userUtils";

export default async function createPayments({ courseId, email }: { courseId: string, email: string }) {
    // console.log(courseId, email);

    const body = {
        courseId: courseId,
        gateway: "razorpay",
        email: email,
        couponCode: "dhan25",
        countryCode: "IN"
    }

    const signature = createSignedHeader(body, "password")


    const headers = {
        "Content-Type": "application/json",
        "x-30dc-signature": signature

    }

    const data: Response = await (await fetch("https://sea-lion-app-nap5i.ondigitalocean.app/api/v1/purchase/course", {
        method: "POST",
        headers,
        body: JSON.stringify(body)
    })).json()

    console.log(data);
    return data
}

type Response = {
    error: boolean,
    message?: string,
    data: {
        amount: number,
        currency: string,
        name: string,
        orderId: string
    }
}