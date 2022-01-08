import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="contact">
          <div className="left">
            <h4>CONTACT</h4>
            <h2>Get in touch - let's work together</h2>
          </div>
          <div className="form">
            <h4>
              Got a Project? or a Job Opportunity? Feel free to contact me at
              any time.
            </h4>
            <div className="form-inner">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
