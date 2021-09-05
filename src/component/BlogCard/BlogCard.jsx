import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const BlogCard = ({ image, title, tags, datetime, link }) => (
  <div className="ms-card card mb-3 mt-3">
    <div>
      <img className="img-fluid ms-card-img" src={image} alt="Card cap" loading="lazy" />
    </div>

    <div className="ms-card-body">
      <div className="ms-tags">
        {tags &&
          tags.slice(0, 3).map((tag) => (
            <span key={tag} className="badge rounded-pill bg-event event-tags text-dark text-bold">
              {tag.toUpperCase()}
            </span>
          ))}
      </div>
      <div>
        <div className="row ms-card-header-row">
          <div className="col-md-10 col-sm-10 col-10 mt-1 ms-card-header-col2">
            <h5 className="card-title text-left ms-title">{title}</h5>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <i className="fas fa-calendar-alt fa-lg mt-1" />
          <span className="badge rounded-pill event-date text-muted">{moment(datetime).format('lll')}</span>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-success event-btn btn-sm ms-card-btn" type="button">
            {title}
          </button>
        </a>
      </div>
    </div>
  </div>
);

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  datetime: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogCard;
