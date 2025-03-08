import { sha256 } from "js-sha256";

const createSendingData = async ({
  eventId,
  name,
  value,
}: {
  eventId: string;
  name: string;
  value: number;
}) => {
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
      value,
      name,
    },
  };
};

export const trackPurchase = async (data: any, eventId: string) => {
  try {
    // Remove Facebook Pixel event tracking
    // ... existing code ...
  } catch (error) {
    console.error("Error tracking purchase:", error);
  }
};

