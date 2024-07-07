import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";
import { auth } from '@clerk/nextjs/server';
import prisma from "@/util/prismaClient";
import { fetchBundle, fetchCourse } from "@/services/contentful";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

type PurchaseType = 'course' | 'bundle';

interface PricingInfo {
  amount: number;
  currencyCode: string;
}

async function getPricingInfo(id: string, type: PurchaseType): Promise<PricingInfo | null> {
  const { data } = type === 'course' ? await fetchCourse(id, "IN") : await fetchBundle(id, "IN");
  const items = type === 'course' ? data?.courseCollection?.items : data?.bundleCollection?.items;
  return items?.[0]?.pricingsCollection?.items?.[0] ?? null;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const courseId = searchParams.get("courseId");
  const bundleId = searchParams.get("bundleId");
  
  const { userId } = auth();
  
  if (!courseId && !bundleId) {
    return NextResponse.json({ message: "Missing course or bundle ID", error: true }, { status: 400 });
  }
  
  if (userId) {
    const user = await prisma.clerkUser.findUnique({
      where: { userId },
      select: {
        purchasedCourseId: true,
        userId: true,
        email: true
      }
    });
    
    if (!user) return NextResponse.json({ message: "User doesn't exists", error: true }, { status: 401 });
    
    const purchaseType: PurchaseType = courseId ? 'course' : 'bundle';
    const itemId = courseId || bundleId;
    
    if (purchaseType === 'course' && user.purchasedCourseId.includes(itemId!)) {
      return NextResponse.json({ message: "Course already purchased", error: true }, { status: 400 });
    }
    
    const pricingInfo = await getPricingInfo(itemId!, purchaseType);
    if (!pricingInfo) {
      return NextResponse.json({ message: "Pricing information not found", error: true }, { status: 404 });
    }
    
    const { amount, currencyCode } = pricingInfo;
    const amountInPaisa = amount * 100;
    
    const order = await razorpay.orders.create({
      amount: amountInPaisa.toString(),
      currency: currencyCode,
      receipt: uuid(),
    });
    
    const payment = await prisma.new_payments.create({
      data: {
        userId: user.userId,
        email: user.email,
        paymentGateway: "razorpay",
        purchaseType,
        [purchaseType === 'course' ? 'courseId' : 'bundleId']: itemId,
        razorpayOrderId: order.id,
        amount: amountInPaisa,
        currency: currencyCode,
      }
    });
    
    return NextResponse.json({ message: "success", order, error: false }, { status: 200 });
    
  }
  
  if (!userId) {
    const body = await request.json();

    

  }
  
}