import { NextResponse } from "next/server";

export async function GET() {
  const serverDateUTC = new Date(Date.now());
  const localString = serverDateUTC.toLocaleString();

  const serverDateIST = new Date(
    serverDateUTC.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const localStringIST = serverDateIST.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const localStringUTC = serverDateUTC.toLocaleString("en-IN", {
    timeZone: "UTC",
  });

//   console.log("Server Date UTC: ", localStringUTC);
//   console.log("Server Date in IST: ", serverDateIST.toISOString());
//   console.log("Local String IST: ", localStringIST);

  return NextResponse.json({
    serverDateUTC,
    localString,
    serverDateIST: serverDateIST.toISOString(),
    localStringIST,
    localStringUTC,

  });
}
