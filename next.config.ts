import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: process.env.CODESPACES
          ? [
              {
                key: 'X-Forwarded-Host',
                value: `${process.env.CODESPACE_NAME}-3000.app.github.dev`,
              },
              {
                key: 'Access-Control-Allow-Origin',
                value: `https://${process.env.CODESPACE_NAME}-3000.app.github.dev`,
              },
            ]
          : [],
      },
    ]
  }, 
  experimental: {
		serverActions: {
			allowedOrigins: ["*.github.dev"]
			},
	}
};

export default nextConfig;
