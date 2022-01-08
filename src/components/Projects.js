import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </motion.div>
  );
};
export default Projects;
