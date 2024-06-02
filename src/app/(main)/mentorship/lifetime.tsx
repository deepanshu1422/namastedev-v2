import { mentorship } from '@/util/globals'
import { Check, CreditCard, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Lifetime() {

    const benefits = [
        <p key={1}>Join any of the <em><strong>live events</strong></em> and interact with the experts.</p>,
        <p key={2}>Access all past and future <em><strong>recordings</strong></em> of any live events you missed.</p>,
        <p key={3}>Get feedback and support on your projects in our <em><strong>Campfire</strong></em> chat.</p>,
        <p key={4}>Let other members find you in the <em><strong>community directory</strong></em>.</p>,
        <p key={5}><em><strong>Pay once</strong></em>, member forever. 100% satisfication or your money back. No questions asked.</p>,
    ]
    return (
        <div className='m-auto flex flex-col px-5 lg:px-20 py-10 lg:pt-20 max-w-[75rem]'>
            <span className="flex items-center justify-center gap-4 relative">
                <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
                <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
                    Lifetime Mentorship
                </h2>
                <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
            </span>
            <section className='flex mx-auto flex-wrap w-full items-center justify-center md:divide-x-2 divide-white py-2'>
                <span className='px-1 md:px-4'>25,000+ Members</span>
                <span className='md:hidden text-prime font-bold'>&</span>
                <span className='px-1 md:px-4'>213 joined this month</span>
                <span className='px-1 md:px-4 flex gap-2'>
                    <div className='flex gap-2 items-center'>
                        <Star className='h-5 w-5 fill-prime stroke-prime' />
                        <Star className='h-5 w-5 fill-prime stroke-prime' />
                        <Star className='h-5 w-5 fill-prime stroke-prime' />
                        <Star className='h-5 w-5 fill-prime stroke-prime' />
                        <Star className='h-5 w-5 fill-prime stroke-prime' />
                    </div>4.93 <Link href={"/testimonials"} className='text-prime font-bold underline-offset-2 underline'>(200+ reviews)</Link></span>
            </section>

            <div className='flex flex-col gap-2 py-4 mx-auto'>
                {benefits.map((e, i) => (<span key={i} className='flex gap-2'>
                    <Check className='shrink-0 w-5 h-5 stroke-prime' />
                    {e}
                </span>))}
            </div>

            <h3 className='font-jakarta font-extrabold text-4xl sm:text-5xl mx-auto sm:pt-6 text-center'>₹{mentorship.price}/<span className='line-through italic text-muted-foreground'>₹{mentorship.ogPrice}</span> once.Member forever.</h3>
            <p className='m-auto py-2 pb-6 text-center text-sm max-w-3xl text-foreground/90'>And if you&apos;re not 100% satisfied with the purchase, or it&apos;s not what you were expecting, just reply to the email receipt within 30 days, and you&apos;ll get a full refund. No questions asked.</p>
            
            <Link href={"https://pages.razorpay.com/pl_NRwJhRPeyZEekG/view"} target='_blank' className='bg-prime rounded-full px-4 text-center py-3 max-w-6xl w-full text-3xl sm:text-4xl font-extrabold flex gap-3 justify-center hover:opacity-80 transition-all duration-200'><CreditCard className="h-10 w-10" />Join Now</Link>
        </div>
    )
}
