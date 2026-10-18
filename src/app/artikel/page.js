import React from 'react';
import ArtikelPage from './artikelPage';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Artikel Website, SEO & Digital Marketing | ZRDigitalTech`,
    alternates: { canonical: '/artikel/' },
    description: `Temukan artikel terbaru seputar pembuatan website, SEO, digital marketing, website bisnis, UMKM, landing page, toko online, serta berbagai tips untuk meningkatkan kehadiran dan penjualan bisnis Anda secara online.`,
    keywords:
      'Artikel Website,Artikel SEO,Artikel Digital Marketing,Tips Website,Pembuatan Website,Website Company Profile,Website Toko Online,Landing Page,SEO Website,Optimasi Website,Bisnis Online,Marketing Digital,UMKM,Web Developer,ZRDigitalTech',
    openGraph: {
      url: `${siteUrl}/artikel/`,
      images: [`${siteUrl}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Artikel Website, SEO & Digital Marketing | ZRDigitalTech',
      description:
        'Temukan artikel terbaru seputar pembuatan website, SEO, digital marketing, website bisnis, UMKM, landing page, toko online, serta berbagai tips untuk meningkatkan kehadiran dan penjualan bisnis Anda secara online.',
      images: [`${siteUrl}/assets/images/featured-projects/featured-project-1.jpg`]
    }
  };
}

export default function Page() {
  return <ArtikelPage />;
}
