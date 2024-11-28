import React from "react";
import javaIcon from "../../assets/skills/java.svg";
import springIcon from "../../assets/skills/spring.svg";
import nodeIcon from "../../assets/skills/node.svg";
import awsIcon from "../../assets/skills/aws.svg"
import sqlIcon from "../../assets/skills/sql.svg"
import mongoIcon from "../../assets/skills/mongodb.svg"

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-end</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={javaIcon} alt="Java Icon" className="skills__image" />
          </div>

          <div className="skills__data">
            <img src={springIcon} alt="Spring Icon" className="skills__image" />
          </div>

          <div className="skills__data">
            <img src={nodeIcon} alt="Node Icon" className="skills__image" />
          </div>

          <div className="skills__data">
            <img src={awsIcon} alt="Java Icon" className="skills__image" />
          </div>

          <div className="skills__data">
            <img src={sqlIcon} alt="Java Icon" className="skills__image" />
          </div>

          <div className="skills__data">
            <img src={mongoIcon} alt="Java Icon" className="skills__image" />
          </div>
        </div>      
      </div>
    </div>
  );
};

export default Backend;
