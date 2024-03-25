/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  disable: process.env.NEXT_PUBLIC_APP_MODE === "development",
  dest: "public",
  scope: "/chat",
  sw: "/sw.js",
  register: true,
  skipWaiting: true,
  runtimeCaching
});

const nextConfig = withPWA({
  env: {
    NEXT_PUBLIC_APP_MODE: "development",
    OPENAI_API_KEY: "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",
    ELEVENLABS_API_KEY: "2dd3fec74fb9db2337f213a44fe91235"
  }
});

module.exports = nextConfig;
