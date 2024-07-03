// import crypto from 'crypto';
// import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
// import { Webhook } from 'svix'

// type WebhookPayload = {
//     id?: number;
//     status?: string;
//     data: Record<string, string> | null,
//     error: any,

// }

// export function verifySignatureRazorpay(body: string, signature: string, secret: string) {
//     const shasum = crypto.createHmac('sha256', secret);
//     shasum.update(JSON.stringify(body));
//     const digest = shasum.digest('hex');

//     return (digest === signature)
// }

// export function verifySignatureSvix(body: string, headerPayload: ReadonlyHeaders): WebhookPayload {
//     const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

//     if (!WEBHOOK_SECRET) {
//         throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
//     }

//     const svix_id = headerPayload.get("svix-id");
//     const svix_timestamp = headerPayload.get("svix-timestamp");
//     const svix_signature = headerPayload.get("svix-signature");


//     // If there are no headers, error out
//     if (!svix_id || !svix_timestamp || !svix_signature) {
//         return { data: null, error: true }
//     }
//     ;

//     // Create a new Svix instance with your secret.
//     const wh = new Webhook(WEBHOOK_SECRET);

//     let evt;

//     // Verify the payload with the headers
//     try {
//         evt = wh.verify(body, {
//             "svix-id": svix_id,
//             "svix-timestamp": svix_timestamp,
//             "svix-signature": svix_signature,
//         })

//         const { id } = evt.data;
//         const eventType = evt.type;

//         return { data: { id, eventType }, error: false }

//     } catch (err) {
//         console.error('Error verifying webhook:', err);
//         return { data: null, error: true }
//     }

// }