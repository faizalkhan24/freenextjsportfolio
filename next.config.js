/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "media.istockphoto.com",
      "via.placeholder.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
