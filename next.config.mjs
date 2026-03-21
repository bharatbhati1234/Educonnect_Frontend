/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.edublink.co',
      },
    ],
  },
};

export default nextConfig;