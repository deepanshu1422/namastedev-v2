import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const geo = req.geo

        return NextResponse.json(geo, { status: 201 });
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}
