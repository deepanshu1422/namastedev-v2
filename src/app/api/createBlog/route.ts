import prisma from "@/util/prismaClient";
import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//     try {
//         const data = await req.json();

//         const post = await prisma.blog.createMany({
//             data
//         });

//         return NextResponse.json(post, { status: 201 });
//     } catch (err) {
//         console.log(err);
//         return NextResponse.json(err || "Database Error", { status: 500 });
//     }
// }