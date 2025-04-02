import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/portafolio/getData/:path*',
      },
    ];
  },
};

export default nextConfig;
