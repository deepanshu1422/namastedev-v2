'use server'

import { auth } from "@/auth";
import { createSignedHeader } from "@/util/userUtils";

export default async function createPayments({ courseId, email, name, contact, state }: { courseId: string, email: string; name: string; contact: string; state: string; }) {
    // console.log(courseId, email);

    const user = await auth()

    let body = {};

    body = user?.user?.email && {
        email,
        courseId,
        gateway: "razorpay",
        couponCode: "dhan25",
        countryCode: "IN"
    } || {}

    body = !user?.user?.email ? {
        name,
        courseId,
        contact,
        state,
        email,
        country: "India",
        gateway: "razorpay",
        couponCode: "dhan25",
        countryCode: "IN"
    } : body

    const signature = createSignedHeader(body, "password")

    const headers = {
        "Content-Type": "application/json",
        "x-30dc-signature": signature

    }

    const paymentUrl = user?.user?.email ? "https://sea-lion-app-nap5i.ondigitalocean.app/api/v1/purchase/course" : "https://sea-lion-app-nap5i.ondigitalocean.app/api/v1/unregistered/purchase/course"

    console.log(paymentUrl);

    const data: Response = await (await fetch(paymentUrl, {
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