import KotaPage from '@/app/[slug]/index';
import { siteConfig } from '@/lib/siteConfig';
import { citySlugs, formatKota } from '@/app/jasa-pembuatan-website/areas';

export async function generateMetadata({ params }) {
  const { kota } = params;
  const kotaDisplay = formatKota(kota);
  const siteUrl = siteConfig.url.replace(/\/$/, '');
  const title = `Jasa Pembuatan Website ${kotaDisplay} | ZRDigitalTech`;
  const description = `Layanan website untuk bisnis di ${kotaDisplay}: company profile, toko online, landing page, dan website custom. Konsultasi kebutuhan bersama ZRDigitalTech.`;
  const url = `${siteUrl}/jasa-pembuatan-website/${kota}/`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
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
  const siteUrl = siteConfig.url.replace(/\/$/, '');
  const canonical = `${siteUrl}/jasa-pembuatan-website/${kota}/`;
  const localFaqs = [
    {
      question: `Apakah ZRDigitalTech melayani pembuatan website di ${kotaDisplay}?`,
      answer: `Ya. ZRDigitalTech melayani proyek website untuk bisnis di ${kotaDisplay}. Alamat kantor utama kami berada di ${siteConfig.address.addressLocality}; halaman ini menjelaskan area layanan, bukan klaim kantor cabang di ${kotaDisplay}.`
    },
    {
      question: 'Jenis website apa yang dapat dibuat?',
      answer:
        'Layanan mencakup website company profile, toko online, landing page, website sekolah atau instansi, dan website custom sesuai kebutuhan proyek.'
    },
    {
      question: 'Bagaimana tahapan pembuatan website?',
      answer:
        'Proyek dimulai dengan konsultasi kebutuhan, dilanjutkan penentuan ruang lingkup, perencanaan, desain dan pengembangan, lalu peninjauan sebelum website diserahkan.'
    },
    {
      question: 'Apa yang perlu disiapkan sebelum konsultasi?',
      answer:
        'Siapkan tujuan website, profil usaha, informasi produk atau layanan, target pelanggan, serta fitur dan referensi desain yang dibutuhkan. Rincian biaya ditentukan berdasarkan ruang lingkup proyek.'
    }
  ];

  // Describe a service area without implying a physical branch in every city.
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
            item: `${siteUrl}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Jasa Pembuatan Website Terdekat',
            item: `${siteUrl}/jasa-pembuatan-website-terdekat/`
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
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: `Jasa Pembuatan Website ${kotaDisplay}`,
        serviceType: 'Pembuatan website',
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'AdministrativeArea', name: kotaDisplay },
        url: canonical
      },
      {
        '@type': 'FAQPage',
        mainEntity: localFaqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer }
        }))
      }
    ]
  };

  return (
    <>
      <KotaPage kota={kotaDisplay} localFaqs={localFaqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

export function generateStaticParams() {
  return citySlugs.map((kota) => ({ kota }));
}
