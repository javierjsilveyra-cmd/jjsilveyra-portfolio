/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "assets.ctfassets.net",
      "images.contentful.com",
    ],
  },
};

module.exports = nextConfig;
