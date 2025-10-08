/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'image.pollinations.ai',
      },
    ],
  },
  // Backend proxy configuration
  async rewrites() {
    return [
      // Ensure sitemap.xml explicitly resolves to the pages route for crawlers
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml.tsx',
      },
      {
        source: '/api/backend/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
