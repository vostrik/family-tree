/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tree',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
