import React,{useEffect,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {deviceUpdate} from "../module/ui";
import Transition from "../component/Transition"
import AnimatedCursor from "../component/AnimatedCursor";
/*
    MainContainer : module > ui 의 컨테이너 컴포넌트
    윈도우 사이즈 pc, mobile 상태변경
*/

function MainContainer(){
    /*
        deviceChk : 현재 device state, AnimatedCursor 에 props 전달
     */
    let deviceChk = useSelector(state=>state.ui.device);
    const dispatch = useDispatch();
    /*
        onUpdateDevice : device update 하는 디스패치 함수 , Transition 에 props 전달
     */
    const onUpdateDevice = (device) => dispatch(deviceUpdate(device)); 


    useEffect(()=>{
        init();
        window.addEventListener('resize', init);
    },[]);
    /**
     * init : useEffect 에서 호출, resize될때마다 호출
     * window size 768 기준으로 pc, mobile로 state update
     */
    const init = () =>{
        let winWid = window.innerWidth;
        winWid > 768 ? onUpdateDevice('pc') : onUpdateDevice('mo');
    }
    /*
        AnimatedCursor에서도 사용하고 Transition > Main 에서도 사용하기 위해
        현재 위치에서 선언. 
        Ref 선언 이유 : 페이지 이동후 돌아오거나 리렌더링 될때 타겟 잃어버리지 않기 위해

        cursorOuterRef : 마우스 포인터
        cursorInnerRef : 따라가는 포인터
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