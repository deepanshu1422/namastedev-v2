// server.js


const express = require('express');
const cors = require('cors')
const multer = require('multer');
const AWS = require('aws-sdk');
const fs = require('fs');



const app = express();
app.use(cors({
    origin:'*'
}))
const upload = multer({ dest: 'uploads/' });

// Configure AWS SDK with your DigitalOcean Spaces credentials
const SPACE_NAME = 'talktohire';
const SPACE_REGION = 'blr1';
const SPACE_ENDPOINT = `https://${SPACE_REGION}.digitaloceanspaces.com`;

const s3 = new AWS.S3({
    endpoint: SPACE_ENDPOINT,
    accessKeyId: 'DO00UDHQVKATTG3LAGTU',
    secretAccessKey: 'm5kbURqS4604z9DiEkB3svu0Jur/dsO2xFncrcbZkwk',
    region: SPACE_REGION,
});

app.post('/api/upload-testimonial', upload.single('video'), async (req, res) => {
    try {
        const file = req.file;
        const fileContent = fs.readFileSync(file.path);

        const fileName = `testimonial_${Date.now()}.webm`;
        const params = {
            Bucket: SPACE_NAME,
            Key: fileName,
            Body: fileContent,
            ACL: 'public-read',
            ContentType: 'video/webm',
        };

        const { Location } = await s3.upload(params).promise();

        // Delete the temporary file
        fs.unlinkSync(file.path);

        res.json({ url: Location });
    } catch (error) {
        console.error('Error uploading to DigitalOcean Spaces:', error);
        res.status(500).json({ error: 'Upload failed' });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


