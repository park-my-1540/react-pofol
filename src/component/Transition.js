import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
import "../scss/transition.scss";
import DetailPage from "../pages/DetailPage"
import Main from "../pages/Main"

const Transition = () => {

  const location = useLocation();
    const currentKey = location.pathname.split("/")[1] || "/";
  return (
    <TransitionGroup  component='div' className="transition-group">
        <CSSTransition key={currentKey} timeout={{ enter: 1000, exit: 1000 }}  classNames="my-node"
          appear>
        <Routes location={location}>
            <Route path="/" element={<Main/>} />
            <Route path="/:id" element={<DetailPage/>} />
        </Routes>
        </CSSTransition>
  </TransitionGroup>
  );
};

export default Transition;