/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: ''
  },
  experimental: {
    optimizeCss: true
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all'
    };
    return config;
  },
  env: {
    SITE_URL: process.env.SITE_URL
  }
  ,
  async redirects() {
    return [
      // Redirect /jasa-pembuatan-website-tangerang -> /jasa-pembuatan-website/tangerang
      {
        source: '/jasa-pembuatan-website-:kota',
        destination: '/jasa-pembuatan-website/:kota',
        permanent: true
      },
    ];
  }
};

export default nextConfig;
