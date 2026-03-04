/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better performance debugging
    reactStrictMode: true,

    // Compress responses
    compress: true,

    // Production performance headers
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=3600, stale-while-revalidate=86400",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
