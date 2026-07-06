import dynamic from 'next/dynamic';

// css
import '@/assets/styles/styles.scss';

// import '@/assets/styles/miniline.css';
// import '@/assets/styles/vendor/bootstrap.min.css';
// import '@/assets/styles/main.css';
// import '@/assets/styles/responsive.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/assets/styles/vendor/slick.css';
// import '@/assets/styles/vendor/slick-theme.css';
// import '@/assets/styles/vendor/magnific-popup.css';

// layout.js
// Components
import Heads from '@/components/head';
import { siteConfig } from '@/lib/siteConfig';
import Scripts from '@/components/scripts';
import Loading from '@/components/loading';
const ReduxProvider = dynamic(() => import('@/redux/provider'), {
  ssr: false,
  loading: () => <Loading title={metadata.title} />
});

export const metadata = {
  // Basic metas
  authors: [{ name: 'ZRDigitalTech' }],
  keywords: [
    'Jasa Pembuatan Website',
    'Jasa Pembuatan Website Profesional',
    'Jasa Pembuatan Website Murah',
    'Jasa Pembuatan Website Tangerang',
    'Jasa Website',
    'Pembuatan Website Company Profile',
    'Pembuatan Website Toko Online',
    'Pembuatan Landing Page',
    'Website SEO Friendly',
    'Website Responsive',
    'Website Custom',
    'Web Developer Indonesia',
    'ZRDigitalTech',
    'Zikri Ramdani'
  ],
  manifest: '/manifest.json',
  author: 'ZRDigitalTech',
  // Page Title
  title: 'Jasa Pembuatan Website Profesional | ZRDigitalTech',
  description:
    'ZRDigitalTech menyediakan jasa pembuatan website profesional untuk perusahaan, UMKM, sekolah, instansi, toko online, landing page, dan website custom. Desain modern, responsif, SEO-friendly, serta didukung layanan maintenance dan konsultasi gratis.',
  openGraph: {
    url: `${process.env.SITE_URL || siteConfig.url}`,
    images: [`${process.env.SITE_URL || siteConfig.url}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
  }
};

// Server-rendered defaults for canonical and robots
metadata.alternates = { canonical: `${process.env.SITE_URL || siteConfig.url}` };
metadata.robots = {
  index: true,
  follow: true
};

export const viewport = {
  themeColor: '#ffffff'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <Heads
        title={metadata.title}
        description={metadata.description}
        author={metadata.author}
        keywords={metadata.keywords}
        themeColor={viewport.themeColor}
        manifest={metadata.manifest}
        url={metadata.openGraph.url}
        image={metadata.openGraph.images}
      />
      <body>
        <ReduxProvider>
          {children}
          <Scripts />
        </ReduxProvider>
      </body>
    </html>
  );
}
