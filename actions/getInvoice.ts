"use server";

import { auth } from "@/auth";
import prisma from "@/util/prismaClient";

export default async function getInvoice() {
  const session = await auth();

  if (!session?.user?.email) return [];

  const payments = await prisma.payments.findMany({
    where: {
      email: session.user.email,
      paymentStatus: "completed"
    },
    orderBy:{
      createdAt: "desc"
    },
    select: {
      paymentId: true,
      Invoices: {
        select: {
          item: true,
          createdAt: true,
        },
      },
    },
  });

  return payments;
}
