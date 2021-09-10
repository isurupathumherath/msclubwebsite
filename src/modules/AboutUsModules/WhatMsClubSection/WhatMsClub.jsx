import React from 'react';
import './WhatMsClub.css';
import nissanka from '../../../assets/pioneers/nissanka.png';
import akhila from '../../../assets/pioneers/akhila.png';
import anushka from '../../../assets/pioneers/anushka.jpeg';
import manuja from '../../../assets/pioneers/manuja.png';
import gihan from '../../../assets/pioneers/gihan.jpg';
/* import data from './WhatMsClubData.json'; */

const WhatMsClub = () => (
  <section className="fdb-block">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-md-8 text-center">
          <h1>PIONEERS OF MS CLUB</h1>
          {/* <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum at egestas rutrum commodo ultrices
            vitae vel. Velit a scelerisque et pharetra, tincidunt pulvinar amet. Tristique morbi enim urna viverra massa
            vehicula quam. Gravida diam nec amet, augue sed dignissim convallis integer suspendisse. Orci ut donec nibh
            eget. Tempor vel in turpis justo, consequat euismod ornare. Turpis orci pulvinar.
</p> */}
          <div className="pioneers d-flex p-5 justify-content-center">
            <img alt="Nissanka Senevirathne" className="img-fluid" src={nissanka} />
            <img alt="Nissanka Senevirathne" className="img-fluid" src={akhila} />
            <img alt="Nissanka Senevirathne" className="img-fluid" src={anushka} />
            <img alt="Nissanka Senevirathne" className="img-fluid" src={manuja} />
            <img alt="Nissanka Senevirathne" className="img-fluid" src={gihan} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatMsClub;
