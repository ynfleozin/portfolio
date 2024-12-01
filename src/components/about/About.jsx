import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
          I am a FullStack developer currently pursuing a degree in Software Engineering, with experience in developing complete applications, ranging from responsive interfaces to API implementation. I have expertise in front-end technologies such as Angular, TypeScript, JavaScript, HTML, and CSS, as well as back-end development using Java, Spring Boot, and Node.js. I am proficient in integrating systems with SQL and NoSQL databases and have experience leveraging AWS services for cloud-based solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
