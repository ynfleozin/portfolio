import React from 'react';
import './projects.css';

const Project = ({ link, image, title, description }) => {
  return (
    <div className="project__card">
      <a href={link} className="project__link" target="_blank" rel="noreferrer">
        <div className="project__container-image">
          <img src={image} alt={title} className="project__img" />
          <div className="project__overlay">View</div>
        </div>
      </a>
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
    </div>
  );
};

export default Project;
