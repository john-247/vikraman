import React from "react";
import "../styles/procard.css";

const ProjectCard = () => {
  return (
    <a className="procard">
      <div className="overlay">
        <div className="inner-overlay">
          <div className="title-over">
            <h2>title</h2>
          </div>
          <div className="used-tech">
            <p>Techs used: </p>
          </div>
          <div className="over-action">
            <a href="/">
              VIEW PROJECT <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
