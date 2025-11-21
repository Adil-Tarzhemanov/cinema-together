/** @type {import('next').NextConfig} */
const API_BASE =
  process.env.INTERNAL_API_URL ||
  process.env.NEXT_PUBLIC_SERVER_URL ||
  'http://localhost:4200'

const nextConfig = {
  env: {
    NEXT_PUBLIC_SERVER_URL:
      process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4200',
    INTERNAL_API_URL: process.env.INTERNAL_API_URL || API_BASE,
    APP_URL: process.env.APP_URL
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `${API_BASE}/uploads/:path*`
      }
    ]
  }
}

export default nextConfig;
