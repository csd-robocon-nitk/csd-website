/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export"
    images : {
        domains: ['localhost'],
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '1337',
            },
          ],
    },
    
};

export default nextConfig;
