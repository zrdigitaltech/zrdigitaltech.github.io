import KotaPage from '@/app/[slug]/index';

function formatKota(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }) {
  const { kota } = params;
  const kotaDisplay = formatKota(kota);

  return {
    title: `Jasa Pembuatan Website ${kotaDisplay} | ZRDigitalTech`,
    description: `Butuh jasa pembuatan website profesional di ${kotaDisplay}? ZRDigitalTech siap bantu wujudkan website bisnis yang menarik, cepat, dan SEO friendly. Gratis revisi & bayar setelah jadi!`,
    openGraph: {
      url: `${process.env.SITE_URL}/jasa-pembuatan-website/${kota}`,
      images: [`${process.env.SITE_URL}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page({ params }) {
  const { kota } = params;
  const kotaDisplay = formatKota(kota);
  return <KotaPage kota={kotaDisplay} />;
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
