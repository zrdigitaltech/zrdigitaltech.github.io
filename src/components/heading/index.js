'use client';

import React from 'react';
import './heading.scss';

const Index = ({ title }) => {
  return (
    <div>
      <div className="ZR-heading">
        <div
          className="p-5"
          style={{
            backgroundImage: 'linear-gradient(45deg, #e9a17b, #ff7cb0)'
          }}>
          <div className="container ">
            <h1 className="mb-0 font-weight-bold" style={{ fontSize: '3rem' }}>
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
