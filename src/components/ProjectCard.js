import React from "react";
import "../styles/procard.css";

const ProjectCard = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="procard"
      style={{
        background: `url(${props.img})`,
        backgroundPosition: " center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "2px 2px 5px 0 grey",
      }}
    >
      <div className="overlay">
        <div className="inner-overlay">
          <div className="title-over">
            <h2>{props.title}</h2>
          </div>
          {/* <div className="used-tech">
            <p>Techs used: </p>
          </div> */}
          <div className="over-action">
            <a href={props.link} target="_blank">
              VIEW PROJECT <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
