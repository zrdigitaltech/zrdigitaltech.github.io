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
      // Redirect legacy .shtml 404 to .html
      {
        source: '/404.shtml',
        destination: '/404.html',
        permanent: true
      },
      {
        source: '/404.shtml/',
        destination: '/404.html',
        permanent: true
      },
      // Normalize trailing slash on 404.html (remove trailing slash)
      {
        source: '/404.html/',
        destination: '/404.html',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
