import { NextResponse } from "next/server";
import revalidatePages from "../../../../actions/revalidate-pages";

export async function GET() {
  await revalidatePages();
  return NextResponse.json({ message: "Revalidated" });
}
