/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function() {
    return {
      "/button-link-test": { page: "/button-link-test" },
    };
  },
}

module.exports = nextConfig
