/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.diptapal.workers.dev',
      },
    ],
  },
};

export default nextConfig;



// next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
// };

// Module.exports = nextConfig;
