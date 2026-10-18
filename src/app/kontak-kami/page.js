import React from 'react';
import KontakKamiPage from './kontakKamiPage';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Kontak Kami | ZRDigitalTech`,
    alternates: { canonical: '/kontak-kami/' },
    description: `Hubungi ZRDigitalTech sekarang untuk konsultasi gratis seputar pembuatan website profesional, cepat, dan SEO-friendly. Kami siap bantu kebutuhan digital Anda.`,
    keywords:
      'kontak jasa pembuatan website, jasa bikin website, hubungi ZRDigitalTech, jasa website Tangerang, jasa website Jakarta, konsultasi website gratis',
    openGraph: {
      url: `${siteUrl}/kontak-kami/`,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kontak Kami | ZRDigitalTech',
      description:
        'Hubungi ZRDigitalTech sekarang untuk konsultasi gratis seputar pembuatan website profesional, cepat, dan SEO-friendly. Kami siap bantu kebutuhan digital Anda.',
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page() {
  return <KontakKamiPage />;
}
