/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export"
    images : {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'devcsd.nitk.ac.in'
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
