export const cityGroups = [
  {
    region: 'Tangerang Raya',
    cities: [
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
      'pamulang',
      'ciputat',
      'ciputat-timur',
      'pondok-aren',
      'serpong-utara',
      'setu',
      'jombang',
      'pondok-cabe',
      'tangerang',
      'tangerang-selatan',
      'kabupaten-tangerang'
    ]
  },
  {
    region: 'Jabodetabek',
    cities: [
      'jakarta',
      'jakarta-pusat',
      'jakarta-utara',
      'jakarta-selatan',
      'jakarta-barat',
      'jakarta-timur',
      'bogor',
      'depok',
      'bekasi',
      'kabupaten-bekasi',
      'kabupaten-bogor'
    ]
  },
  {
    region: 'Jawa Barat',
    cities: ['bandung', 'cimahi', 'cirebon', 'garut', 'tasikmalaya', 'sukabumi']
  },
  {
    region: 'Jawa Tengah',
    cities: ['semarang', 'solo', 'surakarta', 'magelang', 'purwokerto', 'pekalongan', 'kudus']
  },
  {
    region: 'Jawa Timur',
    cities: ['surabaya', 'malang', 'kediri', 'madiun', 'sidoarjo', 'pasuruan', 'probolinggo', 'blitar']
  },
  { region: 'Yogyakarta', cities: ['yogyakarta'] },
  {
    region: 'Sumatera',
    cities: ['medan', 'padang', 'palembang', 'pekanbaru', 'jambi', 'banda-aceh', 'batam']
  },
  { region: 'Kalimantan', cities: ['balikpapan', 'samarinda', 'banjarmasin', 'pontianak'] },
  { region: 'Sulawesi', cities: ['makassar', 'manado', 'kendari', 'gorontalo'] },
  { region: 'Bali dan Nusa Tenggara', cities: ['denpasar', 'mataram'] },
  { region: 'Papua dan Maluku', cities: ['jayapura', 'ambon'] }
];

export const citySlugs = cityGroups.flatMap(({ cities }) => cities);

export function formatKota(slug) {
  if (slug === 'bsd') return 'BSD';

  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}