import crypto from 'crypto';

export function createHeaderSignatureClerk(body: string, secretKey: string) {
    // Convert the body to a string if it's not already
    const bodyString = typeof body === 'string' ? body : JSON.stringify(body);

    // Create an HMAC object with the secret key and SHA256 algorithm
    const hmac = crypto.createHmac('sha256', secretKey);

    // Update the HMAC with the body data
    hmac.update(bodyString);

    // Generate the signature and encode it in Base64
    const signature = hmac.digest('base64');

    return signature;
}

export function verifyHeaderSignatureClerk(body: string, receivedSignature: string, secretKey: string) {
    // Convert the body to a string if it's not already
    const bodyString = typeof body === 'string' ? body : JSON.stringify(body);

    // Create an HMAC object with the secret key and SHA256 algorithm
    const hmac = crypto.createHmac('sha256', secretKey);

    // Update the HMAC with the body data
    hmac.update(bodyString);

    // Generate the expected signature
    const expectedSignature = hmac.digest('base64');

    // Compare the expected signature with the received signature
    return crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(receivedSignature)
    );
}

export function createSignedHeader(body: Record<string, string | number>, secretKey: string) {
    const bodyString = JSON.stringify(body);
    const hash = crypto.createHmac('sha256', secretKey)
        .update(bodyString)
        .digest('hex');

    return hash;
}
