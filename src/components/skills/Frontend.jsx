import React from "react";
import angularIcon from "../../assets/skills/angular.svg"
import javascriptIcon from "../../assets/skills/javascript.svg"
import typescriptIcon from "../../assets/skills/typescript.svg"
import scssIcon from "../../assets/skills/scss.svg"
import reactIcon from "../../assets/skills/react.svg"


const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-end</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={angularIcon} alt="Angular Icon" className="skills__image" />
          </div>
          
          <div className="skills__data">
            <img src={typescriptIcon} alt="Angular Icon" className="skills__image" />
          </div>

          <div className="skills__data">
            <img src={javascriptIcon} alt="Angular Icon" className="skills__image" />
          </div>

          <div className="skills__data">
            <img src={reactIcon} alt="SCSS Icon" className="skills__image" />
          </div>

          <div className="skills__data">
            <img src={scssIcon} alt="SCSS Icon" className="skills__image" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Frontend;
