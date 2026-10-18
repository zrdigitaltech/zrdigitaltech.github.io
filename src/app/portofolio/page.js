import React from 'react';
import PortofolioPage from './portofolioPage';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Portofolio Jasa Pembuatan Website | ZRDigitalTech`,
    alternates: { canonical: '/portofolio/' },
    description: `Lihat hasil karya website yang telah kami buat untuk UMKM, bisnis lokal, dan perusahaan. ZRDigitalTech berpengalaman menciptakan website profesional, responsif, dan SEO friendly.`,
    keywords: [
      'portofolio website',
      'contoh website UMKM',
      'jasa pembuatan website',
      'ZRDigitalTech portofolio',
      'website bisnis',
      'web desain profesional'
    ],
    openGraph: {
      url: `${siteUrl}/portofolio/`,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Portofolio Jasa Pembuatan Website | ZRDigitalTech',
      description:
        'Lihat hasil karya website yang telah kami buat untuk UMKM, bisnis lokal, dan perusahaan. ZRDigitalTech berpengalaman menciptakan website profesional, responsif, dan SEO friendly.',
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page() {
  return <PortofolioPage />;
}
