import { NextResponse } from "next/server";

export async function GET() {
    
    const serverDate = new Date(Date.now())
    const localString = serverDate.toLocaleString()
    
    return NextResponse.json({ serverDate, localString });
}