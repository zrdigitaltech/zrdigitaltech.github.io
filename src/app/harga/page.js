import React from 'react';
import HargaPage from './hargaPage';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Harga Jasa Pembuatan Website | ZRDigitalTech`,
    alternates: { canonical: '/harga/' },
    description: `Lihat daftar harga jasa pembuatan website di ZRDigitalTech. Mulai dari paket website UMKM, toko online, hingga website perusahaan. Gratis revisi & bayar setelah jadi!`,
    keywords: [
      'harga jasa pembuatan website',
      'biaya buat website',
      'paket website murah',
      'harga website UMKM',
      'harga website toko online',
      'jasa website profesional',
      'ZRDigitalTech harga website'
    ],
    openGraph: {
      url: `${siteUrl}/harga/`,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Harga Jasa Pembuatan Website | ZRDigitalTech',
      description:
        'Lihat daftar harga jasa pembuatan website di ZRDigitalTech. Mulai dari paket website UMKM, toko online, hingga website perusahaan. Gratis revisi & bayar setelah jadi!',
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page() {
  return <HargaPage />;
}
