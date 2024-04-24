/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_TOKEN: process.env.API_TOKEN
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
            },
        ],
    },
};

module.exports = nextConfig;
