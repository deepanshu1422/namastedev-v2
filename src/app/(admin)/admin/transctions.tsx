import prisma from '@/util/prismaClient'

import {
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

const getPayments = async () => {

    const payments = await prisma.payments.findMany({
        take: 10,
        select: {
            amount: true,
            createdAt: true,
            email: true,
            user: {
                select: {
                    name: true
                }
            }
        },
         orderBy: {
            updatedAt: "desc" 
         }
    })

    return payments
}

export default async function Transaction() {

    const payments = await getPayments()

    return (
        <TableBody>
            {payments.map(({ email, createdAt, amount, user: { name } }, i) => (<TableRow key={i}>
                <TableCell>
                    <div className="font-medium">{name}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                        {email}
                    </div>
                </TableCell>
                <TableCell className="hidden xl:table-column">
                    Sale
                </TableCell>
                <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                        Approved
                    </Badge>
                </TableCell>
                <TableCell className="max-lg:hidden">
                    {createdAt.toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">₹ {(amount / 100).toFixed(2)}</TableCell>
            </TableRow>))}
        </TableBody>

    )
}

export function TransactionFallback() {
    return (

        <TableBody>
            {Array.from({ length: 6 }).map((e, i) => (<TableRow key={i}>
                <TableCell>
                    <Skeleton className='w-10 h-4' />
                    <Skeleton className='hidden md:inline w-14 h-4' />
                </TableCell>
                <TableCell className="xl:table-column">
                    Sale
                </TableCell>
                <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                        Approved
                    </Badge>
                </TableCell>
                <TableCell className="max-lg:hidden">
                    <Skeleton className='w-10 h-4' />
                </TableCell>
                <TableCell className="text-right"><Skeleton className='w-10 h-4' /></TableCell>
            </TableRow>))}
        </TableBody>)
}