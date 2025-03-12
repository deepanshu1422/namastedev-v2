/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
const nextConfig = {
  images: {
    domains: [
      "i3.ytimg.com",
      "img.freepik.com",
      "ik.imagekit.io",
      "assets-global.website-files.com",
      "i.ibb.co",
      "images.ctfassets.net",
      "courses.30dayscoding.com",
      "d2dmyh35ffsxbl.cloudfront.net",
      "lh7-us.googleusercontent.com",
      "d502jbuhuh9wk.cloudfront.net",
      "upload.wikimedia.org",
      "img.youtube.com",
      "images.remotePatterns"
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: '/bundle/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/courses/:path*',
        destination: '/',
        permanent: false,
      }
    ];
  },
};


const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
