import React from 'react';
import PastEvents from '../../modules/EventsModule/pastEvents/PastEvents';
import UpcomingEventComponent from '../../modules/EventsModule/UpcomingEventComponent/UpcomingEventComponent';
import TopSpeakers from '../../modules/EventsModule/topSpeakers/TopSpeakers';
import EventHeroSection from '../../modules/EventsModule/heroSection/EventHeroSection';
import PastWebinars from '../../modules/EventsModule/pastWebinars/PastWebinars';
import UpcomingWebinarsComponent from '../../modules/HomeModules/UpcomingWebinarsComponent/UpcomingWebinarsComponent';

const Events = () => (
  <div>
    <EventHeroSection />
    <UpcomingWebinarsComponent />
    <PastWebinars />
    <UpcomingEventComponent />
    <PastEvents />
    <TopSpeakers />
  </div>
);

export default Events;
