import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const ip = req.ip

        console.log(ip)

        const countryCode = await fetch(`https://api.iplocation.net/?cmd=ip-country&ip=${ip}`)

        return NextResponse.json(countryCode, { status: 201 });

    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message || err || "Error", { status: err.status || 500 });
    }
}
