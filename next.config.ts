import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.25.96.1"],
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : undefined,
};

export default nextConfig;
