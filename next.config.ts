import type { NextConfig } from "next";

const lanHost = process.env.NEXT_DEV_LAN_HOST ?? "192.168.29.24";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", lanHost],
};

export default nextConfig;
