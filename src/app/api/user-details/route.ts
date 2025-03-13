import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// MongoDB connection string
const uri = "mongodb+srv://ankit1478:ankit1478@cluster0.bgltbjs.mongodb.net/";
const client = new MongoClient(uri);
const dbName = "razorpay_payments";

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

// API route to get user details by order ID
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get('orderId');

  if (!orderId) {
    return NextResponse.json(
      { error: "Order ID is required" },
      { status: 400 }
    );
  }

  try {
    // Connect to MongoDB
    const db = await connectToDatabase();
    const ordersCollection = db.collection('orders');
    
    // Find the order by ID
    const order = await ordersCollection.findOne({ orderId });
    
    if (!order) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }
    
    // Return the customer details
    return NextResponse.json({
      customerDetails: order.customerDetails
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json(
      { error: "Failed to fetch user details" },
      { status: 500 }
    );
  } finally {
    // Don't close the connection here as it might be reused
  }
}

// Close MongoDB connection when the server shuts down
process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
}); 