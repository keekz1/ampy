import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: false, // Helps with module resolution
  },
  transpilePackages: ['@radix-ui/react-label'], // Add actual packages you use
};

export default nextConfig;