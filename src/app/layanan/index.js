'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListServices } from '@/redux/action/services/creator';

import IconScroll from '@/components/iconScroll';

const Index = () => {
  const servicesList = useSelector((state) => state.services.servicesList);
  const dispatch = useDispatch();

  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContainerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const fetchServicesList = async () => {
    dispatch(getListServices());
  };

  useEffect(() => {
    setIsLargeScreen(window.innerWidth <= 768);
    fetchServicesList();
  }, []);

  return (
    <section className="services" id="layanan">
      <div className="container position-relative">
        <div
          className="d-flex scrollX"
          ref={scrollContainerRef}
          style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}>
          {servicesList.map((item, i) => (
            <div key={item?.id || i} className="col-lg-4 col-md-6 m-b-30 col-11">
              <div className="service-box text-center content-block">
                <div className="box-bg grad-style-cd"></div>
                <span className="icon-container grad-style-cd-light">
                  <i className={item.image}></i>
                </span>
                <h2
                  className="text-center"
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: '700'
                  }}>
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- End of .row --> */}
        {servicesList?.length > 1 && showScrollIcon && (
          <IconScroll
            scrollContainerRef={scrollContainerRef}
            setShowScrollIcon={setShowScrollIcon}
            querySelector=".scrollX"
            style={{ display: isLargeScreen ? 'block' : 'none' }}
            setIsLargeScreen={setIsLargeScreen}
          />
        )}
      </div>
      {/* <!-- End of .container --> */}
    </section>
  );
};

export default Index;
