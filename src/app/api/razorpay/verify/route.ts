// import { NextResponse } from "next/server";
// import { headers } from "next/headers";
// import { verifySignatureRazorpay } from "@/utils/paymentUtils";
// import { connect } from "@/DBconfig/mongoose";
// import Payments from "@/models/Payments";
// import Users from "@/models/Users";
// import RedisClient from "@/DBconfig/redis";
// import { isPaymentProcessed,setPaymentProcessed } from "@/utils/paymentUtils";
// import { addCourseToUser,updateContactOfUser,addBundleToUser} from "@/services/user.service";
// connect();


// //check if it is a vaild signature 
// // if order is paid then update order status and provide access to the course 
// // if order is failed 

// export async function POST(req) {
//     const headersList = headers();
    
//     //check if event already processed
//     const razorpay_header_event = headersList.get("x-razorpay-event-id");
//     let isProcessed = isPaymentProcessed(razorpay_header_event);
//     if(isProcessed !== null){
//         return NextResponse.json({ message: "event already processed" }, { status: 200 });
//     }
//     setPaymentProcessed(razorpay_header_event);

//     const signature = headersList.get("x-razorpay-signature");
//     const body = await req.json();
//     let { event, payload,contains } = body;

//     let isValidSignature = verifySignatureRazorpay(body, signature,"password");
//     if(!isValidSignature){
//         return NextResponse.json({ message: "invalid signature" }, { status: 200 });
//     }

//     if(event === "order.paid"){
//         //update the order status 
//         let payment = await Payments.findOneAndUpdate({razorpayOrderId:payload.order.entity.id},{paymentStatus:"completed"},{new:true});
//         if(!payment){
//             return NextResponse.json({ message: "order not found" }, { status: 404 });
//         }

//          //provide access to the course  
//         if(payment.purchaseType === "course"){
//             await addCourseToUser(payment.userId,payment.courseId);
//             await updateContactOfUser(payment.userId,payload.payment.entity.contact);
//             return NextResponse.json({ message: "success purchased course",error:false});
//         }
//          //provide access to the bundle 
//         if(payment.purchaseType === "bundle"){
//             addBundleToUser(payment.userId,payment.bundleId);
//             // await Users.findOneAndUpdate(
//             //     {_id:payment.userId},
//             //     { $addToSet: { purchasedCourseId: { $each: newCourses } } }, 
//             //     {new:true}
//             // );
//             return NextResponse.json({ message: "success purchased bundle",error:false});
//         }
        
//          //provide access to the course      
//     }

//     if(event === "payment.failed"){
//         //update the order status 
//         await Payments.findOneAndUpdate({razorpayOrderId:payload.payment.entity.order_id},{paymentStatus:"failed"},{new:true});
//         return NextResponse.json({ message: "order failed",error:false });
//     }

//   return NextResponse.json({ message: "something went wrong",error:true }, { status: 200 });
// }