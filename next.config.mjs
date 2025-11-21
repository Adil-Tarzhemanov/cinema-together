/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
        INTERNAL_API_URL: process.env.INTERNAL_API_URL,
        APP_URL: process.env.APP_URL
    },
    async rewrites() {
        return [
            {
                source: '/uploads/:path*',
                destination: `${process.env.INTERNAL_API_URL}/uploads/:path*`
            }
        ]
    }
};

export default nextConfig;
