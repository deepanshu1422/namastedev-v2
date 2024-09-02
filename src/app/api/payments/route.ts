import { add, addMinutes } from "date-fns";
import { NextResponse } from "next/server";

export async function GET() {
  const serverDateUTC = new Date(Date.now());
  const localString = serverDateUTC.toLocaleString();

  const offsetIST = 5.5 * 60 * 60 * 1000;
  const serverDateIST = new Date(serverDateUTC.getTime() + offsetIST);

  const localStringIST = addMinutes(serverDateIST, 3)
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
