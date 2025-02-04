import prisma from "@/util/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { contact } = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        contact,
      },
    });

    if (!user)
      throw { status: 404, message: "No such user with this phone number" };

    return NextResponse.json({ email: user.email }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: err?.message ?? "Internal Error" },
      { status: err?.status ?? 500 }
    );
  }
}
