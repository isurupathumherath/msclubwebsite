import React from 'react';
import FlatVector from '../../../assets/flat-illustrations/boardpeople.png';
import './WhatWeDoSection.css';
import content from './WhatWeDoSectionData.json';

const WhatWeDoSection = () => (
  <section className="WhatWeDoSectionHome container mt-5">
    <div className="wrap">
      <h2 className="text-center what-we-do-header">
        <strong>Who Are We?</strong>
      </h2>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-6 col-sm-12">
            <p className="lead">{content.home.line1}</p>
            <p className="lead">{content.home.line2}</p>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center">
            <img alt="imageFlatVector" className="img-fluid d-none d-md-block" src={FlatVector} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
