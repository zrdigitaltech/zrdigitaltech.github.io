import Head from 'next/head';
import { Fragment } from 'react';
import { siteConfig } from '../../lib/siteConfig';

const Index = (props) => {
  const { title, description, author, keywords, themeColor, manifest, url, image, canonical } = props;

  const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords || '';
  const imageUrl = Array.isArray(image) ? image[0] : image;
  const siteBase = process.env.SITE_URL || siteConfig.url || '';

  // Build a normalized canonical URL:
  // - if `canonical` prop is provided, use it
  // - else if `url` is a full URL, use it
  // - else if `url` is a path, join with siteBase
  // - else fall back to siteBase
  const normalize = (u) => (u ? String(u).trim() : '');
  const isFull = (u) => /^https?:\/\//i.test(u);

  let siteUrl = '';
  const canonProp = normalize(canonical);
  const urlProp = normalize(url);

  if (canonProp) {
    siteUrl = canonProp;
  } else if (urlProp) {
    siteUrl = isFull(urlProp) ? urlProp : `${siteBase.replace(/\/$/, '')}${urlProp.startsWith('/') ? urlProp : `/${urlProp}`}`;
  } else {
    siteUrl = siteBase;
  }

  const orgId = siteUrl ? `${siteUrl}#organization` : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: author || title,
        url: siteUrl,
        logo: siteUrl ? `${siteUrl}/assets/images/512x512.png` : undefined
      },
      {
        '@type': 'WebSite',
        url: siteUrl,
        name: title,
        publisher: orgId ? { '@id': orgId } : undefined
      }
    ]
  };

  return (
    <Fragment>
      <Head>
        {/* Page Title */}
        <title>{title}</title>

        {/* Required viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Basic metas */}
        <meta name="robots" content="index,follow" />
        {/* Emit canonical when explicitly provided or when `url` prop exists (full URL or path). */}
        {canonProp || urlProp ? <link rel="canonical" href={siteUrl} /> : null}
        <meta name="theme-color" content={themeColor} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywordsContent} />
        <link rel="manifest" href={manifest} />

        {/* Facebook Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={title} />
          <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card */}
        <meta property="twitter:image:alt" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@zrdigitaltech" />
        <meta name="twitter:creator" content="@zrdigitaltech" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
    </Fragment>
  );
};

export default Index;
