'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListHeader } from '@/redux/action/header/creator';
import defaultHeader from '@/redux/action/header/data-header.json';

const Index = () => {
  const headerList = useSelector((state) => state.header.headerList);
  const dispatch = useDispatch();
  const header = headerList?.title ? headerList : defaultHeader[0];

  const fetchHeaderList = async () => {
    dispatch(getListHeader());
  };

  useEffect(() => {
    fetchHeaderList();
  }, []);

  return (
    <header
      className="banner"
      id="top"
      style={{
        '--bgAfter': `url(/assets/images/banner/banner-round-img.webp)`
      }}>
      {/* <svg
      className="bg-shape shape-home-banner reveal-from-right"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="779px"
      height="759px"
    >
      <defs>
        <linearGradient id="PSgrad_01" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
          <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        fill="url(#PSgrad_01)"
        d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
      />
    </svg> */}

      <div className="container">
        <div className="banner-content">
          <h1 dangerouslySetInnerHTML={{ __html: header.title }}></h1>
          <div
            className="section-subheading"
            dangerouslySetInnerHTML={{ __html: header.description }}></div>
          <a href="#portofolio" className="custom-btn btn-big grad-style-ef page-scroll">
            PORTOFOLIO KAMI
          </a>
        </div>
        {/* <!-- End of .banner-content --> */}
      </div>
      {/* <!-- End of .container --> */}
    </header>
  );
};

export default Index;
