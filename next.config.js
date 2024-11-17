/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors 'self' https://snaplabs-web-chat.onrender.com;`,
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://snaplabs-web-chat.onrender.com',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
