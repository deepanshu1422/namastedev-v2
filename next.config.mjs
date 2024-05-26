/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["img.freepik.com", "ik.imagekit.io", "assets-global.website-files.com", "i.ibb.co", "images.ctfassets.net", "courses.30dayscoding.com", "d2dmyh35ffsxbl.cloudfront.net", "lh7-us.googleusercontent.com"]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
