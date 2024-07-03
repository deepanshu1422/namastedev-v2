// import { headers } from 'next/headers'
// import { verifySignatureSvix } from "@/util/payment"
// import { NextRequest } from 'next/server'

// export async function POST(req: NextRequest) {

//     const headerPayload = headers();
//     const body = await req.json()

//     let { data, error, } = verifySignatureSvix(JSON.stringify(body), headerPayload);
//     if (error) {
//         return new Response('invalid signature', { status: 200 })
//     }

//     if (data?.eventType === "user.created") {
//         try {
//             let user = await Users({
//                 userId: data.id,
//                 email: body?.data?.email_addresses[0]?.email_address,
//                 name: body?.data?.first_name,
//                 profileImageUrl: body?.data?.profile_image_url,
//             })
//             await user.save();
//             return new Response('user created successfully', { status: 200 })
//         } catch (error) {
//             if (error.name === 'ValidationError') {
//                 return new Response(error.name, { status: 200 })
//             } else if (error.code === 11000) {
//                 return new Response("duplicate entry prevented", { status: 200 })
//                 // Handle duplicate key error
//             } else {
//                 return new Response(error.name, { status: 200 })
//                 // Handle other errors
//             }

//         }
//     }

//     if (data.eventType === "user.deleted") {
//         try {
//             let user = await Users.findOneAndDelete({ userId: data.id });
//             if (!user) {
//                 return new Response('user not found', { status: 200 })
//             }
//             // console.log(user);
//             let del = await DeletedUsers({
//                 userId: user.userId,
//                 email: user.email,
//                 name: user.name,
//                 purchasedCourseId: user.purchasedCourseId,
//                 completedLessons: user.completedLessons,
//             })
//             await del.save();
//             console.log(del);
//             return new Response('user deleted successfully', { status: 200 })
//         } catch (error) {
//             if (error.name === 'ValidationError') {
//                 return new Response(error.name, { status: 200 })
//             } else if (error.code === 11000) {
//                 return new Response("duplicate entry prevented", { status: 200 })
//                 // Handle duplicate key error
//             } else {
//                 return new Response(error.name, { status: 200 })
//                 // Handle other errors
//             }
//         }
//     }




//     // Do something with the payload
//     // For this guide, you simply log the payload to the console

//     console.log(`Webhook with and ID of ${data.id} and type of ${data.eventType}`)
//     console.log('Webhook body:', body)

//     return new Response('somehting', { status: 200 })
// }