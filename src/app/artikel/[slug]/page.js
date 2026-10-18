import DataLatestNews from '@/redux/action/latest-news/data-latest-news.json';
import { siteConfig } from '@/lib/siteConfig';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

async function fetchSlugs() {
  const slugs = DataLatestNews.map((item) => item?.slug);
  return slugs;
}

function getArticleDescription(data) {
  return (
    data?.meta_description?.trim() ||
    data?.description?.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160) ||
    ''
  );
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
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `${data?.title} | ZRDigitalTech`,
    description: getArticleDescription(data),
    openGraph: {
      title: `${data?.title} | ZRDigitalTech`,
      description: getArticleDescription(data),
      url: `${siteUrl}/artikel/${slug}/`,
      images: data?.banner ? [`${siteUrl}${data.banner}`] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data?.title} | ZRDigitalTech`,
      description: getArticleDescription(data),
      images: data?.banner ? [`${siteUrl}${data.banner}`] : []
    },
    // Add server-rendered canonical and robots metadata
    alternates: { canonical: `/artikel/${slug}/` },
    robots: { index: true, follow: true }
  };
}

const LatestNews = ({ params }) => {
  const { slug } = params;

  const data = DataLatestNews.find((item) => item.slug === slug) || {};

  const base = process.env.SITE_URL || siteConfig.url || '';
  const articleUrl = `${base.replace(/\/$/, '')}/artikel/${slug}/`;

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
    description: getArticleDescription(data),
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
      <Navbar page="artikel" />
      <main className="latest-news section-padding">
        <div className="container">
          <article>
            <header className="mb-4">
              <p>{data.date}</p>
              <h1>{data.title}</h1>
            </header>
            {data.image && <img src={data.image} alt={data.title} className="img-fluid mb-4" />}
            <div dangerouslySetInnerHTML={{ __html: data.description || '' }} />
          </article>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
};

export default LatestNews;
