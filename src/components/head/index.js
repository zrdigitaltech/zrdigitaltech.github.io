import Head from 'next/head';
import { Fragment } from 'react';

const Index = (props) => {
  const { title, description, author, keywords, themeColor, manifest, url, image, canonical } = props;

  const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords || '';
  const imageUrl = Array.isArray(image) ? image[0] : image;
  const siteUrl = canonical || url || process.env.SITE_URL || '';
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
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywordsContent} />
        <meta name="theme-color" content={themeColor} />
        <meta name="robots" content="index,follow" />
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="manifest" href={manifest} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />

        {/* Facebook Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:url" content={url} />
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
