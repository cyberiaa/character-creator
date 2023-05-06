const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
};

module.exports = nextConfig;
