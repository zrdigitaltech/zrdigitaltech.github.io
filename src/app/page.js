'use client';

import React, { Fragment, useEffect, useState } from 'react';

// Components
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Page
import Services from '@/app/layanan';
import Aboutus from '@/app/tentang-kami';
import Portofolio from '@/app/portofolio';
import CaseStudy from '@/app/case-study';
// import Team from '@/app/team';
import Harga from '@/app/harga';
import Partners from '@/app/partners';
import Artikel from '@/app/artikel';
import Contactus from '@/app/kontak-kami';

import PrivacyModal from '@/app/kebijakan-privasi';
import TermsModal from '@/app/syarat-dan-ketentuan';

// import { FloatingWhatsApp } from 'react-floating-whatsapp';

// import { useSelector, useDispatch } from 'react-redux';
// import { getListFloatingWhatsapp } from '@/redux/action/floating-whatsapp/creator';

import PesanSekarangModal from '@/app/modals/pesan-sekarang';
import TerimaKasihModal from '@/app/modals/terima-kasih';

import {
  loadJquery,
  loadGoogleAnalytics,
  loadGoogleTagManager,
  loadGoogleAnalyticsZRDigitalTech,
  loadFacebookPixel,
  loadGoogleTagManagerZRDigitalTech
  // loadTiktokPixel
} from '@/lib/loadAnalytic';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = (props) => {
  const { slug } = props;

  // const floatingWhatsappList = useSelector((state) => state.floatingWhatsapp.floatingWhatsappList);
  // const dispatch = useDispatch();

  const [dataProducts, setDataProducts] = useState({});

  // const fetchFloatingWhatsapp = async () => {
  //   dispatch(getListFloatingWhatsapp());
  // };

  const handlePesanSekarang = async (e, products) => {
    setDataProducts(products);
  };

  useEffect(() => {
    AOS.init();
    loadJquery();
    loadGoogleAnalyticsZRDigitalTech();
    loadGoogleAnalytics();
    loadGoogleTagManager();
    loadFacebookPixel();
    loadGoogleTagManagerZRDigitalTech();
    // loadTiktokPixel();
    // fetchFloatingWhatsapp();
  }, []);

  return (
    <Fragment>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-59BFX4S"
          height="0"
          width="0"
          style="display:none;visibility:hidden"></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      {/* <!-- Google Tag Manager ZRDigitalTech (noscript) --> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBWG8BW9"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      {/* <!-- End Google Tag Manager ZRDigitalTech (noscript) --> */}

      <Navbar />
      <Header />
      <Services />
      <Aboutus />
      <Portofolio handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <CaseStudy handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      {/* <Team /> */}
      <Harga handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <Partners />
      <Artikel slug={slug} />
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

export default Home;
