"use client";

import { useRouter } from 'next/navigation';

const URL_MAPPING: any = { "Personal Details": "/personal-detail", "Education": "/education", "Experience": "/experience", "Projects": "/projects", "Achievements": "/achievement", "Tech stack": "/skills" }

export function CurrentPosition({ value, url }: { value: string, url: string }) {
    const { push, back } = useRouter();
    const pages = ["Personal Details", "Education", "Experience", "Projects", "Achievements", "Tech stack"]

    const handler = (data: string) => {
        push(`/resume/${URL_MAPPING[data]}`)
    }

    return (
        <>
            <div className='flex flex-row text-[0.5rem] sm:text-sm  md:text-2xl justify-center font-bold space-x-4 my-3'>
                {
                    pages.map((val, index) => (
                        <p onClick={() => { handler(val) }} className={`${val.toLowerCase() == value?.toLowerCase() ? "text-white" : "text-gray-500"} hover:bg-prime/30 hover:text-accent-foreground cursor-pointer`} key={index}>{val}</p>
                    ))
                }
            </div>
        </>
    )
}
