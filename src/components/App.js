import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Banner from "./Banner";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Banner}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/projects" exact component={Projects}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
