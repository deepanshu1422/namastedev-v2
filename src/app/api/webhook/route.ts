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

// Graphy API credentials
const GRAPHY_MID = "deepanshuudhwani";
const GRAPHY_KEY = "7c96f372-799e-4f3f-a202-62add1edd62f";

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

// Create learner in Graphy
async function createGraphyLearner(name: string, email: string) {
  try {
    console.log(`Creating Graphy learner: ${name} (${email})`);
    
    const formData = new URLSearchParams();
    formData.append('mid', GRAPHY_MID);
    formData.append('key', GRAPHY_KEY);
    formData.append('email', email);
    formData.append('name', name);
    
    const response = await fetch('https://api.ongraphy.com/public/v1/learners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });
    
    const data = await response.json();
    console.log('Graphy learner creation response:', data);
    
    // Return true if successful or if user already exists
    return data.status === 'success' || (data.error && data.error.code === 22);
  } catch (error) {
    console.error('Error creating Graphy learner:', error);
    return false;
  }
}

// Assign course to learner in Graphy
async function assignGraphyCourse(email: string, productId: string, paymentId: string) {
  try {
    console.log(`Assigning Graphy course ${productId} to learner: ${email}`);
    
    const formData = new URLSearchParams();
    formData.append('mid', GRAPHY_MID);
    formData.append('key', GRAPHY_KEY);
    formData.append('email', email);
    formData.append('productId', productId);
    formData.append('extPG', 'razorpay');
    formData.append('extPaymentId', paymentId);
    
    const response = await fetch('https://api.spayee.com/public/v1/assign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });
    
    const data = await response.json();
    console.log('Graphy course assignment response:', data);
    
    // Return true if successful or if course is already assigned
    return data.status === 'success' || (data.error && data.error.code === 19);
  } catch (error) {
    console.error('Error assigning Graphy course:', error);
    return false;
  }
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
    const graphyApiCallsCollection = db.collection('graphyApiCalls');
    
    // Store the complete webhook data
    await webhooksCollection.insertOne({
      event,
      payload,
      receivedAt: new Date(),
      rawData: webhookData
    });
    
    // Handle different webhook events
    if (event === 'payment.captured') {
      const { payment } = payload;
      const orderId = payment.entity.order_id;
      const paymentId = payment.entity.id;
      
      console.log(`Processing successful payment for order: ${orderId}`);
      
      // Extract customer details from payment entity and notes
      const notes = payment.entity.notes || {};
      const customerEmail = notes.email || payment.entity.email || '';
      const customerName = notes.name || '';
      const customerPhone = notes.phone || payment.entity.contact || '';
      const state = notes.state || '';
      const courseType = notes.courseType;
      const courseId = notes.courseId || (courseType ? courseIds[courseType as keyof typeof courseIds] : null);
      
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
                email: customerEmail,
                name: customerName,
                phone: customerPhone,
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
                email: customerEmail,
                name: customerName,
                phone: customerPhone,
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
      
      // For payment.captured event, call Graphy APIs
      if (event === 'payment.captured' && customerEmail && courseId) {
        try {
          console.log(`Calling Graphy APIs for payment ${paymentId}`);
          
          // Step 1: Create learner in Graphy
          const learnerCreated = await createGraphyLearner(customerName, customerEmail);
          
          // Log the API call
          await graphyApiCallsCollection.insertOne({
            type: 'createLearner',
            email: customerEmail,
            name: customerName,
            success: learnerCreated,
            paymentId,
            orderId,
            timestamp: new Date()
          });
          
          // Step 2: Assign course to learner
          if (learnerCreated) {
            const courseAssigned = await assignGraphyCourse(customerEmail, courseId, paymentId);
            
            // Log the API call
            await graphyApiCallsCollection.insertOne({
              type: 'assignCourse',
              email: customerEmail,
              courseId,
              paymentId,
              orderId,
              success: courseAssigned,
              timestamp: new Date()
            });
            
            // Update order and payment with Graphy API status
            const graphyStatus = {
              graphyLearnerCreated: learnerCreated,
              graphyCourseAssigned: courseAssigned,
              graphyApiCalledAt: new Date()
            };
            
            await ordersCollection.updateOne(
              { orderId },
              { $set: { graphyStatus } }
            );
            
            await paymentsCollection.updateOne(
              { paymentId },
              { $set: { graphyStatus } }
            );
            
            console.log(`Graphy API calls completed for payment ${paymentId}`);
          }
        } catch (error) {
          console.error(`Error calling Graphy APIs: ${error}`);
          
          // Log the error
          await graphyApiCallsCollection.insertOne({
            type: 'error',
            email: customerEmail,
            courseId,
            paymentId,
            orderId,
            error: error.toString(),
            timestamp: new Date()
          });
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
              email: notes.email || payment.entity.email || '',
              name: notes.name || '',
              phone: notes.phone || payment.entity.contact || '',
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