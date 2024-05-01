/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
            },
        ],
    },
    output: "export",
    basePath: "/cqdetdev.github.io",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
