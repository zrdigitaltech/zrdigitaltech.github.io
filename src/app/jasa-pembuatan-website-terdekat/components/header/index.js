'use client';
import './header.scss';
import React from 'react';

const Index = () => {
  return (
    <header
      className="banner"
      id="top"
      style={{
        '--bgAfter': `url(/assets/images/banner/banner-round-img-3.webp)`,
        '--topAfter': `-52%`
      }}>
      <div className="container">
        <div className="banner-content">
          <h1>Jasa Pembuatan Website Terdekat</h1>
          <p className="section-subheading">
            Jasa Pembuatan Website Terdekat yang profesional dan terpercaya. <br />
            Melayani kebutuhan website untuk UMKM, toko online, hingga perusahaan.
          </p>
          <p className="banner-offers">
            ✅ <b>Bayar nanti aja</b> ✅ <b>Garansi revisi sampai puas</b> ✅{' '}
            <b>Bayar setelah website jadi</b>
          </p>
        </div>
        {/* <!-- End of .banner-content --> */}
      </div>
      {/* <!-- End of .container --> */}
    </header>
  );
};

export default Index;
