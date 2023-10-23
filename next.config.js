const { NormalModuleReplacementPlugin } = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    //removeConsole: true,
  },
  images: {
    domains: ["ipfs.io"],
  },
  experimental: {
    serverActions: true,
  },

  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };
    config.module = {
      ...config.module,
      exprContextCritical: false,
    };
    config.plugins.push(
      new NormalModuleReplacementPlugin(/node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
      })
    );
    return config;
  },
};

module.exports = nextConfig;
