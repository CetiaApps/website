import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
  },

  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://getsmartcart.co.uk/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: 'https://getsmartcart.co.uk/blog/:slug*',
        permanent: true,
      },
      {
        source: '/smartcart-privacy-policy',
        destination: 'https://getsmartcart.co.uk/privacy',
        permanent: false,
      },
      {
        source: '/smartcart-delete-my-data',
        destination: 'https://getsmartcart.co.uk/delete-data',
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
