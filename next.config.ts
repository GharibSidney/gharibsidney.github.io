/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/website-sidney2.0', // This must match repository name
  assetPrefix: '/website-sidney2.0',
    eslint: {
    ignoreDuringBuilds: true, // This will skip ESLint during builds
  },
}

module.exports = nextConfig