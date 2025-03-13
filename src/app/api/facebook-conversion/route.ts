import { NextRequest, NextResponse } from "next/server";
import { hashUserDetails } from "@/lib/hashUtils";

// Facebook Conversion API endpoint
const FB_API_VERSION = 'v22.0';
const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '';
const ACCESS_TOKEN = process.env.FACEBOOK_CONVERSION_API_TOKEN || '';
const TEST_EVENT_CODE = 'TEST78716'; // Facebook test event code

// Conversion API endpoint
const CONVERSION_API_URL = `https://graph.facebook.com/${FB_API_VERSION}/${PIXEL_ID}/events`;

/**
 * API route to forward browser pixel events to Facebook Conversion API
 * Supports: PageView, ViewContent, InitiateCheckout, Purchase
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, eventData, userData } = body;

    if (!eventName) {
      return NextResponse.json(
        { error: "Missing event name" },
        { status: 400 }
      );
    }

    // Get client IP and user agent
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || '';

    // Prepare the event data for Conversion API
    const event = prepareEventData(eventName, eventData, userData, clientIp, userAgent);

    // Send to Facebook Conversion API
    const response = await sendToConversionApi([event]);

    return NextResponse.json({
      success: true,
      message: "Event forwarded to Facebook Conversion API",
      response
    });
  } catch (error) {
    console.error("Error forwarding event to Facebook Conversion API:", error);
    return NextResponse.json(
      { error: "Failed to forward event" },
      { status: 500 }
    );
  }
}

/**
 * Prepare event data for Facebook Conversion API
 */
function prepareEventData(
  eventName: string, 
  eventData: any, 
  userData: any,
  clientIp: string,
  userAgent: string
) {
  // Current timestamp in seconds
  const eventTime = Math.floor(Date.now() / 1000);
  
  // Base event object
  const event: any = {
    event_name: mapEventName(eventName),
    event_time: eventTime,
    action_source: "website"
  };

  // Add event ID if provided
  if (eventData?.event_id) {
    event.event_id = eventData.event_id;
  }

  // Add event source URL if provided
  if (eventData?.event_source_url) {
    event.event_source_url = eventData.event_source_url;
  }

  // Add user data
  event.user_data = {
    client_ip_address: clientIp,
    client_user_agent: userAgent
  };

  // Add FBP and FBC if available
  if (userData?.fbp) {
    event.user_data.fbp = userData.fbp;
  }
  
  if (userData?.fbc) {
    event.user_data.fbc = userData.fbc;
  }

  // Add hashed user data if available
  if (userData?.name || userData?.email || userData?.phone) {
    const hashedData = hashUserDetails({
      name: userData.name,
      email: userData.email,
      phone: userData.phone
    });

    // Add hashed data to user_data
    if (hashedData.em) event.user_data.em = [hashedData.em];
    if (hashedData.ph) event.user_data.ph = [hashedData.ph];
    if (hashedData.fn) event.user_data.fn = [hashedData.fn];
    if (hashedData.ln) event.user_data.ln = [hashedData.ln];
  }

  // Add custom data based on event type
  event.custom_data = {};

  // Add value and currency if available
  if (eventData?.value !== undefined) {
    event.custom_data.value = eventData.value;
  }

  if (eventData?.currency) {
    event.custom_data.currency = eventData.currency;
  }

  // Add content IDs if available
  if (eventData?.contentIds && eventData.contentIds.length > 0) {
    event.custom_data.content_ids = eventData.contentIds;
  }

  // Add content type if available
  if (eventData?.contentType) {
    event.custom_data.content_type = eventData.contentType;
  } else if (eventData?.contentIds && eventData.contentIds.length > 0) {
    // Default content type if content IDs are provided
    event.custom_data.content_type = "product";
  }

  // Add contents if available - Fix for Facebook API format requirements
  if (eventData?.contents && eventData.contents.length > 0) {
    // Format contents according to Facebook's requirements
    // For contents, Facebook expects an array of objects with id and quantity
    event.custom_data.contents = eventData.contents.map((content: string, index: number) => {
      const contentId = eventData.contentIds?.[index] || `product-${index}`;
      return {
        id: contentId,
        quantity: eventData.numItems || 1
      };
    });
  }

  // Add num_items if available
  if (eventData?.numItems) {
    event.custom_data.num_items = eventData.numItems;
  }

  return event;
}

/**
 * Map browser pixel event names to Conversion API event names
 */
function mapEventName(eventName: string): string {
  const eventMap: Record<string, string> = {
    'PageView': 'PageView',
    'ViewContent': 'ViewContent',
    'InitiateCheckout': 'InitiateCheckout',
    'Purchase': 'Purchase',
    'AddToCart': 'AddToCart',
    'Lead': 'Lead',
    'CompleteRegistration': 'CompleteRegistration'
  };

  return eventMap[eventName] || eventName;
}

/**
 * Send events to Facebook Conversion API
 */
async function sendToConversionApi(events: any[]) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    throw new Error("Missing Facebook Pixel ID or Access Token");
  }

  const payload = {
    data: events,
    test_event_code: TEST_EVENT_CODE // Add test event code to the payload
  };

  try {
    // Log the payload for debugging
    console.log("Sending to Facebook Conversion API:", JSON.stringify(payload, null, 2));
    
    const response = await fetch(`${CONVERSION_API_URL}?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Facebook Conversion API error:", errorData);
      throw new Error(`Facebook Conversion API error: ${JSON.stringify(errorData)}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending to Facebook Conversion API:", error);
    throw error;
  }
} 