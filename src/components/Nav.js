import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link, withRouter } from "react-router-dom";
import Menu from "./Menu";
import "../styles/nav.css";

const Nav = ({ history }) => {
  const navy = useRef();

  useEffect(() => {
    gsap.from(navy.current, {
      duration: 1.5,
      opacity: 0,
      ease: "power3.inOut",
    });
  }, []);

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "MENU",
  });

  const [disabled, setDisabled] = useState(false);

  const btnDisable = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const btnHam = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();
  const tl = useRef();
  const hover = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(line2.current, { duration: 0.125, scaleX: 0 })
      .to(line1.current, {
        duration: 0.125,
        top: "4px",
        rotation: "45%",
        transformOrigin: "50% 50%",
      })
      .to(line3.current, {
        top: "-4px",
        duration: 0.125,
        rotation: "-45%",
        transformOrigin: "50% 50%",
      });
  }, []);

  useEffect(() => {
    hover.current = gsap
      .timeline({ paused: true })
      .to(line1.current, { y: -4, duration: 0.125 }, "hover")
      .to(line3.current, { y: 4, duration: 0.125 }, "hover");
  }, []);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "MENU" });
      tl.current.reverse();

      // window.location.reload();
    });
  }, []);

  const handleMenu = () => {
    btnDisable();
    btnHam.current.classList.toggle("js-x");
    hover.current.reverse();

    if (state.initial === false) {
      setState({ initial: null, clicked: true, menuName: "CLOSE" });

      tl.current.play();
    } else if (state.clicked === true) {
      setState({ clicked: !state.clicked, menuName: "MENU" });

      tl.current.reverse();
    } else if (state.clicked === false) {
      setState({ clicked: !state.clicked, menuName: "CLOSE" });

      tl.current.play();
    }
  };

  const onOver = (currentElement) => {
    if (btnHam.current.classList.contains("js-x")) {
      return;
    }
    hover.current.play();
  };

  const onOut = (currentElement) => {
    hover.current.reverse();
  };

  return (
    <header>
      <div className="container">
        <div ref={navy} className="nav-row">
          <div className="brand">
            <Link to="/">
              <div>
                <h1>VIKRAMAN.</h1>
                <h6>REACT FRONT-END DEVELOPER</h6>
              </div>
            </Link>
          </div>
          <div className="menu">
            <button
              ref={btnHam}
              disabled={disabled}
              onClick={handleMenu}
              onMouseOver={(e) => {
                onOver(e.target);
              }}
              onMouseOut={(e) => {
                onOut(e.target);
              }}
            >
              {state.menuName}
              <div className="ham">
                <span ref={line1} className="line-1"></span>
                <span ref={line2} className="line-2"></span>
                <span ref={line3} className="line-3"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
};

export default withRouter(Nav);
