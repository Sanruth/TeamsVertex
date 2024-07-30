import React from 'react';
import PropTypes from 'prop-types';
import './Course.css';

const Course = ({ name, link, image, duration }) => {
  return (
    <div className="course-item">
      <a href={link} target="_blank" rel="noopener noreferrer" className="course-link">
        <div className="image-container">
          <img src={image} alt={name} className="course-image" />
          <div className="overlay">
            <div className="text">Learn More</div>
          </div>
        </div>
        <p className="course-name">{name}</p>
        {duration && <p className="course-duration">Duration: {duration}  </p>}
        <p className='course-enroll'> Enroll Now</p>
      </a>
    </div>
  );
};

Course.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};

export default Course;
