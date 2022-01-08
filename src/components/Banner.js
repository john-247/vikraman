import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/banner.css";
import gsap from "gsap";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Banner = () => {
  const name = useRef();
  const title = useRef();
  const para = useRef();
  const btn = useRef();

  useEffect(() => {
    gsap.from([name.current, title.current, para.current, btn.current], {
      duration: 2,
      opacity: 0,
      y: 100,
      ease: "power3.inOut",
      stagger: {
        amount: 2,
      },
    });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="banner"
    >
      <section>
        <div className="banny">
          <div className="container">
            <div className="banner-wrapper">
              <h3 ref={name}>VIKRAMAN</h3>
              <h1 ref={title}>
                I am a
                <span className="typing">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      strings: [
                        "< Web Developer />",
                        "< FrontEnd Developer />",
                        "< React Developer />",
                      ],
                      delay: 60,
                    }}
                  />
                </span>
              </h1>
              <p ref={para}>
                Though fate-divine should make your labour vain; Effort it's
                labour's sure reward will gain.
                <br />I use the power of digital experience in this digital
                world to move people and brands forward.
              </p>
            </div>
            <div ref={btn} className="call-to-action">
              <Link to="/about">
                More about me <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Banner;
