import React from 'react';
import JasaPembuatanWebsiteTerdekatPage from './index';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    title: `Jasa Pembuatan Website Terdekat | Profesional & SEO Friendly`,
    alternates: { canonical: '/jasa-pembuatan-website-terdekat/' },
    description: 'Sedang mencari jasa pembuatan website terdekat? ZRDigitalTech melayani pembuatan website company profile, toko online, landing page, sekolah, instansi, UMKM, hingga website custom dengan desain profesional, responsif, SEO-friendly, dan harga mulai Rp 1,5 juta.',
    keywords: 'Jasa Pembuatan Website Terdekat,Jasa Pembuatan Website,Jasa Website,Web Developer,Website Company Profile,Website Toko Online,Landing Page,Website UMKM,Website Custom,Website SEO Friendly,Website Responsive,ZRDigitalTech',
    openGraph: {
      title: `Jasa Pembuatan Website Terdekat | Profesional & SEO Friendly`,
      description: `ZRDigitalTech melayani jasa pembuatan website company profile, toko online, landing page, sekolah, instansi, UMKM, dan website custom dengan desain modern, responsif, dan SEO-friendly.`,
      url: `${siteUrl}/jasa-pembuatan-website-terdekat/`,
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jasa Pembuatan Website Terdekat | Profesional & SEO Friendly',
      description:
        'Sedang mencari jasa pembuatan website terdekat? ZRDigitalTech melayani pembuatan website company profile, toko online, landing page, sekolah, instansi, UMKM, hingga website custom dengan desain profesional, responsif, SEO-friendly, dan harga mulai Rp 1,5 juta.',
      images: [`${siteUrl}/assets/images/meta-zrdigitaltech.webp`]
    }
  };
}

export default function Page() {
  return <JasaPembuatanWebsiteTerdekatPage />;
}
