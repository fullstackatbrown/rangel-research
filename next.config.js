/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function() {
    return {
      "/qualtrics-button": { page: "/component-test-pages/qualtrics-button" },
    };
  },
}

module.exports = nextConfig
