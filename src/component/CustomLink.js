import React from "react";
import { Link, useNavigate } from "react-router-dom";


import {gsap} from 'gsap'

export default function CustomLink({ to, state,style,children }) {
  const navigate = useNavigate();
  function delayAndGo(e) {
    e.preventDefault();
    const id = (e.currentTarget.getAttribute('href')).slice(-2);
    const _target = e.currentTarget.closest('.mySwiper').getElementsByClassName(id);
    let tween = gsap.to(_target, {
        position:'fixed',
        width:'100vw',
        height:'100vh',
        top:'210px',
        left:'50%',
        zIndex:'999', 
        duration: 2, 
        ease: "easeing"});

    tween.play();
    setTimeout(() => navigate(to, { state:{state}}), 2000);
  }

  return (
    <Link   to={to} 
            style= {style} 
            onClick={(e)=>delayAndGo(e)}
            >
      {children}
    </Link>
  );
}