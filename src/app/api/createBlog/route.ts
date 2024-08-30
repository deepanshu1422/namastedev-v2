import prisma from "@/util/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        if (req.headers.get("30dc") !== "new") throw { status: 403, message: "Unauthorized Header" }

        const data = await req.json();

        const post = await prisma.blog.createMany({
            data
        });

        return NextResponse.json(post, { status: 201 });
    } catch (err: any) {
        // console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}
