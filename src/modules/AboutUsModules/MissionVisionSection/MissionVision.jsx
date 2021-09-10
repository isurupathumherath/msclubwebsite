/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './MissionVision.css';
import mission from '../../../assets/flat-illustrations/mission.jpg';
import vision from '../../../assets/flat-illustrations/vision.jpg';
import strategy from '../../../assets/flat-illustrations/strategy.jpg';

import content from './MissionVisionData.json';

const MissionVision = () => (
  <section className="mainSection">
    <div className="container main">
      <div className="sec-1">
        <div className="row text-left text-sm-center align-items-center pt-5 pb-md-5 ">
          <div className="col-4 col-md-5 col-sm-8">
            <img alt="image" className="img-fluid" src={mission} />
          </div>

          <div className="col-12 col-md-5">
            <h2>
              <strong>Our Mission</strong>
            </h2>
            <p className="lead">{content.mission.description}</p>
          </div>
        </div>
      </div>

      <div className="row text-left align-items-center pt-5 pb-md-5">
        <div className="col-4 col-md-5 col-sm-8  order-md-5">
          <img alt="image" className="img-fluid" src={vision} />
        </div>

        <div className="col-12 col-md-5">
          <h2>
            <strong>Our Vision</strong>
          </h2>
          <p className="lead">{content.vision.description}</p>
        </div>
      </div>

      <div className="row text-left align-items-center pt-5 pb-md-5">
        <div className="col-4 col-md-5 col-sm-8">
          <img alt="image" className="img-fluid" src={strategy} />
        </div>

        <div className="col-12 col-md-5">
          <h2>
            <strong>Our Strategy</strong>
          </h2>
          <p className="lead">{content.strategy.description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision;
