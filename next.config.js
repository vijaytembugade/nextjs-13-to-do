/** @type {import('next').NextConfig} */

const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vectorified.com',
      },
    ],
  },}

module.exports = nextConfig
