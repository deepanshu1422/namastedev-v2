import prisma from "@/util/prismaClient";
import { job } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        if (req.headers.get("30dc") !== "new") throw { status: 403, message: "Unauthorized Header" }

        const data: Promise<job[]> = await req.json();

        const filteredData = (await data).map(({ jobId, category, company, imageUrl, link, location, postedDate, title, tags }) => ({ jobId, category, company, imageUrl, link, location, postedDate, title, tags }))

        const post = await prisma.job.createMany({
            data: filteredData
        });

        return NextResponse.json("post", { status: 201 });
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}
