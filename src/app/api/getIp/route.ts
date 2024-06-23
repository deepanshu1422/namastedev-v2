// api/index.js
// Import the geolocation and ipAddress helpers
import { geolocation, ipAddress } from "@vercel/edge";
import { NextRequest } from "next/server";

export const runtime = "edge"

export default function (request: NextRequest) {
	// The geolocation helper pulls out the geoIP headers from the
	const geo = geolocation(request) || {};
	// The IP helper does the same function for the user's IP address
	const ip = ipAddress(request) || null

	// Output the Geolocation data and IP address as a JSON object, and
	// set the content type to make it easier to handle when requested
	return new Response(
		JSON.stringify({
			...geo,
			ip,
		}),
		{
			headers: { "content-type": "application/json" },
		}
	);
}