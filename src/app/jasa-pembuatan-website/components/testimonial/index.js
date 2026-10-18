'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListTestimonial } from '@/redux/action/testimonial/creator';

import IconScroll from '@/components/iconScroll';

const Index = () => {
  const testimonialList = useSelector((state) => state.testimonial.testimonialList);
  const dispatch = useDispatch();

  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContainerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const fetchTestimonialList = async () => {
    dispatch(getListTestimonial());
  };

  useEffect(() => {
    setIsLargeScreen(window.innerWidth <= 768);
    fetchTestimonialList();
  }, []);

  return (
    <section className="services" id="services">
      <div className="container ">
        <div className="text-center">
          <h2 className="mb-0">
            Ingin tahu pengalaman klien kami dengan <br />
            <span className="txt-grad-ef">Jasa Website ZRDigitalTech</span>
          </h2>
          <p className="">Ini dia beberapa cerita dari mereka…</p>
        </div>
        <div className="position-relative">
          <div
            ref={scrollContainerRef}
            className="d-flex scrollX"
            style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}
          >
            {testimonialList?.map((item, i) => (
              <div key={item?.id || i} className="col-lg-4 col-md-6 m-b-30 col-11">
                <div className="service-box text-center content-block">
                  <div className="box-bg grad-style-cd"></div>
                  <p>{item?.description}</p>
                  <h5 className="text-center">{item?.nama}</h5>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- End of .row --> */}
          {/* Right Arrow Icon */}
          {testimonialList?.length > 1 && showScrollIcon && (
            <IconScroll
              scrollContainerRef={scrollContainerRef}
              setShowScrollIcon={setShowScrollIcon}
              querySelector=".scrollX"
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
