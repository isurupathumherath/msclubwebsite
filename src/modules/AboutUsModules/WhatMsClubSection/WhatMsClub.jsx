import React from 'react';
import './WhatMsClub.css';
import OwlCarousel from 'react-owl-carousel';
import pioneers from './PioneersData.json';

// const responsive = {
//   0: {
//     items: 1.3,
//   },
//   370: {
//     items: 1.2,
//   },
//   411: {
//     items: 1.3,
//   },
//   414: {
//     items: 1.3,
//   },
//   600: {
//     items: 2,
//   },
//   768: {
//     items: 2.25,
//   },
//   1000: {
//     items: 3,
//   },
//   1200: {
//     items: 3,
//   },
//   1400: {
//     items: 3.3,
//   },
//   1700: {
//     items: 4.5,
//   },
//   2000: {
//     items: 5,
//   },
// };

const WhatMsClub = () => (
  <section className="fdb-block">
    <div className="container">
      <div className="row justify-content-center text-center">
        <h1>PIONEERS OF MS CLUB</h1>
        <div>
          <OwlCarousel>
            {pioneers.data.map((pioneer) => (
              <div key={pioneer.id}>
                <img src={pioneer.image} alt="pioneer" />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  </section>
);

export default WhatMsClub;
