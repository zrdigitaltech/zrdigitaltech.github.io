/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'export',
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
  ,
  async headers() {
    return [
      // Specific: 404 pages should not be indexed
      {
        source: '/404.html',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' }
        ]
      },
      {
        source: '/404.shtml',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' }
        ]
      },
      // Default: add X-Robots-Tag for all HTML routes to indicate indexability
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' }
        ]
      }
    ];
  }
};

export default nextConfig;
