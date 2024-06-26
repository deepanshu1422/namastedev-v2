import { CreditCard } from 'lucide-react'
import { headers } from 'next/headers'
import { NextRequest } from 'next/server'
import Link from 'next/link'

export default async function Render() {
    // const countryCode = headers().get('x-vercel-ip-country')

    const ipVercel = headers().get("x-forwarded-for")
    const countryCode = await fetch(`https://api.iplocation.net/?cmd=ip-country&ip=${ipVercel}`)
    const json = await countryCode.json()

    if (json.country_code2 === "IN") return <div className='flex flex-col gap-2'>
        {json.country_code2}
        <Link href={"https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"} target='_blank' className='bg-prime rounded-full px-4 text-center py-3 max-w-3xl mx-auto w-full text-3xl sm:text-4xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase'><CreditCard className="h-10 w-10" />Join Now</Link></div>

    if (json.country_code2 !== "IN") return (
        <div className='flex flex-col gap-2'>
            {json.country_code2}
            <Link href={"https://hotshotpanda.myshopify.com/cart/46100616151210:1?channel=buy_button"} target='_blank' className='bg-prime rounded-full px-4 text-center py-3 max-w-3xl mx-auto w-full text-3xl sm:text-4xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase'><CreditCard className="h-10 w-10" />Join Now</Link>
        </div>
    )

}