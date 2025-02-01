"use server";
import { revalidatePath } from "next/cache";

export default async function revalidatePages() {
  revalidatePath("/(users)/dashboard/[slug]", "page");
  revalidatePath("/(users)/courses/[slug]", "page");
  revalidatePath("/(users)/bundle/[slug]", "page");
  revalidatePath("/(main)/courses", "page");
  revalidatePath("/(guide)/guides", "page");
  revalidatePath("/checkout/courses/[itemId]", "page");
  revalidatePath("/payments/courses/[itemId]", "page");
}

export async function revalidateMentors() {
  revalidatePath("/(main)/mentors", "page");
  revalidatePath("/(main)/mentors/[slug]", "page");
}

export async function revalidateProjects() {
  revalidatePath("/(guide)/projects", "page");
  revalidatePath("/(guide)/projects/[slug]", "page");
  revalidatePath("/(guide)/projects/[slug]/lesson/[lessonId]", "page");
}
