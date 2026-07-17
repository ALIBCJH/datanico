/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local static imports are optimized automatically; formats below are served
    // to browsers that support them (AVIF/WebP) with graceful fallback.
    formats: ["image/avif", "image/webp"],
  },
  // Permanent redirects from the old developer-style slugs to the clean URLs,
  // so any existing links or bookmarks keep working and pass SEO signal on.
  async redirects() {
    return [
      { source: "/insurancetips", destination: "/insurance-tips", permanent: true },
      { source: "/claimpage", destination: "/claims/file", permanent: true },
      { source: "/requirementclaim", destination: "/claims/process", permanent: true },
    ];
  },
};

export default nextConfig;
