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
import { siteConfig } from '@/lib/siteConfig';
import Scripts from '@/components/scripts';
import ReduxProvider from '@/redux/provider';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
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
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  title: 'Jasa Pembuatan Website Profesional | ZRDigitalTech',
  alternates: { canonical: '/' },
  description:
    'ZRDigitalTech menyediakan jasa pembuatan website profesional untuk perusahaan, UMKM, sekolah, instansi, toko online, landing page, dan website custom. Desain modern, responsif, SEO-friendly, serta didukung layanan maintenance dan konsultasi gratis.',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: 'Jasa Pembuatan Website Profesional | ZRDigitalTech',
    description:
      'Jasa pembuatan website untuk bisnis, UMKM, sekolah, dan instansi. Desain responsif, SEO-friendly, serta konsultasi gratis.',
    images: ['/assets/images/meta-zrdigitaltech.webp']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Profesional | ZRDigitalTech',
    description:
      'Jasa pembuatan website untuk bisnis, UMKM, sekolah, dan instansi. Desain responsif, SEO-friendly, serta konsultasi gratis.',
    images: ['/assets/images/meta-zrdigitaltech.webp']
  },
  verification: {
    google: 'k2M37t9tuVzPIqfQ8YS2_o-RpXnJT2D7CvIpzfnyK6A',
  }
};

export const viewport = {
  themeColor: '#ffffff'
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.logo}`,
        telephone: siteConfig.telephone,
        email: siteConfig.email,
        sameAs: siteConfig.sameAs
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { '@id': `${siteConfig.url}/#organization` },
        inLanguage: 'id-ID'
      }
    ]
  };

  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ReduxProvider>
          {children}
          <Scripts />
        </ReduxProvider>
      </body>
    </html>
  );
}
