'use client';

import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>

      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak tersedia atau mungkin telah dipindahkan.</p>
        <a href="/">Kembali ke Beranda</a>
      </div>
    </>
  );
};

export default Index;