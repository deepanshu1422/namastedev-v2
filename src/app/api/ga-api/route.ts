// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server"; // Import NextRequest for type safety

// export async function POST(request: NextRequest) {
//   try {
//     // Parse the request body
//     const { data } = await request.json();

//     // If no data is found, return an error
//     if (!data) {
//       return NextResponse.json({ error: "No data found" }, { status: 400 });
//     }

//     const MEASUREMENT_ID = "G-6PWT2QJ1GP";
//     const API_SECRET = "FeMwlhG_QGuBhZqCApdqKA";
//     const GA_ENDPOINT = `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`;

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         client_id: data.client_id,
//         events: [
//           {
//             name: data.event_name,
//             params: data.event_params,
//           },
//         ],
//       }),
//     };

//     // Make the request to the Google Analytics endpoint
//     const res = await fetch(GA_ENDPOINT, options);

//     // Handle non-200 responses
//     if (!res.ok) {
//       return NextResponse.json(
//         { error: "Failed to send event data" },
//         { status: res.status }
//       );
//     }

//     const responseData = { message: "Event data sent successfully" };

//     // Return the response
//     return NextResponse.json({ responseData }, { status: 200 });
//   } catch (error) {
//     // Handle any unexpected errors
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }



// // @Post('google-analytics-api')
// //   @UseGuards(TokenCheckGuard)
// //   async convertionApiGA(@Body() body: any) {
// //     try {
// //       // Parse the request body
// //       const { data } = body;
  
// //       // If no data is found, return an error
// //       if (!data) {
// //         return { error: 'No data found' };
// //       }
  
// //         const MEASUREMENT_ID = "G-6PWT2QJ1GP";
// //         const API_SECRET = "FeMwlhG_QGuBhZqCApdqKA";
// //         const GA_ENDPOINT = `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`;

// //     const options = {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         client_id: data.client_id,
// //         events: [
// //           {
// //             name: data.event_name,
// //             params: data.event_params,
// //           },
// //         ],
// //       }),
// //     };

// //     // Make the request to the Google Analytics endpoint
// //     const res = await fetch(GA_ENDPOINT, options);
   
// //       return {message: "Google Data Sent"};
// //     } catch (error) {
// //       console.error('Error while sending data to Google Analytics:', error);
// //       return { error: 'An error occurred' };
// //     }
// //   }