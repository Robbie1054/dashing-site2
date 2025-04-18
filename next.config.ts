/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'assets.ctfassets.net'], // Allow Contentful images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', 
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
