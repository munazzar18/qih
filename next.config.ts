import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["driveo.pk", "qih.driveo.pk"], // Allow images from driveo.pk
  },
};

export default nextConfig;
