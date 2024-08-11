/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export"
    images : {
        domains: ['http://devcsd.nitk.ac.in/strapi'],
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'devcsd.nitk.ac.in'
            },
          ],
    },
    
};

export default nextConfig;
