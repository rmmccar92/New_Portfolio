/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    CLIENT_ID: process.env.CLIENT_ID,
    SECRET: process.env.SECRET,
  },
  serverRuntimeConfig: {
    CLIENT_ID: process.env.CLIENT_ID,
    SECRET: process.env.SECRET,
  },
};

module.exports = nextConfig;
