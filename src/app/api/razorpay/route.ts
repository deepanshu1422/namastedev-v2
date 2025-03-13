import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto";
import { MongoClient } from "mongodb";

// MongoDB connection string
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri || '');
const dbName = process.env.MONGODB_DB_NAME || 'razorpay_payments';

// Initialize Razorpay with your key_id and key_secret
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

// Course pricing information with course IDs
const coursePricing = {
  beginner: { 
    amount: 99900, 
    currency: "INR", 
    name: "Beginner Package",
    courseId: "67c8a985a2fc8675d8e821ba"
  },
  intermediate: { 
    amount: 199900, 
    currency: "INR", 
    name: "Intermediate Package",
    courseId: "67c8a9e153f717193c586641"
  },
  advanced: { 
    amount: 299900, 
    currency: "INR", 
    name: "Advanced Package",
    courseId: "652a1994e4b05a145bae5cd0"
  },
};

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(dbName);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

// API route to create a Razorpay order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { courseType, email, name, phone, state } = body;

    if (!courseType || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get course pricing details
    const course = coursePricing[courseType as keyof typeof coursePricing];
    if (!course) {
      return NextResponse.json(
        { error: "Invalid course type" },
        { status: 400 }
      );
    }

    // Create a Razorpay order
    const options = {
      amount: course.amount, // amount in smallest currency unit (paise for INR)
      currency: course.currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        courseType,
        courseId: course.courseId,
        email,
        name: name || "",
        phone: phone || "",
        state: state || ""
      },
    };

    const order = await razorpay.orders.create(options);
    
    // Generate a unique payment ID
    const paymentId = `rzp_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    // Store order details in MongoDB
    const db = await connectToDatabase();
    const ordersCollection = db.collection('orders');
    
    await ordersCollection.insertOne({
      orderId: order.id,
      paymentId,
      amount: order.amount,
      currency: order.currency,
      courseType,
      courseId: course.courseId,
      customerDetails: {
        email,
        name: name || "",
        phone: phone || "",
        state: state || ""
      },
      status: "created",
      createdAt: new Date(),
    });
   
    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}

// API route to verify Razorpay payment
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // Verify the payment signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Update payment status in MongoDB
    const db = await connectToDatabase();
    const ordersCollection = db.collection('orders');
    const paymentsCollection = db.collection('payments');
    
    // Get the order details
    const order = await ordersCollection.findOne({ orderId: razorpay_order_id });
    
    if (!order) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }
    
    // Update order status
    await ordersCollection.updateOne(
      { orderId: razorpay_order_id },
      { 
        $set: { 
          status: "paid",
          updatedAt: new Date()
        } 
      }
    );
    
    // Store payment details
    await paymentsCollection.insertOne({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
      amount: order.amount,
      currency: order.currency,
      courseType: order.courseType,
      courseId: order.courseId,
      customerDetails: order.customerDetails,
      status: "successful",
      createdAt: new Date(),
    });

    // Generate thank you page URL with parameters
    const thankYouUrl = `/thank-you?course=${order.courseType}&payment_id=${razorpay_payment_id}&order_id=${razorpay_order_id}`;

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      redirectUrl: thankYouUrl
    });
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}

// Close MongoDB connection when the server shuts down
process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
}); 