import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import img from "../bg-1.jpg";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="about-wrapper">
          <div className="inner-wrapper">
            <h4>A few words about me</h4>
            <h1>
              I'm Vikraman, A designer and a front-end developer Working
              primarily with React.js. I specialize in making responsive
              Websites and functional User Interfaces which are visually
              pleasing.
            </h1>
            <h3>
              A day where i dont learn something new is a day not well spent for
              me. I yearn to be a forever student of my trade of choice. In my
              spare time i enjoy watching quality movies(It's a problem) and
              practice martial arts and boxing.
            </h3>
          </div>
        </div>
        <div className="about-img">
          <img src={img} />
        </div>
        <div className="services">
          <div className="service">
            <h4>SERVICES I PROVIDE</h4>
            <p>
              FRONT-END DEVELOPMENT <em>/</em> REACT DESIGN & DEVELOPMENT{" "}
              <em>/</em> WEB DESIGN
            </p>
          </div>
          <div className="techs">
            <h4>LANGUAGES & TECHS I USE</h4>
            <p>
              HTML <em>/</em> CSS <em>/</em> JAVASCRIPT <em>/</em> REACT.JS
              <em>/</em> REDUX <em>/</em> GSAP <em>/</em> FRAMER MOTION
              <em>/</em> REACT-ROUTER
            </p>
          </div>
        </div>
        <div className="experience">
          <h4>EXPERIENCE</h4>
          <h3>
            I've been lucky enough to realize early on in my life that what i
            had pursued in college was not i was fit for and neither did i enjoy
            it and found my new cultivated passion for WebApp Development.
          </h3>
          <div className="table">
            <div className="line">
              <div className="company">
                <h3>MINDMADE TECHNOLOGIES</h3>
              </div>
              <div className="designation">
                <p>WEB DESIGN AND DEVELOPMENT TRAINEE</p>
              </div>
              <div className="period">
                <p>January 2021 - August 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
