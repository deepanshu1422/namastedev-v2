"use client";

export function CurrentPosition({ value }: { value: string }) {
    const pages = ["Personal Details", "Education", "Experience", "Projects", "Achievements", "Tech stack"]
    return (
        <>
            <div className='flex flex-row text-[0.5rem] sm:text-sm  md:text-2xl justify-center font-bold space-x-4 my-3'>
                {
                    pages.map((val, index) => (
                        <p className={`${val.toLowerCase() == value?.toLowerCase() ? "text-white" : "text-gray-500"}`} key={index}>{val}</p>
                    ))
                }
            </div>
        </>
    )
}
