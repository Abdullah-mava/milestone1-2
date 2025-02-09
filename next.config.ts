import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{ignoreDuringBuilds:true,},
  output: 'standalone',
  distDir: '.next',
};

export default nextConfig;
