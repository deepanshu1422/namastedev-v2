import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { MongoClient } from "mongodb";

// MongoDB connection string
const uri = "mongodb+srv://ankit1478:ankit1478@cluster0.bgltbjs.mongodb.net/";
const client = new MongoClient(uri);
const dbName = "razorpay_payments";

// Course IDs mapping
const courseIds = {
  beginner: "67c8a985a2fc8675d8e821ba",
  intermediate: "67c8a9e153f717193c586641",
  advanced: "652a1994e4b05a145bae5cd0"
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

// Verify Razorpay webhook signature
function verifyWebhookSignature(body: string, signature: string) {
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET || "")
    .update(body)
    .digest("hex");
  
  return expectedSignature === signature;
}

// API route to handle Razorpay webhooks
export async function POST(request: NextRequest) {
  try {
    // Get the raw request body as text for signature verification
    const rawBody = await request.text();
    const signature = request.headers.get('x-razorpay-signature') || '';
    
    // Verify webhook signature
    if (!verifyWebhookSignature(rawBody, signature)) {
      console.error("Invalid webhook signature");
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 401 }
      );
    }
    
    // Parse the body after verification
    const webhookData = JSON.parse(rawBody);
    const { event, payload } = webhookData;
    
    console.log(`Received webhook event: ${event}`);
    
    // Connect to MongoDB
    const db = await connectToDatabase();
    const webhooksCollection = db.collection('webhooks');
    const ordersCollection = db.collection('orders');
    const paymentsCollection = db.collection('payments');
    
    // Store the complete webhook data
    await webhooksCollection.insertOne({
      event,
      payload,
      receivedAt: new Date(),
      rawData: webhookData
    });
    
    // Handle different webhook events
    if (event === 'payment.authorized' || event === 'payment.captured') {
      const { payment } = payload;
      const orderId = payment.entity.order_id;
      
      console.log(`Processing successful payment for order: ${orderId}`);
      
      // Get the order details
      const order = await ordersCollection.findOne({ orderId });
      
      if (order) {
        // Update order status
        await ordersCollection.updateOne(
          { orderId },
          { 
            $set: { 
              status: 'paid',
              webhookVerified: true,
              updatedAt: new Date()
            } 
          }
        );
        
        // Store or update payment details
        const paymentData = {
          orderId,
          paymentId: payment.entity.id,
          amount: payment.entity.amount,
          currency: payment.entity.currency,
          method: payment.entity.method,
          status: payment.entity.status,
          webhookEvent: event,
          customerDetails: order.customerDetails,
          courseType: order.courseType,
          courseId: order.courseId,
          webhookVerified: true,
          createdAt: new Date(),
          paymentDetails: payment.entity
        };
        
        // Upsert payment data (insert if not exists, update if exists)
        await paymentsCollection.updateOne(
          { paymentId: payment.entity.id },
          { $set: paymentData },
          { upsert: true }
        );
        
        console.log(`Payment ${payment.entity.id} processed successfully`);
      } else {
        console.log(`Order ${orderId} not found in database`);
        
        // Try to extract course information from notes if order is not found
        try {
          const notes = payment.entity.notes || {};
          const courseType = notes.courseType;
          const courseId = notes.courseId || (courseType ? courseIds[courseType as keyof typeof courseIds] : null);
          const state = notes.state || '';
          
          if (courseId) {
            // Create a new order record
            await ordersCollection.insertOne({
              orderId,
              paymentId: payment.entity.id,
              amount: payment.entity.amount,
              currency: payment.entity.currency,
              courseType,
              courseId,
              customerDetails: {
                email: notes.email || '',
                name: notes.name || '',
                phone: notes.phone || '',
                state: state
              },
              status: 'paid',
              webhookVerified: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
            
            // Store payment details
            await paymentsCollection.insertOne({
              orderId,
              paymentId: payment.entity.id,
              amount: payment.entity.amount,
              currency: payment.entity.currency,
              method: payment.entity.method,
              status: payment.entity.status,
              webhookEvent: event,
              courseType,
              courseId,
              customerDetails: {
                email: notes.email || '',
                name: notes.name || '',
                phone: notes.phone || '',
                state: state
              },
              webhookVerified: true,
              createdAt: new Date(),
              paymentDetails: payment.entity
            });
            
            console.log(`Created new order and payment records for ${orderId}`);
          }
        } catch (error) {
          console.error(`Failed to create order from webhook data: ${error}`);
        }
      }
    } else if (event === 'payment.failed') {
      const { payment } = payload;
      const orderId = payment.entity.order_id;
      
      console.log(`Processing failed payment for order: ${orderId}`);
      
      // Get the order details
      const order = await ordersCollection.findOne({ orderId });
      
      // Update order status
      if (order) {
        await ordersCollection.updateOne(
          { orderId },
          { 
            $set: { 
              status: 'failed',
              failureReason: payment.entity.error_description || payment.entity.error_code,
              updatedAt: new Date()
            } 
          }
        );
        
        // Store failed payment details
        await paymentsCollection.insertOne({
          orderId,
          paymentId: payment.entity.id,
          amount: payment.entity.amount,
          currency: payment.entity.currency,
          method: payment.entity.method,
          status: 'failed',
          webhookEvent: event,
          courseType: order.courseType,
          courseId: order.courseId,
          customerDetails: order.customerDetails,
          failureReason: payment.entity.error_description || payment.entity.error_code,
          createdAt: new Date(),
          paymentDetails: payment.entity
        });
      } else {
        // Try to extract course information from notes if order is not found
        try {
          const notes = payment.entity.notes || {};
          const courseType = notes.courseType;
          const courseId = notes.courseId || (courseType ? courseIds[courseType as keyof typeof courseIds] : null);
          const state = notes.state || '';
          
          // Store failed payment details without order reference
          await paymentsCollection.insertOne({
            orderId,
            paymentId: payment.entity.id,
            amount: payment.entity.amount,
            currency: payment.entity.currency,
            method: payment.entity.method,
            status: 'failed',
            webhookEvent: event,
            courseType,
            courseId,
            customerDetails: {
              email: notes.email || '',
              name: notes.name || '',
              phone: notes.phone || '',
              state: state
            },
            failureReason: payment.entity.error_description || payment.entity.error_code,
            createdAt: new Date(),
            paymentDetails: payment.entity
          });
        } catch (error) {
          console.error(`Failed to create payment record from webhook data: ${error}`);
        }
      }
      
      console.log(`Failed payment ${payment.entity.id} recorded`);
    } else if (event === 'refund.created' || event === 'refund.processed') {
      const { refund } = payload;
      const paymentId = refund.entity.payment_id;
      
      console.log(`Processing refund for payment: ${paymentId}`);
      
      // Get the payment details
      const payment = await paymentsCollection.findOne({ paymentId });
      
      // Create refunds collection if needed
      const refundsCollection = db.collection('refunds');
      
      // Store refund details
      await refundsCollection.insertOne({
        refundId: refund.entity.id,
        paymentId,
        orderId: payment?.orderId,
        amount: refund.entity.amount,
        currency: refund.entity.currency,
        status: refund.entity.status,
        courseType: payment?.courseType,
        courseId: payment?.courseId,
        customerDetails: payment?.customerDetails,
        webhookEvent: event,
        createdAt: new Date(),
        refundDetails: refund.entity
      });
      
      // Update payment status
      if (payment) {
        await paymentsCollection.updateOne(
          { paymentId },
          { 
            $set: { 
              refunded: true,
              refundAmount: refund.entity.amount,
              refundId: refund.entity.id,
              updatedAt: new Date()
            } 
          }
        );
        
        // Update order status if order exists
        if (payment.orderId) {
          await ordersCollection.updateOne(
            { orderId: payment.orderId },
            {
              $set: {
                status: 'refunded',
                refundId: refund.entity.id,
                refundAmount: refund.entity.amount,
                updatedAt: new Date()
              }
            }
          );
        }
      }
      
      console.log(`Refund ${refund.entity.id} processed successfully`);
    } else {
      // Handle other webhook events
      console.log(`Unhandled webhook event: ${event}`);
    }
    
    return NextResponse.json({
      success: true,
      message: "Webhook processed successfully",
    });
  } catch (error) {
    console.error("Error processing Razorpay webhook:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
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