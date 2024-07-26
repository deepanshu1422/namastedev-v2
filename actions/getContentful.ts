'use server'

import { getContentfulData } from "@/lib/cotentful"

export default async function getContentful() {

    const data = await getContentfulData(`query {
        courseCollection{
        items{
            courseId
            }
        }
    }`)

    return data.data.courseCollection.items as Record<string, string>[]
}