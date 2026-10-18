'use client';
import './header.scss';
import React from 'react';

const Index = (props) => {
  const { kota, handlePesanSekarang } = props;
  return (
    <header
      className="banner"
      id="top"
      style={{
        '--bgAfter': `url(/assets/images/banner/banner-round-img-2.webp)`
      }}>
      <div className="container">
        <div className="banner-content">
          <h1>Jasa Pembuatan Website {kota}</h1>
          <p className="section-subheading">
            Butuh website yang tampil keren, cepat, dan mudah ditemukan di Google? Kami bantu
            wujudkan website impian Anda – mobile friendly, SEO optimal, dan desain yang memikat
            pelanggan.
          </p>
          <p className="banner-offers">
            ✅ <b>Bayar nanti aja</b> ✅ <b>Garansi revisi sampai puas</b> ✅{' '}
            <b>Bayar setelah website jadi</b>
          </p>
          <a
            href="#"
            data-toggle="modal"
            data-target="#pesan-sekarang"
            onClick={(e) => handlePesanSekarang(e, null)}
            className="custom-btn btn-big grad-style-ef page-scroll">
            DAPATKAN WEBSITE SEKARANG
          </a>
        </div>
        {/* <!-- End of .banner-content --> */}
      </div>
      {/* <!-- End of .container --> */}
    </header>
  );
};

export default Index;
