import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '', // Port is optional, use '' for default ports
        pathname: '/gh/**', // Allows any path under /account123/
      },
     
    ],
  },
};

export default nextConfig;
