import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {mainUpdate,pofolUpdate} from "../module/ui";


export default function CustomLink({ to, state,style,children }) {

  const dispatch = useDispatch();
  const pofolIdx = state.id.toString().substr(1,1);
  
  const navigate = useNavigate();
  function delayAndGo(e) {
    e.preventDefault();

    // setTimeout(() => navigate(to, { state:{state}}), 2000);
    dispatch(mainUpdate(3));
    dispatch(pofolUpdate(parseInt(pofolIdx)-1));
    navigate(to, { state:{state}})
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