/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    //   },
    compiler:{
        styledComponents: true
    },
    images: {
        domains: ['s3.warehousai.com'],
    },
    i18n: {
        locales: ["ru"],
        defaultLocale: "ru",
      },
    
}

module.exports = nextConfig
