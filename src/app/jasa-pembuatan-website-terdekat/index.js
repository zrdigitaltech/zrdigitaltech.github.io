'use client';

import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { cityGroups, formatKota } from '@/app/jasa-pembuatan-website/areas';

// Components
import Navbar from '@/components/navbar';
import Header from '@/app/jasa-pembuatan-website-terdekat/components/header';
import Footer from '@/components/footer';

// Page
import Aboutus from '@/app/jasa-pembuatan-website-terdekat/components/about-us';
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

const ServiceAreaDirectory = () => (
  <section className="section-padding" aria-labelledby="service-area-title">
    <div className="container">
      <h2 id="service-area-title">Area layanan pembuatan website</h2>
      <p>
        Kantor utama ZRDigitalTech berada di Tangerang. Kami melayani proyek website untuk bisnis
        di berbagai wilayah berikut; daftar ini menunjukkan cakupan layanan, bukan alamat kantor
        cabang.
      </p>
      <div className="row">
        {cityGroups.map(({ region, cities }) => (
          <div className="col-md-4 mb-4" key={region}>
            <h3>{region}</h3>
            <ul>
              {cities.map((city) => (
                <li key={city}>
                  <Link href={`/jasa-pembuatan-website/${city}/`}>{formatKota(city)}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Index = (props) => {
  const { slug } = props;

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
      <Header />
      <Aboutus />
      <ServiceAreaDirectory />
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
