"use server";

import prisma from "@/util/prismaClient";
import {
  addHours,
  addMinutes,
  format,
  parseISO,
  subDays,
  subHours,
} from "date-fns";

const ISTTime = async () => {
  const IST = await (
    await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  ).json();
  const currentTime = new Date(IST.datetime);

  const startTime = new Date(currentTime.setHours(0, 0, 0, 0));
  const endTime = new Date(currentTime.setHours(23, 59, 59, 999));

  return { startTime, endTime };
};

export default async function getPaymets(queryParams: {
  q: string | null;
  days: string | null;
  status: string | null;
  course: string | null;
  page: string | null;
}) {
  let where: Record<string, any> = {};
  let skip: number = 0;

  if (queryParams.page) skip = (parseInt(queryParams.page ?? "0") - 1) * 10;

  const days = parseInt(queryParams?.days ?? "1") - 1;
  const { endTime, startTime } = await ISTTime();

  where.createdAt = {
    gte: subDays(startTime, days ? days : 0),
    lte: endTime,
  };

  if (!!queryParams.status) where.paymentStatus = queryParams.status;

  if (!!queryParams.course) {
    if (queryParams.course === "ALL30DC") where.bundleId = queryParams.course;
    else where.courseId = queryParams.course;
  }

  if (!!queryParams.q)
    where.OR = [
      {
        email: {
          contains: queryParams.q,
        },
      },
      {
        razorpayOrderId: {
          contains: queryParams.q,
        },
      },
    ];

  // console.log(where);

  const totalCount = await prisma.payments.count({
    where,
  });

  // console.log({ totalCount });

  const data = await prisma.payments.findMany({
    select: {
      createdAt: true,
      basePrice: true,
      courseId: true,
      bundleId: true,
      paymentStatus: true,
      email: true,
    },
    where,
    take: 10,
    skip,
    orderBy: {
      createdAt: "desc",
    },
  });

  return { data, totalCount };
}

export async function getRevenue() {
  const { startTime, endTime } = await ISTTime();

  const revenueToday = await prisma.payments.aggregate({
    _sum: {
      basePrice: true,
    },
    _count: true,
    where: {
      paymentStatus: "completed",
      createdAt: {
        gte: startTime,
        lte: endTime,
      },
    },
  });

  const revenueTotal = await prisma.payments.aggregate({
    _sum: {
      basePrice: true,
    },
    _count: true,
    where: {
      paymentStatus: "completed",
    },
  });

  const userToday = await prisma.user.aggregate({
    _count: true,
    where: {
      createdAt: {
        gte: startTime,
        lte: endTime,
      },
    },
  });

  const userTotal = await prisma.user.aggregate({
    _count: true,
  });

  return { revenueToday, revenueTotal, userToday, userTotal };
}

export async function getHourlyRevenue() {
  const { endTime, startTime } = await await ISTTime();

  const payments = await prisma.payments.groupBy({
    by: ["createdAt", "paymentStatus", "basePrice"],
    where: {
      createdAt: {
        gte: startTime,
        lte: endTime,
      },
    },
  });

  return { payments };
}

export async function getTransactions() {
  const users = await prisma.user.groupBy({
    by: ["createdAt"],
  });

  const payments = await prisma.payments.groupBy({
    by: ["createdAt"],
  });

  const groupedUsers = users.reduce((acc, curr) => {
    const day = format(parseISO(curr.createdAt.toISOString()), "yyyy-MM-dd");
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(curr);
    return acc;
  }, {} as Record<string, typeof users>);

  const groupedPayments = payments.reduce((acc, curr) => {
    const day = format(parseISO(curr.createdAt.toISOString()), "yyyy-MM-dd");
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(curr);
    return acc;
  }, {} as Record<string, typeof payments>);

  let resultUsers: Record<string, number> = {};

  Object.keys(groupedUsers).forEach((day) => {
    resultUsers[day] = groupedUsers[day].length;
  });

  let resultPayments: Record<string, number> = {};

  Object.keys(groupedPayments).forEach((day) => {
    resultPayments[day] = groupedPayments[day].length;
  });

  return { resultPayments, resultUsers };
}

export async function exportPaymets(queryParams: {
  q: string | null;
  days: string | null;
  status: string | null;
  course: string | null;
  page: string | null;
}) {
  let where: Record<string, any> = {};

  const days = parseInt(queryParams?.days ?? "1") - 1;
  const { endTime, startTime } = await ISTTime();

  where.createdAt = {
    lte: endTime,
    gte: subDays(startTime, days ? days : 0),
  };

  if (!!queryParams.status) where.paymentStatus = queryParams.status;

  if (!!queryParams.course) {
    if (queryParams.course === "ALL30DC") where.bundleId = queryParams.course;
    else where.courseId = queryParams.course;
  }

  if (!!queryParams.q)
    where.OR = [
      {
        email: {
          contains: queryParams.q,
        },
      },
      {
        razorpayOrderId: {
          contains: queryParams.q,
        },
      },
    ];

  // console.log({ totalCount });

  const data = await prisma.payments.findMany({
    select: {
      createdAt: true,
      basePrice: true,
      courseId: true,
      bundleId: true,
      paymentStatus: true,
      email: true,
    },
    where,
    orderBy: {
      createdAt: "desc",
    },
  });

  return { data };
}

export async function getUsers(queryParams: { email: string }) {
  let user = await prisma.user.findMany({
    where: {
      email: {
        contains: queryParams.email,
      },
    },
    select: {
      bundleId: true,
      courseId: true,
      email: true,
      name: true,
      _count: true,
      image: true,
      mentorshipId: true,
    },
    take: 10,
  });

  return user;
}
