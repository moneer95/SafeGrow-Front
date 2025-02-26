/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dash.safe-grow.com', 'images.unsplash.com', 'www.google.com', 'tailwindui.com'], // Add the domains of the external images you use
  },
  webpack: (config) => {
    config.ignoreWarnings = [/Buffer()/]; // Suppress Buffer() warnings
    return config;
  },

};

export default nextConfig;
