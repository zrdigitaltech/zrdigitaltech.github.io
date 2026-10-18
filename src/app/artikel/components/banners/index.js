'use client';

import Link from 'next/link';

const Index = () => {
  return (
    <section className="case-study grad-style-ef mb-0 p-0" id="case-studies">
      <svg className="bg-shape shape-case reveal-from-right" width="779px" height="759px">
        <defs>
          <linearGradient id="PSgrad_04" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
            <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          fillRule="evenodd"
          fill="url(#PSgrad_04)"
          d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
        />
      </svg>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 order-lg-2">
            <div className="text-center py-5">
              <h1 className="mb-0">Artikel</h1>
              <p>
                Temukan informasi menarik dan terbaru yang akan menginspirasi Anda! <br />
                Jangan lewatkan kesempatan untuk memperdalam pengetahuan Anda.
              </p>
              <div className="mb-0">
                <Link href="#kontak-kami" className="custom-btn btn-big grad-style-ab page-scroll">
                  Kontak Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of .container --> */}
    </section>
  );
};

export default Index;
