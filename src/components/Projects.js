import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";
import clock from "../clock.png";
import todo from "../todo.png";
import video from "../video.png";
import widgets from "../widgets.png";
import coronaTracker from "../coronaTracker.png";
import netflix from "../netflix.png";
import airbnb from "../airbnb.png";
import amazon from "../amazon.png";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <div className="inner-pro">
        <h4>PROJECTS</h4>
        <ProjectCard
          img={amazon}
          title="AMAZON-CLONE"
          link=" https://fir-49a28.web.app/"
        />
        <ProjectCard
          img={airbnb}
          title="AIRBNB-CLONE"
          link=" https://airbnb-c061d.web.app/"
        />
        <ProjectCard
          img={netflix}
          title="NETFLIX-CLONE"
          link=" https://netflix-1b362.web.app/"
        />
        <ProjectCard
          img={coronaTracker}
          title="COVID-19 TRACKER"
          link=" https://corona-tracker-a7bcd.web.app/"
        />
        <ProjectCard
          img={clock}
          title="CLOCK"
          link=" https://clock-37c06.web.app/"
        />
        <ProjectCard
          img={video}
          title="VIDEO"
          link="https://video-ec140.web.app/"
        />
        <ProjectCard
          img={todo}
          title="TODO-APP"
          link="https://todo-app-28045.web.app/"
        />
        <ProjectCard
          img={widgets}
          title="WIDGETS"
          link="https://widgets-74b43.web.app/"
        />
      </div>
    </motion.div>
  );
};
export default Projects;
