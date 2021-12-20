import React,{useEffect,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {deviceUpdate} from "../module/ui";

import Transition from "../component/Transition"
import AnimatedCursor from "../component/AnimatedCursor";

function MainContainer(){

    const onUpdateDevice = (device) => dispatch(deviceUpdate(device));
    const dispatch = useDispatch();

    let deviceChk = useSelector(state=>state.ui.device);

    useEffect(()=>{
        init();
        window.addEventListener('resize', init);
    },[]);
  
    const init = () =>{
        let winWid = window.innerWidth;
        winWid > 768 ? onUpdateDevice('pc') : onUpdateDevice('mo');
    }
    /*
        AnimatedCursor에서도 사용하고 Transition > Main 에서도 사용하기 위해
        현재 위치에서 선언.
    */
    const cursorOuterRef = useRef();
    const cursorInnerRef = useRef();

    return (
        <>
            <AnimatedCursor deviceChk={deviceChk} cursorOuterRef={cursorOuterRef} cursorInnerRef={cursorInnerRef} />
            <Transition onUpdateDevice={onUpdateDevice} deviceChk={deviceChk} cursorOuterRef={cursorOuterRef} cursorInnerRef={cursorInnerRef}/>
        </>
        );
}

export default MainContainer;