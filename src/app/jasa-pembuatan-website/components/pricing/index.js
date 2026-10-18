'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListPricing } from '@/redux/action/pricing/creator';
import IconScroll from '@/components/iconScroll';

const Index = (props) => {
  const { handlePesanSekarang } = props;
  const pricingList = useSelector((state) => state.pricing.pricingList);
  const dispatch = useDispatch();

  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContainerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const fetchPricingList = async () => {
    dispatch(getListPricing());
  };

  useEffect(() => {
    setIsLargeScreen(window.innerWidth <= 768);
    fetchPricingList();
  }, []);

  return (
    <section className="pricing section-padding" id="pricing">
      <div className="container">
        <h2 className="text-center mb-0">
          Investasi Terbaik untuk <span className="txt-grad-ef">Website Bisnis Anda</span>
        </h2>
        <p className="text-center">
          Saatnya <b>meningkatkan</b> pengunjung dan <b>memperluas jangkauan</b> bisnis Anda dengan{' '}
          <b>website</b>!
        </p>
        {pricingList.subtitle && (
          <p className="section-subheading text-center">{pricingList.subtitle}</p>
        )}
        <div>
          <div
            className="flex-row pricing-wrapper d-flex scrollX"
            ref={scrollContainerRef}
            style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}
          >
            {pricingList?.plans?.map((item, i) => (
              <div key={item?.id || i} className="col-lg-4 col-md-6 col-11">
                <div className="pricing-block text-center content-block">
                  <span className="icon-container grad-style-cd-light">
                    <i className="txt-grad-cd">0{i + 1}</i>
                  </span>
                  <small>{item.type}</small>
                  <div className="price txt-grad-ef">{item.price}</div>
                  <div className="facilities">
                    {item.features.map((feat, idx) => (
                      <div key={feat?.id || idx} dangerouslySetInnerHTML={{ __html: feat }}></div>
                    ))}
                  </div>
                  {/* <!-- End of .facilities --> */}
                  <a
                    // href={item.cta_link}
                    href="#"
                    data-toggle="modal"
                    data-target="#pesan-sekarang"
                    onClick={(e) => handlePesanSekarang(e, null)}
                    className="custom-btn btn-big grad-style-ef"
                    target="_blank"
                  >
                    {item.cta_text}
                  </a>
                </div>
                {/* <!-- End of .pricing-block --> */}
              </div>
            ))}
            {/* <!-- End of .col-md-4 --> */}
          </div>
          {/* <!-- End of .pricing-wrapper --> */}
          {/* Right Arrow Icon */}
          {pricingList?.plans?.length > 1 && showScrollIcon && (
            <IconScroll
              scrollContainerRef={scrollContainerRef}
              setShowScrollIcon={setShowScrollIcon}
              querySelector=".pricing-wrapper"
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
