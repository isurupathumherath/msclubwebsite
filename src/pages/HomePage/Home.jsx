import React from 'react';
import WhatWeDoSection from '../../modules/HomeModules/WhatWeDoSection/WhatWeDoSection';
import HomeHeroSection from '../../modules/HomeModules/HeroSectionModules/HomeHeroSection';
import PastEvents from '../../modules/EventsModule/pastEvents/PastEvents';
import PastWebinars from '../../modules/EventsModule/pastWebinars/PastWebinars';
import UpcomingWebinarsComponent from '../../modules/HomeModules/UpcomingWebinarsComponent/UpcomingWebinarsComponent';
import BlogsComponent from '../../modules/HomeModules/BlogsComponent/BlogsComponent';
import './Home.css';

const Home = () => (
  <div>
    <HomeHeroSection />
    <WhatWeDoSection />
    <div className="homePolygonDiv mb-4">
      <BlogsComponent />
      <UpcomingWebinarsComponent />
      <PastWebinars />
    </div>
    <PastEvents />
  </div>
);

export default Home;
