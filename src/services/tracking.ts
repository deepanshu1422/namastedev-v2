import { sha256 } from "js-sha256";
import * as fbq from "./fbpixel";

const createSendingData = async (eventId: string) => {
  return {
    event_name: "Purchase",
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    event_id: eventId,
    user_data: {
      em: ["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"],
      ph: [null],
      fbp: null,
      fbc: null,
    },
    custom_data: {
      currency: "INR",
      value: 2000,
      name: "deepanshu",
    },
  };
};

export default async function triggerEvent({
  additionalData,
}: {
  additionalData: Record<string, any>;
}) {

  const eventId: string = crypto.randomUUID();

  // const sendData = await createSendingData(eventId);

  fbq.event("Purchase", additionalData, { eventID: eventId });

  // fetch(
  //   `https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FBACCESSKEY}`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       data: [sendData],
  //       test_event_code: process.env.NEXT_PUBLIC_TEST_ID,
  //     }),
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error("Error:", error));
}
