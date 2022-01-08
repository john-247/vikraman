import React, { useRef, useEffect } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Footer = () => {
  const callAction = useRef();
  const contactFoot = useRef();

  useEffect(() => {
    const revealcallAction = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      gsap.from(callAction.current, { y: 100, opacity: 0, duration: 1 });
      console.log("true");
      observer.unobserve(entry.target);
    };

    const revealContactFoot = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      gsap.from(contactFoot.current, { y: 100, opacity: 0, duration: 1 });
      console.log("true");
      observer.unobserve(entry.target);
    };

    const callActionObserver = new IntersectionObserver(revealcallAction, {
      root: null,
      threshold: 0.25,
    });
    const contactFootObserver = new IntersectionObserver(revealContactFoot, {
      root: null,
      threshold: 0.25,
    });

    callActionObserver.observe(callAction.current);
    contactFootObserver.observe(contactFoot.current);
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="action">
          <div ref={callAction} className="call-action">
            <h3>NEED A DESIGNER ?</h3>
            <h1>
              <Link to="/contact">
                Let's work together <span>&#8594;</span>
              </Link>
            </h1>
          </div>
          <div ref={contactFoot} className="contact-foot">
            <div className="info">
              <h2>
                Contact
                <br /> Information&nbsp;—
              </h2>
              <p>
                Feel free to reach out to me any time. I prefer to talk over
                email, especially since we may be a few time zones away.
              </p>
              <ul>
                <li>
                  <span>E-mail: </span>
                  <a href="mailto:vikraman.98.k@gmail.com">
                    vikraman.98.k@gmail.com
                  </a>
                </li>
                <li>
                  <span>Tel: </span>
                  <a href="tel:+91900343441"> +91 90037 43441</a>
                </li>
              </ul>
            </div>

            <div className="availability">
              <h2>
                Current
                <br /> Availability&nbsp;—
              </h2>
              <p>
                I usually work on several projects but I’ll be happy to discuss
                new opportunities. Let’s get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
