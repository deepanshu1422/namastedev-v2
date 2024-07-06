import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";
import { auth, clerkClient } from '@clerk/nextjs/server';

import prisma from "@/util/prismaClient";
import { fetchBundle, fetchCourse } from "@/services/contentful";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const courseId = searchParams.get("courseId"); // in paisa
  const bundleId = searchParams.get("bundleId"); // in paisa
  const { userId } = auth();
  let amount;
  let currency;

  if (!courseId && !bundleId) {
    return NextResponse.json({ message: "qsp missing", error: true }, { status: 200 });
  }
  if (!userId) {
    return NextResponse.json({ message: "user not logged in", error: true }, { status: 200 });
  }

  const user = await prisma.clerkUser.findFirst({ where: { userId } });

  console.log(user);

  if (!user) {
    return NextResponse.json({ message: "user not found", userId, error: true }, { status: 200 });
  }

  let paymentStruct: any = {
    userId: user.userId,
    email: user.email,
    paymentGateway: "razorpay",
    purchaseType: courseId ? "course" : "bundle",
  }

  if (courseId) {
    const isCoursePurchased = user.purchasedCourseId.find((id) => id == courseId);

    if (isCoursePurchased) {
      return NextResponse.json({ message: "course already purchased", error: true }, { status: 200 });
    }

    const { data } = await fetchCourse(courseId, "IN");
    amount = data?.courseCollection?.items[0]?.pricingsCollection?.items[0]?.amount;
    currency = data?.courseCollection?.items[0]?.pricingsCollection?.items[0]?.currencyCode;

    if (!amount || !currency) {
      return NextResponse.json({ message: "something went wrong", error: true }, { status: 200 });
    }
    paymentStruct.courseId = courseId;
  }
  else if (bundleId) {
    const { data } = await fetchBundle(bundleId, "IN");
    amount = data?.bundleCollection?.items[0]?.pricingsCollection?.items[0]?.amount;
    currency = data?.bundleCollection?.items[0]?.pricingsCollection?.items[0]?.currencyCode;
    paymentStruct.bundleId = bundleId;

    if (!amount || !currency) {
      return NextResponse.json({ message: "something went wrong", error: true }, { status: 200 });
    }
  }

  amount = amount * 100; // in paisa (convert to rupees)

  const options = {
    amount: amount.toString(),
    currency: currency,
    receipt: uuid(),
  };

  const order = await instance.orders.create(options);

  paymentStruct.razorpayOrderId = order.id;
  paymentStruct.amount = amount;
  paymentStruct.currency = currency;

  const payment = await prisma.new_payments.create({
    data: paymentStruct
  });

  // //   const order = await instance.orders.create(options);

  return NextResponse.json({ message: "success", order, error: false }, { status: 200 });
  //   return NextResponse.json({ message: "success"});
}