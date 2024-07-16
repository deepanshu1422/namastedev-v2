import { auth } from '@/auth'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import prisma from '@/util/prismaClient'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Purchased() {

    const session = await auth()
    const courses = await prisma.user.findUnique({ where: { email: session?.user?.email ?? "" }, select: { courseId: true } })

    const query = `query { courseCollection(where: {courseId: \"${courses?.courseId}\"},limit:1){ items{ courseId, title, longDescription, courseImage{ description, url, width, height, }, } } }`

    const data = await (await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    })).json()

    const { data: { courseCollection: { items } } } = data

    return (items.length > 0 ? <div className='min-h-52 w-full grid grid-cols-3 gap-4'>
        {/* <p className='break-all'>{JSON.stringify(items)}</p> */}
        {items.map((e: any, i: number) => <CourseCard key={i} e={e} />)}
    </div> : <div className='min-h-60 w-full flex'><Badge className="text-white gap-1 bg-second/60 hover:bg-second/80 rounded m-auto text-base">No Purchased Courses</Badge></div>
    )
}

function CourseCard({ e }: { e: any }) {
    return (
        <Link href={`/dashboard/course/${e?.courseId}` || ""} className='flex flex-col gap-3 py-2 px-3 border border-prime/40 rounded-md bg-second/40 hover:bg-second/60 transition-all duration-300'>
            <div className='flex justify-between'>
                <Image src={"/logo.png"} alt={"30DC Logo"} height={40} width={40} />
                {/* <Image src={"/logo.png"} alt={"30DC Logo"} height={40} width={40} /> */}
            </div>
            <h3 className='font-semibold text-lg'>{e.title}</h3>
            <Badge className='text-white w-fit bg-prime/40 hover:bg-prime/60 rounded'>Progress</Badge>
            <Progress value={30} className='h-1 bg-bg' />
            <span className='text-xs text-muted-foreground pt-3'>Last Updated: {(new Date()).toLocaleDateString()}</span>
        </Link>
    )
}