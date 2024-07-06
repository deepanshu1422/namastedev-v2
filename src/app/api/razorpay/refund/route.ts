// import { NextResponse } from "next/server";
// import { headers } from "next/headers";
// import { verifySignatureRazorpay } from "@/utils/paymentUtils";
// import { connect } from "@/DBconfig/mongoose";
// import Payments from "@/models/Payments";
// import Users from "@/models/Users";
// import RedisClient from "@/DBconfig/redis";
// import { removeCourseFromUser,removeBundleFromUser } from "@/services/user.service";

// connect();


// //check if it is a vaild signature 
// // if order is paid then update order status and provide access to the course 
// // if order is failed 

// export async function POST(req) {
//     const headersList = headers();
    
//     //check if event already processed
//     const razorpay_header_event = headersList.get("x-razorpay-event-id");
//     let isProcessed = await RedisClient.get(razorpay_header_event);
//     console.log(isProcessed);
//     if(isProcessed !== null){
//         return NextResponse.json({ message: "event already processed" }, { status: 200 });
//     }
//     await RedisClient.set(razorpay_header_event,"processed");

//     const signature = headersList.get("x-razorpay-signature");
//     const body = await req.json();
//     let { event, payload,contains } = body;

//     let isValidSignature = verifySignatureRazorpay(body, signature,"password");
//     if(!isValidSignature){
//         return NextResponse.json({ message: "invalid signature" }, { status: 200 });
//     }
   

//     if(event === "refund.created"){  
//         //update the order status 
//         await Payments.findOneAndUpdate({razorpayOrderId:payload.payment.entity.order_id},{paymentStatus:"init_refund"},{new:true});
//         return NextResponse.json({ message: "refund initiated" });
//     }
//     if(event === "refund.processed"){  
//         //update the order status 
//         let payment = await Payments.findOneAndUpdate({razorpayOrderId:payload.payment.entity.order_id},{paymentStatus:"refunded"},{new:true});
        
//         if(payment.purchaseType === "course"){
//             await removeCourseFromUser(payment.userId,payment.courseId);
//             return NextResponse.json({ message: "refund successfull",error:false }, { status: 200});
//         }
//         if(payment.purchaseType === "bundle"){
//             await removeBundleFromUser(payment.userId,payment.bundleId);
//             return NextResponse.json({ message: "refund successfull",error:false }, { status: 200});
//         }
//     }
//     if(event === "refund.failed"){  
//         //update the order status 
//         return NextResponse.json({ message: "refund falied",error:false }, { status: 200});
//     }

//   return NextResponse.json({ message: "somethig went wrong",error:true }, { status: 200 });
// }