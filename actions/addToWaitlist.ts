"use server";

import prisma from "@/util/prismaClient";

export default async function addToWaitlist({
  email,
  contact,
  name,
  state,
  country,
  gradeYear,
  university,
}: {
  email: string;
  contact: string;
  name: string;
  state: string;
  country: string;
  university: string;
  gradeYear: string;
}) {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        contact,
        country,
        state,
        university,
        gradeYear,
      },
    });

    return { error: false, user };
  } catch (error: any) {
    console.log(error);

    if (error.code === "P2002" || "P2010") {
      error.message = "Email already in the Waitlist. We'll contact you soon.";
    }

    return {
      error: true,
      message: error?.message ?? JSON.stringify(error),
    };
  }
}
