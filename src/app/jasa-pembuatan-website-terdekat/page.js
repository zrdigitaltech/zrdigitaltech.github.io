import React from 'react';
import JasaPembuatanWebsiteTerdekatPage from './index';

export async function generateMetadata() {
  return {
    title: `Jasa Pembuatan Website Terdekat | Profesional & SEO Friendly`,
    description: 'Sedang mencari jasa pembuatan website terdekat? ZRDigitalTech melayani pembuatan website company profile, toko online, landing page, sekolah, instansi, UMKM, hingga website custom dengan desain profesional, responsif, SEO-friendly, dan harga mulai Rp 1,5 juta.',
    keywords: 'Jasa Pembuatan Website Terdekat,Jasa Pembuatan Website,Jasa Website,Web Developer,Website Company Profile,Website Toko Online,Landing Page,Website UMKM,Website Custom,Website SEO Friendly,Website Responsive,ZRDigitalTech',
    openGraph: {
      title: `Jasa Pembuatan Website Terdekat | Profesional & SEO Friendly`,
      description: `ZRDigitalTech melayani jasa pembuatan website company profile, toko online, landing page, sekolah, instansi, UMKM, dan website custom dengan desain modern, responsif, dan SEO-friendly.`,
      url: `${process.env.SITE_URL}/jasa-pembuatan-website-terdekat`,
      images: [`${process.env.SITE_URL}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <JasaPembuatanWebsiteTerdekatPage />;
}
