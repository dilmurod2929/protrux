/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // ✅ добавляем слэш на конце URL
};

module.exports = nextConfig;
