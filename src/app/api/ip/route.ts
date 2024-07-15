import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const ip = req.ip
        const countryCode = await fetch(`https://api.iplocation.net/?cmd=ip-country&ip=${ip}`)
        const json = await countryCode.json()

        if (json.country_code2 === "IN") return NextResponse.redirect(new URL('https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view'))

        return NextResponse.redirect(new URL('https://hotshotpanda.myshopify.com/cart/46100616151210:1?channel=buy_button'))

    } catch (err: any) {
        // console.log(err);
        return NextResponse.json(err.message || err || "Error", { status: err.status || 500 });
    }
}
