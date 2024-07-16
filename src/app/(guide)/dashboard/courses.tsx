import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getCourses = async () => {
    const query = `query {
        courseCollection(limit:3){
           items{
                title,
                slug,
                    courseImage{
                        url,
                        width,
                        height,
                    }
                },
            }
        }`

    const fetchedData = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
        next: {
            revalidate: 3600,
        },
    })

    const data = await fetchedData.json()

    return data.data
}

export default async function Courses() {

    const data = await getCourses()

    await new Promise((res) => setTimeout(res, 3000))

    const { courseCollection: { items } } = data

    return (
        <section className='flex max-md:flex-col rounded-lg gap-2 overflow-hidden w-full py-2'>
            {items.map((e: any, i: number) => <Link href={`/courses/${e.slug}`} key={i} className='overflow-hidden group flex-1 relative min-h-16 md:h-48'>
                <Image alt={e?.title} fill className='object-cover opacity-45 group-hover:scale-105 transition-all duration-200' src={e?.courseImage?.url ?? ""} />
                <div className='relative h-full w-full bg-gradient-to-b from-50% from-second/40 to-transparent'>
                    <p className='font-semibold md:text-lg p-1 md:p-3 mt-auto'>{e.title}</p>
                </div>
            </Link>)}
        </section>
    )
}
