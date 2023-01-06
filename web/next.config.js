/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 300000 // Temp: 5 min due to coordinate load.
};

module.exports = nextConfig;
