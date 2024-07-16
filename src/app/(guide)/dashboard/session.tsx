'use client'

import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Session() {

    const { data, update } = useSession()

    return (
        <div className='flex flex-col gap-2'>
            <Button onClick={() => update({ courses: ["ADSASA"] })} className='bg-prime/70 hover:bg-prime/90 text-white w-fit my-3'>Seesion Update</Button>
            <p className='break-all'>
                {JSON.stringify(data)}
            </p>
        </div>
    )
}
