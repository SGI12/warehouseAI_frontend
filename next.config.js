/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents: true
    },
    async rewrites() {
        return []
}
}

module.exports = nextConfig
