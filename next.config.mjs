/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export"
    images : {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'csd.nitk.ac.in'
            },
            {
              protocol: 'https',
              hostname: 'assets.aceternity.com'
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com'
            }
          ],
    },
    
};

export default nextConfig;
