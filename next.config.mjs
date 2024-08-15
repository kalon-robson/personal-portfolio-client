/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  images: {
    remotePatterns: [
      {
        hostname: new URL(process.env.NEXT_PUBLIC_SERVER_URL).hostname,
        port: new URL(process.env.NEXT_PUBLIC_SERVER_URL).port,
        protocol: process.env.NODE_ENV === 'production' ? 'http' : 'https',
      },
    ],
  },
  pageExtensions: ['tsx', 'js'],
  publicRuntimeConfig: {
    SERVER_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
  },
  rewrites: async () => [
    {
      destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/media/:path*`,
      source: '/media/:path*',
    },
    {
      destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/video/:path*`,
      source: '/video/:path*',
    },
    {
      destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/:path*`,
      source: '/admin/:path*',
    },
    {
      destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/:path*`,
      source: '/api/:path*',
    },
  ],
};

export default nextConfig;
