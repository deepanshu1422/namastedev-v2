"use server";
import { revalidatePath } from "next/cache";

export default async function revalidatePages() {
  revalidatePath("/(users)/courses/[slug]", "page");
  revalidatePath("/(users)/bundle/[slug]", "page");
  revalidatePath("/(main)/courses", "page");
  revalidatePath("/(guide)/guides", "page");
}
