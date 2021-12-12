import React,{useEffect} from "react";
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

        if(winWid > 780){ //pc
            onUpdateDevice('pc');
        }
        else{ //mo
            onUpdateDevice('mo');
        }
    }
    return (
        <>
            <AnimatedCursor deviceChk={deviceChk}/>
            <Transition onUpdateDevice={onUpdateDevice} deviceChk={deviceChk}/>
        </>
        );
}

export default MainContainer;