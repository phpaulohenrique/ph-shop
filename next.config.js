/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["files.stripe.com", "lh3.googleusercontent.com"],
    },
}

module.exports = nextConfig
