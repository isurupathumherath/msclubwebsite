import React from 'react';
import PropTypes from 'prop-types';
import './EventCardStyle.css';
import moment from 'moment';

const EventCardComponent = ({ image, title, titlesmall, description, tags, datetime, link }) => (
  <div className="ms-event-card card mb-3 mt-3">
    <div>
      <img className="img-fluid ms-event-card-img" src={image} alt="Card cap" />
    </div>

    <div className="ms-event-card-body">
      <div className="ms-event-tags">
        {tags &&
          tags.slice(0, 3).map((tag) => (
            <span key={tag} className="badge rounded-pill bg-event event-tags text-dark text-bold">
              {tag.toUpperCase()}
            </span>
          ))}
      </div>
      <div>
        <div className="row ms-event-card-header-row">
          <div className="col-md-10 col-sm-10 col-10 mt-1">
            <h5 className="card-title text-left ms-event-card-title">{title}</h5>
            <p className="ms-event-description">{description}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <i className="fas fa-calendar-alt fa-lg mt-1" />
          <span className="badge rounded-pill event-date text-muted">{moment(datetime).format('lll')}</span>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-success event-btn btn-sm ms-event-btn" type="button">
            More Info - {titlesmall}
          </button>
        </a>
      </div>
    </div>
  </div>
);

EventCardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titlesmall: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  datetime: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default EventCardComponent;
