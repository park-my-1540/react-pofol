import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {mainUpdate,pofolUpdate} from "../module/ui";

export default function CustomLink({ to, state,children }) {
  /**
   * 현재 활성화된 practice 스와이퍼 인덱스로 디스패치 전달
   */
  const dispatch = useDispatch();
  const pofolIdx = state.id.toString().substr(1,1);
  const navigate = useNavigate();

  /**
   * linkClicked 
   *  현재 활성화된 메인 스와이퍼는 3,
   *  현재 활성화된 pratice 스와이퍼 인덱스 디스패치
   *  navigate에 state 전달
   */
  const linkClicked = useCallback((e)=>{
    e.preventDefault();
    dispatch(mainUpdate(3));
    dispatch(pofolUpdate(parseInt(pofolIdx)-1));
    navigate(to, {state})
    
  },[pofolIdx])

  return (
    <Link   to={to} 
            onClick={(e)=>linkClicked(e)}
            >
      {children}
    </Link>
  );
}