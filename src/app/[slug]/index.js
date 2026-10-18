'use client';

import React, { Fragment, useEffect, useState } from 'react';

// Components
import Navbar from '@/components/navbar';
import Header from '@/app/[slug]/components/header';
import Footer from '@/components/footer';

// Page
import Services from '@/app/layanan';
import Aboutus from '@/app/[slug]/components/about-us';
import FeaturedProjects from '@/app/portofolio';
import CaseStudy from '@/app/case-study';
// import Team from '@/app/team';
import Pricing from '@/app/harga';
import Partners from '@/app/partners';
import LatestNews from '@/app/artikel';
import Contactus from '@/app/kontak-kami';

import PrivacyModal from '@/app/kebijakan-privasi';
import TermsModal from '@/app/syarat-dan-ketentuan';

import PesanSekarangModal from '@/app/modals/pesan-sekarang';
import TerimaKasihModal from '@/app/modals/terima-kasih';

import { loadJquery } from '@/lib/loadAnalytic';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = (props) => {
  const { slug, kota, localFaqs = [] } = props;

  const [dataProducts, setDataProducts] = useState({});

  const handlePesanSekarang = async (e, products) => {
    setDataProducts(products);
  };

  useEffect(() => {
    AOS.init();
    loadJquery();
  }, []);

  return (
    <Fragment>
      <Navbar page="artikel" />
      <Header kota={kota} handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <Services />
      <Aboutus kota={kota} />
      <section className="section-padding" aria-labelledby="location-services-title">
        <div className="container">
          <h2 id="location-services-title">Layanan website untuk bisnis di {kota}</h2>
          <p>
            ZRDigitalTech melayani kebutuhan website untuk usaha dan organisasi di {kota}. Alamat
            kantor utama tercantum di Tangerang; halaman ini menjelaskan jangkauan layanan, bukan
            keberadaan kantor cabang di setiap kota.
          </p>
          <h3>Pilih website sesuai tujuan bisnis</h3>
          <p>
            Website company profile membantu menjelaskan usaha dan layanan. Toko online menyajikan
            katalog produk, sementara landing page memusatkan informasi pada satu penawaran. Untuk
            kebutuhan berbeda, ruang lingkup website custom dibahas saat konsultasi.
          </p>
          <h3>Tahapan pengerjaan</h3>
          <ol>
            <li>Konsultasi tujuan, pelanggan, isi, dan fitur yang dibutuhkan.</li>
            <li>Penentuan ruang lingkup, jadwal, serta estimasi biaya sebelum pengerjaan.</li>
            <li>Desain dan pengembangan website, dilanjutkan peninjauan hasil.</li>
            <li>Perbaikan sesuai ruang lingkup dan serah terima website.</li>
          </ol>
          <h3>Pertanyaan tentang layanan di {kota}</h3>
          {localFaqs.map(({ question, answer }) => (
            <div key={question}>
              <h4>{question}</h4>
              <p>{answer}</p>
            </div>
          ))}
          <a href="/kontak-kami/" className="custom-btn btn-big grad-style-ef">
            Konsultasi kebutuhan website
          </a>
        </div>
      </section>
      <FeaturedProjects handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <CaseStudy handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      {/* <Team /> */}
      <Pricing handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <Partners />
      <LatestNews slug={slug} />
      <Contactus handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <Footer />

      <PesanSekarangModal dataProducts={dataProducts} />
      <TerimaKasihModal />
      <PrivacyModal />
      <TermsModal />

      {/* {floatingWhatsappList && (
        <FloatingWhatsApp
          avatar={floatingWhatsappList.avatar}
          phoneNumber={floatingWhatsappList.phone_number}
          accountName={floatingWhatsappList.account_name}
          chatMessage={floatingWhatsappList.chat_message}
          statusMessage={floatingWhatsappList.status_message}
          darkMode={true}
          styles={{
            position: 'fixed',
            bottom: '15px',
            border: '0'
          }}
          className="custom-whatsapp-button"
          placeholder="Ketik pesan..."
        />
      )} */}
    </Fragment>
  );
};

export default Index;
