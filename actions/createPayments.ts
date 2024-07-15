'use server'

import { headers } from "next/headers"

export default async function createPayments({ courseId, email }: { courseId: string, email: string }) {
    // console.log(courseId, email);
    
    const data: Response = await (await fetch("https://sea-lion-app-nap5i.ondigitalocean.app/api/v1/purchase/course", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "courseId": courseId,
            "gateway": "razorpay",
            "email": email,
            "couponCode": "dhan25",
            "countryCode": "IN"
        },)
    })).json()

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