'use server'

import { revalidateTag } from "next/cache"

export default async function refreshCourses() {
    revalidateTag('courses') // Update cached posts
}