import KotaPage from '@/app/[slug]/index';
import { siteConfig } from '@/lib/siteConfig';

function formatKota(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }) {
  const { kota } = params;
  const kotaDisplay = formatKota(kota);
  const title = `Jasa Pembuatan Website ${kotaDisplay} | ZRDigitalTech`;
  const description = `Butuh jasa pembuatan website profesional di ${kotaDisplay}? ZRDigitalTech siap bantu wujudkan website bisnis yang menarik, cepat, dan SEO friendly. Gratis revisi & bayar setelah jadi!`;
  const url = `${process.env.SITE_URL || siteConfig.url}/jasa-pembuatan-website/${kota}`;

  return {
    title,
    description,
    openGraph: {
      url,
      images: [`${process.env.SITE_URL || siteConfig.url}/assets/images/meta-zrdigitaltech.webp`]
    },
    alternates: {
      canonical: url
    },
    robots: { index: true, follow: true }
  };
}

export default function Page({ params }) {
  const { kota } = params;
  const kotaDisplay = formatKota(kota);
  const canonical = `${process.env.SITE_URL}/jasa-pembuatan-website/${kota}`;

  // JSON-LD for Breadcrumb + LocalBusiness
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: process.env.SITE_URL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Jasa Pembuatan Website',
            item: `${process.env.SITE_URL}/jasa-pembuatan-website`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: kotaDisplay,
            item: canonical
          }
        ]
      },
      {
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.telephone,
        email: siteConfig.email,
        sameAs: siteConfig.sameAs,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: kotaDisplay,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry
        },
        logo: siteConfig.logo,
        openingHours: siteConfig.openingHours
      }
    ]
  };

  return (
    <>
      <KotaPage kota={kotaDisplay} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

export async function generateStaticParams() {
  const cities = [
    // Sekitar Tangerang
    'ciledug',
    'cipondoh',
    'cikupa',
    'bsd',
    'serpong',
    'bintaro',
    'karawaci',
    'cikokol',
    'alam-sutera',
    'gading-serpong',

    // Sekitar Tangsel
    'pamulang',
    'ciputat',
    'ciputat-timur',
    'pondok-aren',
    'serpong-utara',
    'setu',
    'jombang',
    'pondok-cabe',

    // Jabodetabek utama
    'jakarta',
    'jakarta-pusat',
    'jakarta-utara',
    'jakarta-selatan',
    'jakarta-barat',
    'jakarta-timur',
    'bogor',
    'depok',
    'tangerang',
    'tangerang-selatan',
    'bekasi',
    'kabupaten-bekasi',
    'kabupaten-bogor',
    'kabupaten-tangerang',

    // Jawa Barat
    'bandung',
    'cimahi',
    'cirebon',
    'garut',
    'tasikmalaya',
    'sukabumi',

    // Jawa Tengah
    'semarang',
    'solo',
    'surakarta',
    'magelang',
    'purwokerto',
    'pekalongan',
    'kudus',

    // Jawa Timur
    'surabaya',
    'malang',
    'kediri',
    'madiun',
    'sidoarjo',
    'pasuruan',
    'probolinggo',
    'blitar',

    // Yogyakarta
    'yogyakarta',

    // Sumatera
    'medan',
    'padang',
    'palembang',
    'pekanbaru',
    'jambi',
    'banda-aceh',
    'batam',

    // Kalimantan
    'balikpapan',
    'samarinda',
    'banjarmasin',
    'pontianak',

    // Sulawesi
    'makassar',
    'manado',
    'kendari',
    'gorontalo',

    // Bali & NTB
    'denpasar',
    'mataram',

    // Papua & Maluku
    'jayapura',
    'ambon'
  ];

  return cities.map((city) => ({ kota: city }));
}
