"use server";

import prisma from "@/util/prismaClient";
import { addMinutes, format, parseISO, subDays, subHours } from "date-fns";

const ISTTime = () => {
  const currentTime = new Date();

  const startTime = subHours(currentTime.setHours(0, 0, 0, 0), 5.5);
  const endTime = subHours(currentTime.setHours(23, 59, 59, 999), 5.5);

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
  const { endTime, startTime } = ISTTime();

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
  const { startTime, endTime } = ISTTime();

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
  const { endTime, startTime } = ISTTime();

  const payments = await prisma.payments.groupBy({
    by: ["createdAt", "paymentStatus", "basePrice"],
    where: {
      createdAt: {
        gte: subDays(startTime, 1),
        lte: endTime,
      },
    },
  });

  const groupedPayments = payments.reduce((acc, curr) => {
    const day = format(parseISO(curr.createdAt.toISOString()), "HH:mm");
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(curr);
    return acc;
  }, {} as Record<string, typeof payments>);

  let resultPayments: Record<
    string,
    { success: number; initiated: number; revenue: number }
  > = {};

  Object.keys(groupedPayments).forEach((day) => {
    resultPayments[day] = {
      success: groupedPayments[day].filter(
        (e) => e.paymentStatus === "completed"
      ).length,
      initiated: groupedPayments[day].length,
      revenue: groupedPayments[day]
        .filter((e) => e.paymentStatus === "completed")
        .reduce((acc, cur) => (acc += cur.basePrice / 100), 0),
    };
  });

  function roundToHour(time: string) {
    const [hour, minute] = time.split(":").map(Number);
    return `${hour}:00`;
  }

  const hourlyPayments: Record<
    string,
    { success: number; initiated: number; revenue: number }
  > = {};

  for (const [time, { initiated, success, revenue }] of Object.entries(
    resultPayments
  )) {
    const roundedHour = roundToHour(time);

    if (hourlyPayments[roundedHour]) {
      hourlyPayments[roundedHour] = {
        initiated: hourlyPayments[roundedHour].initiated + initiated,
        success: hourlyPayments[roundedHour].success + success,
        revenue: hourlyPayments[roundedHour].revenue + revenue,
      };
    } else {
      hourlyPayments[roundedHour] = { initiated, success, revenue };
    }
  }
  const sortedArray = Object.entries(hourlyPayments)
    .map(([time, data]) => ({ time, ...data }))
    .sort((a, b) => {
      const [aHour, aMinute] = a.time.split(":").map(Number);
      const [bHour, bMinute] = b.time.split(":").map(Number);
      return aHour - bHour || aMinute - bMinute;
    });

  return { sortedArray };
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
  const { endTime, startTime } = ISTTime();

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
