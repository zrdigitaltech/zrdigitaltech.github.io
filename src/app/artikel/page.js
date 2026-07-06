import React from 'react';
import ArtikelPage from './artikelPage';

export async function generateMetadata() {
  return {
    title: `Artikel Website, SEO & Digital Marketing | ZRDigitalTech`,
    description: `Temukan artikel terbaru seputar pembuatan website, SEO, digital marketing, website bisnis, UMKM, landing page, toko online, serta berbagai tips untuk meningkatkan kehadiran dan penjualan bisnis Anda secara online.`,
    keywords:
      'Artikel Website,Artikel SEO,Artikel Digital Marketing,Tips Website,Pembuatan Website,Website Company Profile,Website Toko Online,Landing Page,SEO Website,Optimasi Website,Bisnis Online,Marketing Digital,UMKM,Web Developer,ZRDigitalTech',
    openGraph: {
      url: `${process.env.SITE_URL}/artikel`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <ArtikelPage />;
}
