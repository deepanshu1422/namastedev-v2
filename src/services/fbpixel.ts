export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}, eventID = {}) => {
  //@ts-ignore
  window.fbq("track", name, options, eventID);
};
