import React from 'react';
import Project from './Project';
import './projects.css';
import granRomanoImg from '../../assets/img/projects/granromano.webp';
import shTecnoImg from '../../assets/img/projects/shtecno.webp';
import fitnessImg from '../../assets/img/projects/fitnesstracker.webp';
import urlImg from '../../assets/img/projects/URL-shortener.webp';
import homyzImg from '../../assets/img/projects/homyz.webp';
import instabytesImg from '../../assets/img/projects/instabytesapi.webp';
import awsIcon from "../../assets/skills/aws.svg"
import angularIcon from "../../assets/skills/angular.svg"
import typescriptIcon from "../../assets/skills/typescript.svg"
import scssIcon from "../../assets/skills/scss.svg"
import javaIcon from "../../assets/skills/java.svg";
import javascriptIcon from "../../assets/skills/javascript.svg"
import springIcon from "../../assets/skills/spring.svg";
import nodeIcon from "../../assets/skills/node.svg";
import sqlIcon from "../../assets/skills/sql.svg"
import mongoIcon from "../../assets/skills/mongodb.svg"

const Projects = () => {
  const projectList = [
    {
      link: 'https://www.granromano.com.br/',
      image: granRomanoImg, 
      title: 'Gran Romano',
      description:
        'This project is a corporate website developed for the company Gran Romano, specialized in food products. The website was created with the aim of providing detailed information about the company and its products, as well as facilitating contact with customers.',
      icons: [
        {
          name: 'Angular',
          icon: angularIcon,
        },
        {
          name: 'TypeScript',
          icon: typescriptIcon,
        },
        {
          name: 'SCSS',
          icon: scssIcon,
        },
      ],
    },
    {
      link: 'https://www.shtecno.com.br/',
      image: shTecnoImg, 
      title: 'SH Tecnologia',
      description: 'This project is a corporate website developed for the company SH Tecnologia, specialized in services in the technological area. The website was created with the aim of presenting detailed information about the company, partners and their services, as well as facilitating contact with customers.',
      icons: [
        {
          name: 'Angular',
          icon: angularIcon,
        },
        {
          name: 'TypeScript',
          icon: typescriptIcon,
        },
        {
          name: 'SCSS',
          icon: scssIcon,
        },
      ],
    },
    {
      link: 'https://github.com/ynfleozin/fitness-project',
      image: fitnessImg, 
      title: 'Fitness Tracker',
      description: 'This is a fitness project developed to help users monitor their workouts, activities, and personal goals. The application is built using Spring Boot and Hibernate for the back-end with MySQL as the database, and Angular for the front-end, providing an intuitive interface to manage and visualize fitness progress.',
      icons: [
        {
          name: 'Angular',
          icon: angularIcon,
        },
        {
          name: 'Spring',
          icon: springIcon,
        },
        {
          name: 'Java',
          icon: javaIcon,
        },
        {
          name: 'MySQL',
          icon: sqlIcon,
        },
      ],
    },
    {
      link: 'https://github.com/ynfleozin/URL-shortener',
      image: urlImg, 
      title: 'URL Shortener',
      description: 'This project is a URL shortener system using AWS Lambda, S3, Amazon API Gateway, and Java.',
      icons: [
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          name: 'AWS',
          icon: awsIcon,
        },
      ],

    },
    {
      link: 'https://site-homyz.vercel.app/',
      image: homyzImg, 
      title: 'Homyz',
      description: 'Real estate website project developed with React, with smooth navigation and responsive design.',
      icons: [
        {
          name: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'TypeScript',
          icon: typescriptIcon,
        },
        {
          name: 'SCSS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        },
      ],
    },
    {
      link: 'https://github.com/ynfleozin/instabytes-api',
      image: instabytesImg, 
      title: 'Instabytes API',
      description: 'Application developed in Node.js with the aim of providing a functional backend for storing and managing data in a MongoDB Atlas database.',
      icons: [
        {
          name: 'Node.js',
          icon: nodeIcon,
        },
        {
          name: 'JavaScript',
          icon: javascriptIcon
        },
        {
          name: 'MongoDB',
          icon: mongoIcon,
        },
      ],
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
            icons={project.icons || []} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
