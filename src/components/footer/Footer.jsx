import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Leonardo</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#Projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/leoalvarengam/" className="footer__social-link">
            <i class="uil uil-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/leoalvarengam/" className="footer__social-link">
            <i class="uil uil-instagram"></i>
          </a>

          <a href="https://github.com/ynfleozin" className="footer__social-link">
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        
        <span className="footer__copy">
            &#169; Leonardo Alvarenga. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
