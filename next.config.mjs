/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local static imports are optimized automatically; formats below are served
    // to browsers that support them (AVIF/WebP) with graceful fallback.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
