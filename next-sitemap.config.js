/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zrdigitaltech.com',
  outDir: 'out',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    let priority = 0.7;

    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/jasa-pembuatan-website')) {
      priority = 0.9;
    } else if (
      path === '/layanan' ||
      path === '/tentang-kami' ||
      path === '/portofolio' ||
      path === '/harga' ||
      path === '/artikel' ||
      path === '/kontak-kami'
    ) {
      priority = 0.8;
    }

    return {
      loc: path,
      changefreq: 'weekly',
      priority: priority
    };
  }
};
