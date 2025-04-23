const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // Prevent source maps from being exposed
  async headers() {
    return [
      {
        source: "/(.*)", // Apply headers to all routes
        headers: [
          // Anti-Clickjacking Headers
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevent embedding in iframes
          },
          // XSS Protection
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Enables browser's built-in XSS protection
          },
          // Referrer Policy
          {
            key: "Referrer-Policy",
            value: "no-referrer", // Ensures no sensitive information leaks via referrer
          },
          // Content Type Options
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME type sniffing
          },
          // Permissions Policy (Optional)
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), payment=()", // Restrict access to features
          },
          // Cache Control (Optional for sensitive data)
          {
            key: "Cache-Control",
            value: "no-store", // Prevents caching of sensitive data
          },
        ],
      },
    ];
  },
  webpack: (config: any) => {
    config.ignoreWarnings = [
      {
        message: /No serializer registered for Warning/, // Suppress the specific cache warning
      },
    ];
    config.cache = false; // Disables Webpack caching
    return config;
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
    preprocessorOptions: {
      scss: {
        api: "modern",
        silenceDeprecations: ["mixed-decls"],
      },
    },
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    remotePatterns: [
      {
        hostname: "s2.moc.gov.kh",
        protocol: "https",
      },
      {
        hostname: "s3.moc.gov.kh",
        protocol: "https",
      },
      {
        hostname: "s1.moc.gov.kh",
        protocol: "https",
      },
      {
        hostname: "21accec-space.moc.gov.kh",
        protocol: "https",
      },
      {
        hostname: "21accec-space.moc.gov.kh",
        protocol: "http",
      },
      {
        hostname: "file-storage.development.moc.gov.kh",
        protocol: "http",
      },
    ],
  },
  compiler: {
    styledComponents: false,
  },
  transpilePackages: ["echarts", "zrender"],
};

module.exports = withBundleAnalyzer(nextConfig);
