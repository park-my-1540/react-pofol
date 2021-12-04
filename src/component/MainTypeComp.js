import React,{useEffect,useCallback} from "react"
import '../scss/chat.scss'
import { hoverGsap,typoGsap ,reverseTypoGsap,transGsap} from "../lib/gsapFuncs";
export default function MainTypeComp({isFstIdx}){
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

     const typoEventListner = useCallback((e) => {  // state가 바뀔 때마다 close 함수가 재생성되어, 컴포넌트 업데이터 전과 동일하지 않은 함수로 인식되는 것 같다.
        hoverGsap(e.currentTarget) 
    },[]);

    useEffect(()=>{
        const typograpy=[...document.querySelectorAll('.typograpy-wrap>span')],
                typograpyWrap=document.querySelector('.typograpy-wrap'),
                tagWrap=document.querySelector('.tag-wrap');
        
        if(isFstIdx){
            typograpy.forEach((text)=>{
                text.addEventListener('mouseover',typoEventListner);
            })
            reverseTypoGsap(typograpyWrap);
            transGsap(tagWrap,'left','5.5%',0.5);
        }else{
            typograpy.forEach((text)=>{
                text.removeEventListener('mouseover',typoEventListner);
            })
            typoGsap(typograpyWrap);
            transGsap(tagWrap,'left','-999px',0.5);
        }
                
    },[isFstIdx])

    return (
        <>
        <div className="wrapper">
            <div className="tag-wrap">
                <span>퍼블리싱</span>
                <span>4년차</span>
                <span>신입</span>
                <span>프론트엔드</span>
            </div>
            <div className="typograpy-wrap">
                <span>J</span>
                <span>U</span>
                <span>N</span>
                <span>I</span>
                <span>O</span>
                <span>R</span><br/><br/><br/>
                <span>F</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>E</span>
                <span>N</span>
                <span>D</span><br/>
                <span>D</span>
                <span>E</span>
                <span>V</span>
                <span>L</span>
                <span>O</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
            </div>
        </div>
        </>
    )
}