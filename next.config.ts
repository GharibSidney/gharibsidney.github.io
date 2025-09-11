/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/website-sidney2.0', // This matches your repository name
  assetPrefix: '/website-sidney2.0'
}

module.exports = nextConfig