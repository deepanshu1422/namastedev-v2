import { NextResponse } from "next/server";

export async function GET() {
  const serverDate = new Date(Date.now());
  const localString = serverDate.toLocaleString();

  // Convert UTC to IST
  const offset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
  const serverDateIST = new Date(serverDate.getTime() + offset);

  // Format to local string (IST)
  const localStringIST = serverDateIST.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  console.log("Server Date in IST: ", localStringIST);

  return NextResponse.json({ serverDate, localString, serverDateIST, localStringIST });
}
