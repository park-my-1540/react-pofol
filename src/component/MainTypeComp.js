import React,{useEffect,useCallback} from "react";
import { useSelector } from "react-redux";
import '../scss/chat.scss'
import { hoverGsap,mainTypoGsap} from "../lib/gsapFuncs";
export default function MainTypeComp({deviceChk}){
    /**
     * 첫번째 인덱스면
     * mouseenter hover 되고
     * typograpy-wrap에 효과 빼야함
     * 
     * 첫번째 인덱스가 아니게 되면
     * mouseenter 없애고
     * typograpy-wrap에 효과 넣어야함. 
     * event.stopImmediatePropagation()
     */
    const mainActIdx = useSelector(state=>state.ui.mainActIdx);

    useEffect(()=>{
        changeMainSlideFunc()
        if(document.querySelectorAll('.typograpy-wrap').length > 0){  
            setTimeout(()=>{
            mainTypoGsap(document.querySelectorAll('.typograpy-wrap span'));
        },1000);}
        
    },[mainActIdx])
    
    const typoEventListner = useCallback((e) => {  // state가 바뀔 때마다 close 함수가 재생성되어, 컴포넌트 업데이터 전과 동일하지 않은 함수로 인식되는 것 같다.
        const typograpy=[...document.querySelectorAll('.typograpy-wrap span')];
        typograpy.forEach((text)=>{
           text.removeAttribute('style');
       })
        hoverGsap(e.currentTarget) 
    },[]);

    const changeMainSlideFunc = useCallback(()=>{
        const typograpy=[...document.querySelectorAll('.typograpy-wrap span')];
        if(mainActIdx === 0){ //메인 화면이면
            typograpy.forEach((text)=>{
                text.addEventListener('mouseover',typoEventListner);
            })
        }else{ //메인 화면이면이 아니면
            typograpy.forEach((text)=>{
                text.removeEventListener('mouseover',typoEventListner);
            })
        }
    },[mainActIdx])

    return (
        <>
            <div className="main-wrapper">
                <div className={`tag-wrap ${(deviceChk === 'pc' ? "main-tag" : "momain-tag")}`}>
                    <p className="tag"><span>퍼블리싱</span></p>
                    <p className="tag"><span>4년차</span></p>
                    <p className="tag"><span>신입</span></p>
                    <p className="tag"><span>프론트엔드</span></p>
                </div>
                <div className={`typograpy-wrap ${(deviceChk === 'pc' ? "mainTypo" : "momainTypo")}`}>
                    <p>
                        <span>J</span>
                        <span>U</span>
                        <span>N</span>
                        <span>I</span>
                        <span>O</span>
                        <span>R</span>
                    </p>
                    <p>
                        <span>F</span>
                        <span>R</span>
                        <span>O</span>
                        <span>N</span>
                        <span>T</span>
                        <span>E</span>
                        <span>N</span>
                        <span>D</span>
                    </p>
                    <p>
                        <span>D</span>
                        <span>E</span>
                        <span>V</span>
                        <span>L</span>
                        <span>O</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                    </p>
                </div>
            </div>
        </>
    )
}