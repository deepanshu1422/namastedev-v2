// 'use client'

// import { Button } from '@/components/ui/button'
// import { User } from '@prisma/client'
// import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query'
// import React from 'react'

// export default function Todos() {
//     const [page, setPage] = React.useState(0)

//     const fetchProjects = (page = 0): Promise<{ users: Pick<User, "name" | "email">[] }> =>
//         fetch('/api/users?limit=' + page).then((res) => res.json())

//     const queryClient = useQueryClient()

//     const { isPending, isError, error, data, isFetching, isPlaceholderData } =
//         useQuery({
//             queryKey: ['users', page],
//             queryFn: () => fetchProjects(page),
//             placeholderData: keepPreviousData,
//             staleTime: 1000 * 60 * 10
//         })

//     return (
//         <div className='mt-16'>
//             {isPending ? (
//                 <div>Loading...</div>
//             ) : isError ? (
//                 <div>Error: {error.message}</div>
//             ) : (
//                 <div>
//                     {data.users.map(({ email, name }, i) => (
//                         <p key={i}>{name}</p>
//                     ))}
//                 </div>
//             )}
//             <div className='flex justify-between'>
//                 <Button
//                     variant={"outline"}
//                     onClick={() => setPage((old) => Math.max(old - 1, 0))}
//                     disabled={page === 0}
//                 >
//                     Previous Page
//                 </Button>
//                 <span>Current Page: {page + 1}</span>
//                 <Button
//                     variant={"outline"}
//                     onClick={() => {
//                         if (!isPlaceholderData) {
//                             setPage((old) => old + 1)
//                         }
//                     }}
//                     // Disable the Next Page button until we know a next page is available
//                     disabled={isPlaceholderData}
//                 >
//                     Next Page
//                 </Button>
//             </div>
//             {isFetching ? <span> Loading...</span> : null}
//         </div>
//     )
// }
