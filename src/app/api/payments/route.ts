import { addMinutes, format, parseISO, subDays, subHours } from "date-fns";
import { NextResponse } from "next/server";

const ISTTime = () => {
  const currentTime = new Date();

  const startTime = subHours(currentTime.setHours(0, 0, 0, 0), 5.5);
  const endTime = subHours(currentTime.setHours(23, 59, 59, 999), 5.5);

  return { startTime, endTime };
};

export async function GET() {
  // const serverDateUTC = new Date(Date.now());
  // const localString = serverDateUTC.toLocaleString();

  // const offsetIST = 5.5 * 60 * 60 * 1000;
  // const serverDateIST = new Date(serverDateUTC.getTime() + offsetIST);

  // const localStringIST = addMinutes(serverDateIST, 3)
  //   .toISOString()
  //   .replace("T", " ")
  //   .slice(0, 19);

  const { endTime, startTime } = ISTTime();
  return NextResponse.json({
    endTime,
    startTime,
    //   serverDateUTC,
    //   localString,
    //   serverDateIST: serverDateIST.toISOString(),
    //   localStringIST,
  });
}
