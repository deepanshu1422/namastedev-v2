import { courses, templates } from '@/util/constants';
import { HelpCircle } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function COurses({ state }: {
    state: string;
}) {

    return (<>
        <section className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[85rem] gap-6 mx-auto max-phone:px-6 phone:px-10 max-tab:py-5 tab:pb-14'>
            {state ? courses.filter((e) => e.title.toLowerCase().includes(state.toLowerCase())).map(({ imgSrc, description, title, link, category }, i) => (
                <Link key={i} href={link} className='rounded-xl bg-second/40 flex flex-col group transition-all duration-200 hover:bg-second/60 hover:shadow-xl shadow-black overflow-hidden'>
                <Image className='rounded-t-lg shadow-lg' src={imgSrc} alt={`30DC ${title} Course`} height={512} width={512} />
                <div className='flex flex-col items-start gap-2 p-4'>
                    <span className='text-xl font-bold'>{title}</span>
                    <p className='text-xs text-white/80 leading-relaxed'>{description}</p>
                </div>
                <div className='flex flex-wrap gap-1.5 p-4 mt-auto'>
                    {category.map((e, i) => (<button key={i} className="rounded hover:bg-second bg-second/70 hover:text-white px-2 py-1 text-white/60 transition-all duration-300 sm:text-sm text-xs capitalize">#{e}</button>))}
                </div>
            </Link>
            )) : courses.map(({ imgSrc, description, title, link, category }, i) => (
                <Link key={i} href={link} className='rounded-xl bg-second/40 flex flex-col group transition-all duration-200 hover:bg-second/60 hover:shadow-xl shadow-black overflow-hidden'>
                    <Image className='rounded-t-lg shadow-lg' src={imgSrc} alt={`30DC ${title} Course`} height={512} width={512} />
                    <div className='flex flex-col items-start gap-2 p-4'>
                        <span className='text-xl font-bold'>{title}</span>
                        <p className='text-xs text-white/80 leading-relaxed'>{description}</p>
                    </div>
                    <div className='flex flex-wrap gap-1.5 p-4 mt-auto'>
                        {category.map((e, i) => (<button key={i} className="rounded hover:bg-second bg-second/70 hover:text-white px-2 py-1 text-white/60 transition-all duration-300 sm:text-sm text-xs capitalize">#{e}</button>))}
                    </div>
                </Link>
            ))}
        </section>
        {state && !templates.filter((e) => e.title.toLowerCase().includes(state.toLowerCase())).length && <div className='mx-auto max-w-[90rem] w-full text-center py-10 pb-40'>
            <span className='font-semibold rounded-full p-2 px-4 border-4 border-double w-fit mx-auto items-center border-prime shadow-2xl text-white/60 flex gap-1'> <HelpCircle className='h-5 w-5' /> No Such Course Found</span>
        </div>}
    </>
    )
}
