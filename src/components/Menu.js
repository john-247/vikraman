import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Menu = ({ state }) => {
  const menu = useRef();
  const backgroundMenu = useRef();
  const revealMenu = useRef();
  const link1 = useRef();
  const link2 = useRef();
  const link3 = useRef();

  useEffect(() => {
    if (state.clicked === false) {
      //   menu.current.style.display = "none";
      gsap.to([revealMenu.current, backgroundMenu.current], {
        height: 0,
        duration: 0.8,
        skewY: 0.2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });

      gsap.to([menu.current], {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //   menu.current.style.display = "block";

      gsap.to([menu.current], {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to([backgroundMenu.current, revealMenu.current], {
        opacity: 1,
        duration: 0,
        height: "100%",
      });
      gsap.from([backgroundMenu.current, revealMenu.current], {
        duration: 0.8,
        height: 0,
        top: "50%",

        transformOrigin: "right top",
        skewY: 0.2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });

      staggerLinks(link1.current, link2.current, link3.current);
    }
  }, [state]);

  const staggerLinks = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      delay: 0.2,
      ease: "power3.inOut",
      y: 100,
      stagger: {
        amount: 0.2,
      },
    });
  };

  return (
    <div ref={menu} className="hamburger-menu">
      <div ref={backgroundMenu} className="hamburger-menu-background"></div>
      <div ref={revealMenu} className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={link1} to="/about">
                      ABOUT ME
                    </Link>
                  </li>
                  <li>
                    <Link ref={link2} to="/projects">
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link ref={link3} to="/contact">
                      CONTACT ME
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
