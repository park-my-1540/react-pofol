import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation, Routes, Route } from "react-router-dom";
import "../scss/transition.scss";
import DetailPage from "../pages/DetailPage"
import Main from "../pages/Main"
/*
  Transition : react-transition-group 컴포넌트
  left : 페이지 이동시 rigth => left
  right : 페이지 이동시 left => right

  router
    Main
    DetailPage : location, id id로 state 조회
*/
const Transition = ({deviceChk,cursorOuterRef,cursorInnerRef}) => {

  const location = useLocation();
  const currentKey = location.pathname.split("/")[1] || "/";
  return (
    <TransitionGroup  component='div' className="transition-group">
        <CSSTransition key={currentKey} timeout={{ enter: 1000, exit: 1000 }}  classNames={`${(currentKey==="/") ? "left pageSlider" : "right pageSlider"}`}
          appear>
        <Routes location={location}>
            <Route path="/" element={<Main  deviceChk={deviceChk} cursorOuterRef={cursorOuterRef} cursorInnerRef={cursorInnerRef} />} />
            <Route path="/:id" element={<DetailPage location={location} cursorOuterRef={cursorOuterRef} cursorInnerRef={cursorInnerRef}/>} />
        </Routes>
        </CSSTransition>
  </TransitionGroup>
  );
};

export default Transition;