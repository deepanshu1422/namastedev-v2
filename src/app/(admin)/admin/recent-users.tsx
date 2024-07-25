import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import prisma from '@/util/prismaClient'

async function getUsers() {
    const users = await prisma.user.findMany({
        take: 5,
        select: {
            image: true,
            name: true,
            email: true,
            Payments: {
                select: {
                    basePrice: true,
                },
                where: {
                    paymentStatus: "completed"
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return users
}

export default async function RecentUsers() {

    const recentUsers = await getUsers()

    return (
        <CardContent className="grid gap-8">
            {recentUsers.map(({ name, image, email, Payments }, i) => {
                const totalPayment = Payments.reduce((acc, cur) => acc += cur.basePrice, 0)
                return (<div key={i} className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={image ?? ""} alt="Avatar" />
                        <AvatarFallback>{name ? name[0] : "O"}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            {name ?? "No Name"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {email}
                        </p>
                    </div>
                    <div className="ml-auto font-medium">₹{(totalPayment / 100).toFixed(2)}</div>
                </div>)
            })}
        </CardContent>
    )
}

export function UsersFallback() {
    return (<CardContent className="grid gap-8">
        {Array.from({ length: 5 }).map((e, i) => (<div key={i} className="flex items-center gap-4 w-full">
            <Skeleton className='h-14 w-14 rounded-full' />
            <div className="grid gap-1">
                <Skeleton className='h-5 w-8' />
                <Skeleton className='h-5 w-12' />
            </div>
            <Skeleton className='h-5 w-8' />
        </div>))}
    </CardContent>)
}