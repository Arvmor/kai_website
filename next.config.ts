import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './gh-loader.ts',
  },
};

export default nextConfig;
