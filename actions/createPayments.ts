'use server'

import { auth } from "@/auth";
import { createSignedHeader } from "@/util/userUtils";

export default async function createPayments({ courseId, email, name, contact, state, couponCode }: { courseId: string, email: string; name: string; contact: string; state: string; couponCode?: string | null }) {
    // console.log(courseId, email);

    const user = await auth()

    let body: Record<string, string> = {};

    if (user?.user?.email) {
        body = {
            email,
            courseId,
            gateway: "razorpay",
            countryCode: "IN",
        }
    } else {
        body = {
            name,
            courseId,
            contact,
            state,
            email,
            country: "India",
            gateway: "razorpay",
            countryCode: "IN",
        }
    }

    if (couponCode) body.couponCode = couponCode

    const signature = createSignedHeader(body, "password")

    const headers = {
        "Content-Type": "application/json",
        "x-30dc-signature": signature

    }

    const paymentUrl = user?.user?.email ? "https://sea-lion-app-nap5i.ondigitalocean.app/api/v1/purchase/course" : "https://sea-lion-app-nap5i.ondigitalocean.app/api/v1/unregistered/purchase/course"

    // console.log(paymentUrl);

    const data: Response = await (await fetch(paymentUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(body)
    })).json()

    // console.log(data);
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