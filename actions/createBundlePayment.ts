'use server'

import { auth } from "@/auth";
import { createSignedHeader } from "@/util/userUtils";

export default async function createBundlePayment({ bundleId, email, name, contact, state, couponCode }: { bundleId: string, email: string; name: string; contact: string; state: string; couponCode?: string | null }) {
    // console.log(bundleId, email);

    const user = await auth()

    let body: Record<string, string> = {};

    if (user?.user?.email) {
        body = {
            email,
            bundleId,
            gateway: "razorpay",
            countryCode: "IN",
        }
    } else {
        body = {
            name,
            bundleId,
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

    const paymentUrl = user?.user?.email ? "https://sea-lion-app-nap5i.ondigitalocean.app/api/v1/purchase/bundle" : "https://sea-lion-app-nap5i.ondigitalocean.app/api/v1/unregistered/purchase/bundle"

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