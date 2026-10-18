import React from 'react';
import TentangKamiPage from './tentangKamiPage';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Tentang Kami | ZRDigitalTech`,
    alternates: { canonical: '/tentang-kami/' },
    description: `Kenali ZRDigitalTech, penyedia jasa pembuatan website terpercaya yang berkomitmen membantu bisnis dan UMKM tampil profesional secara online. Kami mengutamakan kualitas, kecepatan, dan kepuasan klien.`,
    keywords: [
      'tentang ZRDigitalTech',
      'jasa pembuatan website',
      'pengembang website UMKM',
      'tim web developer profesional',
      'layanan digital bisnis',
      'web agency Indonesia'
    ],
    openGraph: {
      url: `${siteUrl}/tentang-kami/`,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tentang Kami | ZRDigitalTech',
      description:
        'Kenali ZRDigitalTech, penyedia jasa pembuatan website terpercaya yang berkomitmen membantu bisnis dan UMKM tampil profesional secara online. Kami mengutamakan kualitas, kecepatan, dan kepuasan klien.',
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page() {
  return <TentangKamiPage />;
}
