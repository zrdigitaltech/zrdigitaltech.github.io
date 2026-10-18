'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListBidangBisnis } from '@/redux/action/bidang-bisnis/creator';
import IconScroll from '@/components/iconScroll';

const Index = () => {
  const bidangBisnisList = useSelector((state) => state.bidangBisnis.bidangBisnisList);
  const dispatch = useDispatch();

  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContainerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const fetchBidangBisnisList = async () => {
    dispatch(getListBidangBisnis());
  };

  useEffect(() => {
    setIsLargeScreen(window.innerWidth <= 768);
    fetchBidangBisnisList();
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-0">
            Kami Siap Melayani <br /> <span className="txt-grad-ef">Kebutuhan Bisnis Anda</span>
          </h2>
          <p className="">
            Kami menyediakan <b>berbagai kategori website</b> sesuai <b>kebutuhan bisnis Anda</b>.{' '}
            <b>Hubungi kami</b> untuk <b>konsultasi</b> dan wujudkan <b>website impian Anda</b>!
          </p>
        </div>
        <div className="position-relative">
          <div
            ref={scrollContainerRef}
            className="scroll-x d-xs-flex sm-row"
            style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}
          >
            {bidangBisnisList.map((item, i) => (
              <div key={item?.id || i} className="col-lg-3 col-md-6 m-b-30 col-11">
                <div className="service-box text-center content-block">
                  <div className="box-bg grad-style-cd"></div>
                  <span className="grad-style-cd-light">
                    <img src={item?.image} alt={item?.title} style={{ width: '150px' }} />
                  </span>
                  <h5 className="text-center">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- End of .row --> */}
          {/* Right Arrow Icon */}
          {bidangBisnisList?.length > 1 && showScrollIcon && (
            <IconScroll
              scrollContainerRef={scrollContainerRef}
              setShowScrollIcon={setShowScrollIcon}
              querySelector=".scroll-x"
              style={{ display: isLargeScreen ? 'block' : 'none' }}
              setIsLargeScreen={setIsLargeScreen}
            />
          )}
        </div>
      </div>
      {/* <!-- End of .container --> */}
    </section>
  );
};

export default Index;
