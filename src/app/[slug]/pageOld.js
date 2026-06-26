import KotaPage from './index';

export async function generateMetadata({ params }) {
  const { slug } = params;

  const kotaSlug = slug.replace('jasa-pembuatan-website-', '');

  const kota = kotaSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Jasa Pembuatan Website ${kota} | ZRDigitalTech`,
    description: `Butuh jasa pembuatan website profesional di ${kota}? ZRDigitalTech siap bantu wujudkan website bisnis yang menarik, cepat, dan SEO friendly. Gratis revisi & bayar setelah jadi!`,
    keywords: [
      `jasa pembuatan website ${kota}`,
      `jasa website ${kota}`,
      `bikin website ${kota}`,
      `website murah ${kota}`,
      `jasa buat website ${kota}`,
      `jasa desain website ${kota}`,
      `developer website ${kota}`
    ],
    openGraph: {
      url: `${process.env.SITE_URL}/jasa-pembuatan-website-${kotaSlug}`,
      images: [`${process.env.SITE_URL}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    }
  };
}

export default function Page({ params }) {
  const { slug } = params;

  const kotaSlug = slug.replace('jasa-pembuatan-website-', '');

  const kota = kotaSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return <KotaPage kota={kota} />;
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

  return cities.map((city) => ({
    slug: `jasa-pembuatan-website-${city}`
  }));
}
