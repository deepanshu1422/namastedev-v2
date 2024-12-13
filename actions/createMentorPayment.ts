"use server";

import { auth } from "@/auth";
import prisma from "@/util/prismaClient";
import { createSignedHeader } from "@/util/userUtils";

export default async function createMentorPayments({
  mentorId,
  email,
  name,
  contact,
  state,
  couponCode,
  guides,
}: {
  mentorId: string;
  email: string;
  name: string;
  contact: string;
  state: string;
  couponCode?: string | null;
  guides: string[];
}) {
  // console.log(mentorId, email);

  const session = await auth();

  let body: Record<string, string | string[]> = {};

  // @ts-ignore
  const pass = !!session?.user?.phone && !!session?.user?.state;

  // Checks user's detail when logged
  if (!pass && !!session?.user?.email)
    await prisma.user.update({
      where: { email },
      data: {
        name,
        contact,
        state,
      },
    });

  if (!session?.user?.email) {
    let user = await prisma.user.findFirst({ where: { email } });
    if (!!user?.email && !(user?.contact && user?.state)) {
      await prisma.user.update({
        where: { email },
        data: {
          name,
          contact,
          state,
        },
      });
    }
  }

  if (pass) {
    body = {
      email: session.user?.email ?? email,
      mentorId,
      gateway: "razorpay",
      countryCode: "IN",
      guides,
    };
  } else {
    body = {
      name,
      mentorId,
      contact,
      state,
      email,
      country: "India",
      gateway: "razorpay",
      countryCode: "IN",
      guides,
    };
  }

//   if (couponCode) body.couponCode = couponCode;

  const signature = createSignedHeader(body, "password");

  const headers = {
    "Content-Type": "application/json",
    "x-30dc-signature": signature,
  };

  const base_url = process.env.BACKEND_PAYMENT_API_ENDPOINT;

  const paymentUrl = pass
    ? base_url + "/api/v1/purchase/mentor"
    : base_url + "/api/v1/unregistered/purchase/mentor";

  // console.log(paymentUrl);

  const data: Response = await (
    await fetch(paymentUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
  ).json();

  return data;
}

type Response = {
  error: boolean;
  message?: string;
  data: {
    amount: number;
    currency: string;
    name: string;
    orderId: string;
  };
};
