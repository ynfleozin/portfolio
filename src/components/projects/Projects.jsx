import React from 'react';
import Project from './Project';
import './projects.css';
import granRomanoImg from '../../assets/img/projects/granromano.webp';
import shTecnoImg from '../../assets/img/projects/shtecno.webp';
import fitnessImg from '../../assets/img/projects/fitnesstracker.webp'
import urlImg from '../../assets/img/projects/URL-shortener.webp'

const Projects = () => {
  const projectList = [
    {
      link: 'https://www.granromano.com.br/',
      image: granRomanoImg, 
      title: 'Gran Romano',
      description:
        'This project is a corporate website developed for the company Gran Romano, specialized in food products. The website was created with the aim of providing detailed information about the company and its products, as well as facilitating contact with customers.',
    },
    {
      link: 'https://www.shtecno.com.br/',
      image: shTecnoImg, 
      title: 'SH Tecnologia',
      description: 'This project is a corporate website developed for the company SH Tecnologia, specialized in services in the technological area. The website was created with the aim of presenting detailed information about the company, partners and their services, as well as facilitating contact with customers.',
    },
    {
      link: '#',
      image: fitnessImg, 
      title: 'Fitness Tracker',
      description: 'This is a fitness project developed to help users monitor their workouts, activities, and personal goals. The application is built using Spring Boot and Hibernate for the back-end with MySQL as the database, and Angular for the front-end, providing an intuitive interface to manage and visualize fitness progress.',
    },
    {
      link: '#',
      image: urlImg, 
      title: 'URL Shortener',
      description: 'This project is a URL shortener system using AWS Lambda, S3, Amazon API Gateway, and Java.',
    },
  ];

  return (
    <section className="project section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Latest Projects</span>
      <div className="project__container container grid">
        {projectList.map((project, index) => (
          <Project
            key={index}
            link={project.link}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
