/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SEARCH_NODE_SE: process.env.SEARCH_NODE_SE,
  },
}

module.exports = nextConfig
