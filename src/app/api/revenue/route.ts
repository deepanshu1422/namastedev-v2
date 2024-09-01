// import prisma from "@/util/prismaClient";
// import { format, parseISO, subDays } from "date-fns";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const startOfToday = new Date();
//   startOfToday.setHours(0, 0, 0, 0); // Set to the start of the day

//   const endOfToday = new Date();
//   endOfToday.setHours(23, 59, 59, 999); // Set to the end of the day

//   const payments = await prisma.payments.groupBy({
//     by: ["createdAt", "paymentStatus", "basePrice"],
//     where: {
//       createdAt: {
//         gte: startOfToday,
//         lte: endOfToday,
//       },
//     },
//   });

//   const groupedPayments = payments.reduce((acc, curr) => {
//     const day = format(parseISO(curr.createdAt.toISOString()), "HH:mm");
//     if (!acc[day]) {
//       acc[day] = [];
//     }
//     acc[day].push(curr);
//     return acc;
//   }, {} as Record<string, typeof payments>);

//   let resultPayments: Record<
//     string,
//     { success: number; initiated: number; revenue: number }
//   > = {};

//   Object.keys(groupedPayments).forEach((day) => {
//     resultPayments[day] = {
//       success: groupedPayments[day].filter(
//         (e) => e.paymentStatus === "completed"
//       ).length,
//       initiated: groupedPayments[day].filter(
//         (e) => e.paymentStatus === "created"
//       ).length,
//       revenue: groupedPayments[day].reduce(
//         (acc, cur) => (acc += cur.basePrice),
//         0
//       ),
//     };
//   });

//   function roundToHour(time: string) {
//     const [hour, minute] = time.split(":").map(Number);
//     return minute >= 30 ? `${(hour + 1) % 24}:00` : `${hour}:00`;
//   }

//   const hourlyPayments: Record<
//     string,
//     { success: number; initiated: number; revenue: number }
//   > = {};

//   for (const [time, { initiated, success, revenue }] of Object.entries(
//     resultPayments
//   )) {
//     const roundedHour = roundToHour(time);

//     if (hourlyPayments[roundedHour]) {
//       hourlyPayments[roundedHour] = {
//         initiated: hourlyPayments[roundedHour].initiated + initiated,
//         success: hourlyPayments[roundedHour].success + success,
//         revenue: hourlyPayments[roundedHour].revenue + revenue,
//       };
//     } else {
//       hourlyPayments[roundedHour] = { initiated, success, revenue };
//     }
//   }
//   const sortedArray = Object.entries(hourlyPayments)
//     .map(([time, data]) => ({ time, ...data })) // Embed time into each object
//     .sort((a, b) => {
//       // Sort by time in ascending order
//       const [aHour, aMinute] = a.time.split(":").map(Number);
//       const [bHour, bMinute] = b.time.split(":").map(Number);
//       return aHour - bHour || aMinute - bMinute;
//     });

//   return NextResponse.json({ sortedArray });
// }
