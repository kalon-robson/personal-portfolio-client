/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  images: {
    domains: [
      new URL(process.env.NEXT_PUBLIC_SERVER_URL).hostname,
    ],
  },
  publicRuntimeConfig: {
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  rewrites: async () => [
    {
      destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/media/:path*`,
      source: '/media/:path*',
    },
  ],
};

export default nextConfig;
