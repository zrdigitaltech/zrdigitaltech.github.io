import React from 'react';
import SyaratDanKetentuanPage from './syaratDanKetentuanPage';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Syarat dan Ketentuan | ZRDigitalTech`,
    alternates: { canonical: '/syarat-dan-ketentuan/' },
    description: `Baca Syarat dan Ketentuan penggunaan layanan ZRDigitalTech. Dengan mengakses layanan kami, Anda setuju pada ketentuan yang berlaku mengenai penggunaan, pembayaran, dan hak cipta.`,
    keywords: [
      'syarat dan ketentuan',
      'kebijakan layanan website',
      'ZRDigitalTech terms',
      'aturan penggunaan jasa website',
      'hak cipta website',
      'perjanjian layanan digital'
    ],
    openGraph: {
      url: `${siteUrl}/syarat-dan-ketentuan/`,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Syarat dan Ketentuan | ZRDigitalTech',
      description:
        'Baca Syarat dan Ketentuan penggunaan layanan ZRDigitalTech. Dengan mengakses layanan kami, Anda setuju pada ketentuan yang berlaku mengenai penggunaan, pembayaran, dan hak cipta.',
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page() {
  return <SyaratDanKetentuanPage />;
}
