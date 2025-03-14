"use server";

import { auth } from "@/auth";
import prisma from "@/util/prismaClient";
import { createSignedHeader } from "@/util/userUtils";

export default async function mentorshipPayment({
  mentorshipId,
  email,
  name,
  contact,
  state,
  gateway,
  country,
  couponCode,
}: {
  mentorshipId: string;
  email: string;
  name: string;
  contact: string;
  state: string;
  gateway: "razorpay" | "lemonSqueezy";
  country: string;
  couponCode?: string | null;
}) {
  // console.log(courseId, email);

  const session = await auth();

  let body: Record<string, string> = {};

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
    if (!!user?.email && !(user?.contact && user?.state && user?.country)) {
      await prisma.user.update({
        where: { email },
        data: {
          name,
          contact,
          state,
          country,
        },
      });
    }
  }

  if (pass) {
    body = {
      email,
      mentorshipId,
      gateway,
    };
  } else {
    body = {
      name,
      email,
      mentorshipId,
      contact,
      state,
      country,
      gateway,
    };
  }

  console.log("Payload: ", body);

  const signature = createSignedHeader(body, "password");

  const headers = {
    "Content-Type": "application/json",
    "x-30dc-signature": signature,
  };

  const base_url = process.env.BACKEND_PAYMENT_API_ENDPOINT;

  const paymentUrl = pass
    ? base_url + "/api/v1/purchase/mentorship"
    : base_url + "/api/v1/unregistered/purchase/mentorship";

  // console.log(paymentUrl);

  const data: Response = await (
    await fetch(paymentUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
  ).json();

  console.log(data);
  return data;
}

type Response = {
  error:
    | {
        code: string;
        message: string;
        details: null;
      }
    | boolean;
  message?: string;
  data: {
    amount: number;
    totalAmount: number;
    currency: string;
    name: string;
    discount: number;
    orderId?: string;
    url?: string;
  };
};
