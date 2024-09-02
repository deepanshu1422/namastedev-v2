import { NextResponse } from "next/server";

export async function GET() {
  const serverDateUTC = new Date(Date.now());
  const localString = serverDateUTC.toLocaleString();

  // Convert UTC to IST
  const offsetIST = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
  const serverDateIST = new Date(serverDateUTC.getTime() + offsetIST);

  // Get the local string in IST
  const localStringIST = serverDateIST
    .toISOString()
    .replace("T", " ")
    .slice(0, 19);

  return NextResponse.json({
    serverDateUTC,
    localString,
    serverDateIST: serverDateIST.toISOString(),
    localStringIST,
  });
}
