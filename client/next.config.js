/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wallpaperaccess.com',
                port: '',
            },
        ],
    },

}

module.exports = nextConfig
