import AWS from 'aws-sdk';

// Replace these with your actual DigitalOcean Spaces credentials
const SPACE_NAME = 'talktohire';
const SPACE_REGION = 'blr1'; // e.g., 'nyc3'
const SPACE_ENDPOINT = `https://${SPACE_REGION}.digitaloceanspaces.com`;

const s3 = new AWS.S3({
  endpoint: SPACE_ENDPOINT,
  accessKeyId: 'DO00UDHQVKATTG3LAGTU',
  secretAccessKey: 'm5kbURqS4604z9DiEkB3svu0Jur/dsO2xFncrcbZkwk,',
  region: SPACE_REGION,
});

export const uploadToDigitalOcean = async (videoBlob) => {
  const fileName = `testimonial_${Date.now()}.webm`;
  const params = {
    Bucket: SPACE_NAME,
    Key: fileName,
    Body: videoBlob,
    ACL: 'public-read',
    ContentType: 'video/webm',
  };

  try {
    const { Location } = await s3.upload(params).promise();
    return Location;
  } catch (error) {
    console.error('Error uploading to DigitalOcean Spaces:', error);
    throw error;
  }
};