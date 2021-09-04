import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import EventCardComponent from '../../HomeModules/EventCardComponent/EventCardComponent';
import webinars from './PastWebinarsData.json';

const responsive = {
  0: {
    items: 1.3,
  },
  370: {
    items: 1.2,
  },
  411: {
    items: 1.3,
  },
  414: {
    items: 1.3,
  },
  600: {
    items: 2,
  },
  768: {
    items: 2.25,
  },
  1000: {
    items: 3,
  },
  1200: {
    items: 3,
  },
  1400: {
    items: 3.3,
  },
  1700: {
    items: 4.5,
  },
  2000: {
    items: 5,
  },
};
let slider;
const slideNext = () => {
  slider.next(500);
};
const slidePrev = () => {
  slider.prev(500);
};
const slidePrevKeyBoard = (e) => {
  if (e.keyCode === 37) {
    slidePrev();
  }
};
const slideNextKeyBoard = (e) => {
  if (e.keyCode === 39) {
    slideNext();
  }
};

const PastWebinars = () => (
  <div className="past-event-container">
    <h1 className="event-header">Past Webinars</h1>
    <div className="nav-button-wrapper">
      <div className="view-more">View More</div>
      <div onClick={slidePrev} onKeyDown={slidePrevKeyBoard} role="button" tabIndex={0}>
        <i className="far fa-arrow-alt-circle-left fa-lg nav-icon" />
      </div>
      &nbsp;&nbsp;&nbsp;
      <div onClick={slideNext} onKeyDown={slideNextKeyBoard} role="button" tabIndex={0}>
        <i className="far fa-arrow-alt-circle-right fa-lg nav-icon" />
      </div>
    </div>

    <div className="container-fluid">
      <OwlCarousel
        className="owl-theme"
        dots={false}
        loop
        margin={70}
        responsive={responsive}
        ref={(slide) => {
          slider = slide;
        }}
      >
        {webinars.data.map((webinar) => (
          <EventCardComponent
            key={webinar.id}
            image={webinar.image}
            title={webinar.title}
            description={webinar.description}
            datetime={webinar.datetime}
            tags={webinar.tags}
            link={webinar.link}
          />
        ))}
      </OwlCarousel>
    </div>
  </div>
);

export default PastWebinars;