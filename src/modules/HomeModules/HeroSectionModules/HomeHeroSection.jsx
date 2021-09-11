import React from 'react';
import './HomeHeroSection.css';
import HeroHeaderImage from '../../../assets/home/header-image.svg';
import content from './HomeHeroSectionData.json';

const HomeHeroSection = () => (
  <div className="container-fluid header">
    <div className="home-hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <p className="home-header-title">
          <b>MS CLUB OF SLIIT</b>
        </p>
        <div>
          <p className="home-header-content">{content.description}</p>
        </div>
        <a href="https://forms.office.com/r/xLw6LFrmJV" target="_blank" rel="noopener noreferrer">
          <button type="button" className="home-header-btn btn btn-success btn-pill">
            Join Now
          </button>
        </a>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <img src={HeroHeaderImage} alt="home header img" className="home-header-img" />
      </div>
    </div>
  </div>
);

export default HomeHeroSection;
