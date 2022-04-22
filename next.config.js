/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'tr'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
