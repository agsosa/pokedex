const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  webpack5: true,
  reactStrictMode: true,
  images: { domains: ['raw.githubusercontent.com'] },
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons/list/1',
        permanent: true,
      },
    ];
  },
});
