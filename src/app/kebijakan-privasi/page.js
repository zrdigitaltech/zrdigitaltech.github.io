import React from 'react';
import KebijakanPrivasiPage from './kebijakanPrivasiPage';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Kebijakan Privasi | ZRDigitalTech`,
    alternates: { canonical: '/kebijakan-privasi/' },
    description: `Baca Kebijakan Privasi ZRDigitalTech untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.`,
    keywords: [
      'kebijakan privasi',
      'privasi pengguna',
      'perlindungan data',
      'ZRDigitalTech kebijakan privasi',
      'penggunaan data pribadi',
      'keamanan informasi website'
    ],
    openGraph: {
      url: `${siteUrl}/kebijakan-privasi/`,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kebijakan Privasi | ZRDigitalTech',
      description:
        'Baca Kebijakan Privasi ZRDigitalTech untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.',
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page() {
  return <KebijakanPrivasiPage />;
}
