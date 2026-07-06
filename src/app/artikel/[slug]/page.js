import DataLatestNews from '@/redux/action/latest-news/data-latest-news.json';
import Page from '@/app/page';
import Head from 'next/head';
import { siteConfig } from '@/lib/siteConfig';

async function fetchSlugs() {
  const slugs = DataLatestNews.map((item) => item?.slug);
  return slugs;
}

export async function generateStaticParams() {
  const slugs = await fetchSlugs();
  return slugs.map((slug) => ({
    slug: slug.toString() // Convert slug to string
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = DataLatestNews.find((item) => item.slug === slug);

  return {
    title: `${data?.title} | ZRDigitalTech`,
    description: data?.meta_description,
    openGraph: {
      url: `${process.env.SITE_URL || siteConfig.url}/artikel/${slug}`,
      images: `${process.env.SITE_URL || siteConfig.url}${data?.banner}`
    }
    ,
    // Add server-rendered canonical and robots metadata
    alternates: { canonical: `${process.env.SITE_URL || siteConfig.url}/artikel/${slug}` },
    robots: { index: true, follow: true }
  };
}

const LatestNews = ({ params }) => {
  const { slug } = params;

  const data = DataLatestNews.find((item) => item.slug === slug) || {};

  const base = process.env.SITE_URL || siteConfig.url || '';
  const articleUrl = `${base.replace(/\/$/, '')}/artikel/${slug}`;

  function parseDateToISO(dateStr) {
    if (!dateStr) return undefined;
    // try native parse first
    let d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d.toISOString();

    // map Indonesian month names to English
    const map = {
      Januari: 'January',
      Februari: 'February',
      Maret: 'March',
      April: 'April',
      Mei: 'May',
      Juni: 'June',
      Juli: 'July',
      Agustus: 'August',
      September: 'September',
      Oktober: 'October',
      November: 'November',
      Desember: 'December'
    };

    let replaced = dateStr;
    Object.keys(map).forEach((id) => {
      const re = new RegExp(id, 'gi');
      replaced = replaced.replace(re, map[id]);
    });

    d = new Date(replaced);
    if (!isNaN(d.getTime())) return d.toISOString();
    return undefined;
  }

  const datePublishedISO = parseDateToISO(data.date);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl
    },
    headline: data.title || '',
    image: data.image ? [`${base.replace(/\/$/, '')}${data.image}`] : [],
    datePublished: datePublishedISO,
    description: data.meta_description || data.description?.replace(/<[^>]+>/g, '').slice(0, 200) || '',
    author: {
      '@type': 'Person',
      name: data.author || 'ZRDigitalTech'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZRDigitalTech',
      logo: {
        '@type': 'ImageObject',
        url: `${base.replace(/\/$/, '')}/assets/images/512x512.png`
      }
    }
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={articleUrl} />
      </Head>
      <Page slug={slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
};

export default LatestNews;
