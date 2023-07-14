const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  experimental: {
    transpilePackages: ["tsconfig", "ui", "config"],
    appDir: true,
    serverComponentsExternalPackages: ["mysql2"],
    serverActions: true
  },
  productionBrowserSourceMaps: true,
});
