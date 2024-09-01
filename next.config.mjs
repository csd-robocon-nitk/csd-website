/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export"
    images : {
        domains: ['localhost', "devcsd.nitk.ac.in"],
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'devcsd.nitk.ac.in'
            },
          ],
    },
    
};

export default nextConfig;
