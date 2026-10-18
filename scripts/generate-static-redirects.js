const fs = require('node:fs');
const path = require('node:path');

const siteUrl = (process.env.SITE_URL || 'https://zrdigitaltech.com').replace(/\/$/, '');
const cityRoutesDirectory = path.join('out', 'jasa-pembuatan-website');

if (!fs.existsSync(cityRoutesDirectory)) {
  throw new Error(`Static city routes not found: ${cityRoutesDirectory}`);
}

const citySlugs = fs
  .readdirSync(cityRoutesDirectory, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(cityRoutesDirectory, entry.name, 'index.html')))
  .map((entry) => entry.name)
  .filter((slug) => /^[a-z0-9-]+$/.test(slug));

for (const citySlug of citySlugs) {
  const destinationPath = `/jasa-pembuatan-website/${citySlug}/`;
  const destinationUrl = `${siteUrl}${destinationPath}`;
  const aliasDirectory = path.join('out', `jasa-pembuatan-website-${citySlug}`);
  const html = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, follow">
    <link rel="canonical" href="${destinationUrl}">
    <meta http-equiv="refresh" content="0;url=${destinationPath}">
    <title>Halaman dipindahkan</title>
  </head>
  <body>
    <p>Halaman ini telah dipindahkan. <a href="${destinationPath}">Lanjutkan ke halaman baru</a>.</p>
  </body>
</html>
`;

  fs.mkdirSync(aliasDirectory, { recursive: true });
  fs.writeFileSync(path.join(aliasDirectory, 'index.html'), html);
}

const legacy404Html = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
    <link rel="canonical" href="${siteUrl}/404.html">
    <meta http-equiv="refresh" content="0;url=/404.html">
    <title>Halaman tidak ditemukan</title>
  </head>
  <body>
    <p>Halaman tidak ditemukan. <a href="/404.html">Lihat halaman 404</a>.</p>
  </body>
</html>
`;

fs.writeFileSync(path.join('out', '404.shtml'), legacy404Html);

console.log(`Generated ${citySlugs.length} static city redirect pages.`);