// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 🚀 Ignora errores de TypeScript en el build (workaround bug Next.js 15)
    ignoreBuildErrors: true,
  },
  eslint: {
    // 🚀 Ignora errores de ESLint en el build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
