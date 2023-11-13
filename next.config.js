/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    //   },
    compiler:{
        styledComponents: true
    },
    images: {
        domains: ['https://s3.warehousai.com/'],
    },
    
}

module.exports = nextConfig
