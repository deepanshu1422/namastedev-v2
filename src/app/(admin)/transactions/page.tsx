'use client'

import React, { useCallback } from 'react'
import DataTable from './table';
import DatePicker from './date-picker';
import TablePagination from './pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import getPaymets from '../../../../actions/admin';
import { $Enums } from '@prisma/client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// export const metadata: Metadata = {
//     metadataBase: new URL("https://30dayscoding.com"),
//     title: "Transactions | 30dayscoding",
//     description: "This is a about page for our total transactions.",
// };

export type QureyResponse = Pick<UseQueryResult<{
    email: string;
    basePrice: number;
    paymentStatus: $Enums.PaymentStatus;
    courseId: string | null;
    bundleId: string | null;
    createdAt: Date;
}[], Error>, "data" | "isPending" | "isError" | "error">

export default function Page() {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const { isPending, isError, error, data } =
        useQuery({
            queryKey: ['payments',],
            queryFn: async ({ queryKey }) => {
                return await getPaymets()
            },
            staleTime: 1000 * 60 * 10
        })

    return (
        <div className='flex flex-col gap-2'>
            <title>Transactions | 30dayscoding</title>
            <section className="flex max-sm:flex-col justify-between gap-4 pt-16">
                <div className='flex flex-col'>
                    <h2 className="text-3xl md:text-4xl font-semibold"><span className="text-muted-foreground text-2xl">#</span>Transactions</h2>
                    <p className='text-muted-foreground ml-6'>Here's a list of all transactions!</p>
                </div>
                <div className="flex gap-2 max-sm:w-full">
                    <DatePicker />
                </div>
                <Link
                    href={
                        // <pathname>?sort=desc
                        pathname + '?' + createQueryString('sort', 'desc')
                    }
                >
                    <Button className='bg-prime/70 hover:bg-prime text-white'>
                        DESC
                    </Button>
                </Link>
            </section>
            <DataTable isPending={isPending} isError={isError} error={error} data={data} />
            <TablePagination />
        </div>
    )
}
