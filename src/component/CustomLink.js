import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {gsap} from 'gsap'

export default function CustomLink({ to, state,style,children }) {
  const navigate = useNavigate();
  function delayAndGo(e) {
    e.preventDefault();
    const _target = document.getElementsByClassName('dim-wrap')[0];
    let tween = gsap.to(_target, {
        top:'0',
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