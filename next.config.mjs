/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export"
    images : {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'devcsd.nitk.ac.in'
            },
          ],
    },
    
};

export default nextConfig;
