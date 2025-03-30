import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: false, // Helps with module resolution
  },
  // Ensure proper transpilation of PostCSS config
  transpilePackages: ['postcss-config'], 
};

export default nextConfig;