import React from 'react';
import LayananPage from './layananPage';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Layanan Jasa Pembuatan Website Profesional | ZRDigitalTech`,
    alternates: { canonical: '/layanan/' },
    description: `ZRDigitalTech menyediakan layanan pembuatan website untuk UMKM, bisnis, dan personal dengan desain menarik, kecepatan optimal, serta SEO yang mendongkrak visibilitas online Anda. Bayar setelah jadi & garansi revisi!`,
    keywords: [
      'layanan pembuatan website',
      'jasa website UMKM',
      'jasa website toko online',
      'website profesional',
      'pembuatan website SEO',
      'jasa web ZRDigitalTech'
    ],
    openGraph: {
      url: `${siteUrl}/layanan/`,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Layanan Jasa Pembuatan Website Profesional | ZRDigitalTech',
      description:
        'ZRDigitalTech menyediakan layanan pembuatan website untuk UMKM, bisnis, dan personal dengan desain menarik, kecepatan optimal, serta SEO yang mendongkrak visibilitas online Anda. Bayar setelah jadi & garansi revisi!',
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page() {
  return <LayananPage />;
}
